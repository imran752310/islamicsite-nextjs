import Image from "next/image";
import React from "react";

const IslamicPillars = () => {
  const pillars = [
    {
      title: "Shahada",
      subtitle: "Faith",
      icon: "/shahada.png", // Replace with your icon path
    },
    {
      title: "Salat",
      subtitle: "Prayer",
      icon: "/salat.png", // Replace with your icon path
    },
    {
      title: "Zakat",
      subtitle: "Alms",
      icon: "/zakat.png", // Replace with your icon path
    },
    {
      title: "Sawm",
      subtitle: "Fasting",
      icon: "/sawam.png", // Replace with your icon path
    },
    {
      title: "Hajj",
      subtitle: "Pilgrimage",
      icon: "/hajj.png", // Replace with your icon path
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="w-[88%] mx-auto px-4 text-center">
        {/* Header */}
        <p className="text-green-600 text-lg font-semibold">Islamic Pillars</p>
        <h2 className="text-4xl font-bold mt-2 mb-6">5 Pillars Of Islam</h2>
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
