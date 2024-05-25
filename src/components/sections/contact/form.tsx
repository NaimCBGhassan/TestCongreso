"use client";

import IconError from "@/components/icons/icon-error";
import IconLoad from "@/components/icons/icon-load";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { sendEmail } from "./send-email";
import SuccessForm from "./success-form";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { cn } from "@/lib/cn";

export type InitialValuesT = {
  user_name: string;
  last_name: string;
  email: string;
  consulta: string;
};

const initialValues: InitialValuesT = {
  user_name: "",
  last_name: "",
  email: "",
  consulta: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Correo no valido").required("El correo requrido"),
  user_name: Yup.string().required("El nombre es requrido"),
  last_name: Yup.string().required("El apellido es requrido"),
  consulta: Yup.string()
    .required("La consulta es requrida")
    .min(6, "La consulta debe tener alemenos 6 caracteres"),
});

export default function Form() {
  const [load, setLoad] = useState(false);
  const [status, setStatus] = useState<"iddle" | "success" | "error">("iddle");

  const onSubmit = async (values: InitialValuesT) => {
    setLoad(true);
    try {
      const res = await sendEmail(values);
      if (res.text !== 'OK') {
        setStatus('error')

        setTimeout(() => {
          setStatus('iddle')
        }, 8000)
        return
      }
      
      setStatus('success')
     
    } catch (error) {
      console.log(error);
      setStatus('error')
      setTimeout(() => {
        setStatus('iddle')
      }, 8000)
    } finally {
      setLoad(false);
    }

  };

  const { handleChange, errors, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  if (status === "success") return <SuccessForm />;

  return (
    <form
      onSubmit={handleSubmit}
      className="relative  w-full max-w-full rounded-[3rem] bg-white/20 px-6 py-6 text-white lg:max-w-4xl lg:px-12 "
    >

      { status === 'error' && 
        <div className="absolute top-4 right-12 bg-red-300/40 border border-red-400 text-white px-2 rounded-md py-1">
          <p className="text-sm flex items-center gap-x-1">
            <IconError />
            Ocurrio un error al enviar el mail, intentelo mas tarde.</p>
        </div>
      }
      <h2 className="text-2xl font-light">Contactanos</h2>
      <p className="mb-4 text-base font-medium  ">
        Para saber más acerca de promociones especiales, comida o alojamiento.
      </p>
      <div className="mb-2 flex-col lg:flex-row flex w-full items-center justify-between gap-x-2 lg:gap-x-12">
        <Input
          onChange={handleChange}
          name="user_name"
          placeholder="NOMBRE"
          error={errors?.user_name}
        />
        <Input
          onChange={handleChange}
          name="last_name"
          placeholder="APELLIDO"
          error={errors?.last_name}
          className={`mt-2 lg:mt-0`}
        />
      </div>

      <div className="mb-2">
        <Input
          onChange={handleChange}
          name="email"
          placeholder="MAIL"
          type="email"
          error={errors?.email}
        />
      </div>

      <div className="flex w-full flex-col items-end gap-4  lg:flex-row">
        <label className="relative flex w-full flex-col gap-y-4">
          <textarea
            className={cn(
              "h-56 w-full resize-none rounded-[1.5rem] border-2 bg-transparent px-6 py-4 text-lg outline-none focus:border-4 focus:border-secondary ",
              errors.consulta && "border-red-400",
            )}
            name="consulta"
            placeholder="TU CONSULTA"
            onChange={handleChange}
          />
          <small
            className={cn(
              "point- flex translate-y-2 items-center gap-x-2 pl-6 text-xs text-red-400 opacity-0 transition-all ease-in-out",
              errors?.consulta && "translate-y-0 opacity-100",
            )}
          >
            <IconError /> {errors.consulta}
          </small>
        </label>
        <Button
          disabled={load}
          className="lg:mb-10 rounded-[1.2rem] px-6 py-3 font-medium hover:tracking-normal"
        >
          {load ? (
            <IconLoad className="block w-[3.256rem] animate-spin" />
          ) : (
            "ENVIAR"
          )}
        </Button>
      </div>
    </form>
  );
}
