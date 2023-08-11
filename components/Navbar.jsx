"use client"

import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);

  const handleNav = () => {
    setToggle(!toggle);
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <div
      className={`${
        active ? "shadow-lg bg-primary1" : ""
      } sticky w-full top-0 left-0 z-20`}
    >
      <div
        className={`${
          active ? "py-4 transition-all duration-300" : "py-4"
        } w-full bg-primary1 min-h-[50px] flex justify-between text-white items-center`}
      >
        <div className="px-4 text-xl text-Teal uppercase tracking-wide font-bold">
          Logo
        </div>

        <ul className="md:flex gap-4 px-4 hidden transition-all duration-300">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#gallery">Explore Job</a>
          </li>
          <li>
            <a href="#deals">For Startups</a>
          </li>
          <li>
            <a href="#contact">How it Works</a>
          </li>
          <li>
            <a href="#contact">FAQs</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-5 mr-2">
          <button className="text-primary1 shadow-lg rounded-md py-1 px-2 bg-white transition-all duration-500 from-primary to-secondary hover:bg-blend-darken">
            Login
          </button>

          <button className="text-primary1 shadow-lg rounded-md py-1 px-2 bg-white transition-all duration-500 from-primary to-secondary hover:bg-blend-darken">
            Signup
          </button>

          {/* Hamburger Icon */}
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            className="md:hidden z-10"
          >
            <FaBars size={25} className="mr-4 text-Teal cursor-pointer" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          onClick={handleNav}
          className={
            toggle
              ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <ul className="h-full w-full flex flex-col items-center justify-center text-center pt-12 text-white">
            <li className="py-8">
              <a href="/">Home</a>
            </li>
            <li className="py-8">
              <a href="/">Explore Job</a>
            </li>
            <li className="py-8">
              <a href="#gallery">For Startups</a>
            </li>
            <li className=" py-8">
              <a href="#deals">How it Works</a>
            </li>
            <li className=" py-8">
              <a href="#contact">FAQs</a>
            </li>
            <li className=" py-8">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
