"use client";

import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Img_01 from "../../assets/projects/project01.png";
import Img_02 from "../../assets/projects/project02.png";
import Img_03 from "../../assets/projects/project03.png";
import Img_04 from "../../assets/projects/project04.png";
import Img_05 from "../../assets/projects/project05.png";

import P01S01 from "../../assets/projects/p01s01.png";
import P01S02 from "../../assets/projects/p01s02.png";
import P01S03 from "../../assets/projects/p01s03.png";
import P01S04 from "../../assets/projects/p01s04.png";

const ProjectSlider = ({ darkMode }) => {
  const navigate = useNavigate();

  const handleViewMore = (project) => {
    const fullProject = {
      ...project,
      screenshots: project.screenshots || project.ss_images || [],
    };
    navigate("/project", { state: { project: fullProject } });
  };

  const projects = [
    {
      id: 1,
      title: "Hotel Management System",
      image: Img_01,
      demoUrl: "https://hotel-booking-app.vercel.app/",
      githubUrl: "https://github.com/Dhanuwa856/hotel-booking-frontend.git",
      description:
        "A comprehensive Hotel Management System built with the MERN stack (MongoDB, Express, React, Node.js). This application enables users to browse available hotel rooms, view detailed room information, and make bookings with real-time availability checks. Admins can log in to manage room inventory, view customer bookings, and update room details. The frontend is styled using TailwindCSS, ensuring a responsive and modern design. It also includes features like search filters, user authentication, and booking confirmation emails, offering a complete hotel booking experience.",

      tags: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      screenshots: [P01S01, P01S02, P01S03, P01S04],
    },
    {
      id: 2,
      title: "Makaan Frontend Development",
      image: Img_02,
      demoUrl: "https://dhanuwa856.github.io/React-Dummy-Website-01/",
      githubUrl: "https://github.com/Dhanuwa856/React-Dummy-Website-01.git",
      description:
        "Responsive real estate landing page inspired by makaan.com.",
      tags: ["React", "CSS3", "Responsive Design"],
      screenshots: ["/screenshots/makaan-1.png", "/screenshots/makaan-2.png"],
    },
    {
      id: 3,
      title: "Education Site Frontend",
      image: Img_03,
      demoUrl: "https://dhanuwa856.github.io/Education-Site-/",
      githubUrl: "https://github.com/Dhanuwa856/Education-Site-.git",
      description:
        "Frontend for an educational platform with courses and instructors.",
      tags: ["HTML", "CSS", "JavaScript"],
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
      description: "Search movies using the OMDB API and view detailed info.",
      tags: ["React", "axios", "omdbapi", "JavaScript"],
      screenshots: ["/screenshots/movie-1.png", "/screenshots/movie-2.png"],
    },
    {
      id: 5,
      title: "Zillow.com Scraper",
      image: Img_05,
      demoUrl: "/",
      githubUrl: "https://github.com/dhanuwa856/real_estate",
      description:
        "Python scraper that exports 1000 properties from Zillow (Downtown LA).",
      tags: ["Python", "BeautifulSoup", "requests", "pandas"],
      screenshots: ["/screenshots/zillow-1.png", "/screenshots/zillow-2.png"],
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <SliderWrapper darkMode={darkMode}>
      <Slider {...settings}>
        {projects.map((project) => (
          <Card
            key={project.id}
            as={motion.div}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 20,
              duration: 0.1,
            }}
          >
            <ImageContainer>
              <img src={project.image} alt={project.title} />
              <Overlay>
                <IconButton href={project.demoUrl} target="_blank">
                  <FaExternalLinkAlt /> Demo
                </IconButton>
                <IconButton href={project.githubUrl} target="_blank">
                  <FaGithub /> GitHub
                </IconButton>
                <DetailButton onClick={() => handleViewMore(project)}>
                  View More
                </DetailButton>
              </Overlay>
            </ImageContainer>
          </Card>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default ProjectSlider;

// Styled Components

const SliderWrapper = styled.div`
  padding: 2rem;
  background-color: ${({ darkMode }) => (darkMode ? "#111" : "#fff")};

  .slick-prev,
  .slick-next {
    z-index: 1;
    width: 30px;
    height: 30px;
    &::before {
      font-size: 25px;
      color: ${({ darkMode }) => (darkMode ? "#aaa" : "#333")};
    }
  }

  .slick-prev {
    left: -30px;
  }

  .slick-next {
    right: -30px;
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  max-width: 300px;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  a,
  button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background: var(--color-primary);
    color: #fff;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: var(--color-secondary);
    }
  }
`;

const IconButton = styled.a``;

const DetailButton = styled.button``;
