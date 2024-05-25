import { cn } from "@/lib/cn";
import React from "react";

interface ObjectiveCardProps {
  card: {
    icon: string;
    description: string;
    id: number;
  };
  objectiveActive: number;
}

export default function ObjectiveCard({
  card,
  objectiveActive,
}: ObjectiveCardProps) {
  if (objectiveActive !== card.id) return null;

  return (
    <article
      className={cn(
        " absolute top-1/2 -translate-y-1/2  flex  w-full flex-col items-center justify-center px-6 text-white  transition-opacity  duration-300  lg:px-0",
        objectiveActive === card.id ? "opacity-100 " : "-z-10 opacity-0",
      )}
    >
      <img src={card.icon} width={150} height={150} className="h-36" />
      <p className="w-full text-center  lg:w-[18rem] text-lg  ">
        {card.description}
      </p>
    </article>
  );
}
