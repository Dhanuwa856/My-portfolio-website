"use client";

import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectSlider = ({ darkMode }) => {
  const projects = [
    {
      title: "AI Chatbot",
      image: "https://placehold.co/100",
      demoUrl: "https://demo.ai-chatbot.com",
      githubUrl: "https://github.com/username/ai-chatbot",
      slug: "ai-chatbot",
    },
    {
      title: "Personal Portfolio",
      image: "https://placehold.co/200",
      demoUrl: "https://yourportfolio.com",
      githubUrl: "https://github.com/username/portfolio",
      slug: "personal-portfolio",
    },
    {
      title: "E-commerce App",
      image: "https://placehold.co/300",
      demoUrl: "https://demo.ecommerce.com",
      githubUrl: "https://github.com/username/ecommerce-app",
      slug: "ecommerce-app",
    },
    {
      title: "Weather App",
      image: "https://placehold.co/400",
      demoUrl: "https://demo.weatherapp.com",
      githubUrl: "https://github.com/username/weather-app",
      slug: "weather-app",
    },
    {
      title: "Weather App",
      image: "https://placehold.co/500",
      demoUrl: "https://demo.weatherapp.com",
      githubUrl: "https://github.com/username/weather-app",
      slug: "weather-app",
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
        {projects.map((project, idx) => (
          <Card key={idx}>
            <ImageContainer>
              <img src={project.image} alt={project.title} />
              <Overlay>
                <IconButton href={project.demoUrl} target="_blank">
                  <FaExternalLinkAlt /> Demo
                </IconButton>
                <IconButton href={project.githubUrl} target="_blank">
                  <FaGithub /> GitHub
                </IconButton>
                <DetailButton>View More</DetailButton>
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

  .slick-dots li button:before {
    color: ${({ darkMode }) => (darkMode ? "#fff" : "#000")};
  }

  .slick-prev,
  .slick-next {
    width: 30px;
    height: 30px;
    z-index: 1;
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
    max-width: none;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: auto;
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
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: background 0.3s ease;
    font-family: var(--font-body);

    &:hover {
      background: var(--color-secondary);
    }
  }
`;

const IconButton = styled.a`
  font-size: 0.875rem;
`;

const DetailButton = styled.button`
  font-size: 0.875rem;
  cursor: pointer;
`;
