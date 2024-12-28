import React, { ReactNode } from "react";

function HeaderTitle({ title }: { title: string }) {
  return (
    <h2 className="text-[24px] md:text-[36px] text-center  mb-5 sm:mb-10">
      {title}
    </h2>
  );
}

export default HeaderTitle;

export function CustomSection({
  children,
  className = "", // Default to an empty string if no className is provided
}: {
  children: ReactNode;
  className?: string; // Optional prop for additional classes
}) {
  return (
    <section
      className={`mx-5 md:mx-16 2xl:max-w-screen-2xl ${className}`.trim()}
    >
      {children}
    </section>
  );
}

export function Divider({
  maxHeight,
  minHeight,
}: {
  maxHeight?: string;
  minHeight?: string;
}) {
  return (
    <div
      className={`h-[${minHeight ?? "40px"}] sm:h-[${maxHeight ?? "60px"}]`}
    />
  );
}
