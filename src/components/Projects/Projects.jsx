"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Img_01 from "../../assets/projects/project01.png";
import Img_02 from "../../assets/projects/project02.png";
import Img_03 from "../../assets/projects/project03.png";
import Img_04 from "../../assets/projects/project04.png";
import Img_05 from "../../assets/projects/project05.png";
import Img_06 from "../../assets/projects/project06.png";
import Img_07 from "../../assets/projects/project07.png";

import P01S01 from "../../assets/projects/p01s01.png";
import P01S02 from "../../assets/projects/p01s02.png";
import P01S03 from "../../assets/projects/p01s03.png";
import P01S04 from "../../assets/projects/p01s04.png";
import P06S01 from "../../assets/projects/p06s01.png";
import P07S01 from "../../assets/projects/p07s01.png";
import P07S02 from "../../assets/projects/p07s02.png";
import P07S03 from "../../assets/projects/p07s03.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectSlider = ({ darkMode }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [activeCardId, setActiveCardId] = useState(null);

  const toggleCard = (id) => {
    setActiveCardId((prevId) => (prevId === id ? null : id));
  };

  const handleViewMore = (project) => {
    const fullProject = {
      ...project,
      screenshots: project.screenshots || project.ss_images || [],
    };
    navigate("/project", { state: { project: fullProject } });
  };

  const allProjects = [
    {
      id: 1,
      title: "Hotel Management System",
      image: Img_01,
      demoUrl: "https://hotel-booking-app-ebon-ten.vercel.app/",
      githubUrl: "https://github.com/Dhanuwa856/hotel-booking-frontend.git",
      description:
        "A comprehensive Hotel Management System using the MERN stack with user and admin features, real-time room booking, and responsive UI.",
      tags: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      category: "Web",
      screenshots: [P01S01, P01S02, P01S03, P01S04],
    },
    {
      id: 2,
      title: "Makaan Frontend",
      image: Img_02,
      demoUrl: "https://dhanuwa856.github.io/React-Dummy-Website-01/",
      githubUrl: "https://github.com/Dhanuwa856/React-Dummy-Website-01.git",
      description:
        "Responsive real estate landing page inspired by makaan.com.",
      tags: ["React", "CSS3", "Responsive Design"],
      category: "Web",
      screenshots: ["/screenshots/makaan-1.png", "/screenshots/makaan-2.png"],
    },
    {
      id: 3,
      title: "Education Platform UI",
      image: Img_03,
      demoUrl: "https://dhanuwa856.github.io/Education-Site-/",
      githubUrl: "https://github.com/Dhanuwa856/Education-Site-.git",
      description:
        "Frontend for an educational platform featuring courses and instructors.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "Web",
      screenshots: [
        "/screenshots/education-1.png",
        "/screenshots/education-2.png",
      ],
    },
    {
      id: 4,
      title: "Movie Search App",
      image: Img_04,
      demoUrl: "https://dhanuwa856.github.io/movie-details-app/",
      githubUrl: "https://github.com/Dhanuwa856/movie-details-app.git",
      description:
        "Search for movies using the OMDB API with detailed information view.",
      tags: ["React", "axios", "OMDB API", "JavaScript"],
      category: "Web",
      screenshots: ["/screenshots/movie-1.png", "/screenshots/movie-2.png"],
    },
    {
      id: 5,
      title: "Zillow Property Scraper",
      image: Img_05,
      demoUrl: "/",
      githubUrl: "https://github.com/dhanuwa856/real_estate",
      description:
        "Python web scraper that extracts 1000+ properties from Zillow (LA) using BeautifulSoup and Pandas.",
      tags: ["Python", "BeautifulSoup", "requests", "pandas"],
      category: "Python",
      screenshots: ["/screenshots/zillow-1.png", "/screenshots/zillow-2.png"],
    },
    {
      id: 6,
      title: "Python Hangman Game",
      image: Img_06,
      demoUrl: "/",
      githubUrl: "https://github.com/Dhanuwa856/python-hangman-game.git",
      description:
        "Random word selection 🎲, User input guessing 🎯, Hangman graphics based on incorrect guesses 🎨, Beginner-friendly Python project 📚",
      tags: ["Python", "pandas"],
      category: "Python",
      screenshots: [Img_06, P06S01],
    },
    {
      id: 7,
      title: "Titanic Data Analysis and Visualization",
      image: Img_07,
      demoUrl: "/",
      githubUrl: "https://github.com/Dhanuwa856/Titanic-Data-Analysis.git",
      description:
        "This project performs exploratory data analysis and visualization on the Titanic dataset using Python libraries like Pandas, NumPy, and Matplotlib.",
      tags: ["Python", "pandas", "numpy", "matplotlib"],
      category: "Python",
      screenshots: [Img_07, P07S01, P07S02, P07S03],
    },
  ];

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((project) => project.category === filter);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className={`py-10 px-4 `}>
      <div className="flex justify-center gap-4 mb-6 font-body">
        {["All", "Web", "Python"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-md text-white font-semibold transition duration-300 cursor-pointer ${
              filter === cat ? "bg-primary" : "bg-gray-500 hover:bg-secondary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <Slider {...settings}>
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className={`rounded-xl shadow-lg mx-3 overflow-hidden flex flex-col min-h-[375px] max-h-[460px] max-w-[95%] md:max-w-[350px] lg:max-w-[400px] ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
            }`}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div
                className={`
    absolute inset-0 bg-black bg-opacity-60 transition duration-300 flex items-center justify-center gap-2 flex-col font-body
    ${activeCardId === project.id ? "opacity-100" : "opacity-0"}
    md:opacity-0 md:hover:opacity-100
  `}
                onClick={() => toggleCard(project.id)}
              >
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-3 py-1 rounded-md flex items-center gap-1 hover:bg-secondary"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-3 py-1 rounded-md flex items-center gap-1 hover:bg-secondary"
                >
                  <FaGithub /> GitHub
                </a>
                <button
                  onClick={() => handleViewMore(project)}
                  className="bg-primary text-white px-3 py-1 rounded-md hover:bg-secondary cursor-pointer"
                >
                  View More
                </button>
              </div>
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow font-body">
              <div>
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm mb-2">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-primary text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
