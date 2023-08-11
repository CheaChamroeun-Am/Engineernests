import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] sm-[100vh]">
      <div>
        <h1 className="text-center text-primary2 text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight uppercase">
          Unlock New Chances with
        </h1>
        <h1 className="text-center text-primary1 text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight uppercase">
          Engineernest
        </h1>
        <p className="text-center mt-10 text-primary2 text-lg md:text-xl lg:text-2xl xl:text-3xl whitespace-normal">
          Find Top Engineers for Side Jobs and Diverse Projects.
        </p>

        <div className="mt-20 flex justify-center flex-wrap gap-5">
          <button className="text-white rounded-md py-5 px-10 bg-[#3E64FF] hover:bg-[#2A48CC] transition-all duration-500 from-primary to-secondary hover:bg-blend-darken">
            Explore Side Jobs
          </button>
          <button className="border border-primary1 text-primary1 hover:bg-primary1 hover:text-white transition-colors duration-500 rounded-md py-5 px-10 ">
            Find Top Engineers
          </button>
        </div>
        <hr className="border-t-2 border-primary2 mt-16" />

        <div className="flex mt-20 2xl:gap-32 xl:gap-28 lg:gap-24 md:gap-20 sm:gap-14 gap-4 justify-center items-center">
          <div className="flex flex-col items-center gap-3">
            <h1 className=" text-center text-primary2 text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight uppercase">
              890 +
            </h1>
            <p className="text-center uppercase text-primary2 font-bold  text-[13px] md:text-base">Projects Done</p>
          </div>

          <div className="text-5xl 2xl:text-6xl text-primary2">|</div>

          <div className="flex flex-col items-center gap-3">
            <h1 className="text-center text-primary2 text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight uppercase">
              1000 +
            </h1>
            <p className="text-center uppercase text-primary2 font-bold text-[13px] md:text-base">Startups</p>
          </div>

          <div className="text-5xl 2xl:text-6xl text-primary2">|</div>

          <div className="flex flex-col items-center gap-3">
            <h1 className="text-center text-primary2 text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight uppercase">
              750 +
            </h1>
            <p className="text-center uppercase text-primary2 font-bold  text-[13px] md:text-base">TechExpertise</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
