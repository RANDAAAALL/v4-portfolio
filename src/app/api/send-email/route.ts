import ContactEmailTemplate from "@/components/ui/email/contact-email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, senderEmail, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["lesterandig17@gmail.com"],
      replyTo: senderEmail,
      subject,
      react: ContactEmailTemplate({
        name,
        email: senderEmail,
        subject,
        message,
      }),
    });

    if (error) {
      console.error("resend error:", error);
      return NextResponse.json({ errorMessage: error.message }, { status: 400 });
    }

    // console.log("Resend success:", data);
    return NextResponse.json({ payload: data }, { status: 200 });
  } catch (error: unknown) {
    console.error("server error:", error);
  
    if (error instanceof Error) {
      return NextResponse.json({ errorMessage: error.message }, { status: 500 });
    }
  
    return NextResponse.json({ errorMessage: "nn unknown error occurred" }, { status: 500 });
  }
  
}
