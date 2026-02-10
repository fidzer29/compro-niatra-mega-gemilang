import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ message: "Data tidak lengkap" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website PT Niatra Mega Gemilang" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL,
      subject: `NEW LEADS - ${name}`,
      html: `
    <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:24px;">
      <div style="max-width:600px; margin:auto; border-radius:8px; overflow:hidden;">

        <!-- HEADER -->
        <div style="background:#ffffff; padding:20px; text-align:center;">
          <img
            src="https://niatra-mega-gemilang.netlify.app/_next/image?url=%2Fimages%2Flogopt.png&w=128&q=75"
            alt="PT Niatra Mega Gemilang"
            style="height:60px;"
          />
        </div>

        <!-- BODY -->
        <div style="background:#ffffff; padding:24px;">
          <table style="width:100%; margin-top:8px;">
            <tr>
              <td style="padding:6px 0; width:120px;"><strong>Nama</strong></td>
              <td>: ${name}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;"><strong>Email</strong></td>
              <td>: ${email}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;"><strong>Telepon</strong></td>
              <td>: ${phone || "-"}</td>
            </tr>
          </table>

          <div style="margin-top:16px;">
            <strong>Pesan:</strong>
            <p style="background:#f8f8f8; padding:12px; border-radius:6px; margin-top:6px;">
              ${message}
            </p>
          </div>

          <hr style="margin:24px 0;" />

          <p style="font-size:12px; color:#777;">
            Email ini dikirim otomatis dari website PT Niatra Mega Gemilang.<br/>
            Jangan membalas email ini.
          </p>
        </div>

      </div>
    </div>
    `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Gagal mengirim email" }, { status: 500 });
  }
}
