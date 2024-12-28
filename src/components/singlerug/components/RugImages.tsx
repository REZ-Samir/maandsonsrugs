"use client";
import Image from "next/image";
import React, { useState } from "react";

function RugImages() {
  const images = [
    "/assets/home/new_arrival_1.webp",
    "/assets/home/new_arrival_2.jpg",
    "/assets/home/new_arrival_3.jpg",
    "/assets/home/new_arrival_2.jpg",
    "/assets/home/new_arrival_1.webp",
    "/assets/home/new_arrival_2.jpg",
    "/assets/home/new_arrival_3.jpg",
    "/assets/home/new_arrival_2.jpg",
    "/assets/home/new_arrival_1.webp",
    "/assets/home/new_arrival_2.jpg",
    "/assets/home/new_arrival_3.jpg",
    "/assets/home/new_arrival_2.jpg",
    "/assets/home/new_arrival_2.jpg",
    "/assets/home/new_arrival_1.webp",
    "/assets/home/new_arrival_2.jpg",
    "/assets/home/new_arrival_3.jpg",
    "/assets/home/new_arrival_2.jpg",
    "/assets/home/new_arrival_1.webp",
    "/assets/home/new_arrival_2.jpg",
    "/assets/home/new_arrival_3.jpg",
    "/assets/home/new_arrival_2.jpg",
  ];

  const [mainImage, setMainImage] = useState<number>(0);

  const handleImageClick = (index: number) => {
    setMainImage(index);
  };

  return (
    <div className="col-span-12 md:col-span-6">
      {/* Main Image */}
      <div className="w-full  h-[700px]  mb-4">
        <Image
          src={images[mainImage]}
          width={500}
          height={500}
          alt="Main Rug"
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-28 h-28 flex-shrink-0 cursor-pointer border ${
              mainImage === index ? "border-black" : "border-transparent"
            } rounded-md`}
            onClick={() => handleImageClick(index)}
          >
            <Image
              width={500}
              height={500}
              src={image}
              alt={`Rug ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RugImages;
