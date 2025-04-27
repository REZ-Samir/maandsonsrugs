import { FC } from "react";
import { useRouter } from "next/navigation";

interface FilterProps {
  filters: {
    color: string[];
    size: string[];
    material: string[];
    quality: string[];
  };
  handleFilterChange: (category: keyof FilterProps["filters"], value: string) => void;
}

const FilterSideBar: FC<FilterProps> = ({ filters, handleFilterChange }) => {
  const router = useRouter();

  // Function to clear all filters
  const clearFilters = () => {
    router.push("?", { scroll: false }); // Reset URL to base without filters
  };

  return (
    <div className="w-1/6 flex flex-col gap-4 pr-4 border-r">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Filter</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-red-500 underline hover:text-red-700"
        >
          Clear Filters
        </button>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="text-lg mb-3 font-medium">Color</h3>
        {["Red", "Blue", "Green", "Black", "White"].map((color) => (
          <label key={color} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={filters.color.includes(color.toLowerCase())}
              onChange={() => handleFilterChange("color", color.toLowerCase())}
              className="w-4 h-4"
            />
            {color}
          </label>
        ))}
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="text-lg mb-3 font-medium">Size</h3>
        {["Small", "Medium", "Large"].map((size) => (
          <label key={size} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={filters.size.includes(size.toLowerCase())}
              onChange={() => handleFilterChange("size", size.toLowerCase())}
              className="w-4 h-4"
            />
            {size}
          </label>
        ))}
      </div>

      {/* Material Filter */}
      <div>
        <h3 className="text-lg mb-3 font-medium">Material</h3>
        {["Wool", "Cotton", "Silk", "Jute"].map((material) => (
          <label key={material} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={filters.material.includes(material.toLowerCase())}
              onChange={() => handleFilterChange("material", material.toLowerCase())}
              className="w-4 h-4"
            />
            {material}
          </label>
        ))}
      </div>

      {/* Quality Filter */}
      <div>
        <h3 className="text-lg mb-3 font-medium">Quality</h3>
        {["Standard", "Premium", "Luxury"].map((quality) => (
          <label key={quality} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={filters.quality.includes(quality.toLowerCase())}
              onChange={() => handleFilterChange("quality", quality.toLowerCase())}
              className="w-4 h-4"
            />
            {quality}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSideBar;
