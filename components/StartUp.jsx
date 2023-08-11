import React from "react";

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

  return (
    <div className="bg-primary1 mt-32 p-5">
      <div className="px-6 mx-auto container pt-10">
        <h1 className=" text-white text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight uppercase">
          For Startup
        </h1>
        <h3 className="font-bold text-white text-center mt-20">
          Find the Right Engineering Talent!
        </h3>
        <hr className="border-t-2 border-white mt-5" />
        <p className="text-white text-center mt-5">
          Hiring skilled engineering talent for your startup has never been
          easier. Discover how Engineernest can help you connect with top
          engineers for your projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {startups.map((startup) => (
            <div key={startup.id} className="bg-white border border-primary1 rounded-lg shadow-md p-6">
              <img
                src="image-url.jpg" // Replace with your image URL
                alt="Card Image"
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h2 className="font-semibold text-primary2">Title</h2>
              <p className="mt-2">Description</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StartJob;
