"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import dynamic from "next/dynamic";

const CanvasEditor = dynamic(() => import("./CanvasEditor"), { ssr: false });

const colorOptions = ["Red", "Blue", "Green"];
const sizeOptions = ["Small", "Medium", "Large"];
const materialOptions = ["Wool", "Cotton", "Silk"];

const CustomRug = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const image = watch("image");

  const onSubmit = (data: any) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-xl border border-gray-200">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">
        Create Your Custom Rug
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Rug Name
          </label>
          <input
            type="text"
            {...register("name", { required: "Rug name is required" })}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          />
          {errors.name && errors.name.message && (
            <p className="text-red-500">{String(errors.name.message)}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Color</label>
          <select
            {...register("color", { required: "Color is required" })}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          >
            <option value="">Select Color</option>
            {colorOptions.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
          {errors.color && errors.color.message && (
            <p className="text-red-500">{String(errors.color.message)}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Size</label>
          <select
            {...register("size", { required: "Size is required" })}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          >
            <option value="">Select Size</option>
            {sizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {errors.size && errors.size.message && (
            <p className="text-red-500">{String(errors.size.message)}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Material
          </label>
          <select
            {...register("material", { required: "Material is required" })}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          >
            <option value="">Select Material</option>
            {materialOptions.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </select>
          {errors.material && errors.material.message && (
            <p className="text-red-500">{String(errors.material.message)}</p>
          )}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
            rows={3}
          ></textarea>
          {errors.description && errors.description.message && (
            <p className="text-red-500">{String(errors.description.message)}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Upload Rug Design
          </label>
          <input
            type="file"
            accept="image/*"
            {...register("image", {
              required:  "Image is required",
            })}
            className="w-full p-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-300"
          />
          {errors.image && errors.image.message && (
            <p className="text-red-500">{String(errors.image.message)}</p>
          )}
        </div>

        {image?.[0] && (
          <div className="mt-4 flex justify-center">
            <Image
              src={URL.createObjectURL(image[0])}
              alt="Rug Preview"
              width={300}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomRug;
