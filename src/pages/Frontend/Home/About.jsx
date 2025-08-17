import React from "react";
import cofounder from "../../../assets/img/COfounder.jpeg"
const About = () => {
  return (
    <>
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <img
              src={cofounder}
              alt="AHTCODERS Team Collaboration"
              className="rounded-xl shadow-2xl w-[400px] h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              About AHTCODERS
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Our mission at AHTCODERS is to make high-quality coding education
              accessible to everyone. We believe in practical, project-based
              learning that equips you with real-world skills to excel in the
              tech industry.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Founded by passionate developers, AHTCODERS is more than just a
              channel; it's a thriving community where aspiring coders can
              learn, grow, and connect. We're committed to guiding you through
              every step of your coding journey.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
