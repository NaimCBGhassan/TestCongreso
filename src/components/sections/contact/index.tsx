import React from "react";
import Form from "./form";

export default function Contact() {
  return (
    <section
      id="contactanos"

      className="relative flex min-h-screen w-full items-center justify-center px-4 py-4 lg:px-0 lg:py-16 2xl:py-0"
    >
      <Form />

      <div className="-top4 absolute left-0 top-0 -z-10 h-full w-full lg:min-h-screen">
        <img
          alt="background de la seccion contacto"
          className="hidden h-full w-full  object-cover object-center lg:block"
          draggable={false}
          width="1440"
          height="800"
          src="/assets/contact/contact-background.webp"
        />
        <img
          alt="background de la seccion contacto"
          className="block h-full w-full object-cover  object-center lg:hidden"
          draggable={false}
          width="420"
          height="720"
          src="/assets/contact/contact-background-mobile.webp"
        />
      </div>
    </section>
  );
}
