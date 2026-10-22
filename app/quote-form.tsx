"use client";
import { useState } from "react";
import { Icon } from "@/app/icons";

type State = "idle" | "sending" | "ok" | "err";

export default function QuoteForm({ defaultCity = "", defaultService = "Junk Removal" }: { defaultCity?: string; defaultService?: string } = {}) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const r = await fetch("/api/quote", {
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
    <form className="card" id="quote" onSubmit={onSubmit}>
      <h2>Get a free quote</h2>
      <p className="sub">Tell us what needs to go. We reply fast, usually within the hour.</p>
      <div className="row2">
        <div className="field"><label htmlFor="q-name">Name</label><input id="q-name" name="name" required autoComplete="name" /></div>
        <div className="field"><label htmlFor="q-phone">Phone</label><input id="q-phone" name="phone" type="tel" required autoComplete="tel" /></div>
      </div>
      <div className="row2">
        <div className="field"><label htmlFor="q-city">City</label><input id="q-city" name="city" placeholder="Fort Lauderdale" defaultValue={defaultCity} autoComplete="address-level2" /></div>
        <div className="field"><label htmlFor="q-service">Service</label>
          <select id="q-service" name="service" defaultValue={defaultService}>
            <option>Junk Removal</option>
            <option>Appliance & Furniture Removal</option>
            <option>Yard & Storm Debris Removal</option>
            <option>Home, Office & Warehouse Cleanouts</option>
            <option>Hoarder Cleanouts</option>
            <option>Demolition</option>
            <option>Demolition Cleanup</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="field"><label htmlFor="q-details">What needs to go?</label><textarea id="q-details" name="details" placeholder="e.g. old couch, fridge and a small shed in the backyard" /></div>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button className="btn btn-primary" type="submit" disabled={state === "sending"} style={{ width: "100%" }} data-cta="form-submit">
        {state === "sending" ? "Sending…" : "Send my free quote request"}
        {state !== "sending" && <Icon name="arrow" size={18} />}
      </button>
      {state === "ok" && <p className="msg ok">Got it. We&apos;ll call or text you shortly.</p>}
      {state === "err" && <p className="msg err">{error} Please call us instead.</p>}
    </form>
  );
}
