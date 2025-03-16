"use client";

import { useState, useRef, useEffect } from "react";

interface MultiSelectDropdownProps {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  options,
  selectedOptions,
  onChange,
  placeholder = "Select options",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle selection
  const handleSelect = (option: string) => {
    const newSelected = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    onChange(newSelected);
  };

  // Remove tag
  const handleRemoveTag = (option: string) => {
    onChange(selectedOptions.filter((item) => item !== option));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative " ref={dropdownRef}>
      {/* Input box with selected tags */}
      <div
        className="w-full p-2 py-3 border border-gray-300 rounded-md bg-gray-100 flex overflow-auto  gap-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length > 0 ? (
          selectedOptions.map((option) => (
            <span key={option} className="px-2 py-1 bg-gray-200 rounded-md flex items-center">
              {option}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveTag(option);
                }}
                className="ml-1 text-gray-600 hover:text-red-500"
              >
                ×
              </button>
            </span>
          ))
        ) : (
          <span className="text-gray-400">{placeholder}</span>
        )}
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md p-2 z-10">
          {options.map((option) => (
            <label key={option} className="flex items-center space-x-2 cursor-pointer p-1">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleSelect(option)}
                className="cursor-pointer"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
