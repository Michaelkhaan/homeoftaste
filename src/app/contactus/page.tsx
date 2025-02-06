import ContactCard from "@/components/ContactCard";
import ContactUs from "@/components/ContactUs";
import { Location, Mail, Phone, Time } from "@/components/Icons";
import Layout from "@/components/Layout";
import Image from "next/image";
import React from "react";

function page() {
  const cardData = [
    {
      icon: <Phone />,
      title: "Phone",
      number: "0141 611 3112",
      paragraph: "Monday to Saturday, 1:00 PM to 11:00 PM",
    },
    {
      icon: <Mail />,
      title: "Email",
      number: "clearbusinessbyadrian@gmail.com",
      paragraph: "We will respond within 24 hours",
    },
    {
      icon: <Location />,
      title: "Visit Us",
      number: "Priestpopple, Hexham, Northumberland, NE46 1PH",
      paragraph: "Find us in the heart of Northumberland",
    },
    {
      icon: <Time />,
      title: "Business Hours",
      number: "Mon-Sat: 1:00 PM to 11:00 PM",
      paragraph: "Closed on Sundays",
    },
  ];
  return (
    <Layout>
      <div className="relative w-full h-[500px]">
        {/* Background Image */}
        <Image
          src="/image1.webp" // Replace with your actual image path
          alt="Restaurant Contact"
          width={0}
          height={0}
          className="w-full h-full object-cover"
          unoptimized
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/50 px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Let's Start Your Culinary Journey
          </h1>
          <p className="text-white text-lg md:text-xl mt-4 max-w-2xl">
            Ready to indulge in an unforgettable dining experience? Get in touch
            with us today!
          </p>
        </div>
      </div>
      <div className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {cardData?.map((e, index) => (
          <ContactCard
            key={index}
            icon={e?.icon}
            title={e?.title}
            text={e?.number}
            para={e?.paragraph}
          />
        ))}
      </div>

      <div className="w-full flex flex-col md:flex-row items-center gap-10 py-6">
        <div className="w-full md:w-1/2 px-6">
          {/* <Map address="1600 Amphitheatre Parkway, Mountain View, CA" /> */}
          <iframe
            width="100%"
            height="500"
            // id="gmap_canvas"
            src="https://maps.google.com/maps?q=uk&t=&z=13&ie=UTF8&iwloc=&output=embed"
            // scrolling="no"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 px-6">
          <ContactUs />
        </div>
      </div>
    </Layout>
  );
}

export default page;
