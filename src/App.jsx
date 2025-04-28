import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Hero from "./components/Hero/Hero";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Home />
    </>
  );
};

export default App;
