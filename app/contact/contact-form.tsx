"use client";
import { useState } from "react";
import { Icon } from "@/app/icons";

type State = "idle" | "sending" | "ok" | "err";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!r.ok) {
        const j = await r.json().catch(() => ({}));
        throw new Error(j?.error || "Something went wrong.");
      }
      setState("ok");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("err");
    }
  }

  return (
    <form className="card" id="contact" onSubmit={onSubmit}>
      <h2>Send us a message</h2>
      <p className="sub">Questions, scheduling, commercial accounts, anything. We answer the same day.</p>
      <div className="row2">
        <div className="field"><label htmlFor="c-name">Name</label><input id="c-name" name="name" required autoComplete="name" /></div>
        <div className="field"><label htmlFor="c-phone">Phone</label><input id="c-phone" name="phone" type="tel" autoComplete="tel" /></div>
      </div>
      <div className="row2">
        <div className="field"><label htmlFor="c-email">Email</label><input id="c-email" name="email" type="email" autoComplete="email" /></div>
        <div className="field"><label htmlFor="c-subject">Subject</label><input id="c-subject" name="subject" placeholder="e.g. Estate cleanout next week" /></div>
      </div>
      <div className="field"><label htmlFor="c-message">Message</label><textarea id="c-message" name="message" required style={{ minHeight: 120 }} /></div>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn btn-primary" type="submit" disabled={state === "sending"} style={{ width: "100%" }} data-cta="contact-submit">
        {state === "sending" ? "Sending…" : "Send message"}
        {state !== "sending" && <Icon name="arrow" size={18} />}
      </button>
      {state === "ok" && <p className="msg ok">Got it. We&apos;ll get back to you shortly.</p>}
      {state === "err" && <p className="msg err">{error} You can also call us directly.</p>}
    </form>
  );
}
