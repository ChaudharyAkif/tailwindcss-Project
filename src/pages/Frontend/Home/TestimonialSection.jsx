import React from "react";
import logo from "../../../assets/img/logo.png"
const TestimonialSection = () => {
  return (
    <>
      <section className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            What Our Learners Say
          </h2>
          <div className="max-w-3xl mx-auto bg-gray-800 p-10 rounded-xl shadow-2xl">
            <blockquote className="text-xl md:text-2xl italic leading-relaxed mb-8 text-gray-200">
              "AHTCODERS transformed my understanding of coding. The tutorials
              are clear, concise, and incredibly helpful. I've learned so much
              and now feel confident tackling new projects!"
            </blockquote>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <img
                src={logo}
                alt="Coding Student Avatar"
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 shadow-lg"
              />
              <div>
                <p className="font-semibold text-xl text-white">
                  Coding Enthusiast
                </p>
                <p className="text-gray-400 text-base">
                  AHTCODERS Community Member
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
