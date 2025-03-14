import BreadCrumb from "@/components/common/breadcrumb/BreadCrumb";
import { Divider } from "@/components/common/CommonUtility";
import SimilarRugs from "@/components/singlerug/SimilarRugs";
import SingleRug from "@/components/singlerug/SingleRug";
import React from "react";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  // Find the rug matching the slug from the params
  const { slug } = await params;

  return (
    <div>
      <Divider />
      <Divider />
      <BreadCrumb />
      <Divider maxHeight="w-32" />
      <SingleRug slug={slug} />
      <Divider />
      <SimilarRugs />
      <Divider />
    </div>
  );
}

export default page;
