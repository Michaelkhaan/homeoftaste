"use client";

import Image from "next/image";
import React from "react";
import { Google1 } from "./Icons";

interface Props {
  src: string;
  para: string;
  name: string;
  date: string;
  reviewLink: string; // Add a link to the full review
}

function ReviewCard({ src, para, name, date, reviewLink }: Props) {
  const maxLength = 60; // Adjust as needed
  const shouldTruncate = para.length > maxLength;
  const displayText = shouldTruncate
    ? `${para.substring(0, maxLength)}...`
    : para;

  const handleReadMore = () => {
    window.open(reviewLink, "_blank"); // Opens in a new tab
  };

  return (
    <div className="bg-white w-full py-10 px-12 flex flex-col items-center justify-center">
      {/* Profile Image */}
      <div className="w-20 aspect-square rounded-full flex items-center justify-center">
        <Image
          src={src}
          alt=""
          width={0}
          height={0}
          className="w-20"
          unoptimized
        />
      </div>

      {/* Star Ratings */}
      <div className="flex mt-6">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <span key={i} className="text-yellow-400 text-2xl">
              ★
            </span>
          ))}
      </div>

      {/* Review Text */}
      <h1 className="text-sm text-black mt-10">{displayText}</h1>

      {/* Read More Button (Only if needed) */}
      {shouldTruncate && (
        <button
          className="text-blue-500 mt-2 text-sm font-semibold flex items-center"
          onClick={handleReadMore}
        >
          Read full review →
        </button>
      )}

      {/* User Info */}
      <div className="flex items-center gap-4 mt-10">
        <div className="bg-[#F3F3F3] border-2 border-[#CCCCCC] w-10 aspect-square rounded-full flex items-center justify-center">
          <Google1 />
        </div>
        <h1 className="text-[#595959] font-semibold">
          {name}
          <span className="text-xs text-[#C6C6C6]"> - {date}</span>
        </h1>
      </div>
    </div>
  );
}

export default ReviewCard;
