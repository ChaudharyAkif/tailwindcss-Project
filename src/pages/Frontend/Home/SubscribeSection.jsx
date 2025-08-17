import React from "react";
import { FaYoutube } from "react-icons/fa";

export default function SubscribeSection() {
  const subscribeUrl =
    "https://www.youtube.com/channel/UCsEFTj7kPmtZ6G4MrImjc0Q?sub_confirmation=1";

  return (
    <section
      aria-labelledby="subscribe-heading"
      className="bg-gray-900 py-16"
    >
      <div className="container mx-auto px-4">
        {/* Centered card-like container */}
        <div className="max-w-xl mx-auto text-center relative">
          {/* Decorative glowing background ring (purely visual) */}
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 flex items-center justify-center"
          >
            <span className="w-full h-full rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-700 opacity-20 blur-2xl animate-pulse" />
          </span>

          {/* Heading (semantic + accessible) */}
          <h2
            id="subscribe-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Join AHTCODERS — Level Up Your Coding
          </h2>

          {/* Description paragraph */}
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            Practical tutorials, project walkthroughs, and short tips delivered weekly.
            Click subscribe and hit the bell to never miss an update.
          </p>

          {/* Button row */}
          <div className="mt-8 flex justify-center">
            <a
              href={subscribeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Subscribe to AHTCODERS on YouTube"
              className="relative group inline-flex items-center gap-4 bg-gradient-to-r from-red-600 via-red-500 to-red-700 hover:from-red-500 hover:to-red-800 text-white font-semibold px-6 py-3 rounded-full shadow-2xl transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-30"
            >
              {/* Icon circle */}
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                <FaYoutube className="text-xl drop-shadow group-hover:animate-pulse" />
              </span>

              {/* Two-line button text (small label + bold action) */}
              <span className="leading-none text-left">
                <span className="block text-sm opacity-80">YouTube</span>
                <span className="block text-base font-bold -mt-0.5">Subscribe to AHTCODERS</span>
              </span>
            </a>
          </div>

          {/* Small footnote */}
          <p className="mt-4 text-gray-400 text-sm">
            No spam — just practical tutorials, project builds, and quick tips.
          </p>
        </div>
      </div>
    </section>
  );
}
