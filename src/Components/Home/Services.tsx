import { services } from "@/constant/constant";
import Image from "next/image";
import React from "react";
import SectionHeading from "../Helper/SectionHeading";

const Services = () => {
 

  return (
    <section className="py-12 bg-gray-50">
      <div className="w-[70%] mx-auto px-4 text-center">
        {/* Header */}
        <div>
          
          <SectionHeading Heading="Our Popular Services" paregraph="What We Offer" />
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {/* Pillars Grid */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="  rounded-lg py-10 px-8  hover:shadow-xl hover:bg-white transition"
            >
              {/* Icon */}
              <div className="mb-4 ">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                  className=" w-12 h-12 hover:w-14 hover:h-14 transition-all"
                />
              </div>
              {/* Title */}
              <h3 className="text-2xl font-semibold text-start mb-2">
                {service.title}
              </h3>
              {/* Subtitle */}
              <p className="text-gray-600 text-start text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
