import Image from "next/image";
import React from "react";

function OurStory() {
  return (
    <div className="bg-[#6C5041] rounded-md w-full px-3 py-2 shadow-buttonshadow flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2">
        <h1
          className="text-[30px] md:text-[30px] font-fjalla text-white"
          style={{ textShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)" }}
        >
          Our Story
        </h1>
        <p className="text-white mt-3 text-justify">
          At{" "}
          <span
            className="font-bold"
            style={{ textShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)" }}
          >
            HOME OF TASTE
          </span>
          , our journey began with a simple yet powerful vision—to create a
          dining experience that blends exquisite flavors, warm hospitality, and
          unforgettable memories. <br />
          <br /> Inspired by rich culinary traditions, we take pride in serving
          dishes made with the freshest ingredients, authentic recipes, and a
          touch of creativity. From our humble beginnings to becoming a
          cherished part of the community, our commitment to excellence has
          never wavered. Every plate we serve tells a story of passion,
          craftsmanship, and love for great food. <br />
          <br /> Whether you're here for a casual meal, a special celebration,
          or just a moment of indulgence, we invite you to savor every bite and
          feel at home. Come, be part of our story—where food brings people
          together, and every meal is a celebration. 🍽️✨
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src="/image1.webp"
          alt=""
          width={0}
          height={0}
          className="w-full"
          unoptimized
        />
      </div>
    </div>
  );
}

export default OurStory;
