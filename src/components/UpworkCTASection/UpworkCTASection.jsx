"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaSquareUpwork } from "react-icons/fa6";

const UpworkCTASection = ({ darkMode }) => {
  return (
    <section
      className={`py-16 px-4 text-center font-body transition-colors duration-500 ${
        darkMode
          ? "text-white"
          : "bg-gradient-to-br from-accent/80 to-accent text-white"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <FaSquareUpwork className="text-6xl mx-auto mb-4 animate-pulse" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Would you like to work with me?
        </h2>
        <p className="mb-6 text-lg">
          I'm available for freelance projects. Let's collaborate and bring your
          ideas to life!
        </p>
        <a
          href="https://www.upwork.com/freelancers/~01386d08f6baa0d69c"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block font-semibold px-6 py-3 rounded-full shadow-md transition ${
            darkMode
              ? "bg-white text-gray-900 hover:bg-gray-300"
              : "bg-white text-green-700 hover:bg-gray-100"
          }`}
        >
          Visit My Upwork Profile
        </a>
      </motion.div>
    </section>
  );
};

export default UpworkCTASection;
