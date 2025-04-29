"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaCoffee,
} from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-800"
      } mt-20`}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo_new.jpg"
                alt="Logo"
                className="h-20 w-20 mr-3 rounded-full"
              />
              <span className="text-2xl font-bold">Dhanushka Rathnayaka</span>
            </div>
            <p className="text-sm mb-2">
              I’m a freelance Web Application Developer specializing in creating
              responsive, dynamic, and efficient web solutions. Connect with me
              on Upwork to collaborate on your next project.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/YourGitHubUsername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400"
                title="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://buymeacoffee.com/YourCoffeeLink"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400"
                title="Buy Me a Coffee"
              >
                <FaCoffee size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-indigo-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/freelancers/~YourUpworkProfile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400"
                >
                  Upwork Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400"
                >
                  <FaFacebookF size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400"
                >
                  <FaTwitter size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400"
                >
                  <FaInstagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-8 pt-4 border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Dhanushka Rathnayaka. All rights
              reserved.
            </p>
            <p className="text-sm mt-2 md:mt-0">
              Crafted with passion and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
