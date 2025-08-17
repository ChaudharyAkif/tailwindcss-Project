
import { Link } from "react-router-dom"

const LandingPage= () =>{

  return (
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-700 text-white py-24 md:py-40 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 animate-fade-in-up drop-shadow-lg">
            Master Coding with <span className="text-blue-400">AHTCODERS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto opacity-90 animate-fade-in-up delay-200">
            Join AHTCODERS to learn cutting-edge programming, build amazing projects, and launch your career in tech.
            Start coding today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up delay-400">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
              >
              <Link to="/auth/register">
              Start Learning Free
              </Link>
            </button>
            <Link
              to=""
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Explore Courses
            </Link>
          </div>
        </div>
        
      </section>

  )
}
export default LandingPage 