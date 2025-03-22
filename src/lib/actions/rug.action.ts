import { revalidatePath } from "next/cache";
import Rug from "../models/rug.model";
import { connectToDB } from "../mongoose";

interface rugParams {
    rugName: string;
    rugPrice: number;
    rugImg: string[];
    rugDescription: string;
    rugCode: number;
    rugSizes: string[];
    rugColors: string[];
    path: string;
}

export async function createRug({ rugName, rugPrice, rugImg, rugDescription, rugCode, rugSizes, rugColors, path }: rugParams) {
    try {
        connectToDB();

        if (!rugName || !rugPrice || !rugImg || !rugDescription || !rugCode || !rugSizes || !rugColors) {
            throw new Error("All fields are required");
        }

        const createRug = await Rug.create({ rugName: rugName, rugPrice: rugPrice, rugImg: rugImg, rugDescription: rugDescription, rugCode: rugCode, rugSizes: rugSizes, rugColors: rugColors });

        if (!createRug) {
            throw new Error("Failed to create a new rug");
        }

        // Revalidate cache if path is provided
        if (path) revalidatePath(path);

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

        const allRugs = await Rug.find();

        if (allRugs.length === 0) {
            return { message: "No rugs found", rugs: [] };
        }

        return { message: "All rugs fetched successfully", rugs: allRugs };

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

        return { message: "Single rug fetched successfully", rug: singleRug };
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

        return { message: "Rug deleted successfully", };
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to delete rug ${error.message}`);
        }
        throw new Error("Failed to delete rug due to an unknown error");

    }
}

export async function updateRug(id: string, { rugName, rugPrice, rugImg, rugDescription, rugCode, rugSizes, rugColors }: rugParams) {
    try {
        connectToDB();

        if (!id) {
            throw new Error("Rug id is required");
        }

        if (!rugName || !rugPrice || !rugImg || !rugDescription || !rugCode || !rugSizes || !rugColors) {
            throw new Error("All fields are required");
        }

        const updateRug = await Rug.findByIdAndUpdate(id, { rugName: rugName, rugPrice: rugPrice, rugImg: rugImg, rugDescription: rugDescription, rugCode: rugCode, rugSizes: rugSizes, rugColors: rugColors }, { new: true });

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

