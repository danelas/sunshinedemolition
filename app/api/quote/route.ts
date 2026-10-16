import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Lead = { name: string; phone: string; city: string; service: string; details: string; at: string };

const esc = (v: string) => v.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c] as string));
const telHref = (v: string) => {
  const d = v.replace(/\D/g, "");
  if (d.length === 10) return `+1${d}`;
  if (d.length === 11 && d.startsWith("1")) return `+${d}`;
  return d ? `+${d}` : "";
};

function leadHtml(l: Lead) {
  const tel = telHref(l.phone);
  const btn = (href: string, label: string, bg: string) =>
    `<a href="${href}" style="display:inline-block;padding:14px 22px;margin:0 8px 8px 0;background:${bg};color:#141414;font-weight:700;font-size:16px;text-decoration:none;border-radius:999px">${label}</a>`;
  return `<!doctype html><html><body style="margin:0;padding:24px;background:#f6f6f3;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#141414">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;padding:24px;border:1px solid #e4e4de">
    <p style="margin:0 0 4px;font-size:13px;color:#666;text-transform:uppercase;letter-spacing:.04em">New quote request</p>
    <h1 style="margin:0 0 16px;font-size:22px">${esc(l.service || "Junk removal")} in ${esc(l.city || "Broward County")}</h1>
    <div style="margin:0 0 20px">
      ${tel ? btn(`tel:${tel}`, `&#128222; Call ${esc(l.phone)}`, "#f5c400") : ""}
      ${tel ? btn(`sms:${tel}`, "&#128172; Text", "#e4e4de") : ""}
    </div>
    <table style="border-collapse:collapse;width:100%;font-size:15px">
      <tr><td style="padding:8px 0;color:#666;width:90px">Name</td><td style="padding:8px 0"><strong>${esc(l.name)}</strong></td></tr>
      <tr><td style="padding:8px 0;color:#666">Phone</td><td style="padding:8px 0"><a href="tel:${tel}" style="color:#141414">${esc(l.phone)}</a></td></tr>
      <tr><td style="padding:8px 0;color:#666">City</td><td style="padding:8px 0">${esc(l.city || "-")}</td></tr>
      <tr><td style="padding:8px 0;color:#666">Service</td><td style="padding:8px 0">${esc(l.service || "-")}</td></tr>
    </table>
    <p style="margin:16px 0 4px;color:#666;font-size:13px">What needs to go</p>
    <p style="margin:0;white-space:pre-wrap;font-size:15px;line-height:1.5">${esc(l.details || "(no details given)")}</p>
    <p style="margin:24px 0 0;font-size:12px;color:#999">Received ${esc(l.at)} via sunshinedemolition.com</p>
  </div></body></html>`;
}

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

  const lead: Lead = {
    name,
    phone,
    city: (body.city || "").trim().slice(0, 80),
    service: (body.service || "").trim().slice(0, 80),
    details: (body.details || "").trim().slice(0, 2000),
    at: new Date().toISOString(),
  };
  console.log("QUOTE_LEAD", JSON.stringify({ ...lead, ua: req.headers.get("user-agent") || "" }));

  const key = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO;
  if (key && to) {
    try {
      const tel = telHref(lead.phone);
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "content-type": "application/json" },
        body: JSON.stringify({
          from: process.env.QUOTE_FROM || "Sunshine Demolition <onboarding@resend.dev>",
          to: to.split(",").map((s) => s.trim()),
          subject: `New quote request: ${lead.service || "Junk removal"} in ${lead.city || "Broward"} - ${lead.name}`,
          text: `Name: ${lead.name}\nPhone: ${lead.phone}\nCity: ${lead.city}\nService: ${lead.service}\n\n${lead.details}\n\nCall: tel:${tel}\nText: sms:${tel}\n${lead.at}`,
          html: leadHtml(lead),
        }),
      });
      if (!r.ok) console.error("QUOTE_EMAIL_FAILED", r.status, await r.text());
    } catch (e) {
      console.error("QUOTE_EMAIL_FAILED", e);
    }
  }
  return NextResponse.json({ ok: true });
}
