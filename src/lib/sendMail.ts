import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "./contact-mail";
const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);
interface SendEmailProps {
  senderEmail: string;
  message: string;
}

interface SendEmailResponse {
  data?: unknown;
  error?: string;
}

export const sendEmail = async (
  senderEmail: SendEmailProps["senderEmail"],
  message: SendEmailProps["message"]
): Promise<SendEmailResponse> => {

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <no-reply@acesopensource.tech>",
      to: "sandipsapkota9844@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: (error as Error).message
    };
  }
  return {
    data,
  };
};