import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <hr className="border-gray-700" />
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 bg-black text-white"
      >
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Icons */}
            <motion.div
              className="flex space-x-6 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-white hover:text-sky-400 transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-blue-600 transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </motion.div>

            {/* Footer Text */}
            <motion.div
              className="border-t border-gray-700 w-full pt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <p className="text-sm text-gray-300">
                &copy; {currentYear} Aniket. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 italic mt-2">
                "Simplicity ✨ fuels the engine 🛠️ of efficiency 🚀."
              </p>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
