import { Alegreya } from "next/font/google";
import Button from "../ui/button";
import React from "react";

export const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (
    <section
      id="umbral"
      className="relative flex min-h-screen w-full flex-col items-center justify-center"
    >
      <h1
        className={`${alegreya.className} w-96 text-center text-4xl text-white lg:w-[36rem] lg:text-6xl   lg:leading-[3.6rem]`}
      >
        Innovar hoy desde el espíritu clásico
      </h1>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Button to="#objetivos">Saber más</Button>
      </div>

      <div className="-top4 absolute left-0 top-0 -z-10 h-screen w-full">
        <img
          alt="background hero"
          className="hidden h-full w-full object-cover  object-center lg:block"
          draggable={false}
          width="1440"
          height="800"
          src="/assets/backgrounds/background-hero.webp"
        />
        <img
          alt="background hero "
          className="block h-full w-full object-cover  object-center lg:hidden"
          draggable={false}
          width="420"
          height="720"
          src="/assets/backgrounds/background-hero-mobile.webp"
        />
      </div>
    </section>
  );
}
