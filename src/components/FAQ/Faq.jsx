"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I offer fullstack web development, AI chatbot development, and UI/UX design using modern tools and technologies.",
  },
  {
    question: "Are you available for freelance projects?",
    answer:
      "Yes! I'm actively looking for freelance opportunities on platforms like Upwork. Let's connect!",
  },
  {
    question: "What tech stacks do you specialize in?",
    answer:
      "I mainly work with React, Node.js, Express, MongoDB, Python, Tailwind CSS, and OpenAI tools for AI projects.",
  },
  {
    question: "Can I see examples of your work?",
    answer:
      "Sure! Visit the Projects section of my portfolio or check my GitHub for open-source contributions.",
  },
];

const FAQSection = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className={`py-16 px-4 font-body transition-colors duration-500 ${
        darkMode ? " text-white" : "bg-gray-100 text-gray-900"
      }`}
      id="faq"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg border ${
                darkMode
                  ? "border-gray-700 bg-gray-800"
                  : "border-gray-400 bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg focus:outline-none"
              >
                {faq.question}
                <FaChevronDown
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4"
                  >
                    <p className="text-base text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
