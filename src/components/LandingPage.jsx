import React from "react";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingPage = ({ onExploreClick }) => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Hi, I'm{" "}
          <span className="text-green-600 drop-shadow-md animate-pulse">
            Aniket
          </span>
        </motion.h1>

        <div className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
          <ReactTyped
            strings={["Web Developer", "Programmer", "Tech Enthusiast"]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </div>

        <p className="text-md md:text-lg text-gray-600 mb-8">
          I build fast, responsive and visually stunning websites using modern
          web technologies.
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#333" }}
          >
            <FaGithub size={30} />
          </motion.a>

          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#0A66C2" }}
          >
            <FaLinkedin size={30} />
          </motion.a>

          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#E1306C" }}
          >
            <FaInstagram size={30} />
          </motion.a>
        </div>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 12px rgba(34, 197, 94, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onExploreClick}
          className="bg-green-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-600 transition-all"
        >
          Explore Portfolio
        </motion.button>
      </motion.div>
    </section>
  );
};

export default LandingPage;
