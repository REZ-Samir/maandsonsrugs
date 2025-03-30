import { Divider } from "@/components/common/CommonUtility";
import MultiSelectDropdown from "@/components/common/dropdown/MultiSelectDropDown";
import MultiColorInput from "@/components/common/input/MultiInput";
import { Button } from "@/components/ui/button";
import { createRug, rugParams } from "@/lib/actions/rug.action";
import { Upload } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

function UploadRugs() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  const [previewImageUrls, setPreviewImageUrls] = useState<string[]>([]);
  const [dragging, setDragging] = useState(false);
  const rugsSize = ["Small", "Medium", "Large", "ExtraLarge"];
  const [selectedRugSize, setSelectedRugSize] = useState<string[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [material, setMaterial] = useState<string[]>([]);
  const [quality, setQuality] = useState<string>("Low");

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) return;

    const files = Array.from(event.target.files);

    // Convert files to Base64
    const base64Images = await Promise.all(
      files.map((file) => convertFileToBase64(file))
    );

    setPreviewImageUrls(base64Images);
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setDragging(false);
    if (event.dataTransfer.files.length > 0) {
      const selectedFile = event.dataTransfer.files[0];
      const imageUrls = [URL.createObjectURL(selectedFile)];
      setPreviewImageUrls(imageUrls);
    }
  };

  const handleFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (selectedRugSize.length === 0) {
      setError("multiSelect", {
        type: "manual",
        message: "This field is required!",
      });
      return;
    }

    const rugData: Partial<rugParams> = {
      rugName: data.rugTitle,
      rugDescription: data.rugDescription,
      rugImg: previewImageUrls,
      rugPrice: 10,
      rugCode: data.rugCode,
      rugSizes: selectedRugSize,
      rugColors: color,
      rugQuality: quality,
      token: localStorage.getItem("token") as string,
      rugMaterials: material,
    };

    createRug(rugData).then((response) => {
      console.log(response);
      if (response) {
        alert("Rug created successfully");
        reset();
        setPreviewImageUrls([]);
        setSelectedRugSize([]);
        setMaterial([])
        setColor([]);
        setMaterial([]);
        setQuality("Low");
        setDragging(false);
      }
    });
    // Handle the form submission logic here
  };

  return (
    <section className="p-4 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold">What is your new rug?</h2>
        <p>
          Upload your media. The first image will be used as a thumbnail. Drag
          and drop up to 3 images to create a multi-shot.
        </p>
      </div>
      <Divider />
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          type="text"
          placeholder="Rug Title"
          className="w-full bg-gray-100 px-4 py-3 rounded-md"
          {...register("rugTitle", { required: true })}
        />
        {errors.rugTitle && (
          <span className="text-red-500">This field is required*</span>
        )}
        <textarea
          placeholder="Rug Description"
          className="bg-gray-100 px-4 py-2 rounded-md"
          {...register("rugDescription", { required: true })}
        ></textarea>
        {errors.rugDescription && (
          <span className="text-red-500">This field is required*</span>
        )}

        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="file-upload"
          onChange={handleFileChange}
        />
        <label
          htmlFor="file-upload"
          className={`flex flex-col items-center justify-center p-6 border rounded-lg shadow-sm bg-white h-[600px] w-full mx-auto cursor-pointer ${
            dragging ? "border-blue-500" : "border-gray-300"
          } `}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
        >
          <div className="text-center">
            <Upload className="w-10 h-10 text-gray-600 mb-4 mx-auto" />
            <h2 className="text-lg font-semibold">Upload Media</h2>
            <p className="text-sm text-gray-500 text-center mt-1 mb-4">
              Drag & Drop files here or click below to upload. <br /> Photos
              must be less than <span className="font-bold">2 MB</span> in size.
            </p>
            <div className="bg-black text-white hover:bg-gray-800 py-2 rounded-md">
              Upload
            </div>
          </div>
        </label>
        {errors.rugImages && (
          <span className="text-red-500">This field is required*</span>
        )}
        <div className="flex gap-4 overflow-auto">
          {previewImageUrls?.map((file, index) => (
            <Image
              src={file}
              alt=""
              key={index}
              width={100}
              height={100}
              className="max-w-36 max-h-36 rounded-md"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              placeholder="Rug Type"
              className="w-full bg-gray-100 px-4 py-3 rounded-md"
              {...register("rugType", { required: true })}
            />
            {errors.rugType && (
              <span className="text-red-500 ">This field is required*</span>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Rug Code"
              className="w-full bg-gray-100 px-4 py-3 rounded-md"
              {...register("rugCode", { required: true })}
            />
            {errors.rugCode && (
              <span className="text-red-500">This field is required*</span>
            )}
          </div>
          <MultiSelectDropdown
            options={rugsSize}
            selectedOptions={selectedRugSize}
            onChange={(selected) => {
              setSelectedRugSize(selected);
              if (selected.length > 0) {
                clearErrors("multiSelect"); // Clear error when at least one is selected
              }
            }}
            placeholder="Choose Rug Sizes"
            error={errors.multiSelect?.message as string}
          />

          <MultiColorInput
            placeholder="Type a color name & press Enter"
            data={color}
            setData={setColor}
          />
          <MultiColorInput
            placeholder="Type a material name & press Enter"
            data={material}
            setData={setMaterial}
          />
          <select
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="w-full bg-gray-100 px-4 py-3 rounded-md"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </section>
  );
}

export default UploadRugs;
