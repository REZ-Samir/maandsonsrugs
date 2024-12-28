import React from "react";
import { CustomSection } from "../common/CommonUtility";
import Image from "next/image";
import SelectColor from "./components/SelectColor";
import SelectSize from "./components/SelectSize";
import RugDetail from "./components/RugDetail";
import RugImages from "./components/RugImages";

function SingleRug() {
  return (
    <CustomSection>
      <div className="grid grid-cols-12 gap-4 relative">
          <RugImages />
        <div className="col-span-12 md:col-span-6">
          <div className="flex justify-between items-center">
            <h4 className="text-base">Contemporary</h4>
            <h4 className="text-base text-[#666666]">4723678-876</h4>
          </div>
          <h2 className="text-3xl mt-4 mb-2">Modern Abstract Rugs</h2>
          <p className="text-lg text-[#444444]">
            Experience the perfect blend of contemporary design and artistic
            texture with this handcrafted abstract rug, featuring a unique
            interplay of neutral tones and bold accents to complement any modern
            living space.
          </p>
          <SelectColor />
          <SelectSize />
          <RugDetail />
        </div>
      </div>
    </CustomSection>
  );
}

export default SingleRug;
