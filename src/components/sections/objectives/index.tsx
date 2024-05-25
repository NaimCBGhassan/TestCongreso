import ObjectivesCarousel from "./objectives-carousel";
import Title from "@/components/ui/title";
import React from "react";

export default function Objectives() {
  return (
    <section
      id="objetivos"
      className="relative flex min-h-screen w-full flex-col items-center lg:flex-row"
    >
      <div className="absolute left-12 top-12 z-20 2xl:left-28">
        <Title title="Objetivos del" active="congreso" />
      </div>
      <div className="hidden h-auto  w-[65vw] lg:block lg:h-screen">
        <img
          src="/assets/objectives/objectives-image.webp"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <ObjectivesCarousel />
    </section>
  );
}
