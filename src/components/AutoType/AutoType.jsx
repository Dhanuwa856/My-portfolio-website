import React, { useEffect, useState } from "react";

const AutoTypedText = () => {
  const strings = [
    "welcome to my portfolio",
    "Hi, I'm Dhanushka Rathnayaka",
    "A Passionate Programmer",
    "Creative Designer",
    "Web Developer",
    "Turning Ideas into Reality",
    "Let's Build Something Amazing Together",
  ];

  const typingSpeed = 400; // Speed of typing in ms
  const erasingSpeed = 50; // Speed of erasing in ms
  const delayBetweenStrings = 5000; // Delay before switching to the next string

  const [currentText, setCurrentText] = useState(""); // Displayed text
  const [stringIndex, setStringIndex] = useState(0); // Current string index
  const [charIndex, setCharIndex] = useState(0); // Current character index
  const [isTyping, setIsTyping] = useState(true); // Whether it's typing or erasing

  useEffect(() => {
    const typingInterval = setInterval(
      () => {
        if (isTyping) {
          // Typing
          if (charIndex < strings[stringIndex].length) {
            setCurrentText((prev) => prev + strings[stringIndex][charIndex]);
            setCharIndex((prev) => prev + 1);
          } else {
            // Finished typing, wait before erasing
            setIsTyping(false);
            clearInterval(typingInterval);
          }
        } else {
          // Erasing
          if (charIndex > 0) {
            setCurrentText((prev) => prev.slice(0, -1));
            setCharIndex((prev) => prev - 1);
          } else {
            // Finished erasing, move to the next string
            setIsTyping(true);
            setStringIndex((prev) => (prev + 1) % strings.length); // Cycle strings
            clearInterval(typingInterval);
          }
        }
      },
      isTyping ? typingSpeed : erasingSpeed
    );

    return () => clearInterval(typingInterval); // Cleanup
  }, [charIndex, isTyping, stringIndex]);

  useEffect(() => {
    // Add a delay before starting to erase
    if (!isTyping) {
      const delayTimeout = setTimeout(
        () => setIsTyping(false),
        delayBetweenStrings
      );
      return () => clearTimeout(delayTimeout);
    }
  }, [isTyping]);

  return (
    <div className="text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold font-header inline-block">
        {currentText}
        <span className="ml-1 text-primary animate-blink">|</span>{" "}
        {/* Cursor */}
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
