import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="px-6 py-6 bg-[#6C5041]">
      <div className="flex flex-wrap items-center justify-between">
        {/* <h1 className="text-[32px] text-white font-bold">HINCKLEY NOOK</h1> */}
        <Image
          src="/logo.png"
          alt=""
          width={0}
          height={0}
          className="w-16"
          unoptimized
        />
        <ul className="flex flex-wrap items-center gap-5 md:gap-10 text-white">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Menue & Pricing</li>
        </ul>
        <h1 className="text-xl text-white font-medium mt-4">0141 611 3112</h1>
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        <h1 className="text-gray-300 text-xs">
          Copyright © 2023 Yamm Buffet - All Rights Reserved.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
