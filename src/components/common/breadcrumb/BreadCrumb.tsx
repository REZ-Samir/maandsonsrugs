"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CustomSection } from "../CommonUtility";

function BreadCrumb() {
  const pathname = usePathname();
  const splittedPath = pathname.split("/").filter(Boolean); // Filter out empty strings

  const breadcrumbs = splittedPath.map((path, index) => {
    const href = "/" + splittedPath.slice(0, index + 1).join("/");
    const label = decodeURIComponent(path.replace(/-/g, " ")); // Replace hyphens with spaces
    return { href, label };
  });

  return (
    <CustomSection>
      <nav aria-label="breadcrumbs">
        <ul
          style={{ listStyle: "none", padding: 0, display: "flex", gap: "5px" }}
        >
          <li>
            <Link href="/">Home /</Link>
          </li>
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.href}>
              {index > 0 && " / "}
              <Link href={crumb.href}>{crumb.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </CustomSection>
  );
}

export default BreadCrumb;
