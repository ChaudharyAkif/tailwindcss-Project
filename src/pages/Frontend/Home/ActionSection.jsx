import React from "react";

const ActionSection = () => {
  return (
    <>
      <section className="py-20 md:py-32 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto">
            Join thousands of aspiring developers learning and growing with
            AHTCODERS. Your future in tech starts here.
          </p>
          <button
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
          >
            Join AHTCODERS Now
          </button>
        </div>
      </section>
    </>
  );
};

export default ActionSection;
