import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const colorVariants = {
    initial: { color: "#ffffff" },
    animate: {
      color: ["#ff5733", "#33ff57", "#ffffff"],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const handleLinkClick = () => {
    //closing when we click
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-slate-1000">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex flex-shrink-0 items-center">
          <motion.h4
            variants={colorVariants}
            initial="initial"
            animate="animate"
            className="text-xl font-semibold text-white hidden lg:block"
          >
            Balaji S
          </motion.h4>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Linkss */}
        <div className="hidden lg:flex items-center gap-10 text-xs text-white">
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
            className="cursor-pointer font-sans text-lg font-semibold text-gray-300 hover:text-indigo-400 transition-all transform hover:scale-105
             hover:translate-x-2 hover:opacity-80 active:scale-95 active:translate-x-0 active:opacity-100"
          >
            About
          </Link>
          <Link
            to="techstack"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
            className="cursor-pointer font-sans text-lg font-semibold text-gray-300 hover:text-indigo-400 transition-all transform 
            hover:scale-105 hover:translate-x-2 hover:opacity-80 active:scale-95 active:translate-x-0 active:opacity-100"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
            className="cursor-pointer font-sans text-lg font-semibold text-gray-300 hover:text-indigo-400 transition-all transform 
            hover:scale-105 hover:translate-x-2 hover:opacity-80 active:scale-95 active:translate-x-0 active:opacity-100"
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
            className="cursor-pointer font-sans text-lg font-semibold text-gray-300 hover:text-indigo-400 transition-all transform 
            hover:scale-105 hover:translate-x-2 hover:opacity-80 active:scale-95 active:translate-x-0 active:opacity-100"
          >
            Experience
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
            className="cursor-pointer font-sans text-lg font-semibold text-gray-300 hover:text-indigo-400 transition-all
             transform hover:scale-105 hover:translate-x-2 hover:opacity-80 active:scale-95 active:translate-x-0 active:opacity-100"
          >
            Contact Me
          </Link>
        </div>

        {/* Icons */}
        <div className="hidden lg:flex items-center gap-10 text-2xl text-white">
          <a
            href="https://github.com/Balajisiv03"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/balajisiv03/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_.balaji_s._/profilecard/?igsh=Zm1vMmRidnA4ZGVw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-blue-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-1/3 bg-black bg-opacity-60 text-white p-6 rounded-md shadow-lg">
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
            className="block py-2 text-lg font-semibold text-gray-300 hover:text-indigo-400 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="techstack"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
            className="block py-2 text-lg font-semibold text-gray-300 hover:text-indigo-400 cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
            className="block py-2 text-lg font-semibold text-gray-300 hover:text-indigo-400 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
            className="block py-2 text-lg font-semibold text-gray-300 hover:text-indigo-400 cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={handleLinkClick}
            className="block py-2 text-lg font-semibold text-gray-300 hover:text-indigo-400 cursor-pointer"
          >
            Contact Me
          </Link>
          <div className="flex items-center gap-6 mt-6 text-xl">
            <a
              href="https://github.com/Balajisiv03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="hover:text-blue-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/balajisiv03/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/_.balaji_s._/profilecard/?igsh=Zm1vMmRidnA4ZGVw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-blue-400"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
