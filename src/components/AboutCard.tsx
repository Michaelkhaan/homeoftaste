import React, { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  text: string;
  para: string;
}

function AboutCard({ icon, title, text, para }: Props) {
  return (
    <div className="bg-[#6C5041] rounded-md w-full px-3 py-2 shadow-buttonshadow lg:flex lg:flex-col lg:items-center lg:justify-center">
      <div className="w-10 bg-blue-500 shadow-buttonshadow aspect-square rounded-md flex items-center justify-center">
        {icon}
      </div>
      <h1 className="text-base text-white font-fjalla mt-4">{title}</h1>
      <h1 className="text-blue-600 text-lg font-sourcesans font-bold">
        {text}
      </h1>
      <p className="text-white text-base font-sourcesans lg:text-center">
        {para}
      </p>
    </div>
  );
}

export default AboutCard;
