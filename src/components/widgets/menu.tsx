import { menu } from "@/consts/menu";
import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <nav className=" mb-2 lg:mb-0">
      <ul className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6">
        {menu.map((nav) => (
          <li key={nav.id} className=" ">
            <Link
              href={nav.to}
              className="py-6  font-medium transition-colors hover:text-secondary text-2xl lg:text-base  "
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
