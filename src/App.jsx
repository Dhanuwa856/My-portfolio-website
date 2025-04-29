import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ProjectPage from "./pages/ProjectPage";
import ToggleBtn from "./components/ToggleBtn/ToggleBtn";
import Footer from "./components/Footer/Footer";

const App = () => {
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
      <Toaster position="bottom-center" reverseOrder={false} />
      <NavigationBar darkMode={darkMode} />
      <ToggleBtn darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/project" element={<ProjectPage darkMode={darkMode} />} />
      </Routes>
      <Footer darkMode={darkMode} />
    </>
  );
};

export default App;
