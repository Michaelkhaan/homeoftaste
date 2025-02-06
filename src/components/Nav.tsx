"use client"; // Ensures this component runs only on the client

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Hamburger } from "./Icons";
import { usePathname } from "next/navigation";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Opening Hours", path: "/openinghours" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Menu", path: "/menu" },
    { name: "Price", path: "/price" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md opacity-80 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        {/* Hamburger Icon */}
        <div className="block md:hidden" onClick={() => setIsOpen(true)}>
          <Hamburger />
        </div>

        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Logo"
          width={0}
          height={0}
          className="w-16"
          unoptimized
        />

        {/* Desktop Menu */}
        {/* <ul className="md:flex items-center gap-10 hidden">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path}>
                <a
                  className={`cursor-pointer ${
                    router.pathname === item.path
                      ? "font-bold text-black"
                      : "text-gray-600"
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul> */}

        <ul className="md:flex items-center gap-10 hidden">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`cursor-pointer ${
                  pathname === item.path
                    ? "font-bold text-black"
                    : "text-gray-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Number */}
        <h1 className="text-[24px] text-[#6C5041] font-bold">0141 611 3112</h1>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>X</button>
        </div>

        {/* Sidebar Links */}
        {/* <ul className="p-4 space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path}>
                <a
                  className={`text-lg cursor-pointer block ${
                    router.pathname === item.path
                      ? "font-bold text-black"
                      : "text-gray-600"
                  }`}
                  onClick={() => setIsOpen(false)} // Close sidebar on selection
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul> */}

        <ul className="p-4 space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`text-lg cursor-pointer block ${
                  pathname === item.path
                    ? "font-bold text-black"
                    : "text-gray-600"
                }`}
                onClick={() => setIsOpen(false)} // Close sidebar on selection
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay (Click to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Nav;
