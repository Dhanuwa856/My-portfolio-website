import React, { useState } from "react";
import { motion } from "framer-motion";
import NavBarLink from "../NavBarLink/NavBarLink";
import { FiCopy } from "react-icons/fi";
import toast from "react-hot-toast";
import Switch from "../MenuIcon/MenuIcon";
import { Link } from "react-router-dom";

const NavigationBar = ({ darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("pdhanushka856@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // conditional classes
  const wrapperClasses = `
    ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-700"}
    lg:mt-2 p-3 flex justify-between z-[100] fixed top-0 w-full
    lg:bg-transparent lg:shadow-none
  `;

  const linkContainerClasses = `
    ${isMenuOpen ? "flex" : "hidden"} lg:flex lg:items-center lg:gap-8
    ${darkMode ? "bg-gray-800" : "bg-white"} w-[60%] lg:w-fit
    absolute lg:relative top-16 lg:top-auto right-2 lg:left-auto
    flex-col lg:flex-row p-4 lg:px-3 lg:py-2 shadow-lg rounded-lg lg:rounded-[70px]
    text-center gap-2
  `;

  const copyBtnClasses = `
    hidden lg:flex items-center space-x-2 cursor-pointer
    ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"}
    w-fit px-3 py-2 rounded-[70px] shadow-md text-sm font-body
    hover:${darkMode ? "text-yellow-300" : "text-primary"} duration-1000
  `;

  return (
    <div className={wrapperClasses}>
      {/* Available Button */}
      <div
        className={`flex items-center gap-2 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } w-fit px-3 py-2 rounded-[70px] shadow-md`}
      >
        <div className="relative flex items-center justify-center">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <motion.div
            className="absolute w-3 h-3 border-4 border-accent/60 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="text-sm font-body lowercase">
          available for projects
        </div>
      </div>

      {/* Hamburger for Mobile */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className={darkMode ? "text-white" : "text-gray-700"}
        >
          <Switch isChecked={isMenuOpen} onToggle={toggleMenu} />
        </button>
      </div>

      {/* Links */}
      <div className={linkContainerClasses}>
        <div className="flex justify-center lg:justify-start mb-4 lg:mb-0">
          <Link to="/">
            <img
              src="/logo_new.jpg"
              alt="Logo"
              className="w-8 h-8 rounded-full shadow-lg cursor-pointer"
            />
          </Link>
        </div>
        <NavBarLink link_name="home" link_url="#" darkMode={darkMode} />
        <NavBarLink link_name="about" link_url="#about" darkMode={darkMode} />
        <NavBarLink link_name="skills" link_url="#skills" darkMode={darkMode} />
        <NavBarLink
          link_name="education"
          link_url="#education"
          darkMode={darkMode}
        />
        <NavBarLink
          link_name="projects"
          link_url="#projects"
          darkMode={darkMode}
        />
        <NavBarLink
          link_name="contact"
          link_url="#contact"
          darkMode={darkMode}
        />
      </div>

      {/* Email Copy for Desktop */}
      <div className={copyBtnClasses} onClick={handleCopy}>
        <FiCopy className={darkMode ? "text-gray-300" : "text-gray-600"} />
        <div>pdhanushka856@gmail.com</div>
      </div>
    </div>
  );
};

export default NavigationBar;
