import React from "react";
import { FaUserGraduate, FaLaptopCode, FaRocket, FaArrowRight } from "react-icons/fa"; // react-icons se import

const WorkSection = () => {
  return (
    <>
      <section className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Your Coding Journey with AHTCODERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="bg-blue-600 text-white rounded-full h-20 w-20 flex items-center justify-center shadow-xl text-4xl">
                  <FaUserGraduate />
                </div>
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden md:block text-gray-600 text-4xl">
                  <FaArrowRight   />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Enroll & Access Courses
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Sign up for free and gain instant access to our growing library
                of coding tutorials.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="bg-emerald-500 text-white rounded-full h-20 w-20 flex items-center justify-center shadow-xl text-4xl">
                  <FaLaptopCode />
                </div>
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden md:block text-gray-600 text-4xl">
<FaArrowRight   />

                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Learn & Build Projects
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Follow along with our expert instructors and build practical
                projects to solidify your skills.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <div className="bg-purple-600 text-white rounded-full h-20 w-20 flex items-center justify-center shadow-xl text-4xl">
                  <FaRocket />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Launch Your Tech Career
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Apply your new knowledge to land your dream job or create your
                own innovative solutions.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WorkSection;
