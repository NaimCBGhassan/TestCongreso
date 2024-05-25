"use client";

import { chonogram } from "@/consts/chonogram";
import ChonogramCard from "./chonogram-card";
import Title from "@/components/ui/title";
import React, { useState } from "react";

export type optionsChonogram = 1 | 2 | 3;

export default function Chronogram() {
  const [chonogramSelect, setChonogramSelect] = useState<optionsChonogram>(3);

  const onOpen = (id: optionsChonogram) => {
    setChonogramSelect((prevId) => (prevId === id ? 3 : id));
  };

  return (
    <section
      id="cronograma"
      className="flex h-auto flex-col bg-primary lg:h-screen  lg:flex-row "
    >
      <section className="flex-1">
        <Title
          title="Cronograma"
          className="flex h-[5rem] items-center pl-12"
        />
        <div className="relative flex h-[100dvh] w-full basis-8/12 flex-col overflow-hidden  lg:h-[calc(100vh-5rem)] ">
          {chonogram.map((item) => (
            <ChonogramCard
              key={item.id}
              card={item}
              active={chonogramSelect}
              isOpen={chonogramSelect === item.id}
              onOpen={() => onOpen(item.id)}
            />
          ))}
        </div>
      </section>
      <div className="hidden h-screen lg:block">
        <img
          src={chonogram[chonogramSelect - 1]?.hostImg}
          className="h-screen w-full object-cover object-[40%_20%]"
        />
      </div>
    </section>
  );
}
