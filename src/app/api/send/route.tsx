import { EmailTemplate } from "../../../components/email/Contact-form";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export async function POST(req) {
  try {
    const body = await req.json();
    console.log("body: ", body);

    const data = await resend.emails.send({
      from: `${process.env.FROM_EMAIL}`,
      to: [`${process.env.TO_EMAIL}`],
      subject: "🎉New submission to your contact form!",
      html: "",
      react: EmailTemplate({
        type: body.type,
        name: body.name,
        email: body.name,
        phone: body.phone,
        message: body.message,
      }),
    });
    if (data.status === "success") {
      return NextResponse.json({ message: "Email sent successfully!" });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.log("error: ", error);
  }
}
