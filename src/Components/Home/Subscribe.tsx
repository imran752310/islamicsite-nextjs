// import React from "react";

// const NewsletterSection = () => {
//   return (

//    <section className="container mx-auto bg-[#0E820E] py-8 lg:h-[300px] rounded-lg flex justify-center items-center">

//       {/* Content */}
//       <div className="max-w-4xl mx-auto flex  flex-col items-center ">
//         <h2 className="text-white text-lg font-semibold uppercase">
//           Subscribe Us
//         </h2>
//         <p className="mt-2 text-3xl font-bold text-white sm:text-4xl">
//           Subscribe Our Newsletter
//         </p>
//         <p className="mt-4 text-sm text-green-100 text-center">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor <br />  incididunt ut labore et dolore magna aliqua.
//         </p>
//         <form className="mt-6 flex justify-center gap-8">
//           <div className=" w-full max-w-md">
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full py-4 px-5 bg-transparent pr-24 text-sm text-black border border-white rounded-md focus:outline-none"
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-white text-green-600 px-6 py-3 rounded-md font-medium hover:bg-green-100"
//           >
//             Subscribe
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default NewsletterSection;

// import Image from "next/image";
// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="container m-auto bg-[#0E820E] py-3 h-[500px]  rounded-lg relative">
//         <div className="m-10 rounded-lg  opacity-5  h-[400px]  px-4 flex flex-col-reverse lg:flex-row items-center bg-[url('/overly.jpg')] overflow-hidden">
//         </div>
//       <div className="m-20 rounded-lg opacity absolute top-0  px-4 flex flex-col-reverse lg:flex-row items-center ">

//         {/* Left Content */}
//         <div className="text-white ml-20 lg:w-1/2">
//           <h1 className="text-4xl font-bold mb-4">
//             God Always Is In Your Heart <br /> Get Involved In Everything
//           </h1>
//           <p className="mb-6 text-lg">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim
//             ad minim veniam incididunt ut labore dolore.
//           </p>
//           {/* Buttons */}
//           <div className="flex space-x-4">
//             <a
//               href="#"
//               className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
//             >
//               Get Started
//             </a>
//             <a
//               href="#"
//               className="flex items-center text-white border-2 border-white px-6 py-3 rounded-lg hover:bg-green-500"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 mr-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M14.752 11.168l-6.364 3.682A1 1 0 017 13.97V10.03a1 1 0 011.388-.92l6.364 3.682a1 1 0 010 1.84z"
//                 />
//               </svg>
//               Play Video
//             </a>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="lg:w-1/2 flex justify-center">
//           <div className="relative">
//             {/* Decorative Shape */}
//             <div className="bg-white rounded-lg p-6 shadow-lg">
//               <Image
//                 src="/her01.jpg"
//                 alt="Decorative"
//                 className="rounded-lg"
//                 width={300} height={300}
//               />
//             </div>
//             {/* Decorative Patterns */}
//             <div className="absolute top-0 left-0 transform -translate-x-8 -translate-y-8">
//               <Image src="/hero2.png" alt="Pattern" width={1000} height={1000} className="w-16 h-16" />
//             </div>
//             <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8">
//               <Image src="/hero2.png" alt="Pattern" width={1000} height={1000} className="w-16 h-16" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";

const NewsletterSection = () => {
  return (
    <section className="w-[80%] mx-auto bg-[#0E820E] py-8 h-auto lg:h-[350px] rounded-lg lg:relative">
      {/* Background Overlay */}
      <div className="hidden mx-10 rounded-lg opacity-5 h-[300px] lg:h-[300px] bg-[url('/overly.jpg')] bg-cover bg-center overflow-hidden  "></div>

      {/* Content */}
      <div className="lg:absolute top-0 inset-0 px-6 sm:px-10 md:px-20 flex flex-col-reverse z-10 lg:flex-row items-center">
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
              className="bg-white text-green-600 px-6 py-3 rounded-md font-medium hover:bg-green-100"
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
