import Image from "next/image";
import React from "react";
import WaveIcon from "@/../public/svgs/wave.svg";
import HeadPhone from "@/../public/svgs/headphone.svg";
import NotePad from "@/../public/svgs/notepad.svg";
import { CustomSection } from "../common/CommonUtility";

interface ContactTypeInterface {
  icon: any;
  title: String;
  subtitle: String;
}

function ContactType() {
  const contactTypeDatas: ContactTypeInterface[] = [
    {
      icon: WaveIcon,
      title: "Online Enquiry",
      subtitle:
        "Let’s bring your dream rug to life! Fill out our quick, secure form, and we’ll be in touch within 24 hours to make it happen.",
    },
    {
      icon: HeadPhone,
      title: "Call Us",
      subtitle:
        "Let’s bring your dream rug to life! Fill out our quick, secure form, and we’ll be in touch within 24 hours to make it happen.",
    },
    {
      icon: NotePad,
      title: "Write to Us",
      subtitle:
        "Let’s bring your dream rug to life! Fill out our quick, secure form, and we’ll be in touch within 24 hours to make it happen.",
    },
  ];

  return (
    <CustomSection>
      <div className="contact-type-wrapper">
        {contactTypeDatas.map((data, index) => (
          <ContactTypeItems key={index} data={data} />
        ))}
      </div>
    </CustomSection>
  );
}

export default ContactType;

function ContactTypeItems({ data }: { data: ContactTypeInterface }) {
  return (
    <div className="contact-type-item">
      <Image
        src={data.icon}
        alt=""
        width={500}
        height={500}
        className="max-w-20 max-h-20"
      />
      <h4 className="text-2xl ">{data.title}</h4>
      <p className="text-base">{data.subtitle}</p>
    </div>
  );
}
