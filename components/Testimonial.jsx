"use client";

import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { testimonials, services } from "../data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import "./style.css";
import { motion } from "framer-motion";

const Testimonial = () => {
  

  const settings = {
    dots: true,
    infinite: true, // Set this to true to enable looping
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          {" "}
          <GrCaretNext />{" "}
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow">
          {" "}
          <GrCaretPrevious />{" "}
        </div>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true, // Set this to true to enable looping
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true, // Set this to true to enable looping
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true, // Set this to true to enable looping
          dots: true,
        },
      },
    ],
  };

  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="section">
      <p className="text-primary1 text-center font-bold">Testimonial</p>
      <h4 className="text-primary2 text-lg text-center font-bold">
        What Our Clients Say About Us
      </h4>

      <div className="mt-10">
        <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 mt-16 md:px-0">
          <Slider {...settings} className="px-5">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <div className="mr-2 bg-white border border-primary1 rounded-lg shadow-md p-6">
                  <BiSolidQuoteLeft className="text-primary1 text-2xl" />
                  <p>{testimonial.review}</p>
                  <div className="grid grid-cols-2 gap-2 items-center mt-7">
                    <div className="flex flex-col gap-1">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-primary1">{testimonial.position}</p>
                    </div>
                    <div>
                      <img
                        src={testimonial.image}
                        className="w-20 h-20 rounded-full mx-auto border-4 border-primary1"
                        alt="testimonial1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2 mt-20"
        >
          {services.map((service, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={service.icon} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>

      {/* <div className="mt-20">
        <div className="grid grid-cols-3 md:grid-cols-5">
          {services.map((service) => (
            <div key={service.id}>
              <img
                src={service.icon}
                className="w-20 h-20 mx-auto"
                alt="testimonial1"
              />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Testimonial;
