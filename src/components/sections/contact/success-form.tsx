import IconCheck from "@/components/icons/icon-check";
import React from "react";

export default function SuccessForm() {
  return (
    <div className="mb-28 flex h-[30rem] w-full max-w-sm flex-col items-center justify-center rounded-[3rem] bg-white/20 px-6 py-6 text-white lg:max-w-5xl lg:px-12 2xl:mb-0 2xl:max-w-[80rem]">
      <IconCheck />
      <h3 className="mb-2 text-center text-2xl font-semibold lg:text-4xl">
        ¡El correo fue enviado correctamente!
      </h3>
      <p className="w-auto text-center text-lg lg:w-[40rem] lg:text-2xl">
        Dentro de unas horas nuestro equipo se comunicara contigo y resolvera
        tus dudas.
      </p>
    </div>
  );
}
