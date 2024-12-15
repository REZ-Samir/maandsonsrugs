import React from "react";
import HeaderTitle, { CustomSection } from "../common/CommonUtility";
import Image from "next/image";
import Link from "next/link";
import homeData from "./json/Home.json";

function AboutRugs() {
  return (
    <CustomSection className="">
      <HeaderTitle title="How Our Rugs Are Created" />
      <div className="flex flex-col sm:flex-row gap-4 ">
        {homeData.techniqueAndCraftmanship.map((data, index) => (
          <div key={index} className="basis-1/2 ">
            <Image
              src={data.img}
              alt=""
              width={1000}
              height={1000}
              className="w-full  max-h-[700px]"
            />
            <p className="text-sm sm:text-xl my-3 ">{data.title}</p>
            <Link href={"/comingsoon"}>
              <button className="flex w-full items-center justify-between max-w-96 border border-black rounded-md px-4 py-2 text-sm sm:text-md md:text-lg">
                {data.btnTitle}
                <Image
                  src={"/svgs/rightArrow.svg"}
                  alt=""
                  className="w-full max-w-5"
                  width={500}
                  height={500}
                />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </CustomSection>
  );
}

export default AboutRugs;
