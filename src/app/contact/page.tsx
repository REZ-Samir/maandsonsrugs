import { Divider } from "@/components/common/CommonUtility";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import ContactType from "@/components/contact/ContactType";
import React from "react";

function page() {
  return (
    <>
      <ContactHero />
      <Divider />
      <Divider />
      <ContactType />
      <Divider />
      <Divider />
      <ContactForm />
      <Divider />
      <Divider />
    </>
  );
}

export default page;
