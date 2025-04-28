import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black  text-gray-300 py-12 mt-10">
      <div className="w-[80%] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold  mb-4">
              <Image
                src="/footer-logo.png"
                alt="Logo"
                width={150}
                height={200}
                className=""
              />
            </h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="w-8 h-8 bg-green-600 flex items-center justify-center rounded-full text-white hover:bg-green-700"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-green-600 flex items-center justify-center rounded-full text-white hover:bg-green-700"
              >
                <FaTiktok />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-green-600 flex items-center justify-center rounded-full text-white hover:bg-green-700"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-green-600 flex items-center justify-center rounded-full text-white hover:bg-green-700"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Teacher
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Stay Connected
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Jl. Sunset Road, 112290 Denpasar, Bali</li>
              <li>Email: qudrat@support.com</li>
              <li>Phone: (+62) 81 414 257</li>
              <li>Fax: 021 223 224 19</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
          <p>
            <br />
            Copyright © Qudrat 2025. All rights reserved.{" "}
            <b>Muhammad Imran Khan</b>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
