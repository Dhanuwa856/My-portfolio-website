// src/components/AboutSection/AboutSection.js
import React from "react";
import { motion } from "motion/react";

const AboutSection = ({ darkMode }) => {
  const transition = {
    type: "spring",
    stiffness: 500,
    damping: 20,
    duration: 0.1,
  };

  const initial = { x: -100, opacity: 0 };
  const whileInView = { x: 0, opacity: 1 };

  return (
    <section className={`max-w-6xl mx-auto p-6 `}>
      <div className="relative">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 px-6 transition-opacity duration-500">
          {/* Details Section */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <motion.h2
              className={`text-3xl md:text-4xl font-bold mb-4 font-header ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
              initial={initial}
              whileInView={whileInView}
              transition={transition}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>

            <motion.p
              className={`leading-relaxed mb-4 font-body text-sm sm:text-base ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
              initial={initial}
              whileInView={whileInView}
              transition={transition}
              viewport={{ once: true }}
            >
              Welcome to my portfolio!
            </motion.p>
            <motion.p
              className={`leading-relaxed mb-4 font-body text-sm sm:text-base ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
              initial={initial}
              whileInView={whileInView}
              transition={transition}
              viewport={{ once: true }}
            >
              I'm a passionate web developer with a strong background in
              mathematics, driven by a love for problem-solving and creativity.
              My journey began with excelling in math, and it evolved into
              exploring the world of web development—where I combine analytical
              thinking with innovative design to build dynamic digital
              experiences. On this site, you'll find a curated collection of my
              projects, showcasing skills in both front-end and back-end
              development. Each project reflects my commitment to learning,
              precision, and continuous improvement. Dive in to see how I
              transform complex ideas into intuitive, effective solutions. Let's
              build something amazing together!
            </motion.p>
          </div>

          {/* Rotating Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-center justify-center">
              {/* Rotating Gradient Border */}
              <div
                className="absolute inset-0 rounded-full p-[5px] animate-spin-slow"
                style={{
                  background:
                    "conic-gradient(#4F46E5, #9333EA, #22C55E, #4F46E5)",
                  boxShadow:
                    "0 0 50px rgba(79, 70, 229, 0.9), 0 0 100px rgba(79, 70, 229, 0.7)",
                }}
              />

              {/* Inner Static Circle */}
              <div
                className={`relative w-[95%] h-[95%] rounded-full flex items-center justify-center ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <img
                  src="/user.png"
                  alt="User"
                  className="absolute -bottom-12 sm:-bottom-14 md:-bottom-16 w-[85%] sm:w-[90%] object-cover transform -translate-y-1/6 rounded-b-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
