import AboutHero from "@/components/about/AboutHero";
import AboutUs from "@/components/about/AboutUs";
import Founders from "@/components/about/Founders";
import React from "react";

function page() {
  return (
    <>
      <AboutHero />
      <div className="h-[40px] sm:h-[60px]"> </div>
      <AboutUs />
      <div className="h-[40px] sm:h-[60px]"> </div>
      <Founders />
      <div className="h-[40px] sm:h-[60px]"> </div>
    </>
  );
}

export default page;
