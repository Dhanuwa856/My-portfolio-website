import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Hero from "./components/Hero/Hero";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false} />
      <NavigationBar />
      <Hero />
    </div>
  );
};

export default App;
