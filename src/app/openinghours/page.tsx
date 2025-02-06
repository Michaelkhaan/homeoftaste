import Layout from "@/components/Layout";
import React from "react";

const OpeningHours = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 text-white flex flex-wrap flex-col items-center py-10">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">
          Opening Hours
        </h1>
        <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-buttonshadow">
          <div className="grid grid-cols-2 gap-4 text-lg">
            <p className="font-semibold">Monday - Friday:</p>
            <p>12:00 PM - 10:00 PM</p>
            <p className="font-semibold">Saturday:</p>
            <p>12:00 PM - 11:00 PM</p>
            <p className="font-semibold">Sunday & Bank Holidays:</p>
            <p>OFF</p>
          </div>
          <div className="mt-6 text-sm bg-gray-700 p-4 rounded-md">
            <p className="text-center">Last seating for lunch is at 4:30 PM.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OpeningHours;
