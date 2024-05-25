"use client";

import useCustomFormik from "@/hooks/useCustomFormik";
import { Box, Modal, styled } from "@mui/material";
import Title from "@/components/ui/title";
import React, { useState } from "react";
import MPForm from "./mp-form";
import Form from "./form";

export default function Inscription() {
  const [preferenceId, setPreferenceId] = useState<string>();

  const onPreferenceSubmit = (preferenceId: string) => {
    setPreferenceId(preferenceId);
  };

  const formik = useCustomFormik({ onSubmit: onPreferenceSubmit });
  const firstName = formik.values.firstName;
  const lastName = formik.values.lastName;
  const DNI = formik.values.DNI;
  const mail = formik.values.mail;
  const phoneNumber = formik.values.phoneNumber;

  return (
    <section
      id="inscripcion"
      className="flex min-h-screen w-full flex-col items-start justify-center gap-y-8 bg-primary px-6 lg:px-20 2xl:px-28"
    >
      <Title title="Inscripción" />
      <Form formik={formik} />

      {preferenceId && (
        <Modal
          open={!!preferenceId}
          onClose={() => setPreferenceId(undefined)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ display: "grid", placeItems: "center" }}
        >
          <StyledBox>
            <Box sx={{ width: { xs: 300, sm: 450, md: 800 } }}>
              <MPForm
                firstName={firstName}
                lastName={lastName}
                DNI={DNI}
                phoneNumber={phoneNumber}
                mail={mail}
                preferenceId={preferenceId}
                onMPSubmit={() => {
                  setPreferenceId(undefined);
                }}
              />
            </Box>
          </StyledBox>
        </Modal>
      )}
    </section>
  );
}

const StyledBox = styled(Box)({
  overflowY: "auto",
  maxHeight: "80%",

  "&::-webkit-scrollbar": {
    width: "8px",
  },

  "&::-webkit-scrollbar-track": {
    boxShadow: "inset 0 0 5px grey",
    borderRadius: "10px",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "lightgray",
    borderRadius: "10px",
  },

  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },
});
