import Image from "next/image";
import mosqueImage from "/public/about.jpg"; // Replace with the correct path to your image
import { FaMosque } from "react-icons/fa";
const About = () => {
  return (
    <section className="w-[88%] m-auto flex  flex-col lg:flex-row items-center lg:items-start bg-white py-16 px-8 lg:px-20">
      {/* Left Content */}
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className=" lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
      >
        <div className="flex items-center lg:justify-start lg:-mb-10  ">
          <span className="text-green-700  lg:text-[150px] mr-6 ">&ldquo;</span>
          <h2 className="text-2xl lg:text-1xl font-serif font-bold text-gray-900 leading-tight">
            Take Good Advice From People <br />
            Who Pronounce It Though He <br />
            Does Not Practice
          </h2>
        </div>
        <p className="text-gray-500  text-sm lg:text-base italic mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minima veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="flex items-center text-gray-600">
            <span className="text-green-700 text-xl mr-3">
              <FaMosque />
            </span>
            <span className="text-sm lg:text-sm">
              Join The Islamic Community
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="text-green-700 text-xl mr-3">
              <FaMosque />
            </span>
            <span className="text-sm lg:text-sm">Charity & Donations</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="text-green-700 text-xl mr-3">
              <FaMosque />
            </span>
            <span className="text-sm lg:text-sm">Beneficent The Merciful</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="text-green-700 text-xl mr-3">
              <FaMosque />
            </span>
            <span className="text-sm lg:text-sm">Funeral Services</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="text-green-700 text-xl mr-3">
              <FaMosque />
            </span>
            <span className="text-sm lg:text-sm">Quran Recitation Class</span>
          </div>
          <div className="flex items-center text-gray-600">
            <span className="text-green-700 text-xl mr-3">
              <FaMosque />
            </span>
            <span className="text-sm lg:text-sm">Tafseer Quran</span>
          </div>
        </div>

        <p className="text-gray-500  text-sm lg:text-sm mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi Duis aute
          irure.
        </p>

        <button className="bg-[#0E820E] text-white text-sm lg:text-base py-3 px-6 rounded hover:bg-green-800 transition-shadow shadow-lg">
          Read More
        </button>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <div className="relative  lg:w-4/5  ">
          <Image
            src={mosqueImage}
            alt="Mosque Interior"
            className="rounded-t-full rounded-b-lg"
            width={500}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
