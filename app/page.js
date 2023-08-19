import Contact from "@/components/Contact";
import DarkModeButton from "@/components/DarkMode";
import ExploreJob from "@/components/ExploreJob";
import Question from "@/components/Faq/Question";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import StartJob from "@/components/StartUp";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <main>
      <Hero />
      {/* <DarkModeButton/> */}
      <ExploreJob />
      <StartJob />
      <Testimonial />
      <HowItWork />
      <Question />
      <Contact />
      
    </main>
  );
}
