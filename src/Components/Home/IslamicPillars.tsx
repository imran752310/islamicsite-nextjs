import { pillars } from "@/constant/constant";
import Image from "next/image";
import React from "react";
import SectionHeading from "../Helper/SectionHeading";

const IslamicPillars = () => {
 

  return (
    <section className="py-12 bg-gray-50">
      <div className="w-[88%] mx-auto px-4 text-center">
        {/* Header */}
        <SectionHeading Heading="5 Pillars Of Islam" paregraph="Islamic Pillars" />
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Pillars Grid */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="  rounded-lg py-10 px-8 text-center hover:shadow-xl hover:bg-white transition"
            >
              {/* Icon */}
              <div className="mb-4">
                <Image
                  src={pillar.icon}
                  alt={pillar.title}
                  width={50}
                  height={50}
                  className="mx-auto w-12 h-12 hover:w-14 hover:h-14 transition-all"
                />
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
              {/* Subtitle */}
              <p className="text-green-600 text-sm">({pillar.subtitle})</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IslamicPillars;
