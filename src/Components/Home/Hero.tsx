import Image from "next/image";
import React from "react";
import { IoIosPlay } from "react-icons/io";
const HeroSection = () => {
  return (
    <section className="w-[88%] mx-auto bg-[#0E820E] py-8 h-auto lg:h-[500px] rounded-3xl lg:relative">
      {/* Background Overlay */}
      <div className="hidden mx-10 rounded-lg opacity-5 h-[300px] lg:h-[400px] bg-[url('/overly.jpg')] bg-cover bg-center overflow-hidden  "></div>

      {/* Content */}
      <div className="lg:absolute top-0 inset-0 px-6 sm:px-10 md:px-20 flex flex-col-reverse z-10 lg:flex-row items-center">
        {/* Left Content */}
        <div className="text-white mt-10 text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
            God Always Is In Your Heart <br /> Get Involved In Everything
          </h1>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            className="mb-6 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim
            ad minim veniam incididunt ut labore dolore.
          </p>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              data-aos="fade-right"
              data-aos-duration="1800"
              href="#"
              className="bg-white text-[#0E820E] border px-7 py-4 rounded-lg font-semibold hover:bg-transparent hover:text-white transition"
            >
              Get Started
            </a>
            <a
              href="#"
              className="flex items-center text-white border border-white p-5 rounded-full hover:bg-white hover:text-green-700 transition hover:animate-pulse hover:shadow-slate-100"
            >
              <IoIosPlay className=" " />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            {/* Decorative Shape */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <Image
                src="/her01.jpg"
                alt="Decorative"
                className="rounded-lg"
                width={300}
                height={300}
              />
            </div>
            {/* Decorative Patterns */}
            <div className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8">
              <Image
                src="/hero2.png"
                alt="Pattern"
                width={1000}
                height={1000}
                className="w-20 h-20 sm:w-16 sm:h-16 lg:w-28 lg:h-28 "
              />
            </div>
            <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8">
              <Image
                src="/hero2.png"
                alt="Pattern"
                width={1000}
                height={1000}
                className=" w-20 h-20 sm:w-16 sm:h-16 lg:w-28 lg:h-28 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
