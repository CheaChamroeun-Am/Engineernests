"use client";

import Accordion from "./Accordion";

import React, { useState } from "react";

const Question = () => {
  const questions = [
    {
      id: 1,
      question: "What is Engineernest?",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultrices aliquam lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultrices aliquam",
      element: "element1",
    },
    {
      id: 2,
      question: "What kind of projects can I find on the platform?",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultrices aliquam lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultrices aliquam",
      element: "element2",
    },
    {
      id: 3,
      question: "Who can join Engineernest?",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultrices aliquam lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultrices aliquam",
      element: "element3",
    },
    {
      id: 4,
      question: "How can I get support if I have questions?",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultrices aliquam lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultrices aliquam",
      element: "element4",
    },
    {
      id: 5,
      question: "Ready to get started?",
      answer:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultrices aliquam lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis ultrices aliquam",
      element: "element5",
    },
  ];

  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  }

  return (
    <div className="section" id="faq">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-16">
          <h1 className="text-center text-primary2 text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight uppercase">
            Got Question?
          </h1>
          <div className="mx-auto">
            <img
              src="/question.png"
              className="object-cover w-[300px]"
            />
          </div>
        </div>
        <div>
          {
            questions.map((question, index) => (
              <Accordion
                key={question.id}
                title={question.question}
                answer={question.answer}
                open={open === index}
                toggle={() => toggle(index)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Question;
