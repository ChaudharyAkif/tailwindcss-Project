import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ()=> {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="#" className="hover:text-white transition-colors duration-300">
                        <FaFacebookF />
          </Link>
          <Link to="https://www.youtube.com/@AHTCoders" className="hover:text-white transition-colors duration-300">
                        <FaYoutube />
          </Link>
          <Link to="" className="hover:text-white transition-colors duration-300">
                        <FaInstagram />
          </Link>
          <Link to="https://www.linkedin.com/in/chaudharyakifmnbrands/" className="hover:text-white transition-colors duration-300">
             <FaLinkedinIn />
          </Link>
        </div>
        <div className="text-sm mb-2">
          <Link to="#" className="hover:text-white transition-colors duration-300 mx-2">
            Privacy Policy
          </Link>{" "}
          |
          <Link to="#" className="hover:text-white transition-colors duration-300 mx-2">
            Terms of Service
          </Link>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} AHT Coders All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer