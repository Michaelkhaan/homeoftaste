import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import ContactUs from "@/components/ContactUs";
import Request from "@/components/Request";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Review />
      <div className="w-full mt-10 px-6 py-6 flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          <Image
            src={"/image3.webp"}
            alt=""
            width={0}
            height={0}
            unoptimized
            className="w-full"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-end pb-10">
          <h1 className="text-[44px] text-black font-fjalla">Gift Vouchers</h1>
          <p className="text-[22px] text-[#5E5E5E] font-sourcesans">
            Send a gift voucher to friends and family or buy it now for your
            future use.
          </p>
        </div>
      </div>
      <div className="w-full md:mt-16 px-6 py-6">
        <p
          className="text-[30px] md:text-[32px] font-fjalla text-black text-center"
          style={{ textShadow: "2px 2px 0px rgba(0, 0, 0, 0.2)" }}
        >
          VISIT US
        </p>
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <div className="w-full md:w-1/2">
            <ContactUs />
          </div>
          <div className="w-full md:w-1/2">
            <Request />
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* <Map address="1600 Amphitheatre Parkway, Mountain View, CA" /> */}
        <iframe
          width="100%"
          height="500"
          // id="gmap_canvas"
          src="https://maps.google.com/maps?q=uk&t=&z=13&ie=UTF8&iwloc=&output=embed"
          // scrolling="no"
        ></iframe>
      </div>
    </Layout>
  );
}
