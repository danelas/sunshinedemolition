"use client";
// Crew upload page. Files go straight from the phone into the private
// Supabase bucket via signed URLs from /api/photos; this page never holds them.
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/lib/site";

type Row = { id: number; name: string; size: number; pct: number; state: "waiting" | "sending" | "done" | "err"; msg?: string };
type Signed = { name?: string; url?: string; error?: string };

const PARALLEL = 2; // videos are big; two at a time keeps the phone's radio honest
const fmt = (b: number) => (b > 1048576 ? (b / 1048576).toFixed(1) + " MB" : Math.ceil(b / 1024) + " KB");

export default function Uploader() {
  const key = useSearchParams().get("k") || "";
  const [linkOk, setLinkOk] = useState<boolean | null>(key ? null : false);
  const [rows, setRows] = useState<Row[]>([]);
  const [over, setOver] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    if (!key) return;
    api({}).then(() => setLinkOk(true)).catch((e) => setLinkOk(e?.status === 401 ? false : true));
  }, [key]);

  useEffect(() => {
    const h = (e: BeforeUnloadEvent) => { if (rows.some((r) => r.state === "sending" || r.state === "waiting")) e.preventDefault(); };
    window.addEventListener("beforeunload", h);
    return () => window.removeEventListener("beforeunload", h);
  }, [rows]);

  async function api(body: Record<string, unknown>) {
    const r = await fetch("/api/photos", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ k: key, ...body }) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw Object.assign(new Error(j.error || "Something went wrong."), { status: r.status });
    return j;
  }

  const patch = (id: number, p: Partial<Row>) => setRows((rs) => rs.map((r) => (r.id === id ? { ...r, ...p } : r)));

  function put(url: string, file: File, onProgress: (p: number) => void) {
    return new Promise<void>((resolve, reject) => {
      const x = new XMLHttpRequest();
      x.open("PUT", url);
      x.setRequestHeader("Content-Type", file.type || "application/octet-stream");
      x.upload.onprogress = (e) => e.lengthComputable && onProgress(Math.round((e.loaded / e.total) * 100));
      x.onload = () => (x.status >= 200 && x.status < 300 ? resolve() : reject(new Error("Failed (" + x.status + ")")));
      x.onerror = () => reject(new Error("Connection lost"));
      x.send(file);
    });
  }

  async function send(list: FileList | File[]) {
    const files = [...list].filter((f) => f.size > 0);
    if (!files.length) return;
    const ids = files.map(() => nextId.current++);
    setRows((rs) => [...files.map((f, i) => ({ id: ids[i], name: f.name, size: f.size, pct: 0, state: "waiting" as const })), ...rs]);
    let signed: Signed[];
    try {
      signed = (await api({ files: files.map((f) => ({ name: f.name, size: f.size })) })).uploads;
    } catch (e) {
      ids.forEach((id) => patch(id, { state: "err", msg: e instanceof Error ? e.message : "Failed" }));
      return;
    }
    let i = 0;
    const worker = async () => {
      while (i < files.length) {
        const n = i++;
        const s = signed[n] || {};
        if (!s.url) { patch(ids[n], { state: "err", msg: s.error || "Skipped" }); continue; }
        patch(ids[n], { state: "sending" });
        try {
          await put(s.url, files[n], (pct) => patch(ids[n], { pct }));
          patch(ids[n], { state: "done", pct: 100 });
        } catch (e) {
          patch(ids[n], { state: "err", msg: e instanceof Error ? e.message : "Failed" });
        }
      }
    };
    await Promise.all(Array.from({ length: PARALLEL }, worker));
  }

  const done = rows.filter((r) => r.state === "done").length;
  const failed = rows.filter((r) => r.state === "err").length;
  const busy = rows.some((r) => r.state === "sending" || r.state === "waiting");

  if (linkOk === false) {
    return (
      <main className="up">
        <div className="up-blocked"><h1>Link not working</h1><p>Please use the full link you were sent.</p></div>
        <style>{css}</style>
      </main>
    );
  }

  return (
    <main className="up">
      <header>
        <div className="brand"><span />{site.name}</div>
        <h1>Send today&apos;s job</h1>
        <p className="sub">Photos and short videos go to our Facebook, Google and YouTube. We post the best of each job.</p>
      </header>

      <label
        className={"drop" + (over ? " over" : "")}
        onDragEnter={(e) => { e.preventDefault(); setOver(true); }}
        onDragOver={(e) => { e.preventDefault(); setOver(true); }}
        onDragLeave={(e) => { e.preventDefault(); setOver(false); }}
        onDrop={(e) => { e.preventDefault(); setOver(false); send(e.dataTransfer.files); }}
      >
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 7h3l2-2.5h6L17 7h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" /><circle cx="12" cy="13" r="4" /></svg>
        <strong>Tap to choose photos or a video</strong>
        <span>Before · during · loaded trailer · after. Pick as many as you like.</span>
        <input ref={input} type="file" multiple accept="image/*,video/mp4,video/quicktime,.mp4,.mov,.m4v,.heic,.heif" onChange={(e) => { if (e.target.files) send(e.target.files); e.target.value = ""; }} />
      </label>

      {rows.length > 0 && (
        <p className="summary">
          {busy
            ? `Sending ${done + failed + 1} of ${rows.length}… keep this page open.`
            : `${done} file${done === 1 ? "" : "s"} sent. Thank you!${failed ? ` ${failed} did not go — try those again.` : ""}`}
        </p>
      )}
      <ul>
        {rows.map((r) => (
          <li key={r.id} className={r.state}>
            <div className="row"><span className="name">{r.name} · {fmt(r.size)}</span>
              <span className={"state " + r.state}>{r.state === "done" ? "Sent ✓" : r.state === "err" ? r.msg : r.state === "sending" ? r.pct + "%" : "Waiting"}</span></div>
            <div className="bar"><i style={{ width: r.pct + "%" }} /></div>
          </li>
        ))}
      </ul>
      {rows.length > 0 && !busy && <button type="button" className="btn btn-dark again" onClick={() => input.current?.click()}>Send more</button>}

      <div className="note">
        <b>Good to know:</b> nothing is posted straight away. Blurry or dark shots are skipped automatically.
        A 10–60 second clip of the crew working makes the best video. Please avoid faces of customers, house numbers and license plates.
      </div>
      <style>{css}</style>
    </main>
  );
}

