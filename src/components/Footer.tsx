import Image from "next/image";
import React from "react";
import { Location, Phone, Time } from "./Icons";

function Footer() {
  return (
    <div className="px-6 py-6 bg-[#6C5041]">
      <div className="flex flex-wrap justify-between">
        {/* <h1 className="text-[32px] text-white font-bold">HINCKLEY NOOK</h1> */}
        <div className="w-20 aspect-square">
          <Image
            src="/logo.png"
            alt=""
            width={0}
            height={0}
            className="w-full"
            unoptimized
          />
        </div>
        <ul className="flex flex-wrap gap-5 md:gap-10 text-white mt-3">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Menue & Pricing</li>
        </ul>
        <div className="w-full md:w-1/4">
          <h1
            className="text-[14px] md:text-[20px] font-fjalla text-white text-center"
            style={{ textShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)" }}
          >
            Contact Info
          </h1>
          <div className="flex items-center gap-2 mt-3">
            <Location />
            <h1 className="text-white text-base font-sourcesans font-medium">
              Priestpopple, Hexham, Northumberland, NE46 1PH
            </h1>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Phone />
            <h1 className="text-white text-base font-sourcesans font-medium">
              0141 611 3112
            </h1>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Time />
            <h1 className="text-white text-base font-sourcesans font-medium">
              Mon-Sat: 1:00 PM to 11:00 PM
            </h1>
          </div>
        </div>
        {/* <h1 className="text-xl text-white font-medium mt-4">0141 611 3112</h1> */}
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
