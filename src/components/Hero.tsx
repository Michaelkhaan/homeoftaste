import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div>
      <Image
        src="/image2.jpg"
        alt=""
        width={0}
        height={0}
        className="w-full h-[500px] relative"
        unoptimized
      />
      <div className="bg-[#6C5041] z-10 w-2/3 md:w-1/4 aspect-square rounded-full absolute right-20 top-96 md:top-80 flex items-center justify-center">
        <div>
          <p
            className="text-[30px] md:text-[44px] font-fjalla text-white text-center"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            BOOK NOW!!
          </p>

          <button className="bg-white px-8 py-3 ml-2 shadow-buttonshadow hover:shadow-none transition-all duration-300 ease-in-out text-sm font-bold font-sourcesans tracking-widest">
            RESERVED NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
