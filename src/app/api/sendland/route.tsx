import { EmailTemplate } from "../../../components/email/Contact-form-land";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// eslint-disable-next-line import/no-anonymous-default-export
export async function POST(req: any) {
  try {
    const body = await req.json();
    console.log("body: ", body);

    const data = await resend.emails.send({
      from: `${process.env.FROM_EMAIL}`,
      to: [`${process.env.TO_PROPEMAIL}`],
      subject: "🎉New submission to your contact form!",
      html: "",
      react: EmailTemplate({
        name: body.name,
        email: body.email,
        phone: body.phone,
        city: body.city,
        addr: body.addr,
        propname: body.propname,
      }),
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json({ error });
  }
}
