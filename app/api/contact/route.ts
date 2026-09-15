import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/data";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, date, city, venue, services, serviceTier, message, reference } = body ?? {};

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const selectedService = serviceTier || services || "Wedding Media & Production";
    const refCode = reference || `OM-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    console.log(`[STUDIO LEAD LOGGED] Ref: ${refCode} | Name: ${name} | Phone: ${phone} | City: ${city || "N/A"} | Date: ${date || "N/A"}`);

    // If SMTP credentials are provided, dispatch notification email
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.LEADS_TO_EMAIL || siteConfig.contact.email,
          replyTo: email || undefined,
          subject: `[New Lead ${refCode}] — ${name} (${city || "Varanasi"}) | OM Media`,
          text: [
            `New Wedding Inquiry — Reference: ${refCode}`,
            `Name: ${name}`,
            `Phone: ${phone}`,
            `Email: ${email || "Not provided"}`,
            `Wedding Date: ${date || "Not provided"}`,
            `City / Region: ${city || "Not provided"}`,
            `Venue: ${venue || "Not provided"}`,
            `Service Tier: ${selectedService}`,
            `Vision / Message: ${message || "None"}`,
          ].join("\n"),
        });
      } catch (mailErr) {
        console.warn("Nodemailer dispatch warning (inquiry still logged):", mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      reference: refCode,
      message: "Your inquiry has been received by the OM Media studio directors.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process inquiry." },
      { status: 500 }
    );
  }
}
