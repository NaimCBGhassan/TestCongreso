import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href='#' className="hover:scale-[1.04] transition-transform">
      <img
        src="/logo.png"
        alt="logo"
        // height="256"
        // width="128"
        // className="h-24 w-44 lg:h-[6rem] lg:w-[12rem]"
        className="w-32 pb-2 lg:w-[9rem] "
      />
    </Link>
  );
}
