import React from "react";

const NewsletterSection = () => {
  return (
    <section className="w-[80%] mx-auto bg-[#0E820E] py-8 h-auto lg:h-[350px] rounded-lg lg:relative">
      {/* Background Overlay */}
      <div className="hidden mx-10 rounded-lg opacity-5 h-[300px] lg:h-[300px] bg-[url('/overly.jpg')] bg-cover bg-center overflow-hidden  "></div>

      {/* Content */}
      <div
        data-aos="zoom-out"
        className="lg:absolute top-0 inset-0 px-6 sm:px-10 md:px-20 flex flex-col-reverse z-10 lg:flex-row items-center"
      >
        {/* Left Content */}
        <div className="max-w-4xl mx-auto flex  flex-col items-center ">
          <h2 className="text-white text-lg font-semibold uppercase">
            Subscribe Us
          </h2>
          <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Subscribe Our Newsletter
          </p>
          <p className="mt-4 text-sm text-green-100 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
          </p>
          <form className="mt-6 flex justify-center gap-8">
            <div className=" w-full max-w-md">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full py-4 px-5 bg-transparent pr-24 text-sm text-white border border-white rounded-md focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-green-600 px-6 py-3 rounded-md font-medium hover:bg-green-900 hover:text-white cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
