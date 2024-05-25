"use client";

import { objectives } from "@/consts/objectives";
import ObjectiveCard from "./objective-card";
import React, { useState } from "react";
import IconArrowLeft from "@/components/icons/icon-arrow-left";
import IconArrowRight from "@/components/icons/icon-arrow-right";
const countItems = objectives.length;




export default function ObjectivesCarousel() {
  const [objectiveActive, setObjectiveActive] = useState(objectives[0].id);
  const onNext = () => {
    setObjectiveActive((prev) => (prev >= countItems ? 1 : prev + 1));
  };
  
  const onPrev = () => {
    setObjectiveActive((prev) => (prev === 1 ? countItems : prev - 1));
  };

  const onDot = (item: number) => {
    setObjectiveActive(item);
  };

 


  return (
    <section
      className="flex h-screen w-full lg:w-auto flex-col items-center justify-center gap-y-4 bg-primary relative "
     
    >
      <div className="bg-primary w-full h-full lg:w-[40vw] ">
        {objectives.map((objective) => (
       
           <ObjectiveCard
            key={objective.id}
             objectiveActive={objectiveActive}
             card={objective}
           />
        ))}
      </div>

      <button className='text-white hover:text-secondary transition-colors absolute left-4 top-[40%] lg:top-1/2 -translate-y-1/2' onClick={onPrev}>
            <IconArrowLeft />
        </button>

        <button className='text-white hover:text-secondary transition-colors absolute right-4 top-[40%] lg:top-1/2 -translate-y-1/2' onClick={onNext}>
          <IconArrowRight />
        </button>

      <section className="flex items-center gap-x-2 absolute top-1/2 translate-y-40 z-30">
        {objectives.map((item) => (
          <button
            key={item.id}
            className={`h-2 w-2 cursor-pointer rounded-full bg-gray-300 p-1 ease-in-out hover:bg-white hover:p-1.5 hover:duration-[300ms] ${
              objectiveActive === item.id
                ? "bg-white p-1.5 duration-[400ms] ease-in-out"
                : ""
            }`}
            onClick={() => onDot(item.id)}
          ></button>
        ))}
      </section>
    </section>
  );
}