const css = `
.up { max-width: 560px; margin: 0 auto; padding: 28px 16px 56px; }
.up header { text-align: center; margin-bottom: 22px; }
.up .brand { justify-content: center; margin-bottom: 14px; }
.up h1 { font-size: 1.9rem; font-weight: 900; margin: 0 0 6px; }
.up .sub { color: var(--ink-2); margin: 0; }
.up .drop { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; min-height: 200px; padding: 24px;
  border: 3px dashed #d9c75a; border-radius: 18px; background: #fffbe6; text-align: center; cursor: pointer; transition: border-color .15s, background .15s; color: var(--ink); }
.up .drop:hover, .up .drop.over { border-color: var(--yellow-dark); background: #fff4bf; }
.up .drop strong { font-size: 1.15rem; }
.up .drop span { color: var(--ink-2); font-size: .92rem; }
.up .drop svg { color: var(--yellow-dark); }
.up input[type=file] { display: none; }
.up .summary { margin: 18px 4px 8px; font-weight: 800; }
.up ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
.up li { background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 10px 12px; }
.up .row { display: flex; justify-content: space-between; gap: 10px; font-size: .9rem; }
.up .name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.up .state { flex: none; color: var(--ink-2); }
.up .state.done { color: #157a3c; font-weight: 800; }
.up .state.err { color: #b3261e; font-weight: 800; }
.up .bar { height: 5px; background: var(--line); border-radius: 3px; margin-top: 7px; overflow: hidden; }
.up .bar i { display: block; height: 100%; background: var(--yellow-dark); transition: width .2s; }
.up li.done .bar i { background: #157a3c; }
.up .again { margin: 18px auto 0; display: flex; }
.up .note { margin-top: 22px; padding: 14px 16px; border-radius: 12px; background: var(--paper-2); border: 1px solid var(--line); color: var(--ink-2); font-size: .92rem; }
.up .note b { color: var(--ink); }
.up-blocked { text-align: center; padding: 60px 16px; }
.up-blocked h1 { color: #b3261e; }
`;
