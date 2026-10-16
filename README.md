# sunshinedemolition.com

Junk removal & demolition, Broward County FL. Next.js 15 on Vercel.

**Conversion action:** a quote request, either a phone call to (954) 871-9578 or the quote form (`/api/quote`).
Every CTA carries a `data-cta` attribute for analytics.

## Run

    npm install
    npm run dev

## Env (Vercel project settings)

See `.env.example`. Without `RESEND_API_KEY` + `QUOTE_TO` the form still succeeds and the lead is written to the Vercel function log as `QUOTE_LEAD`.

## Domain

Nameservers point to Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`). Mail stays on Bluehost via the `mail` A record + MX in Vercel DNS.
