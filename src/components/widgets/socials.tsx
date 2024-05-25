import { socials } from "@/consts/socials";
import Link from "next/link";
import React from "react";

export function Socials() {
  return (
    <ul className="flex items-center gap-x-2">
      {socials.map((social) => (
        <li
          key={social.id}
          className="rounded-full bg-white/30  transition-all hover:bg-white hover:text-primary"
        >
          <Link href={social.to} target="_blank" rel="noopener noreferrer" className="p-2 block">
            {React.createElement(social.icon)}
          </Link>
        </li>
      ))}
    </ul>
  );
}
