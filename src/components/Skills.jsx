

import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

const skillsData = [
  { name: "React", percentage: 85 },
  { name: "JavaScript", percentage: 75 },
  { name: "Tailwind CSS", percentage: 70 },
  { name: "MySQL", percentage: 65 },
];

const Skills = () => {
  const [progressValues, setProgressValues] = useState(
    skillsData.map(() => 0)
  );

  useEffect(() => {
    const intervals = skillsData.map((skill, index) => {
      return setInterval(() => {
        setProgressValues((prev) => {
          const updated = [...prev];
          if (updated[index] < skill.percentage) {
            updated[index] += 1;
          }
          return updated;
        });
      }, 20);
    });

    return () => intervals.forEach((int) => clearInterval(int));
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-black py-20 text-white"
      id="skill"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <h2 className="text-3xl font-bold mb-14 text-center text-green-500">
          My Skills
        </h2>

        <div className="flex overflow-x-auto space-x-6 md:grid md:grid-cols-4 md:gap-10 scrollbar-hide">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-40 md:w-auto flex flex-col items-center bg-gray-900 rounded-xl p-6 shadow-xl hover:shadow-green-500/30 transition duration-300"
            >
              <div className="w-28 h-28">
                <CircularProgressbarWithChildren
                  value={progressValues[index]}
                  styles={buildStyles({
                    pathColor: `rgba(34,197,94, ${progressValues[index] / 100})`,
                    trailColor: "#222",
                  })}
                >
                  <div className="text-sm font-bold text-green-400">
                    {progressValues[index]}%
                  </div>
                </CircularProgressbarWithChildren>
              </div>
              <h4 className="mt-4 font-semibold text-lg text-center text-gray-200">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
