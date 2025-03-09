"use client";
import React, { useEffect, useState } from "react";
import { CustomSection } from "../common/CommonUtility";
import Link from "next/link";
import RugsJsonData from "@/components/rugs/json/rugs.json";
import Image from "next/image";
import FilterSideBar from "./FilterSideBar";
import { useRouter, useSearchParams } from "next/navigation";

function RugsListing() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const getFilterValues = (key: string) =>
    searchParams.get(key)?.split(",") ?? [];

  const [filters, setFilters] = useState({
    color: getFilterValues("color"),
    size: getFilterValues("size"),
    material: getFilterValues("material"),
    quality: getFilterValues("quality"),
  });

  useEffect(() => {
    // Update filters when search params change
    setFilters({
      color: getFilterValues("color"),
      size: getFilterValues("size"),
      material: getFilterValues("material"),
      quality: getFilterValues("quality"),
    });
  }, [searchParams]);

  const updateSearchParams = (newFilters: typeof filters) => {
    const params = new URLSearchParams();

    Object.entries(newFilters).forEach(([key, values]) => {
      if (values.length > 0) params.set(key, values.join(","));
    });

    router.push(`?${params.toString()}`, { scroll: false });
  };

 
  const handleFilterChange = (
    category: keyof typeof filters,
    value: string
  ) => {
    const updatedFilters = {
      ...filters,
      [category]: filters[category].includes(value)
        ? filters[category].filter((item) => item !== value)
        : [...filters[category], value],
    };

    updateSearchParams(updatedFilters);
  };

  // Function to check if a rug matches selected filters
  const isRugMatchingFilters = (rug: any) => {
    return (
      (filters.color.length === 0 || filters.color.includes(rug.color)) &&
      (filters.size.length === 0 || filters.size.includes(rug.size)) &&
      (filters.material.length === 0 ||
        filters.material.includes(rug.material)) &&
      (filters.quality.length === 0 || filters.quality.includes(rug.quality))
    );
  };

  // Filtered rugs based on user-selected filters
  const filteredRugs = RugsJsonData.filter(isRugMatchingFilters);

  return (
    <CustomSection className="flex gap-10">
      <FilterSideBar
        filters={filters}
        handleFilterChange={handleFilterChange}
      />
      <div className="grid grid-cols-12 gap-5">
        {filteredRugs.map((rugData, index) => (
          <Link
            key={index}
            href={`/rugs/${rugData.carpet_slug}`}
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3  group relative"
          >
            {/* Base Image */}
            <Image
              src={rugData.carpetImg}
              alt=""
              className="w-full h-full max-h-[350px] transition-opacity duration-700 ease-in-out md:group-hover:opacity-0"
              width={500}
              height={500}
            />
            {/* Hover Image */}
            <Image
              src={rugData.hoverImg}
              alt=""
              className="absolute top-0 left-0 w-full h-full max-h-[350px] opacity-0 transition-opacity duration-700 ease-in-out md:group-hover:opacity-100"
              width={500}
              height={500}
            />
            <h4 className="mt-4 mb-1 text-base">{rugData.carpet_name}</h4>
            {/* <p className="text-xl">From $34534,34</p> */}
          </Link>
        ))}
      </div>
    </CustomSection>
  );
}

export default RugsListing;
