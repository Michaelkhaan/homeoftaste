import AboutCard from "@/components/AboutCard";
import { Star } from "@/components/Icons";
import Layout from "@/components/Layout";
import OurStory from "@/components/OurStory";
import Image from "next/image";
import React from "react";

function page() {
  const cardData = [
    {
      icon: <Star />,
      title: "15+",
      text: "Years Experience",
      paragraph: "Serving the Nottingham community since 2020",
    },
    {
      icon: <Star />,
      title: "5000+",
      text: "Quality Dish",
      paragraph: "Successfully Served",
    },
    {
      icon: <Star />,
      title: "98%",
      text: "Customer Satisfaction",
      paragraph: "Based on post-service surveys",
    },
    {
      icon: <Star />,
      title: "25+",
      text: "Expert Staff",
      paragraph: "Certified professionals",
    },
  ];
  return (
    <Layout>
      <div className="relative w-full h-[500px]">
        <Image
          src="/image1.webp"
          alt="About Us - Restaurant"
          width={0}
          height={0}
          className="w-full h-full object-cover"
          unoptimized
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/50 px-4">
          <h1
            className="text-[30px] md:text-[60px] font-fjalla text-white text-center"
            style={{ textShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)" }}
          >
            Discover Our Story
          </h1>
          <p className="text-white text-lg md:text-xl mt-4 max-w-3xl">
            At{" "}
            <span
              className="font-bold"
              style={{ textShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)" }}
            >
              HOME OF TASTE
            </span>
            , we blend passion and flavors to create an unforgettable dining
            experience. From fresh ingredients to warm hospitality, every dish
            tells a story.
          </p>
        </div>
      </div>
      <div className="px-6 py-6">
        <OurStory />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {cardData?.map((e, index) => (
            <AboutCard
              key={index}
              icon={e?.icon}
              title={e?.title}
              text={e?.text}
              para={e?.paragraph}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default page;
