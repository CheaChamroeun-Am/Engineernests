"use client";

import { Collapse } from "react-collapse";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";

const Accordion = ({ open, toggle, title, answer }) => {
  return (
    <div className="pt-[10px]">
      <div
        onClick={toggle}
        className="bg-white rounded-md py-[25px] px-[10px] flex justify-between items-center cursor-pointer"
      >
        <div className="flex gap-5 items-center">
          <div className="me-3 bg-primary3 rounded-full p-1 text-white">
            <FaQuestion />
          </div>
          <div className="font-bold text-primary2">{title}</div>
        </div>

        <div className="faq-icon">{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</div>
      </div>

      <Collapse isOpened={open}>
        <div className="bg-white ml-5 px-[50px] pb-[20px]">
          <p className="faq-answer">{answer}</p>
        </div>
      </Collapse>
    </div>
  );
};

export default Accordion;
