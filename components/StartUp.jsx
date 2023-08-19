"use client";

import { useState, useEffect } from "react";

import { portfolio } from "../data/data";

const StartJob = () => {
  const startups = [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
      image: "image-url.jpg",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      image: "image-url.jpg",
    },
    {
      id: 3,
      title: "Title 3",
      description: "Description 3",
      image: "image-url.jpg",
    },
  ];

  const [portfolioList, setPortfolioList] = useState([]);
  const [portfolioListOrg, setPortfolioListOrg] = useState([]);

  useEffect(() => {
    setPortfolioList(portfolio);
    setPortfolioListOrg(portfolio);
  }, []);

  const filterPortfolio = (type) => {
    console.log(type);
    if (type === "All") {
      setPortfolioList(portfolioListOrg);
    } else {
      const result = portfolioListOrg.filter((item) => item.type === type);
      setPortfolioList(result);
      console.log(result);
    }
  };

  return (
    <div className="bg-primary1 mt-32 p-5 pt-10 pb-20" id="startup">
      <div className="px-6 mx-auto container pt-10">
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          className=" text-white text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight uppercase"
        >
          For Startup
        </h1>
        <div className="section1">
          <div className="text-center mt-20">
            <h3 className="font-bold text-white">
              <span
                style={{ backgroundColor: "#483EB5" }}
                className="px-2 py-1"
              >
                Find the Right Engineering Talent!
              </span>
            </h3>
          </div>
          <hr className="border-t-2 border-white mt-5" />
          <p className="text-white text-center mt-5">
            Hiring skilled engineering talent for your startup has never been
            easier. Discover how Engineernest can help you connect with top
            engineers for your projects.
          </p>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {startups.map((startup) => (
              <div
                key={startup.id}
                className="bg-white border border-primary1 rounded-lg shadow-md p-6"
              >
                <img
                  src="image-url.jpg" // Replace with your image URL
                  alt="Card Image"
                  className="w-full h-32 object-cover rounded-md mb-4"
                />
                <h2 className="font-semibold text-primary2">Title</h2>
                <p className="mt-2">Description</p>
              </div>
            ))}
          </div> */}

          <div className="mt-10 flex flex-row justify-evenly gap-2 px-4 md:px-72">
            <button
              onClick={() => filterPortfolio("All")}
              className="border-white border-2 
            text-white focus:text-white
            active:bg-primary3 p-1 px-4 rounded-md
            focus:ring-white focus:bg-primary3 focus:ring "
            >
              All
            </button>
            <button
              onClick={() => filterPortfolio("ui/ux")}
              className="border-white border-2 
            text-white focus:text-white
            active:bg-primary3 p-1 px-4 rounded-md
            focus:ring-white focus:bg-primary3 focus:ring "
            >
              UI/UX
            </button>
            <button
              onClick={() => filterPortfolio("website")}
              className="border-white border-2 
            text-white focus:text-white
            active:bg-primary3 p-1 px-4 rounded-md
            focus:ring-white focus:bg-primary3 focus:ring "
            >
              Web App
            </button>
            <button
              onClick={() => filterPortfolio("mobile")}
              className="border-white border-2 
            text-white focus:text-white
            active:bg-primary3 p-1 px-4 rounded-md
            focus:ring-white focus:bg-primary3 focus:ring "
            >
              Mobile App
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 items-center content-center md:grid-cols-2 lg:grid-cols-4 mt-10">
            {portfolioList.map((item, index) => (
              <div
                key={item.id}
                className="p-2 flex flex-col m-2 rounded-lg bg-purple-100
                transition-all duration-500 ease-in-out group hover:scale-110"
              >
                <img
                  src={item.imageUrl}
                  className="h-[180px] object-cover rounded-lg"
                />
                <h1 className="project-title text-[14px] group-hover:scale-110 mt-2 text-center  font-bold">
                  {item.title}
                </h1>
                <h1 className="project-desc text-[12px] text-gray-500 pb-3">{item.desc}</h1>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button className="text-primary1 shadow-lg rounded-md py-1 px-2 md:px-4 bg-white transition-all duration-500 from-primary to-secondary hover:bg-blend-darken">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartJob;
