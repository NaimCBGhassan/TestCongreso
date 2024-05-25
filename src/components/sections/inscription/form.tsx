import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { DTOPreferenceReq } from "@/store/DTO/Preference";
import { FormikProvider, useFormik } from "formik";
import React from "react";

interface Props {
  formik: ReturnType<typeof useFormik<DTOPreferenceReq>>;
}

export default function Form({ formik }: Props) {
  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="w-full  lg:space-y-6 lg:px-28 2xl:px-56"
      >
        <div className="mb-2 flex w-full  flex-col gap-2 lg:mb-0 lg:flex-row lg:items-center lg:gap-12">
          <h3 className="whitespace-nowrap text-2xl font-medium text-white 2xl:text-3xl">
            Formá parte
          </h3>
          <Input
            error={formik.errors.DNI}
            id="DNI"
            type="text"
            placeholder="DNI"
            className="mt-2 lg:mt-6"
            {...formik.getFieldProps("DNI")}
          />
        </div>
        <div className="mb-2 flex w-full items-center gap-x-4 lg:mb-0 lg:gap-x-6">
          <Input
            error={formik.errors.firstName}
            id="firstName"
            placeholder="NOMBRE"
            {...formik.getFieldProps("firstName")}
          />
          <Input
            error={formik.errors.lastName}
            id="lastName"
            placeholder="APELLIDO"
            {...formik.getFieldProps("lastName")}
          />
        </div>
        <div className="flex w-full flex-col items-center gap-x-4 lg:flex-row lg:gap-x-6 ">
          <Input
            error={formik.errors.mail}
            type="email"
            id="mail"
            placeholder="MAIL"
            {...formik.getFieldProps("mail")}
          />
          <Input
            error={formik.errors.phoneNumber}
            id="phoneNumber"
            className="mt-2 lg:mt-0"
            placeholder="CEL.."
            {...formik.getFieldProps("phoneNumber")}
            type="text"
          />
        </div>
        <div className="relative mt-2 flex w-full items-center justify-center rounded-[1.2rem] border-2 bg-transparent px-6 py-2 text-lg text-white outline-none focus:border-4 focus:border-secondary lg:mt-0">
          <p className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
            COSTO:
          </p>
          <p>$$$$</p>
        </div>
        <div className="mt-4 flex w-full items-center justify-center">
          <Button type="submit" className="py-3 font-medium">
            SIGUIENTE
          </Button>
        </div>
      </form>
    </FormikProvider>
  );
}
