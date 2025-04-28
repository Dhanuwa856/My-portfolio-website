"use client";

import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaGraduationCap, FaCode, FaBook, FaUniversity } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";

const EducationSection = ({ darkMode }) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const educationData = [
    {
      icon: <FaGraduationCap />,
      title: "Computer Science Degree",
      institution: "Harvard University",
      period: "2024 - Now",
      description:
        "Studying core areas of computer science, including AI, databases, and cybersecurity.",
      points: [
        "Algorithms & Data Structures",
        "Machine Learning basics",
        "Software Engineering principles",
        "AI Development With Python",
      ],
    },
    {
      icon: <FaCode />,
      title: "Full Stack Web Development",
      institution: "Skyrek Pvt Ltd",
      period: "2024",
      description:
        "Hands-on training with modern web development technologies and project management.",
      points: [
        "React & Node.js projects",
        "API Integration",
        "Agile Development",
      ],
    },
    {
      icon: <FaBook />,
      title: "Basics and Principles of Programming",
      institution: "Udemy",
      period: "2023 - 2024",
      description:
        "Understanding the fundamental principles behind programming languages and logic building.",
      points: ["Problem Solving", "OOP Concepts", "Version Control (Git)"],
    },
    {
      icon: <FaUniversity />,
      title: "School Education",
      institution: "Diyathilaka Central College",
      period: "2020 - 2023 (A/L)",
      description:
        "Completed advanced level studies with a focus on Physical Science subjects.",
      points: ["Mathematics", "Physics", "Chemistry", "General English"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setActiveIndex((prev) =>
              prev < educationData.length - 1 ? prev + 1 : prev
            );
          }, 800);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const progressHeight = (activeIndex / (educationData.length - 1)) * 100;

  return (
    <StyledEducation ref={containerRef}>
      <div className="container">
        {/* Timeline with icons */}
        <div className="timeline">
          {educationData.map((_, i) => (
            <div
              key={i}
              className={`timeline-icon ${i <= activeIndex ? "active" : ""}`}
              style={{ top: `${(i * 100) / (educationData.length - 1)}%` }}
            >
              <div className="icon-wrapper bg-primary">
                {educationData[i].icon}
              </div>
            </div>
          ))}
          <div
            className="progress-line"
            style={{ height: `${progressHeight}%` }}
          />
        </div>

        {/* Education Items */}
        <div className="education-items">
          {educationData.map((item, i) => (
            <div
              key={i}
              className={`education-item bg-gray-100 hover:bg-secondary duration-700 group ${
                i <= activeIndex ? "active" : ""
              } ${darkMode ? "bg-gray-800" : "bg-white"}`}
              style={{ top: `${(i * 100) / (educationData.length - 1)}%` }}
            >
              <h3 className="font-header text-2xl sm:text-3xl font-semibold text-secondary/90 group-hover:text-white duration-700 mb-1">
                {item.title}
              </h3>
              <p
                className={`font-body text-lg group-hover:text-white duration-700 mb-1 ${
                  darkMode ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {item.institution}
              </p>
              <p
                className={`font-body text-gray-400 text-base group-hover:text-white duration-700 mb-3`}
              >
                {item.period}
              </p>
              <p
                className={`font-body text-sm group-hover:text-gray-200 duration-700 mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {item.description}
              </p>
              <ul className="list-disc ml-5 space-y-1">
                {item.points.map((point, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center gap-2 text-sm group-hover:text-gray-200 duration-700 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <BsStarFill className="text-yellow-400 text-xs" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </StyledEducation>
  );
};

// Animations
const popIn = keyframes`
  0% { transform: scale(0); }
  90% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`;

const moveGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Styled Components
const StyledEducation = styled.div`
  padding: 2rem 0 8rem;
  min-height: 100vh;
  display: flex;
  align-items: center;

  .container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    height: 900px;
  }

  .timeline {
    position: absolute;
    left: 50%;
    height: 100%;
    width: 4px;
    transform: translateX(-50%);
    background: #e5e7eb;

    .progress-line {
      position: absolute;
      top: 0;
      width: 100%;
      background: linear-gradient(270deg, #4f46e5, #9333ea, #ec4899);
      background-size: 600% 600%;
      animation: ${moveGradient} 4s ease infinite;
      transition: height 0.8s ease-out;
    }

    .timeline-icon {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;

      .icon-wrapper {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.6rem;
        background: #4f46e5;
        opacity: 0;
        animation: ${popIn} 0.5s forwards;
      }

      &.active .icon-wrapper {
        opacity: 1;
      }
    }
  }

  .education-items {
    position: relative;
    height: 100%;

    .education-item {
      position: absolute;
      width: 40%;
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
      opacity: 0;
      transform: translateX(-30px);
      transition: 0.5s;

      &.active {
        opacity: 1;
        transform: translateX(0);
        animation: ${slideIn} 0.5s forwards;
      }

      &:nth-child(even) {
        left: 55%;
      }
      &:nth-child(odd) {
        right: 55%;
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      height: auto;
      padding: 2rem;
    }

    .timeline {
      display: none;
    }

    .education-items .education-item {
      width: 100%;
      position: static;
      margin-bottom: 2rem;
      transform: none !important;

      &:nth-child(even),
      &:nth-child(odd) {
        left: auto;
        right: auto;
      }
    }
  }
`;

export default EducationSection;
