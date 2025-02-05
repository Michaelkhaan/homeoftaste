"use client";

import React, { useState } from "react";
import { ArrowDown } from "./Icons";

function Request() {
  const [isOpen, setIsOpen] = useState(false);

  // Days of the week
  const days = [
    { day: "Sunday", hours: "Closed" },
    { day: "Monday", hours: "12:00 – 22:00" },
    { day: "Tuesday", hours: "12:00 – 22:00" },
    { day: "Wednesday", hours: "12:00 – 22:00" },
    { day: "Thursday", hours: "12:00 – 22:00" },
    { day: "Friday", hours: "12:00 – 23:00" },
    { day: "Saturday", hours: "12:00 – 23:00" },
  ];

  // Get current day index
  const todayIndex = new Date().getDay();
  const currentDay = days[todayIndex];
  return (
    <div>
      <h1 className="text-black text-base font-sourcesans">SPECIAL REQUEST?</h1>
      <p className="text-[#474747] text-base mt-5">
        Do you have dietary concerns? Questions about an upcoming event? Drop us
        a line, and we'll get back to you soon!
      </p>
      <div className="mt-5">
        <h1 className="text-[#474747] text-base font-sourcesans">
          HOME OF TASTE
        </h1>
        <h1 className="text-[#474747] text-base font-sourcesans mt-4">
          Priestpopple, Hexham, Northumberland, NE46 1PH
        </h1>
      </div>
      <div className="mt-5">
        <h1 className="text-[#474747] text-base font-sourcesans">
          0141 611 3112
        </h1>
        <h1 className="text-[#474747] text-base font-sourcesans mt-4">
          clearbusinessbyadrian@gmail.com
        </h1>
      </div>
      <div className="mt-5">
        <h1 className="text-[#474747] text-base font-sourcesans">
          OPENING HOURS
        </h1>
        <div className="mt-4">
          <h1
            className="flex items-center gap-1 cursor-pointer text-base font-sourcesans font-medium"
            onClick={() => setIsOpen(!isOpen)}
          >
            Open today {currentDay?.hours}{" "}
            <span
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <ArrowDown />
            </span>
          </h1>

          {/* Dropdown content */}
          {isOpen && (
            <div className="absolute mt-2">
              {days.map((item, index) => (
                <p
                  key={index}
                  className={`p-1 ${
                    index === todayIndex
                      ? "font-bold text-black"
                      : "text-gray-600"
                  }`}
                >
                  {item.day}: {item.hours}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Request;
