"use client";

import React, { useEffect, useState } from "react";
import MenuButton from "./menu-button";
import { Socials } from "./socials";
import Logo from "./logo";
import Menu from "./menu";
import { cn } from "@/lib/cn";

export default function Header() {
  const [mouseOverHeader, setMouseOverHeader] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const heroHeight = document.getElementById("hero")?.offsetHeight || 0;

    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  const handleMouseEnter = () => setMouseOverHeader(true);

  const handleMouseLeave = () => setMouseOverHeader(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "fixed left-0 z-50  flex w-full items-center justify-between gap-x-4 overflow-y-hidden bg-primary/60 px-6 py-1.5 text-white transition-all duration-500 ease-in-out lg:px-12 2xl:px-28",
        visible || mouseOverHeader ? "opacity-100" : "opacity-0",
      )}
    >
      <Logo />
      <section className=" hidden items-center gap-x-6 lg:flex">
        <Menu />
        <Socials />
      </section>

      <MenuButton />
    </header>
  );
}
