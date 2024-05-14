import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { SMTP_EMAIL, SMTP_PASSWORD, TO_PROPEMAIL } = process.env;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: `${SMTP_EMAIL}`,
        pass: `${SMTP_PASSWORD}`,
      },
    });
    const body = await req.json();

    const mailOptions = {
      from: `${SMTP_EMAIL}`,
      to: `${TO_PROPEMAIL}`,

      subject: "🎉New submission to your contact form!",
      html: `
      <div>
    <h3>Hello Chirag,</h3>
    <p>
       ${body.formData.name}  has submitted the Landlord form on your website.
      <br />
       Email: ${body.formData.email}
      <br />
       Phone: ${body.formData.phone}
    </p>
    <p>
      <h4>Property Details</h4>
       Name of property: ${body.formData.propname}
      <br />
       City: ${body.formData.city}
      <br />
       Address: ${body.formData.addr}
      <hr />
      Regards,
      <br />
      Coffee
      <hr />
    </p>
  </div>`,
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
