
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Feather icons from react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <Link to="/" className="text-white text-2xl font-bold">
          AHTCODERS
        </Link>

        {/* Desktop Navigation & Auth Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="#"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Features
          </Link>
          <Link
            to="#"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Pricing
          </Link>
          <Link
            to="#"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300">
            <Link to={"/auth/login"}>Login</Link>
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300">
            <Link to={"/auth/register"}>Register</Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? (
              
              <FiX /> 
            ) : (
              <FiMenu />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation & Auth Buttons */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-3 px-4 pb-4">
            <Link
              to="/"
              className="block text-gray-300 hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="#"
              className="block text-gray-300 hover:text-white transition-colors duration-300"
            >
              Features
            </Link>
            <Link
              to="#"
              className="block text-gray-300 hover:text-white transition-colors duration-300"
            >
              Pricing
            </Link>
            <Link
              to="#"
              className="block text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
            <button className="w-full text-left bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300">
              <Link to="/auth/login">Login</Link>
            </button>
            <button className="w-full text-left bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300">
              <Link to="/auth/register">Register</Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
