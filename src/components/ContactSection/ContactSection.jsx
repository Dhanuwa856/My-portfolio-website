"use client";

import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const ContactSection = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_EMAILJS_USER_ID
      );
      toast.success("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactCards = [
    {
      icon: <FaEnvelope size={40} />,
      colorClass: "text-primary",
      text: "infoname259@gmail.com",
      initialX: -100,
    },
    {
      icon: <FaWhatsapp size={40} />,
      colorClass: "text-accent",
      text: "soon to be available",
      initialX: 100,
    },
    {
      icon: <FaMapMarkerAlt size={40} className="text-red-500" />,
      colorClass: "text-red-500",
      text: "Colombo, Sri Lanka",
      initialX: 0,
    },
  ];

  return (
    <section
      className={`w-full py-12 px-4  ${
        darkMode ? "#000" : "bg-white"
      } font-body`}
    >
      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3 mb-10 max-w-4xl mx-auto">
        {contactCards.map((card, i) => (
          <motion.div
            key={i}
            className={`${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg p-6 shadow-md hover:shadow-lg transition-transform hover:scale-105 text-center flex flex-col items-center gap-2`}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              duration: 0.5,
              delay: i * 0.2,
            }}
          >
            <div className={`mx-auto  ${card.colorClass}`}>{card.icon}</div>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className={`max-w-4xl mx-auto ${
          darkMode ? "bg-gray-800" : "bg-white"
        } p-8 rounded-lg shadow-md`}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          duration: 0.5,
          delay: 0.2,
        }}
      >
        <div className="mb-6">
          <label
            className={`block mb-2 text-sm font-medium ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`
    w-full p-3 rounded-md border focus:ring-2 focus:outline-none
    ${
      darkMode
        ? "border-gray-700 bg-gray-700 text-gray-200 focus:ring-indigo-600"
        : "border-gray-300 bg-gray-50 text-gray-800 focus:ring-indigo-400"
    }
  `}
            required
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            className={`block mb-2 text-sm font-medium ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`
    w-full p-3 rounded-md border focus:ring-2 focus:outline-none
    ${
      darkMode
        ? "border-gray-700 bg-gray-700 text-gray-200 focus:ring-indigo-600"
        : "border-gray-300 bg-gray-50 text-gray-800 focus:ring-indigo-400"
    }
  `}
            required
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            className={`block mb-2 text-sm font-medium ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`
    w-full p-3 rounded-md border focus:ring-2 focus:outline-none resize-none
    ${
      darkMode
        ? "border-gray-700 bg-gray-700 text-gray-200 focus:ring-indigo-600"
        : "border-gray-300 bg-gray-50 text-gray-800 focus:ring-indigo-400"
    }
  `}
            required
          ></textarea>

          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary hover:bg-primary/60 cursor-pointer transition text-white font-semibold py-3 px-6 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>
    </section>
  );
};

export default ContactSection;
