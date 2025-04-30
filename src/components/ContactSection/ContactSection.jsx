"use client";

import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Submitted", formData);
      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      className={`w-full py-12 px-4  ${
        darkMode ? "#000" : "bg-white"
      } font-body`}
    >
      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3 mb-10 max-w-4xl mx-auto">
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg p-6 shadow-md hover:shadow-lg transition hover:scale-105 text-center`}
        >
          <FaEnvelope size={40} className="mx-auto mb-4 text-primary" />
          <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            infoname259@gmail.com
          </p>
        </div>
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg p-6 shadow-md hover:shadow-lg transition hover:scale-105 text-center`}
        >
          <FaWhatsapp size={40} className="mx-auto mb-4 text-accent" />
          <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            soon to be available
          </p>
        </div>
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } rounded-lg p-6 shadow-md hover:shadow-lg transition hover:scale-105 text-center`}
        >
          <FaMapMarkerAlt size={40} className="mx-auto mb-4 text-red-500" />
          <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Colombo, Sri Lanka
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className={`max-w-4xl mx-auto ${
          darkMode ? "bg-gray-800" : "bg-white"
        } p-8 rounded-lg shadow-md`}
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
          className="w-full bg-primary hover:bg-primary/60 cursor-pointer transition text-white font-semibold py-3 px-6 rounded-md"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
