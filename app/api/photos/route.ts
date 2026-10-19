/**
 * Photo/video drop for the social agent (danelas/sunshinedemolition-social-agent).
 *
 * The crew opens /photos?k=<key>, picks files, and the browser uploads them
 * straight into a PRIVATE Supabase Storage bucket. This route never sees the
 * bytes (a phone video can be 300 MB; Vercel caps a request body at 4.5 MB);
 * it only checks the key and hands back one signed upload URL per file. The
 * daily GitHub Action pulls the bucket, picks, edits, posts, and deletes what
 * it is done with.
 *
 * Env (Vercel project settings):
 *   PHOTO_UPLOAD_KEY           the secret in the crew's link
 *   SUPABASE_URL               project holding the bucket
 *   SUPABASE_SERVICE_ROLE_KEY  signs the upload URLs; never sent to the browser
 */
import { NextResponse } from "next/server";
import { randomBytes, timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";

const BUCKET = process.env.PHOTO_BUCKET || "sunshine-demolition-inbox";
const MAX_FILES = 60;
const MAX_BYTES = 500 * 1024 * 1024; // the bucket's own file_size_limit
const ALLOWED = /\.(jpe?g|png|heic|heif|mp4|mov|m4v|cr2|cr3|nef|arw|dng)$/i;

function keyOk(given: unknown): boolean {
  const want = process.env.PHOTO_UPLOAD_KEY || "";
  if (!want || typeof given !== "string") return false;
  const a = Buffer.from(given);
  const b = Buffer.from(want);
  return a.length === b.length && timingSafeEqual(a, b);
}

// Filenames land in a storage path and later on a Linux runner's disk.
const safeName = (n: unknown) => String(n ?? "").split(/[\\/]/).pop()!.replace(/[^A-Za-z0-9._-]+/g, "_").slice(-80);

async function signUpload(path: string): Promise<string> {
  const base = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!base || !key) throw new Error("storage not configured");
  const r = await fetch(`${base}/storage/v1/object/upload/sign/${BUCKET}/${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, apikey: key, "Content-Type": "application/json" },
    body: "{}",
  });
  if (!r.ok) throw new Error(`sign ${r.status}: ${(await r.text()).slice(0, 200)}`);
  const { url } = (await r.json()) as { url: string };
  return `${base}/storage/v1${url}`;
}

export async function POST(req: Request) {
  const headers = { "Cache-Control": "no-store" };
  let body: { k?: unknown; files?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400, headers });
  }
  if (!keyOk(body.k)) return NextResponse.json({ error: "This upload link is not valid." }, { status: 401, headers });

  // A bare key check lets the page say "link works" before anyone picks files.
  if (!Array.isArray(body.files)) return NextResponse.json({ ok: true }, { headers });

  const files = (body.files as { name?: unknown; size?: unknown }[]).slice(0, MAX_FILES);
  const day = new Date().toISOString().slice(0, 10);
  try {
    const uploads = await Promise.all(
      files.map(async (f) => {
        const name = safeName(f?.name);
        if (!ALLOWED.test(name)) return { name: f?.name, error: "Not a photo or video" };
        if (Number(f?.size) > MAX_BYTES) return { name: f?.name, error: "Over 500 MB" };
        const path = `${day}/${randomBytes(4).toString("hex")}-${name}`;
        return { name: f?.name, url: await signUpload(path) };
      }),
    );
    return NextResponse.json({ uploads }, { headers });
  } catch (err) {
    console.error("photos:", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Could not start the upload. Try again in a minute." }, { status: 502, headers });
  }
}
