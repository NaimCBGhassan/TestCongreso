import { Payment } from "@mercadopago/sdk-react";
import {
  IAdditionalCardFormData,
  IPaymentBrickCustomization,
  IPaymentFormData,
  TPaymentType,
} from "@mercadopago/sdk-react/bricks/payment/type";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { useEffect } from "react";
import { MySwal } from "@/hooks/useCustomFormik";

const MP_PUBLIC_KEY = process.env.NEXT_PUBLIC_MP_PUBLIC_KEY;
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

initMercadoPago(MP_PUBLIC_KEY!);

interface Props {
  firstName: string;
  lastName: string;
  DNI: string;
  phoneNumber: string;
  mail: string;
  preferenceId: string;
  onMPSubmit: () => void;
}

const MPForm = ({
  DNI,
  firstName,
  lastName,
  phoneNumber,
  mail,
  preferenceId,
  onMPSubmit,
}: Props) => {
  initialization.preferenceId = preferenceId;

  useEffect(() => {
    return () => {
      if ("paymentBrickController" in window) {
        type helper = { unmount: () => void };
        (window.paymentBrickController as helper).unmount();
      }
    };
  }, []);

  return (
    <Payment
      initialization={initialization}
      customization={customization}
      onSubmit={(paymentFormData, additionalData) =>
        onSubmit(paymentFormData, additionalData, {
          firstName,
          lastName,
          DNI,
          phoneNumber,
          mail,
          onMPSubmit,
          preferenceId,
        })
      }
    />
  );
};

export default MPForm;

const onSubmit = async (
  { formData, selectedPaymentMethod }: IPaymentFormData,
  additionalData: IAdditionalCardFormData | null | undefined,
  inscriptioData: Props,
) => {
  try {
    const { DNI, firstName, lastName, phoneNumber, mail, onMPSubmit } =
      inscriptioData;
    const formDataInfo = formData && {
      TransactionAmount: formData.transaction_amount,
      Token: formData.token,
      // Description : formData.
      Installments: formData.installments,
      PaymentMethodId: formData.payment_method_id,
      Payer: {
        Id: formData.payer.id,
        Identification: formData.payer.identification,
        Email: formData.payer.email,
        Address: formData.payer.address,
        FirstName: formData.payer.first_name,
        LastName: formData.payer.last_name,
        Type: formData.payer.type,
      },
    };

    const extraData = {
      paymentMethod: selectedPaymentMethod,
      cardHolderName: additionalData?.cardholderName,
      lastFourDigits: additionalData?.lastFourDigits,
      firstName,
      lastName,
      DNI,
      phoneNumber,
      mail,
    };

    const response = await fetch(BACKEND_URL + "/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData: formDataInfo,
        ...extraData,
      }),
    });

    const data = await response.json();

    if (data.payment.apiResponse.statusCode === 201) {
      MySwal.fire({
        title: "Éxito",
        text: "El pago se concreto correctamente.",
        icon: "success",
      });
    }

    onMPSubmit();
    return response.json();
  } catch (error) {
    MySwal.fire({
      title: "Error",
      text: "Hubo un problema al enviar los valores.",
      icon: "error",
    });
  }
};

// const onError = async (error: object) => {
//   alert(error.message);
// };
// const onReady = async () => {};

const initialization: TPaymentType["initialization"] = {
  amount: 500,
  preferenceId: "1319511361-91ee1bc7-870e-48ba-a64c-2734021d884a",

  // payer: {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  // },
};

const customization: IPaymentBrickCustomization = {
  visual: {
    style: {
      theme: "dark" as const,
    },
  },
  paymentMethods: {
    creditCard: "all" as const,
    debitCard: "all" as const,
    mercadoPago: ["wallet_purchase"] as const,
    maxInstallments: 3,
  },
};
