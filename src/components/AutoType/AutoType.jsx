import React, { useEffect, useState } from "react";

const AutoTypedText = () => {
  const strings = [
    "Welcome to my portfolio",
    "Hi, I'm Dhanushka Rathnayaka",
    "A Passionate Programmer",
    "Creative Designer",
    "Web Developer",
    "Turning Ideas into Reality",
    "Let's Build Something Amazing Together",
  ];

  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenStrings = 2000;

  const [currentText, setCurrentText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (charIndex < strings[stringIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText((prev) => prev + strings[stringIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayBetweenStrings);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, erasingSpeed);
      } else {
        setIsTyping(true);
        setStringIndex((prev) => (prev + 1) % strings.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, stringIndex]);

  return (
    <div className="text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold font-header inline-block">
        {currentText}
        <span className="ml-1 text-primary animate-blink">|</span>
      </h1>
      <style>
        {`
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
          @keyframes blink {
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AutoTypedText;
