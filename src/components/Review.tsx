"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Google } from "./Icons";
import ReviewCard from "./ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Review() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const carddata = [
    {
      image: "/unnamed.png",
      paragraph:
        "Lots of food to choose from. Very tasty Chinese food also Indian an ksbjb  fwjr we owerh ower fhwer",
      name: "Maggie Malcolm",
      date: "18/01/2025",
      link: "https://maps.google.com/maps?cid=15359674583233489499",
    },
    {
      image: "/unnamed.png",
      paragraph:
        "Lots of food to choose from. Very tasty Chinese food also Indian an ksbjb  fwjr we owerh ower fhwer",
      name: "Maggie Malcolm",
      date: "18/01/2025",
      link: "https://maps.google.com/maps?cid=15359674583233489499",
    },
    {
      image: "/unnamed.png",
      paragraph:
        "Lots of food to choose from. Very tasty Chinese food also Indian an ksbjb  fwjr we owerh ower fhwer",
      name: "Maggie Malcolm",
      date: "18/01/2025",
      link: "https://maps.google.com/maps?cid=15359674583233489499",
    },
    {
      image: "/unnamed.png",
      paragraph:
        "Lots of food to choose from. Very tasty Chinese food also Indian an ksbjb  fwjr we owerh ower fhwer",
      name: "Maggie Malcolm",
      date: "18/01/2025",
      link: "https://maps.google.com/maps?cid=15359674583233489499",
    },
    {
      image: "/unnamed.png",
      paragraph:
        "Lots of food to choose from. Very tasty Chinese food also Indian an ksbjb  fwjr we owerh ower fhwer",
      name: "Maggie Malcolm",
      date: "18/01/2025",
      link: "https://maps.google.com/maps?cid=15359674583233489499",
    },
    {
      image: "/unnamed.png",
      paragraph:
        "Lots of food to choose from. Very tasty Chinese food also Indian an ksbjb  fwjr we owerh ower fhwer",
      name: "Maggie Malcolm",
      date: "18/01/2025",
      link: "https://maps.google.com/maps?cid=15359674583233489499",
    },
    {
      image: "/unnamed.png",
      paragraph:
        "Lots of food to choose from. Very tasty Chinese food also Indian an ksbjb  fwjr we owerh ower fhwer",
      name: "Maggie Malcolm",
      date: "18/01/2025",
      link: "https://maps.google.com/maps?cid=15359674583233489499",
    },
  ];

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="relative w-full h-full py-20 md:h-[800px] flex flex-col items-center justify-center text-white">
      {/* Background Image */}
      <Image
        src="/image1.webp"
        alt="Review Background"
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
        unoptimized
      />

      {/* Content Section */}
      <div className="relative w-full max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-bold">REVIEWS</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-14">
          <div className="flex justify-center items-center bg-white w-12 aspect-square rounded-full">
            <Google />
          </div>
          <h1 className="text-6xl font-bold">4.1</h1>
          <div className="flex flex-col items-center">
            <h1 className="text-white text-[22px] font-sourcesans">
              HOME OF TASTE
            </h1>
            <div className="text-white">
              <div className="flex items-center">
                <div className="flex">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400 text-3xl">
                        ★
                      </span>
                    ))}
                  <span className="text-gray-400 text-3xl">★</span>
                </div>
              </div>
              <p className="text-lg font-semibold">Home of Taste</p>
              <p className="text-sm">819 Reviews</p>
            </div>
          </div>
        </div>

        <div className="flex">
          <button
            ref={prevRef}
            className="prev-button text-black hidden lg:block"
          >
            <ArrowLeft />
          </button>
          {/* Swiper Slider */}
          <div className="w-full max-w-4xl mx-auto mt-4">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              loop={true}
              pagination={{ el: ".custom-pagination", clickable: true }}
              // navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              onSwiper={setSwiperInstance} // Set Swiper instance
            >
              {carddata?.map((e, index) => (
                <SwiperSlide key={index}>
                  <ReviewCard
                    src={e?.image}
                    para={e?.paragraph}
                    name={e?.name}
                    date={e?.date}
                    reviewLink={
                      e?.link || "https://www.google.com/search?q=reviews"
                    }
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button
            ref={nextRef}
            className="next-button text-black hidden lg:block"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;
