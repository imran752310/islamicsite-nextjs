import { counters } from "@/constant/constant";
import React from "react";

import CountUp from "react-countup";

const Counter = () => {
  
  return (
    <section className="m-16 py-12  rounded-lg bg-gray-50">
      <div className="w-[85%] mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {counters.map((counter, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-gray-800">
                <CountUp start={0} end={counter.value} delay={0}>
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                      <span className="text-green-500 text-3xl">+</span>
                    </div>
                  )}
                </CountUp>
                {/* {counter.value} */}
               
              </h3>
              <p className="text-gray-600 mt-2">{counter.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
