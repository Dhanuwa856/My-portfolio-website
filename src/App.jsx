import React from "react";
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
