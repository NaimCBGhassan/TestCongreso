import { IconMenu } from "../icons/icon-menu";
import IconClose from "../icons/icon-close";
import React, { useState } from "react";
import { Socials } from "./socials";
import Menu from "./menu";

export default function MenuButton() {
  const [menu, setMenu] = useState(false);

  const onMenu = () => setMenu(!menu);

  return (
    <>
      <button onClick={onMenu} className="z-[9999] block text-white lg:hidden">
        {menu ? <IconClose /> : <IconMenu />}
      </button>

      <aside
        className={`${menu ? "right-0 " : "-right-full"} fixed top-0  flex h-[100dvh]   flex-col items-center justify-center gap-y-4 w-64 bg-primary text-white transition-all duration-200 ease-in-out lg:hidden z-20 delay-500`}
      >
        <Menu />
        <Socials />
      
      </aside>

      <div role="button" onClick={() => setMenu(false)} className={` bg-black/40 fixed w-full  top-0  h-screen z-10 ${menu ? 'left-0 ' : '-left-full'} transition-all delay-300`}></div>

      
    </>
  );
}
