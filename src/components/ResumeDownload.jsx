import React from "react";
import { motion } from "framer-motion";
const resumeImg = "../assets/profile.png";


const ResumeDownload = () => {
  return (
    <div className="text-center bg-black py-20 px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-block"
      >
        <p className="text-gray-300 mb-4 text-lg">Download My Resume</p>

        <a href={resumeImg} download>
          <button className="relative group bg-green-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-600 transition-all duration-300">
            Download Resume
            <span className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0 group-hover:opacity-60 animate-pulse"></span>
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default ResumeDownload;
