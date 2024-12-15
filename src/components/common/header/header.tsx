import Image from "next/image";
import Link from "next/link";
import React from "react";
import HamburgerIcon from "@/../public/assets/hamburger-icon.png";
import Logo from "@/../public/assets/MA&SONS.png";

function Header() {
  return (
    <section className="bg-[#FFFAFA]/80 backdrop-blur-sm px-4 py-2 shadow-md fixed w-full z-50">
      <header className="flex justify-between items-center max-w-screen-2xl md:mx-auto">
        <Link href={"/"}>
          <div className="w-[105px] h-[24px]">
            <Image src={Logo} alt="Logo" width={500} height={500} />
          </div>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-4">
            <li className="relative group">
              <Link href={"/"} className="inline-block w-full">
                Home
              </Link>
              <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0 transition-all duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href={"/about"}>About</Link>
              <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0 transition-all duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href={"/rugs"}>Rugs</Link>
              <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0 transition-all duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href={"/inspiration"}>Inspiration</Link>
              <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0 transition-all duration-500 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link href={"/contact"} className="inline-block w-full">
                Contact
              </Link>
              <span className="absolute left-0 bottom-0 h-[2px] bg-black w-0 transition-all duration-500 group-hover:w-full"></span>
            </li>
          </ul>
        </nav>
        <div>
          <button className="hidden md:block bg-black px-12 py-3 rounded-full text-white">
            Custom Rug
          </button>
          <button className="block md:hidden">
            <Image src={HamburgerIcon} alt="Menu" width={24} height={24} />
          </button>
        </div>
      </header>
    </section>
  );
}

export default Header;
