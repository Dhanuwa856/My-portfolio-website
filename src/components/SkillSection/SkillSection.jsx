"use client";

import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import Logos from "../Logos/Logos";

export default function SkillSection({ darkMode }) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
        {/* Left: Progress Bars */}
        <div className="w-full md:w-1/2">
          <ProgressBar darkMode={darkMode} />
        </div>

        {/* Right: Tech Logos */}
        <div className="w-full md:w-1/2">
          <Logos />
        </div>
      </div>
    </section>
  );
}
