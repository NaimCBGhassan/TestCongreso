import Swal from "sweetalert2";
import { usePostPreferenceMutation } from "../store/api";
import { DTOPreferenceReq } from "../store/DTO/Preference";
import { useFormik } from "formik";
import * as Yup from "yup";
import withReactContent from "sweetalert2-react-content";

interface Props {
  onSubmit: (preferenciId: string) => void;
}

export const MySwal = withReactContent(
  Swal.mixin({ background: "#1a2a48", color: "white" }),
);
const useCustomFormik = ({ onSubmit }: Props) => {
  const [createPreference] = usePostPreferenceMutation();
  const formik = useFormik<DTOPreferenceReq>({
    initialValues: {
      firstName: "",
      lastName: "",
      DNI: "",
      mail: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Al menos 2 caracteres")
        .max(25, "El maximo de caracteres es de 25")
        .required("Campo requerido"),
      lastName: Yup.string()
        .min(2, "Al menos 2 caracteres")
        .max(25, "El maximo de caracteres es de 25")
        .required("Campo requerido"),
      DNI: Yup.number()
        .typeError("El campo debe ser numerico")
        .positive("El valor debe ser positivo")
        .integer("El valor debe ser entero")
        .min(999999, "Al menos 7 caracteres")
        .required("Campo requerido"),
      mail: Yup.string()
        .min(6, "Almenos 6 caracteres")
        .max(25, "El maximo de caracteres es de 25")
        .required("Campo requerido")
        .email("Correo no valido"),
      phoneNumber: Yup.string()
        .min(6, "Al menos 6 caracteres")
        .max(25, "El maximo de caracteres es de 25")
        .required("Campo requerido"),
    }),
    onSubmit: async ({ firstName, lastName, DNI, mail, phoneNumber }) => {
      MySwal.showLoading();
      try {
        const response = await createPreference(
          new DTOPreferenceReq(firstName, lastName, DNI, phoneNumber, mail),
        );
        if ("error" in response) throw response.error;

        response.data;
        Swal.close();
        onSubmit(response.data.preferenceId);
      } catch (error) {
        console.log("Create Preference Error", error);
        Swal.close();
        MySwal.fire({
          title: "Error",
          text: "Hubo un problema al enviar los valores.",
          icon: "error",
        });
      }
    },
  });
  return formik;
};

export default useCustomFormik;
