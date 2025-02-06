import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <Layout>
      <div className="px-6 py-6">
        <h1
          className="text-[30px] md:text-[32px] font-fjalla text-black text-center"
          style={{ textShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)" }}
        >
          Prices
        </h1>
        <Image
          src="/price.webp"
          alt=""
          width={0}
          height={0}
          unoptimized
          className="w-full"
        />
      </div>
    </Layout>
  );
}

export default page;
