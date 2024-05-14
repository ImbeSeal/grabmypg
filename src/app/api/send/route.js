import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// eslint-disable-next-line import/no-anonymous-default-export
export async function POST(req) {
  try {
    const { SMTP_EMAIL, SMTP_PASSWORD, TO_EMAIL } = process.env;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: false,
      auth: {
        user: `${SMTP_EMAIL}`,
        pass: `${SMTP_PASSWORD}`,
      },
    });
    const body = await req.json();
    const mailOptions = {
      from: `${SMTP_EMAIL}`,
      to: `${TO_EMAIL}`,

      subject: "🎉New submission to your contact form!",
      message: "",
      html: `<h3>Hello Chirag,</h3>
      <p>
        ${body.type}: ${body.formData.name} has submitted the contact form on your website.
        <br />
        Email:${body.formData.email}
        <br />
        Phone:${body.formData.phone}
        <br />
      </p>
      <p>
        ${body.formData.message}
        <br />
        Regards,
        <br />
        Coffee
      </p>`,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log(result);
    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
