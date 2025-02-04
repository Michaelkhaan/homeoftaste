import Image from "next/image";
import React from "react";
import { Hamburger } from "./Icons";

function Nav() {
  return (
    <nav className="bg-white opacity-80 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="block md:hidden">
        <Hamburger />
      </div>
      <Image
        src="/logo.png"
        alt=""
        width={0}
        height={0}
        className="w-16"
        unoptimized
      />
      <ul className="md:flex items-center gap-10 hidden">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Menue & Pricing</li>
      </ul>
      <h1 className="text-[24px] text-[#6C5041] font-bold">0141 611 3112</h1>
    </nav>
  );
}

export default Nav;
