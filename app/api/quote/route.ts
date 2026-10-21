import { NextResponse } from "next/server";
import { esc, telHref, btn, shell, row, sendMail } from "@/lib/mail";

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
  };
  console.log("QUOTE_LEAD", JSON.stringify({ ...lead, ua: req.headers.get("user-agent") || "" }));

  const tel = telHref(lead.phone);
  const html = shell(
    "New quote request",
    `${esc(lead.service || "Junk removal")} in ${esc(lead.city || "Broward County")}`,
    `<div style="margin:0 0 20px">
      ${tel ? btn(`tel:${tel}`, `&#128222; Call ${esc(lead.phone)}`, "#f5c400") : ""}
      ${tel ? btn(`sms:${tel}`, "&#128172; Text", "#e4e4de") : ""}
    </div>
    <table style="border-collapse:collapse;width:100%;font-size:15px">
      ${row("Name", `<strong>${esc(lead.name)}</strong>`)}
      ${row("Phone", `<a href="tel:${tel}" style="color:#141414">${esc(lead.phone)}</a>`)}
      ${row("City", esc(lead.city || "-"))}
      ${row("Service", esc(lead.service || "-"))}
    </table>
    <p style="margin:16px 0 4px;color:#666;font-size:13px">What needs to go</p>
    <p style="margin:0;white-space:pre-wrap;font-size:15px;line-height:1.5">${esc(lead.details || "(no details given)")}</p>`,
  );

  await sendMail({
    subject: `New quote request: ${lead.service || "Junk removal"} in ${lead.city || "Broward"} - ${lead.name}`,
    text: `Name: ${lead.name}\nPhone: ${lead.phone}\nCity: ${lead.city}\nService: ${lead.service}\n\n${lead.details}\n\nCall: tel:${tel}\nText: sms:${tel}\n${lead.at}`,
    html,
  });
  return NextResponse.json({ ok: true });
}
