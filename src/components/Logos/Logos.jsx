"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPython,
  SiPhp,
} from "react-icons/si";

export default function Logos() {
  const logos = [
    { icon: <SiJavascript />, name: "JavaScript", color: "#f7e11f" },
    { icon: <SiReact />, name: "React", color: "#1082a7" },
    { icon: <SiTailwindcss />, name: "TailwindCSS", color: "#3ebff8" },
    { icon: <SiNodedotjs />, name: "NodeJS", color: "#75a963" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#086e50" },
    { icon: <SiExpress />, name: "ExpressJS", color: "#383838" },
    { icon: <SiPython />, name: "Python", color: "#FACC15" },
    { icon: <SiPhp />, name: "PHP", color: "#7b7fb5" },
  ];

  return (
    <div className="grid grid-cols-4 sm:grid-cols-3 gap-8 justify-center items-center p-4">
      {logos.map((logo, idx) => (
        <motion.div
          key={idx}
          whileHover={{
            scale: 1.2,
            rotate: 10,
            boxShadow: `0px 0px 0px ${logo.color}`,
            filter: `drop-shadow(0 0 3px ${logo.color})`,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`text-4xl sm:text-8xl cursor-pointer w-fit h-fit`}
          style={{ color: logo.color }}
          title={logo.name}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          {logo.icon}
        </motion.div>
      ))}
    </div>
  );
}
