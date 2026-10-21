export const esc = (v: string) => v.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c] as string));

export const telHref = (v: string) => {
  const d = v.replace(/\D/g, "");
  if (d.length === 10) return `+1${d}`;
  if (d.length === 11 && d.startsWith("1")) return `+${d}`;
  return d ? `+${d}` : "";
};

export const btn = (href: string, label: string, bg: string) =>
  `<a href="${href}" style="display:inline-block;padding:14px 22px;margin:0 8px 8px 0;background:${bg};color:#141414;font-weight:700;font-size:16px;text-decoration:none;border-radius:999px">${label}</a>`;

export const shell = (kicker: string, title: string, body: string) =>
  `<!doctype html><html><body style="margin:0;padding:24px;background:#f6f6f3;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#141414">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;padding:24px;border:1px solid #e4e4de">
    <p style="margin:0 0 4px;font-size:13px;color:#666;text-transform:uppercase;letter-spacing:.04em">${kicker}</p>
    <h1 style="margin:0 0 16px;font-size:22px">${title}</h1>
    ${body}
    <p style="margin:24px 0 0;font-size:12px;color:#999">Received ${new Date().toISOString()} via sunshinedemolition.com</p>
  </div></body></html>`;

export const row = (k: string, v: string) =>
  `<tr><td style="padding:8px 0;color:#666;width:90px;vertical-align:top">${k}</td><td style="padding:8px 0">${v}</td></tr>`;

/** Sends through Resend's REST API. Returns true on success; failures are logged, never thrown. */
export async function sendMail(opts: { subject: string; text: string; html: string; replyTo?: string }): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO;
  if (!key || !to) return false;
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "content-type": "application/json" },
      body: JSON.stringify({
        from: process.env.QUOTE_FROM || "Sunshine Demolition <onboarding@resend.dev>",
        to: to.split(",").map((s) => s.trim()),
        ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
        subject: opts.subject,
        text: opts.text,
        html: opts.html,
      }),
    });
    if (!r.ok) console.error("MAIL_FAILED", r.status, await r.text());
    return r.ok;
  } catch (e) {
    console.error("MAIL_FAILED", e);
    return false;
  }
}
