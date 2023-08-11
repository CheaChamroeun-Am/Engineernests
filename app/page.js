import Contact from "@/components/Contact";
import ExploreJob from "@/components/ExploreJob";
import Question from "@/components/Faq/Question";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import StartJob from "@/components/StartUp";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExploreJob />
      <StartJob/>
      <Testimonial/>
      <HowItWork/>
      <Question />
      <Contact />
    </main>
  );
}
