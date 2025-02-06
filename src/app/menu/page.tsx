import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <Layout>
      <div className="mt-5 px-6 py-6">
        <h1
          className="text-[30px] md:text-[32px] font-fjalla text-black text-center"
          style={{ textShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)" }}
        >
          XMAS MENU
        </h1>
        <Image
          src="/xmas.jpg"
          alt=""
          width={0}
          height={0}
          className="w-full mt-5"
          unoptimized
        />
        <div className="mt-10">
          <h1
            className="text-[30px] md:text-[32px] font-fjalla text-black text-center"
            style={{ textShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)" }}
          >
            MENU
          </h1>
          <Image
            src="/menu.png"
            alt=""
            width={0}
            height={0}
            unoptimized
            className="w-full"
          />
        </div>
      </div>
    </Layout>
  );
}

export default page;
