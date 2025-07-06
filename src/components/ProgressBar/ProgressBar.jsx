"use client";

import { useEffect, useRef, useState } from "react";

export default function ProgressBar({ darkMode }) {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  const skills = [
    { name: "JavaScript", color: "bg-[#f7e11f]", value: 80 },
    { name: "React", color: "bg-[#1082a7]", value: 75 },
    { name: "TailwindCSS", color: "bg-[#3ebff8]", value: 85 },
    { name: "NodeJS", color: "bg-[#75a963]", value: 70 },
    { name: "MongoDB", color: "bg-[#086e50]", value: 60 },
    { name: "ExpressJS", color: "bg-[#383838]", value: 75 },
    { name: "Python", color: "bg-highlight", value: 85 },
    { name: "PHP", color: "bg-[#7b7fb5]", value: 40 },
  ];

  // Track displayed percentage for each skill
  const [displayedValues, setDisplayedValues] = useState(skills.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Animate count up when inView becomes true
  useEffect(() => {
    if (!inView) return;

    skills.forEach((skill, idx) => {
      const target = skill.value;
      const duration = 1000; // total duration in ms
      const stepTime = 50; // update interval ms
      const steps = Math.ceil(duration / stepTime);
      const increment = Math.ceil(target / steps);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setDisplayedValues((prev) => {
          const next = [...prev];
          next[idx] = current;
          return next;
        });
      }, stepTime);
    });
  }, [inView]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-2xl mx-auto my-12 space-y-8 px-4"
    >
      {skills.map((skill, idx) => {
        const filledCount = Math.floor(skill.value / 10);
        return (
          <div key={idx}>
            <div className="flex justify-between mb-1">
              <span
                className={`text-sm font-body ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                {skill.name}
              </span>
              <span className="text-sm font-bold text-primary">
                {displayedValues[idx]}%
              </span>
            </div>

            <div className="flex">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-2 mx-0.5 rounded transition-colors duration-500 ease-out ${
                    inView && i < Math.floor(displayedValues[idx] / 10)
                      ? skill.color
                      : "bg-gray-200"
                  }`}
                  style={{
                    transitionDelay: inView ? `${i * 100}ms` : "0ms",
                  }}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
