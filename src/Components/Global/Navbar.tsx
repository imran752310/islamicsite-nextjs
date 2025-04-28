import Image from "next/image";
import React from "react";
// import { FaPhone } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className="bg-white ">
      <div className="w-[88%] mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={200}
            className=""
          />
        </div>

        {/* Navigation Links */}
        <nav className=" text-base  hidden md:flex space-x-6 ">
          <a href="#" className="text-gray-800  hover:text-[#0E820E]">
            Home
          </a>
          <a href="#" className="text-gray-800 hover:text-[#0E820E]">
            About
          </a>
          <a href="#" className="text-gray-800 hover:text-[#0E820E]">
            Services
          </a>
          <div className="relative group">
            <button className="text-gray-800 hover:text-[#0E820E] flex items-center">
              Features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown */}
            <div className="absolute z-40 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48   ">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:text-green-500 "
              >
                Feature 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:text-green-500 "
              >
                Feature 2
              </a>
            </div>
          </div>
          <div className="relative group">
            <button className="text-gray-800 hover:text-green-500 flex items-center">
              Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block z-50 bg-white shadow-lg rounded-md py-2 w-48">
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:text-green-500 "
              >
                Blog 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:text-green-500"
              >
                Blog 2
              </a>
            </div>
          </div>
          <a href="#" className="text-gray-800 hover:text-green-500">
            Contact
          </a>
        </nav>

        {/* Call and Donate */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:+6281414257"
            className="   flex items-center gap-4 text-gray-800 font-bold"
          >
            <span className="bg-green-800 rounded-full ">
              <FaPhoneAlt className="text-white  rounded-full w-5 h-5 m-2" />
            </span>
            <span> (+62) 81 414 257</span>
          </a>
          <a
            href="#"
            className="bg-[#0E820E] text-lg text-white px-5 py-3 rounded-md hover:bg-green-600"
          >
            Donate Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
