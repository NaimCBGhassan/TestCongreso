import { cn } from "@/lib/cn";
import React from "react";

interface TitleProps {
  className?: string;
  title: string;
  active?: string;
}

export default function Title({ title, active, className }: TitleProps) {
  return (
    <h2 className={cn("font-semibold text-white lg:text-2xl", className)}>
      {title} <br />
      <span className="font-normal italic">{active}</span>
    </h2>
  );
}
