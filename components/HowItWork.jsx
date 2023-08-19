"use client";

import { Carousel } from "flowbite-react";
import React from "react";

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
      <h1 className=" text-primary2 text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight uppercase">
        How It Works
      </h1>
      <div className="section1">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 items-center">
        <div className="col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center">
            {boxs.map((box) => (
              <div key={box.id} className="relative">
                <div className="border-dashed border-primary1 border-4 p-4 rounded-lg relative w-full lg:h-full h-56">
                  <div className="font-bold text-xl absolute -top-5 -left-4 bg-primary1 text-white w-10 h-10 flex items-center justify-center rounded-full">
                    {box.id}
                  </div>
                  <h3 className="font-bold text-primary2 text-lg">
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
        <div className="col-span-1">
          <div className="mx-auto">
            <div className="bg-primary1 border border-primary1 text-white rounded-lg shadow-md p-6">
              <img
                src="image-url.jpg" // Replace with your image URL
                alt="Card Image"
                className="w-full h-32 object-cover rounded-md mb-4"
              />

              <p className="mt-2 text-center ">
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
