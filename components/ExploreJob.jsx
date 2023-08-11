import React from "react";

const ExploreJob = () => {
  const jobs = [
    { id: 1, title: "Diverse Projects, Unlimited Skills" },
    { id: 2, title: "Flex Work, Limitless Possibilities" },
    { id: 3, title: "Earn Income, Gain Expertise" },
    { id: 4, title: "Networking Through Every Project" },
  ];

  

  return (
    <div className="section">
      <h1 className=" text-primary2 text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight uppercase">
        Explore Jobs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-primary1 rounded-lg shadow-md p-6"
          >
            <img
              src="image-url.jpg" // Replace with your image URL
              alt="Card Image"
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h2 className="font-semibold text-primary2 text-center">
              {job.title}
            </h2>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <h2 className="font-bold text-primary2 text-xl">
          Start Your Engineering Journey
        </h2>
        <p className="text-primary2 mt-5">
          Step into Engineernest, not just a platform, but your springboard into
          a world of engineering possibilities. Begin today and experience how
          your skills can soar and your career can thrive like never before.
        </p>
        <div>
          <button className="bg-primary1 text-white px-6 py-2 rounded-lg mt-10">
            Being Your Adventure
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreJob;
