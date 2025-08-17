import React from 'react'

const Features = () => {
  return (
<>

<section className="py-20 md:py-32 bg-gray-50" >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            What You'll Learn with AHTCODERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Feature 1 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Learn Anytime, Anywhere</h3>
              <p className="text-gray-600 leading-relaxed">
                Access our high-quality video tutorials and resources on any device, at your own pace.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-500 group-hover:text-emerald-600 transition-colors duration-300"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Hands-on Projects</h3>
              <p className="text-gray-600 leading-relaxed">
                Build real-world applications and strengthen your portfolio with our project-based learning approach.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-600 group-hover:text-purple-700 transition-colors duration-300"
                >
                  <path d="M17 18a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-1.1-.9-2-2-2Z" />
                  <path d="M17 14V2" />
                  <path d="M7 6a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-1.1-.9-2-2-2Z" />
                  <path d="M7 10V2" />
                  <path d="M12 20a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-1.1-.9-2-2-2Z" />
                  <path d="M12 16V2" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Vibrant Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with fellow coders, share knowledge, and get support from a growing community of learners.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center transform hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-600 group-hover:text-orange-700 transition-colors duration-300"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <line x1="10" x2="8" y1="9" y2="9" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Expert-Led Tutorials</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn from experienced developers who simplify complex topics and provide practical insights.
              </p>
            </div>
          </div>
        </div>
      </section>
</>  
)
}

export default Features