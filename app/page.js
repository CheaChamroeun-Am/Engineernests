"use client"

import Contact from "@/components/Contact";
import About from "@/components/About";
import ExploreJob from "@/components/ExploreJob";
import Question from "@/components/Faq/Question";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import StartJob from "@/components/StartUp";
import Testimonial from "@/components/Testimonial";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init(); // Initialize the AOS library
  }, []);
  return (
    <main>
      <Hero />
      {/* <DarkModeButton/> */}
      <ExploreJob />
      <StartJob />
      <Testimonial />
      <HowItWork />
      <About />
      <Question />
      <Contact />
    </main>
  );
}
