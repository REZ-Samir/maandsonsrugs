import BreadCrumb from "@/components/common/breadcrumb/BreadCrumb";
import { CustomSection, Divider } from "@/components/common/CommonUtility";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RugsListing from "@/components/rugs/RugsListing";

function page() {
  return (
    <div>
      <Divider></Divider>
      <Divider></Divider>
      <BreadCrumb />
      <Divider></Divider>

      <RugsListing></RugsListing>
      <Divider></Divider>
    </div>
  );
}

export default page;
