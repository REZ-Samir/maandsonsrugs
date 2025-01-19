"use client";
import React, { useState } from "react";

function SelectSize({ sizeData }: { sizeData: string[] }) {
  const [selectSizeIndex, setSelectSizeIndex] = useState<number>(0);

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
              className={`w-full h-full text-center rounded-sm flex items-center justify-center  ${
                index === selectSizeIndex
                  ? "bg-white text-black"
                  : "bg-slate-900 text-white"
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
