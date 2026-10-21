import { NextResponse } from "next/server";
import { esc, telHref, btn, shell, row, sendMail } from "@/lib/mail";

export const runtime = "nodejs";

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true }); // honeypot
  const name = (body.name || "").trim().slice(0, 120);
  const email = (body.email || "").trim().slice(0, 160);
  const phone = (body.phone || "").trim().slice(0, 40);
  const subject = (body.subject || "").trim().slice(0, 120);
  const message = (body.message || "").trim().slice(0, 4000);
  if (!name || !message) return NextResponse.json({ error: "Name and message are required." }, { status: 400 });
  if (!email && !phone) return NextResponse.json({ error: "Add an email or phone so we can reply." }, { status: 400 });
  if (email && !emailOk(email)) return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });

  const at = new Date().toISOString();
  console.log("CONTACT_INQUIRY", JSON.stringify({ name, email, phone, subject, message, at, ua: req.headers.get("user-agent") || "" }));

  const tel = telHref(phone);
  const html = shell(
    "New message",
    esc(subject || `Message from ${name}`),
    `<div style="margin:0 0 20px">
      ${email ? btn(`mailto:${esc(email)}`, "&#9993; Reply by email", "#f5c400") : ""}
      ${tel ? btn(`tel:${tel}`, `&#128222; Call ${esc(phone)}`, email ? "#e4e4de" : "#f5c400") : ""}
      ${tel ? btn(`sms:${tel}`, "&#128172; Text", "#e4e4de") : ""}
    </div>
    <table style="border-collapse:collapse;width:100%;font-size:15px">
      ${row("Name", `<strong>${esc(name)}</strong>`)}
      ${email ? row("Email", `<a href="mailto:${esc(email)}" style="color:#141414">${esc(email)}</a>`) : ""}
      ${phone ? row("Phone", `<a href="tel:${tel}" style="color:#141414">${esc(phone)}</a>`) : ""}
    </table>
    <p style="margin:16px 0 4px;color:#666;font-size:13px">Message</p>
    <p style="margin:0;white-space:pre-wrap;font-size:15px;line-height:1.5">${esc(message)}</p>`,
  );

  await sendMail({
    subject: `Contact: ${subject || `message from ${name}`}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}\n\n${at}`,
    html,
    replyTo: email || undefined,
  });
  return NextResponse.json({ ok: true });
}
