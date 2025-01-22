import React from "react";
import { CustomSection } from "../common/CommonUtility";
// import SelectColor from "./components/SelectColor";
import SelectSize from "./components/SelectSize";
import RugDetail from "./components/RugDetail";
import RugImages from "./components/RugImages";
import rugsData from "@/components/rugs/json/rugs.json";

interface SingleRugData {
  carpet_slug: string;
  carpet_name: string;
  carpet_type: string;
  carpet_code: string;
  carpet_desc: string;
  carpet_sizes: string[];
  carpet_detail: string[];
  carpet_images: string[];
}

function SingleRug({ slug }: { slug: string | undefined }) {
  const rugData: SingleRugData | undefined = rugsData.find(
    (rug) => rug.carpet_slug === slug
  );
  return (
    <CustomSection>
      <div className="grid grid-cols-12 gap-4 relative">
        <RugImages images={rugData?.carpet_images ?? []} />
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between items-center">
            <h4 className="text-base">{rugData?.carpet_type}</h4>
            <h4 className="text-base text-[#666666]">{rugData?.carpet_code}</h4>
          </div>
          <h2 className="text-3xl mt-4 mb-2">{rugData?.carpet_name}</h2>
          <p className="text-lg text-[#444444]">{rugData?.carpet_desc}</p>
          {/* <SelectColor /> */}
          <SelectSize sizeData={rugData?.carpet_sizes ?? []} />
          <RugDetail details={rugData?.carpet_detail ?? []} />
        </div>
      </div>
    </CustomSection>
  );
}

export default SingleRug;
