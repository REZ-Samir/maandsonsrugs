import BreadCrumb from "@/components/common/breadcrumb/BreadCrumb";
import { Divider } from "@/components/common/CommonUtility";
import SimilarRugs from "@/components/singlerug/SimilarRugs";
import SingleRug from "@/components/singlerug/SingleRug";
import React from "react";
import rugsData from "@/components/rugs/json/rugs.json";



function page({ params }: { params: { slug: string } }) {
  const singleRug = rugsData.find((rug) => rug.carpet_slug == params.slug);
  return (
    <div>
      <Divider />
      <Divider />
      <BreadCrumb />
      <Divider maxHeight="w-32" />
      <SingleRug rugData={singleRug}/>
      <Divider />
      <SimilarRugs />
      <Divider />
    </div>
  );
}

export default page;
