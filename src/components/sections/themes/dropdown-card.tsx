import useClickOutisde from "@/hooks/useClickOutisde";
import { Alegreya } from "next/font/google";
import React, { useEffect, useRef } from "react";

export const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["500"],
});

interface DropdownCardProps {
  list: string[];
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function DropdownCard({
  list,
  title,
  isOpen,
  onClose,
}: DropdownCardProps) {

  const dropdownRef = useRef<HTMLDivElement>(null)
  useClickOutisde({ ref : dropdownRef, isOpen, onClose })
  return (
    <section
      ref={dropdownRef}
      className={`${isOpen ? "z-40 opacity-100" : " pointer-events-none opacity-0"} absolute left-0 top-0 flex h-full w-full flex-col gap-y-4  overflow-y-auto border-b border-white bg-primary px-4 py-12 transition-opacity lg:gap-y-6 2xl:gap-y-12 `}
      onClick={onClose}
    >
      <h3
        className={`${alegreya.className} mx-auto w-3/4  border-b border-white text-center text-lg font-medium text-white lg:text-lg 2xl:w-3/4 2xl:text-3xl`}
      >
        {title}
      </h3>
      <ol className="flex flex-col gap-y-4 px-5 text-justify text-white lg:gap-y-3 2xl:gap-y-6 2xl:pl-6">
        {list.map((item, index) => (
          <li key={item} className="text-sm  2xl:text-xl">
            <span className="marker italic">
              {String.fromCharCode(97 + index)}.
            </span>
            {item}
          </li>
        ))}
      </ol>
    </section>
  );
}
