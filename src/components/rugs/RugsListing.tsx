"use client";
import React, { useCallback, useEffect, useState } from "react";
import { CustomSection } from "../common/CommonUtility";
import Link from "next/link";
// import RugsJsonData from "@/components/rugs/json/rugs.json";
import Image from "next/image";
import FilterSideBar from "./FilterSideBar";
import { useRouter, useSearchParams } from "next/navigation";
import { rugParams } from "@/lib/actions/rug.action";

function RugsListing({ rugsData }: { rugsData: Partial<rugParams>[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const getFilterValues = useCallback(
    (key: string) => searchParams.get(key)?.split(",") ?? [],
    [searchParams]
  );

  const [filters, setFilters] = useState({
    color: [] as string[],
    size: [] as string[],
    material: [] as string[],
    quality: [] as string[],
  });

  useEffect(() => {
    setFilters({
      color: getFilterValues("color"),
      size: getFilterValues("size"),
      material: getFilterValues("material"),
      quality: getFilterValues("quality"),
    });
  }, [searchParams, getFilterValues]);

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
  const isRugMatchingFilters = (rug: (typeof rugsData)[0]) => {
    return (
      (filters.color.length === 0 ||
        rug.rugColors?.some((c) => filters.color.includes(c.toLowerCase()))) &&
      (filters.size.length === 0 ||
        rug.rugSizes?.some((s) => filters.size.includes(s.toLowerCase()))) &&
      (filters.material.length === 0 ||
        rug.rugMaterials?.some((m) =>
          filters.material.includes(m.toLowerCase())
        )) &&
      (filters.quality.length === 0 ||
        filters.quality.includes(String(rug.rugQuality?.toLowerCase())))
    );
  };

  // Filtered rugs based on user-selected filters
  const filteredRugs = rugsData.filter(isRugMatchingFilters);

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
            href={`/rugs/${rugData._id}`}
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 group relative"
          >
            {/* Base Image */}
            <Image
              src={rugData.rugImg?.[0] ?? ""}
              alt={rugData.rugName ?? ""}
              className="w-full h-full max-h-[350px] transition-opacity duration-700 ease-in-out md:group-hover:opacity-0"
              width={500}
              height={500}
            />
            {/* Hover Image */}
            <Image
              src={rugData.rugImg?.[1] ?? ""}
              alt={rugData.rugName ?? ""}
              className="absolute top-0 left-0 w-full h-full max-h-[350px] opacity-0 transition-opacity duration-700 ease-in-out md:group-hover:opacity-100"
              width={500}
              height={500}
            />
            <h4 className="mt-4 mb-1 text-base">{rugData.rugName}</h4>
          </Link>
        ))}
      </div>
    </CustomSection>
  );
}

export default RugsListing;
