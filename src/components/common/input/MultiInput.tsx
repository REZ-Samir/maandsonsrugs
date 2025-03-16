"use client";

import { Dispatch, SetStateAction, useState } from "react";

const MultiColorInput = ({
  placeholder,
  data,
  setData,
}: {
  placeholder: string;
  data: string[];
  setData: Dispatch<SetStateAction<string[]>>;
}) => {
  const [inputValue, setInputValue] = useState("");

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Add color on Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      if (!data.includes(inputValue.trim())) {
        setData([...data, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  // Remove a color tag
  const handleRemoveColor = (color: string) => {
    setData(data.filter((c) => c !== color));
  };

  return (
    <div className="border border-gray-300 rounded-md p-2 bg-gray-100">
      {/* Display Selected Colors */}
      <div className="flex overflow-auto items-center gap-2">
        {data.map((color) => (
          <span
            key={color}
            className="px-2 py-1 rounded-md flex items-center bg-gray-200"
          >
            {color}
            <button
              onClick={() => handleRemoveColor(color)}
              className="ml-1 font-bold hover:text-red-300"
            >
              ×
            </button>
          </span>
        ))}

        {/* Input Field */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="flex-1 outline-none bg-gray-100 py-1"
        />
      </div>
    </div>
  );
};

export default MultiColorInput;
