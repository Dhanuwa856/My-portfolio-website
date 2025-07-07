"use client";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = ({ darkMode }) => {
  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center px-4 font-body text-center ${
        darkMode ? "bg-[#0f172a] text-white" : "bg-white text-gray-800"
      }`}
    >
      <motion.h1
        className="text-6xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-xl mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      <motion.p
        className="text-md italic text-gray-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        "Looks like you took a wrong turn... even GPS can’t save you now!"
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Link
          to="/"
          className="bg-primary hover:bg-secondary text-white px-5 py-2 rounded-md transition"
        >
          Go Back Home
        </Link>
      </motion.div>

      <motion.div
        className="mt-10"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-4xl">🧭</span>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
