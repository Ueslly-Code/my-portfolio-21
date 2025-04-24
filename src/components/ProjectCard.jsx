import React from "react";
import { motion } from "framer-motion";
import portfolioImg from "../assets/portfolio.png";
import calculatorImg from "../assets/calculator.png";
import todoImg from "../assets/todo.png"; // ✅ renamed to lowercase

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek and responsive portfolio made using React, Tailwind CSS, and Framer Motion.",
    img: portfolioImg,
    link: "https://github.com/Ueslly-Code/my-portfolio.git",
  },
  {
    title: "Calculator App",
    description: "A simple calculator built using HTML, CSS, and JavaScript.",
    img: calculatorImg,
    link: "https://github.com/Ueslly-Code/Calculator-App.git",
  },
  {
    title: "Quick Tasks",
    description: "A simple To-Do List web app built with HTML, CSS, and JavaScript.",
    img: todoImg,
    link: "https://github.com/Ueslly-Code/QuickTasks.git",
  },
];

const ProjectCard = () => {
  return (
    <section className="py-20 bg-black text-white" id="projects">
      <h2 className="text-3xl font-bold text-center text-green-500 mb-14">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white text-black rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
          >
            <img
              src={project.img}
              alt={`Project - ${project.title}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-green-600">
                {project.title}
              </h3>
              <p className="text-sm mt-2 text-gray-700">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 font-semibold mt-4 inline-block hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
