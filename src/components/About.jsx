import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaAward, FaLaptopCode, FaBullseye } from "react-icons/fa";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20 bg-black text-white"
      id="about"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-green-500 mb-12 text-center"
      >
        About Me
      </motion.h1>

      {/* Intro */}
      <motion.p
        custom={0}
        variants={sectionVariants}
        className="text-lg text-gray-300 leading-relaxed mb-12 text-center max-w-3xl mx-auto"
      >
        Hi, I'm <span className="font-semibold text-green-500">Aniket</span>, a
        BCA student passionate about <strong>web development</strong>. I enjoy
        creating clean, functional websites and exploring how technology can
        improve user experience and solve real-world problems.
      </motion.p>

      <div className="space-y-16">

        {/* Education */}
        <motion.section custom={1} variants={sectionVariants}>
          <div className="flex items-center mb-4 space-x-2">
            <FaUserGraduate className="text-green-400 text-xl" />
            <h2 className="text-green-400 font-bold text-xl">Education & Training</h2>
          </div>
          <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4">
            <li>BCA, Teerthanker Mahaveer University – 2026</li>
            <li>Front-End Web Development</li>
            <li>JavaScript & React Bootcamp</li>
          </ul>
        </motion.section>

        {/* Skills */}
        <motion.section custom={2} variants={sectionVariants}>
          <div className="flex items-center mb-4 space-x-2">
            <FaLaptopCode className="text-green-400 text-xl" />
            <h2 className="text-green-400 font-bold text-xl">Skills & Expertise</h2>
          </div>
          <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4">
            <li>HTML, CSS, JavaScript, React, Tailwind CSS</li>
            <li>Version Control: Git & GitHub</li>
            <li>Responsive Design, UI/UX Fundamentals</li>
            <li>Strong problem-solving & collaboration skills</li>
          </ul>
        </motion.section>

        {/* Achievements */}
        <motion.section custom={3} variants={sectionVariants}>
          <div className="flex items-center mb-4 space-x-2">
            <FaAward className="text-green-400 text-xl" />
            <h2 className="text-green-400 font-bold text-xl">Achievements & Awards</h2>
          </div>
          <ul className="list-disc list-inside text-gray-300 space-y-1 pl-4">
            <li>Introduction to Front-End by Simplilearn | SkillUP (2024)</li>
            <li>AI for Beginners by HP Life (2024)</li>
          </ul>
        </motion.section>

        {/* Mission */}
        <motion.section custom={4} variants={sectionVariants}>
          <div className="flex items-center mb-4 space-x-2">
            <FaBullseye className="text-green-400 text-xl" />
            <h2 className="text-green-400 font-bold text-xl">Mission Statement</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            My mission is to leverage my creativity and technical skills to build
            innovative digital solutions that deliver real impact. I'm committed
            to continuous learning, growth, and collaboration to contribute
            meaningfully to the digital world.
          </p>
        </motion.section>

      </div>
    </motion.div>
  );
};

export default About;
