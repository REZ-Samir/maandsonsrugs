import BreadCrumb from "@/components/common/breadcrumb/BreadCrumb";
import React, { Suspense } from "react";
import RugsListing from "@/components/rugs/RugsListing";
import { Divider } from "@/components/common/CommonUtility";

function page() {
  return (
    <div>
      <Divider></Divider>
      <Divider></Divider>
      <BreadCrumb />
      <Divider></Divider>

      <Suspense fallback={<div>Loading Rugs...</div>}>
        <RugsListing />
      </Suspense>
      <Divider></Divider>
    </div>
  );
}

export default page;
