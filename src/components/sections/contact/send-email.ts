import emailjs from "@emailjs/browser";
import { InitialValuesT } from "./form";

export async function sendEmail(values: InitialValuesT) {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_ID;

  const result = await emailjs.send(
    serviceId!,
    templateId!,
    { ...values, reply_to: values.email },
    publicKey,
  );

  return result;
}
