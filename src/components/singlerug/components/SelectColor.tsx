"use client";
import Image from "next/image";
import React, { useState } from "react";

function SelectColor() {
  const [selectColorIndex, setSelectColorIndex] = useState<number>(0);

  return (
    <div className="my-5">
      <h4 className="text-base">Color</h4>
      <div className="flex gap-4 mt-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`h-[75px] w-[60px] rounded-md relative cursor-pointer ${
              index === selectColorIndex ? "border-2 border-black" : ""
            }`}
            onClick={() => setSelectColorIndex(index)}
          >
            <Image
              src={"/assets/home/new_arrival_3.jpg"}
              alt={`Color ${index}`}
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-md h-full w-full"
            />
            {index !== selectColorIndex && (
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-md transition-opacity duration-300 hover:bg-opacity-20"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectColor;
