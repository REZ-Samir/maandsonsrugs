import { Divider } from "@/components/common/CommonUtility";
import MultiSelectDropdown from "@/components/common/dropdown/MultiSelectDropDown";
import MultiColorInput from "@/components/common/input/MultiInput";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

function UploadRugs() {
  const [previewImageUrls, setPreviewImageUrls] = useState<string[]>([]);
  const [dragging, setDragging] = useState(false);
  const rugsSize = ["Small", "Medium", "Large", "ExtraLarge"];
  const [selectedRugSize, setSelectedRugSize] = useState<string[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [material, setMaterial] = useState<string[]>([]);
  const [quality, setQuality] = useState<string>("Low");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const files = Array.from(event.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setPreviewImageUrls(imageUrls);
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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      selectedRugSize,
      color,
      material,
      quality,
    };
    console.log(formData);
  };

  return (
    <section className="p-4 max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold">What is your new rug?</h2>
        <p>
          Upload your media. The first image will be used as a thumbnail. Drag and drop up to 3 images to create a multi-shot.
        </p>
      </div>
      <Divider />
      <form className="flex flex-col gap-5" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Rug Title"
          className="w-full bg-gray-100 px-4 py-3 rounded-md"
        />
        <textarea
          name="Rug Description"
          placeholder="Rug Description"
          className="bg-gray-100 px-4 py-2 rounded-md"
        ></textarea>
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
          }`}
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
              Drag & Drop files here or click below to upload. <br /> Photos must be less than <span className="font-bold">2 MB</span> in size.
            </p>
            <div className="bg-black text-white hover:bg-gray-800 py-2 rounded-md">
              Upload
            </div>
          </div>
        </label>
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
          <input
            type="text"
            placeholder="Type"
            className="w-full bg-gray-100 px-4 py-3 rounded-md"
          />
          <input
            type="text"
            placeholder="Code"
            className="w-full bg-gray-100 px-4 py-3 rounded-md"
          />
          <MultiSelectDropdown
            options={rugsSize}
            selectedOptions={selectedRugSize}
            onChange={setSelectedRugSize}
            placeholder="Choose Rug Sizes"
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
