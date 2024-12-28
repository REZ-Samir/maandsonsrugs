"use client";
import React, { useState } from "react";

function SelectSize() {
  const [selectSizeIndex, setSelectSizeIndex] = useState<number>(0);

  // Array of size options
  const sizeData = ["7'6\" x 5'", "9' x 6'", "10' x 8'", "12' x 9'"];

  return (
    <div className="my-5">
      <h4 className="text-base">Size</h4>
      <div className="flex gap-4 mt-2">
        {sizeData.map((size, index) => (
          <div
            key={index}
            className={`w-20 h-7 rounded-md cursor-pointer flex items-center justify-center ${
              index === selectSizeIndex ? "border-2 border-black" : ""
            }`}
            onClick={() => setSelectSizeIndex(index)}
          >
            <div
              className={`w-full h-full text-center rounded-sm flex items-center justify-center text-white ${
                index === selectSizeIndex ? "bg-white text-black" : "bg-slate-900"
              }`}
            >
              {size}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectSize;
