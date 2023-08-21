"use client";
import React from "react";
import { useState, useEffect } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./style.css";

const About = () => {
  const textData = [
    {
      header: "Our Mission",
      body: "To bridge the gap between exceptional engineering talent and innovative startups, empowering both to thrive collaboratively in a dynamic ecosystem. We provide a seamless platform that fosters connections, fuels creativity, and accelerates progress, transforming visions into reality.",
    },
    {
      header: "Our Vision",
      body: "To revolutionize the way engineers and startups intersect, creating a global network of collaborative partnerships that fuel groundbreaking innovations. Our vision is to be the catalyst for sustainable growth, where every engineer and startup can unlock their full potential and reshape industries.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState(
    "transition-opacity duration-500 opacity-100"
  );

  const abouts = [
    { id: 1, image: "./about1.png" },
    { id: 2, image: "./about2.png" },
    { id: 3, image: "./about3.png" },
    { id: 4, image: "./about4.png" },
  ];

  const handleNext = () => {
    setAnimationClass("opacity-0"); // Trigger fade-out animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textData.length);
      setAnimationClass("transition-opacity duration-500 opacity-100"); // Fade-in animation
    }, 500); // Adjust the delay as needed
  };

  const handlePrevious = () => {
    setAnimationClass("opacity-0"); // Trigger fade-out animation
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + textData.length) % textData.length
      );
      setAnimationClass("transition-opacity duration-500 opacity-100"); // Fade-in animation
    }, 500); // Adjust the delay as needed
  };

  const currentText = textData[currentIndex];

  return (
    <div className="section" id="about">
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-primary2 text-center text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight uppercase"
      >
        Our story
      </h1>
      <div
        className="flex justify-center mt-5"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <hr className="story-hr mb-10 border-t-4 border-primary2 w-[10%]"></hr>
      </div>

      <div className="relative">
        <div className="absolute top-0 right-0 w-72 h-[470px] bg-primary1 z-0 hidden lg:block"></div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20 z-10 relative w-[92%]">
          {abouts.map((about) => (
            <div
              key={about.id}
              className="shadow-md p-5 rounded-xl bg-white hover:shadow-xl transition-all duration-500"
            >
              <img
                src={about.image}
                alt="test"
                className="rounded-xl object-cover w-[60%] mx-auto"
              />
            </div>
          ))}
        </div>

        {/* Vision and Mission */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 z-10 relative">
          <div>
            <div
              className={`text-2xl font-bold mb-2 text-primary2 title-v-m ${animationClass}`}
            >
              {currentText.header}
            </div>
            <div className={`text-primary2 ${animationClass}`}>
              <p>{currentText.body}</p>
            </div>
          </div>

          <div>
            <hr className="story-hr mb-10 border-t-4 border-primary3 w-[84%]"></hr>

            <div className="flex gap-5">
              <span onClick={handlePrevious} className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  width="1.5em"
                  viewBox="0 0 320 512"
                  className="icon cursor-pointer"
                >
                  <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
              </span>

              <span onClick={handleNext} className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.5em"
                  width="1.5em"
                  viewBox="0 0 320 512"
                  className="icon cursor-pointer"
                >
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
