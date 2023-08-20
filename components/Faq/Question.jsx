"use client";

import Accordion from "./Accordion";

import React, { useState } from "react";

const Question = () => {
  const questions = [
    {
      id: 1,
      question: "What is Engineernest?",
      answer:
        "Engineernest is a platform that bridges the gap between engineers seeking side jobs and startups looking for engineering talent. It's a space where engineers can earn extra income while expanding their portfolios, and startups can find the expertise they need without the commitment of full-time hires.",
      element: "element1",
    },
    {
      id: 2,
      question: "Who can join Engineernest?",
      answer:
        "Both engineers with diverse technical skills and startups seeking engineering expertise are welcome to join our platform. Whether you're an experienced engineer looking for exciting projects or a startup in need of top talent, you'll find a place here.",
      element: "element2",
    },
    {
      id: 3,
      question: "What kind of projects can I find on the platform?",
      answer:
        " Our platform hosts a variety of projects across different industries and technical domains. From software development and design to engineering solutions, you'll discover a range of projects that align with your skills and interests.",
      element: "element3",
    },
    {
      id: 4,
      question: "How can I get support if I have questions?",
      answer:
        "We're here to help! If you have any questions, concerns, or need assistance, feel free to reach out to our support team. You can find our contact information on the Contact Us page, and we'll get back to you promptly.",
      element: "element4",
    },
    {
      id: 5,
      question: "Ready to get started?",
      answer:
        "Absolutely! Join Engineernest today and embark on a journey of collaboration, innovation, and growth. Whether you're an engineer looking for exciting opportunities or a startup seeking engineering talent, we're here to connect you.",
      element: "element5",
    },
  ];

  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  return (
    <div className="section" id="faq">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-16">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-center text-primary2 text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight uppercase"
          >
            Got Question?
          </h1>
          <div className="mx-auto">
            <img src="/question.png" className="object-cover w-[300px]" />
          </div>
        </div>
        <div>
          {questions.map((question, index) => (
            <Accordion
              key={question.id}
              title={question.question}
              answer={question.answer}
              open={open === index}
              toggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
