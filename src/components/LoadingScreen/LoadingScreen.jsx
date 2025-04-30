// components/LoadingScreen.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../Loader/Loader";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      document.fonts.ready.then(() => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.classList.remove("loading");
        }, 2000); // Minimum 2 seconds
      });
    };

    // Initial setup
    document.body.classList.add("loading");

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Fallback timeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove("loading");
    }, 4000);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <LoadingOverlay>
      <Loader />
    </LoadingOverlay>
  );
};

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const LoadingText = styled.div`
  margin-top: 20px;
  font-size: 1.2rem;
  color: var(--color-primary);
  font-family: var(--font-body);
`;

export default LoadingScreen;
