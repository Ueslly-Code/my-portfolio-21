import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
const profileImg = "../assets/profile.png"; 
import calculatorImg from "../assets/profile.png";

<img src={calculatorImg} alt="Calculator" />



const Home = () => {
  return (
    <div
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 bg-black text-white"
      id="home"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6 order-2 md:order-1"
        >
          <span className="text-xl text-gray-400">Welcome to my Portfolio</span>

          <div className="flex flex-wrap space-x-2 text-3xl md:text-4xl font-bold">
            <h1>Hello, I'm</h1>
            <ReactTyped
              className="text-green-500"
              strings={["Aniket", "a Developer", "a Coder"]}
              typeSpeed={60}
              backSpeed={50}
              loop
            />
          </div>

          <p className="text-md text-gray-400 text-justify">
            I'm a web developer who builds and maintains websites & web apps. I love crafting functional, beautiful, and user-friendly interfaces that bring ideas to life.
          </p>

          {/* Socials & Tech Stack */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Socials */}
            <div>
              <h2 className="font-bold mb-2">Available on</h2>
              <div className="flex space-x-4 text-xl text-gray-300">
                <motion.a whileHover={{ scale: 1.2, color: "#1877F2" }} href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebook />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, color: "#fff" }} href="https://github.com" target="_blank" rel="noreferrer">
                  <FaGithub />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, color: "#E1306C" }} href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, color: "#FF0000" }} href="https://youtube.com/@WebwizAniket" target="_blank" rel="noreferrer">
                  <FaYoutube />
                </motion.a>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="font-bold mb-2">Currently Working On</h2>
              <div className="flex space-x-4 text-3xl">
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <IoLogoJavascript className="text-yellow-400" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <RiReactjsLine className="text-blue-400" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <SiMysql className="text-sky-300" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                  <RiTailwindCssFill className="text-cyan-400" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 order-1 md:order-2 flex justify-center"
        >
          <div className="relative group">
          <img src={calculatorImg} alt="Calculator" 
           
              className="rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover shadow-xl transition duration-300 border-4 border-green-500 group-hover:scale-105"
            />
            <div className="outline-regal-blue absolute inset-0 rounded-full border-4 border-green-400 animate-pulse opacity-30 group-hover:opacity-50" />
          </div>
        </motion.div>
      </div>
    </div>



  );
};

export default Home;  