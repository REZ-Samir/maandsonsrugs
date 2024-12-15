import React from "react";
import { CustomSection } from "../common/CommonUtility";
import Image from "next/image";
import AboutData from "./json/About.json";

function Founders() {
  return (
    <CustomSection>
      <div>
        <h2 className=" text-2xl sm:text-4xl ">{AboutData.founders.header}</h2>
        <div className="h-[20px] sm:h-[40px]"></div>
        <div className="founders-card-wrapper">
          {AboutData.founders.founder.map((founder, index) => (
            <div key={index} className="group  founder-card">
              <Image
                src={founder.founderImg}
                alt="Founder 1"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
              <div className="founder-card-detail">
                <h2 className="founder-card-title">{founder.founderName}</h2>
                <p className="  ">{founder.founderDetail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CustomSection>
  );
}

export default Founders;
