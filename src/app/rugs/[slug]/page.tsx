import BreadCrumb from "@/components/common/breadcrumb/BreadCrumb";
import { Divider } from "@/components/common/CommonUtility";
import SimilarRugs from "@/components/singlerug/SimilarRugs";
import SingleRug from "@/components/singlerug/SingleRug";
import React from "react";

function page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <Divider />
      <Divider />
      <BreadCrumb />
      <Divider maxHeight="w-32" />
      <SingleRug />
      <Divider />
      <SimilarRugs />
      <Divider />
    </div>
  );
}

export default page;
