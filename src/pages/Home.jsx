import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import Hero from "../components/Hero/Hero";
import ToggleBtn from "../components/ToggleBtn/ToggleBtn";
import TitleTag from "../components/TitleTag/TitleTag";
import AboutSection from "../components/About/About";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Logos from "../components/Logos/Logos";
import SkillSection from "../components/SkillSection/SkillSection";

const Home = () => {
  // centralize darkMode + localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    // body background
    document.body.style.backgroundColor = darkMode ? "#111" : "#fff";
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);
  return (
    <>
      <NavigationBar darkMode={darkMode} />
      <Hero />
      <ToggleBtn darkMode={darkMode} setDarkMode={setDarkMode} />
      <TitleTag sub_title="about me" id="about" />
      <AboutSection darkMode={darkMode} />
      <TitleTag sub_title="My Skills" id="skills" />
      <SkillSection />
    </>
  );
};

export default Home;
