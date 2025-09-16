import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const host = process.env.SMTP_HOST!;
    const port = Number(process.env.SMTP_PORT) || 587;
    const secure = port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    await transporter.sendMail({
      from: `"Bottega Marchi" <emanuele@bottegamarchi.com>`,
      to: "emanuele@bottegamarchi.com",
      replyTo: email,
      subject: "New contact form submission",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}