import React, { useEffect, useState } from "react";
import AutoTypedText from "../AutoType/AutoType";
import {
  FaDownload,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import toast from "react-hot-toast";
import HeroBtn from "../HeroBtn/HeroBtn";
import Pdf from "../../assets/DhanushkaRathnayaka_CV.pdf";

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["/hero01.jpg", "/hero02.jpg", "/hero03.jpg", "/hero04.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = Pdf; // Update this path to your CV file
    link.download = "DhanushkaRathnayaka_CV.pdf";
    link.click();
    toast.success("CV Downloaded Successfully!");
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Image Slideshow */}
      {images.map((image, index) => (
        <div
          key={index}
          style={{ backgroundImage: `url(${image})` }}
          className={`absolute w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            imageIndex === index ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      ))}

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <AutoTypedText />
        </h1>

        {/* Buttons Section */}
        <div className="mt-8 flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
          {/* Hire Me Button */}
          <button
            onClick={() =>
              (window.location.href = "mailto:your_email@example.com")
            }
          >
            <HeroBtn />
          </button>

          {/* Download CV Button */}
          <button
            onClick={handleCVDownload}
            className="bg-accent hover:bg-accent/50 text-white font-bold py-2 px-6 rounded-full flex items-center gap-2 transition-all transform hover:shadow-lg font-body cursor-pointer"
          >
            <FaDownload />
            Download CV
          </button>
        </div>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary duration-700"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Dhanuwa856"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary duration-700"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-secondary duration-700"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
