import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true }); // honeypot
  const name = (body.name || "").trim().slice(0, 120);
  const phone = (body.phone || "").trim().slice(0, 40);
  if (!name || !phone) return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });

  const lead = {
    name,
    phone,
    city: (body.city || "").trim().slice(0, 80),
    service: (body.service || "").trim().slice(0, 80),
    details: (body.details || "").trim().slice(0, 2000),
    at: new Date().toISOString(),
    ua: req.headers.get("user-agent") || "",
  };
  console.log("QUOTE_LEAD", JSON.stringify(lead));

  const key = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO;
  if (key && to) {
    try {
      const resend = new Resend(key);
      await resend.emails.send({
        from: process.env.QUOTE_FROM || "Sunshine Demolition <onboarding@resend.dev>",
        to: to.split(",").map((s) => s.trim()),
        subject: `New quote request: ${lead.service || "Junk removal"} in ${lead.city || "Broward"} - ${lead.name}`,
        text: `Name: ${lead.name}\nPhone: ${lead.phone}\nCity: ${lead.city}\nService: ${lead.service}\n\n${lead.details}\n\n${lead.at}`,
      });
    } catch (e) {
      console.error("QUOTE_EMAIL_FAILED", e);
    }
  }
  return NextResponse.json({ ok: true });
}
