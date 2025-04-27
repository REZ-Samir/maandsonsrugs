import BreadCrumb from "@/components/common/breadcrumb/BreadCrumb";
import React, { Suspense } from "react";
import RugsListing from "@/components/rugs/RugsListing";
import { Divider } from "@/components/common/CommonUtility";
import { getAllRugs } from "@/lib/actions/rug.action";

async function page() {
  const rugsData = await getAllRugs();
  return (
    <div>
      <Divider></Divider>
      <Divider></Divider>
      <BreadCrumb />
      <Divider></Divider>

      <Suspense fallback={<div>Loading Rugs...</div>}>
        <RugsListing rugsData={rugsData.rugs}/>
      </Suspense>
      <Divider></Divider>
    </div>
  );
}

export default page;
