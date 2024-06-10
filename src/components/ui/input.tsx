import React, { InputHTMLAttributes } from "react";
import IconError from "../icons/icon-error";
import { cn } from "@/lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
}

export default function Input({ className, error, ...rest }: InputProps) {
  return (
    <label className=" relative flex w-full flex-col gap-y-2">
      <input
        className={cn(
          "w-full rounded-[1.2rem] border-2 bg-transparent px-6 py-2 text-lg text-white outline-none focus:border-4 focus:border-secondary",
          className,
        )}
        {...rest}
      />
      <small
        className={cn(
          "  transiton-y-2 flex items-center gap-x-2 pl-6 text-xs text-red-400 opacity-0 transition-all ease-in-out",
          error?.length && "transition-y-0 opacity-100",
        )}
      >
        <IconError /> {error}
      </small>
    </label>
  );
}
