import React from "react";
import { FiCheck } from "react-icons/fi"; // Feather check icon

const PricingSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Unlock More with Our Plans
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {/* Basic Plan */}
          <div className="bg-white p-10 rounded-xl shadow-xl flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Free Tier</h3>
              <p className="text-gray-600 mb-6">
                Access essential tutorials and get started with coding.
              </p>
              <div className="text-5xl font-extrabold text-blue-600 mb-8">
                $0<span className="text-xl font-medium text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 text-gray-700 text-lg mb-10">
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-3" size={24} />
                  Access to Free Courses
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-3" size={24} />
                  Community Forum Access
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-3" size={24} />
                  Basic Project Files
                </li>
              </ul>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Free
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-900 p-10 rounded-xl shadow-2xl flex flex-col justify-between transform scale-105 lg:scale-100 hover:scale-110 transition-transform duration-300 border-4 border-blue-600">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Pro Coder</h3>
              <p className="text-gray-300 mb-6">
                For serious learners ready to dive deep into development.
              </p>
              <div className="text-5xl font-extrabold text-emerald-400 mb-8">
                $19<span className="text-xl font-medium text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 text-gray-200 text-lg mb-10">
                <li className="flex items-center">
                  <FiCheck className="text-green-400 mr-3" size={24} />
                  All Free Tier Features
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-400 mr-3" size={24} />
                  Premium Course Library
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-400 mr-3" size={24} />
                  Advanced Project Files
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-400 mr-3" size={24} />
                  Priority Email Support
                </li>
              </ul>
            </div>
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Go Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-10 rounded-xl shadow-xl flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Team/Enterprise</h3>
              <p className="text-gray-600 mb-6">
                For teams and organizations seeking custom learning solutions.
              </p>
              <div className="text-5xl font-extrabold text-purple-600 mb-8">
                Custom<span className="text-xl font-medium text-gray-600">/quote</span>
              </div>
              <ul className="space-y-4 text-gray-700 text-lg mb-10">
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-3" size={24} />
                  All Pro Coder Features
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-3" size={24} />
                  Dedicated Team Support
                </li>
                <li className="flex items-center">
                  <FiCheck className="text-green-500 mr-3" size={24} />
                  Custom Course Development
                </li>
              </ul>
            </div>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
