import Image from "next/image";
import prayerImage from "/public/prayimage.jpg"; // Replace with the correct path to your image

const PrayerTimes = () => {
  return (
    <section className="w-[80%] mx-auto bg-[#0E820E] text-white py-16 px-8 lg:px-20 rounded-lg">
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left Content */}
        <div>
          <p className="text-center lg:text-left text-lg font-medium mb-2">
            Todays Prayer Times
          </p>
          <h2 className="text-center lg:text-left text-3xl lg:text-4xl font-bold mb-4">
            Prayer Times In Pakistan
          </h2>
          <p className="text-center lg:text-left text-sm lg:text-base text-gray-200 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="bg-green-800 rounded-lg p-4">
            <div className="grid grid-cols-3 text-center font-medium">
              <span>Salat</span>
              <span>Start</span>
              <span>Iqomah</span>
            </div>
            <div className="mt-4 space-y-2 text-center">
              {[
                { name: "Fajar", start: "4:10 am", iqomah: "4:48 am" },
                { name: "Sunrise", start: "5:50 am", iqomah: "6:00 am" },
                { name: "Zuhr", start: "12:36 pm", iqomah: "1:00 pm" },
                { name: "Asr", start: "4:15 pm", iqomah: "5:15 pm" },
                { name: "Maghrib", start: "6:15 pm", iqomah: "6:52 pm" },
                { name: "Ishaa", start: "8:30 pm", iqomah: "8:56 pm" },
              ].map((prayer, index) => (
                <div key={index} className="grid grid-cols-3">
                  <span>{prayer.name}</span>
                  <span>{prayer.start}</span>
                  <span>{prayer.iqomah}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          {/* Decorative Shape */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <Image
              src={prayerImage}
              alt="Decorative"
              className="rounded-lg pl-3"
              width={500}
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
              className="w-20 h-20 lg:w-28 lg:h-28 sm:w-16 sm:h-16"
            />
          </div>
          <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8">
            <Image
              src="/hero2.png"
              alt="Pattern"
              width={1000}
              height={1000}
              className="w-20 h-20 lg:w-28 lg:h-28  sm:w-16 sm:h-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerTimes;
