"use client";

import MenuButton from "./menu-button";
import { Socials } from "./socials";
import React from "react";
import Logo from "./logo";
import Menu from "./menu";

export default function Footer() {
  return (
    <footer className='2xl:px-28" absolute bottom-0 left-0  z-50 lg:flex hidden w-full items-center justify-between gap-x-4 overflow-y-hidden bg-primary/60 px-6 pt-2 text-white transition-all duration-500 ease-in-out md:flex lg:px-20'>
      <Logo />
      <section className=" hidden items-center gap-x-6 lg:flex">
        <Menu />
        <Socials />
      </section>

      <MenuButton />
    </footer>
  );
}
