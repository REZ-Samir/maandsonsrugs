import React from "react";
import { CustomSection } from "../CommonUtility";
import Image from "next/image";
import logo from "@/../public/svgs/logo.svg";
import footerData from "./json/Footer.json";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black text-white">
      <CustomSection>
        <div className="flex sm:flex-row sm:justify-between  py-8 sm:py-14 max-w-screen-xl flex-wrap">
          <div className="basis-full sm:basis-auto mb-4">
            <Link href={"/"}>
              <Image
                src={logo}
                alt=""
                width={200}
                height={200}
                className="max-lg:mx-auto"
              />
            </Link>
          </div>
          {footerData.navigation.map((navigation, index) => (
            <div key={index} className=" basis-1/2 sm:basis-auto mt-4">
              <h2 className="text-xl text-gray-200 pb-4">{navigation.title}</h2>
              <ul>
                {navigation.navList.map((links, ind) => (
                  <li key={ind} className="py-1">
                    <Link
                      href={`${links.link}`}
                      className="relative inline-block group"
                    >
                      <span className="text-gray-300 group-hover:text-white">{links.name}</span>
                      <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 transition-all duration-500 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full h-[1px] bg-white"></div>
        <div className="text-center py-4">
          <p className="">2024 @ MA&SonsRugs | All Right reserved</p>
        </div>
      </CustomSection>
    </div>
  );
}

export default Footer;
