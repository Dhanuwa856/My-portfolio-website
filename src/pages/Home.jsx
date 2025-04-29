import React, { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import TitleTag from "../components/TitleTag/TitleTag";
import AboutSection from "../components/About/About";
import SkillSection from "../components/SkillSection/SkillSection";
import EducationSection from "../components/Education/Education";
import ProjectSlider from "../components/Projects/Projects";
import ContactSection from "../components/ContactSection/ContactSection";

const Home = ({ darkMode }) => {
  return (
    <>
      <Hero />
      <TitleTag sub_title="about me" id="about" />
      <AboutSection darkMode={darkMode} />
      <TitleTag sub_title="My Skills" id="skills" />
      <SkillSection darkMode={darkMode} />
      <TitleTag sub_title="education" id="education" />
      <EducationSection darkMode={darkMode} />
      <TitleTag sub_title="projects" id="projects" />
      <ProjectSlider darkMode={darkMode} />
      <TitleTag sub_title="contact me" id="contact" />
      <ContactSection darkMode={darkMode} />
    </>
  );
};

export default Home;
