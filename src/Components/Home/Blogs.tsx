import { blogs } from "@/constant/constant";
import Image from "next/image";
import React from "react";
import SectionHeading from "../Helper/SectionHeading";

const Blog = () => {
  return (
    <section className="py-12 ">
      <div className="w-[70%] mx-auto px-6 ">
        <div className="text-center">
           <SectionHeading Heading=" Latest Blog & Articles" paregraph="Our Blog" />
          <p className="text-gray-600 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br />
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              data-aos="flip-left"
              data-aos-duration="2000"
              key={index}
              className="bg-white rounded-lg  transition duration-300 hover:shadow p-4"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover rounded-lg "
                width={400}
                height={250}
              />
              <div className="py-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-[#0E820E] font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
