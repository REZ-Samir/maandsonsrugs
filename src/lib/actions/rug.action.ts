"use server";

import Rug from "../models/rug.model";
import { connectToDB } from "../mongoose";
import { verifyToken } from "./user.action";
import cloudinary from "cloudinary";

export interface rugParams {
    _id: string;
  rugName: string;
  rugPrice: number;
  rugImg: string[];
  rugDescription: string;
  rugCode: number;
  rugSizes: string[];
  rugColors: string[];
  rugMaterials: string[];
  path: string;
  rugQuality: string;
  token: string;
}

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function createRug({
  rugName,
  rugPrice,
  rugImg,
  rugDescription,
  rugCode,
  rugSizes,
  rugColors,
  token,
  rugQuality,
  rugMaterials,
}: Partial<rugParams>) {
  try {
    connectToDB();
    if (!token) {
      throw new Error("Token is required");
    }
    verifyToken(token);

    if (
      !rugName ||
      !rugPrice ||
      !rugImg ||
      !rugDescription ||
      !rugCode ||
      !rugSizes ||
      !rugColors ||
      !rugQuality ||
      !rugMaterials
    ) {
      throw new Error("All fields are required");
    }

    const uploadedImages = await Promise.all(
      rugImg.map(async (img) => {
        const uploadResponse = await cloudinary.v2.uploader.upload(img, {
          folder: "rugs",
        });
        return uploadResponse.secure_url;
      })
    );

    const newRug = new Rug({
      rugName: rugName,
      rugPrice: rugPrice,
      rugImg: uploadedImages,
      rugDescription: rugDescription,
      rugCode: rugCode,
      rugSizes: rugSizes,
      rugColors: rugColors,
      rugQuality: rugQuality,
      rugMaterial: rugMaterials,
    });

    await newRug.save({ validateBeforeSave: false }); // Avoid unnecessary validations

    if (!createRug) {
      throw new Error("Failed to create a new rug");
    }

    return { message: "Rug created successfully", rug: createRug };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to create a new rug: ${error.message}`);
    } else {
      throw new Error("Failed to create a new rug due to an unknown error");
    }
  }
}

export async function getAllRugs() {
  try {
    connectToDB();

    const allRugs = await Rug.find().lean();

    if (allRugs.length === 0) {
      return { message: "No rugs found", rugs: [] };
    }
    const data = JSON.parse(JSON.stringify(allRugs))

    return { message: "All rugs fetched successfully", rugs: data };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to get all rugs: ${error.message}`);
    }
    throw new Error("Failed to get all rugs due to an unknown error");
  }
}

export async function getSingleRug(id: string) {
  try {
    connectToDB();

    if (!id) {
      throw new Error("Rug id is required");
    }

    const singleRug = await Rug.findById(id);

    if (!singleRug) {
      throw new Error("No rugs found");
    }
    const data = JSON.parse(JSON.stringify(singleRug));

    return { message: "Single rug fetched successfully", rug: data };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to get single rug ${error.message}`);
    }
    throw new Error("Failed to get single rug due to an unknown error");
  }
}

export async function deleteRug(id: string) {
  try {
    connectToDB();

    if (!id) {
      throw new Error("Rug id is required");
    }

    const deleteRug = await Rug.findByIdAndDelete(id);

    if (!deleteRug) {
      throw new Error("Rug not found");
    }

    return { message: "Rug deleted successfully" };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to delete rug ${error.message}`);
    }
    throw new Error("Failed to delete rug due to an unknown error");
  }
}

export async function updateRug(
  id: string,
  {
    rugName,
    rugPrice,
    rugImg,
    rugDescription,
    rugCode,
    rugSizes,
    rugColors,
  }: rugParams
) {
  try {
    connectToDB();

    if (!id) {
      throw new Error("Rug id is required");
    }

    if (
      !rugName ||
      !rugPrice ||
      !rugImg ||
      !rugDescription ||
      !rugCode ||
      !rugSizes ||
      !rugColors
    ) {
      throw new Error("All fields are required");
    }

    const updateRug = await Rug.findByIdAndUpdate(
      id,
      {
        rugName: rugName,
        rugPrice: rugPrice,
        rugImg: rugImg,
        rugDescription: rugDescription,
        rugCode: rugCode,
        rugSizes: rugSizes,
        rugColors: rugColors,
      },
      { new: true }
    );

    if (!updateRug) {
      throw new Error("Rug not found");
    }

    return { message: "Rug updated successfully", rug: updateRug };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to update rug ${error.message}`);
    }
    throw new Error("Failed to update rug due to an unknown error");
  }
}
