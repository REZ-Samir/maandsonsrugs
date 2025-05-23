import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/common/header/header";
import Footer from "@/components/common/footer/footer";

export const metadata: Metadata = {
  title: "M.A & Sons Rugs",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
