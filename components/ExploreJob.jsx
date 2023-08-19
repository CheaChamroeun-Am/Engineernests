"use client";

import React from "react";

import { useState } from "react";

const ExploreJob = () => {
  const jobs = [
    {
      id: 1,
      title: "Diverse Projects, Unlimited Skills",
      img1: "./job1.png",
      img2: "./job1h.png",
    },
    {
      id: 2,
      title: "Flex Work, Limitless Possibilities",
      img1: "./job2.png",
      img2: "./job2h.png",
    },
    {
      id: 3,
      title: "Earn Income, Gain Expertise",
      img1: "./job3.png",
      img2: "./job3h.png",
    },
    {
      id: 4,
      title: "Networking Through Every Project",
      img1: "./job4.png",
      img2: "./job4h.png",
    },
  ];

  const [hoveredStates, setHoveredStates] = useState(jobs.map(() => false));

  const handleMouseEnter = (index) => {
    const updatedStates = [...hoveredStates];
    updatedStates[index] = true;
    setHoveredStates(updatedStates);
  };

  const handleMouseLeave = (index) => {
    const updatedStates = [...hoveredStates];
    updatedStates[index] = false;
    setHoveredStates(updatedStates);
  };

  return (
    <div className="section" id="explorejob">
      <h1 className=" text-primary2 text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight uppercase">
        Explore Jobs
      </h1>
      <div className="section1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="bg-white border border-primary3 rounded-lg shadow-md p-6 hover:bg-primary1 text-primary2 hover:text-white transition duration-500 ease-in-out"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="mx-auto">
                <img
                  src={hoveredStates[index] ? job.img2 : job.img1}
                  alt="job"
                  className={`mx-auto object-cover ${
                    hoveredStates[index]
                      ? " transition duration-500 ease-in-out"
                      : ""
                  }`}
                />
              </div>
              <h2 className="font-semibold text-center mt-6 px-10">
                {job.title}
              </h2>
              <div className="mx-auto mt-5">
                <img
                  src={
                    hoveredStates[index] ? "./linejob1h.png" : "./linejob1.png"
                  }
                  alt="line"
                  className={`mx-auto object-cover ${
                    hoveredStates[index]
                      ? " transition duration-500 ease-in-out"
                      : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <h2 className="font-bold text-primary2 text-xl">
            Start Your Engineering Journey
          </h2>
          <p className="text-primary2 mt-5">
            Step into Engineernest, not just a platform, but your springboard
            into a world of engineering possibilities. Begin today and
            experience how your skills can soar and your career can thrive like
            never before.
          </p>
          <div>
            <button className="bg-primary1 text-white px-6 py-2 rounded-lg mt-10">
              Being Your Adventure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreJob;
