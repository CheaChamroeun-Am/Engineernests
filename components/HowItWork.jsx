"use client";

import { Carousel } from "flowbite-react";
import React from "react";
import "./style.css";

const HowItWork = () => {
  const boxs = [
    {
      id: 1,
      title: "CREATE PROFILE",
      description:
        " Engineers, sign up and create your profile. Showcase your skills, expertise, and past projects.",
    },
    {
      id: 2,
      title: "POST PROJECT",
      description:
        "Startups, post your projects with project details, required skills, and compensation.",
    },
    {
      id: 3,
      title: "BROWSE",
      description:
        "Startups can browse through engineer profiles, while engineers can explore available projects that match their skills.",
    },
    {
      id: 4,
      title: "CONNECT & COLLABORATE",
      description:
        "Startups can browse through engineer profiles, while engineers can explore available projects that match their skills.",
    },
  ];

  return (
    <div className="section" id="howitwork">
      <h1
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-primary2 text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight uppercase"
      >
        How It Works
      </h1>
      <div className="section1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 items-center">
          <div className="col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center">
              {boxs.map((box, index) => (
                <div
                  key={box.id}
                  className={`relative ${index >= 2 ? "mt-0 lg:mt-10" : ""}`}
                >
                  <div className="border-dashed-customized mx-auto border-primary3 rounded-2xl relative w-[90%] 2xl:h-[150px] xl:h-[195px] lg:h-[270px] md:h-[165px] sm:h-[165px] h-full">
                    <div className="font-bold text-xl absolute -top-6 -left-6 bg-primary3 text-white w-14 h-14 flex items-center justify-center rounded-full">
                      {box.id}
                    </div>
                    <h3 className="font-bold howitworks-title text-primary2 text-lg">
                      {box.title}
                    </h3>
                    <p className="text-primary2 text-sm mt-5">
                      {box.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 mx-auto">
            <div>
              <div className="bg-primary3 border border-primary1 text-white rounded-lg shadow-md h-[400px] w-[300px] md:w-[250px]  p-6">
                <img
                  src="./howitwork.png" // Replace with your image URL
                  alt="Card Image"
                  className="w-24 h-24 object-cover rounded-md mb-4 mt-10 mx-auto"
                />

                <p className="mt-10 text-center ">
                  Engineers + Startups: Fueling Growth Together
                </p>
                <div className="text-center mt-10">
                  <button className="text-primary1 shadow-lg rounded-md py-1 px-2 bg-white transition-all duration-500 from-primary to-secondary hover:bg-blend-darken">
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
