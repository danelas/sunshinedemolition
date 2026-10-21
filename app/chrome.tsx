import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/geo";

export function SiteHeader() {
  return (
    <header className="hdr">
      <div className="wrap">
        <Link className="brand" href="/"><img src={site.logo} alt={site.name} width={56} height={41} /><span className="brand-text">{site.name}</span></Link>
        <nav>
          <Link href="/#services">Services</Link>
          <Link href="/#work">Our Work</Link>
          <Link href="/#areas">Service Area</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/#quote">Free Quote</Link>
        </nav>
        <a className="call" href={site.phoneHref} data-cta="header-call">📞 {site.phone}</a>
      </div>
    </header>
  );
}

export function CtaBand({ city }: { city?: string }) {
  return (
    <div className="cta-band">
      <div className="wrap">
        <div>
          <h2>Ready to get rid of it{city ? ` in ${city}` : ""}?</h2>
          <p>Call now for a free estimate. Most jobs done same day or next day.</p>
        </div>
        <a className="btn btn-dark" href={site.phoneHref} data-cta="band-call">Call {site.phone}</a>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div><strong>{site.name}</strong> · {site.tagline}</div>
        <div><a href={site.phoneHref}>{site.phone}</a> · {site.address.street}, {site.address.city}, {site.address.region} {site.address.zip}</div>
        <div>Open {site.hours} · <a href={`mailto:${site.email}`}>{site.email}</a> · <Link href="/contact">Contact</Link></div>
        <div className="foot-links">
          <strong>Services:</strong>{" "}
          {services.map((s, i) => (
            <span key={s.slug}>{i > 0 && " · "}<Link href={`/services/${s.slug}`}>{s.title}</Link></span>
          ))}
        </div>
        <div className="foot-links">
          <strong>Areas:</strong>{" "}
          {cities.map((c, i) => (
            <span key={c.slug}>{i > 0 && " · "}<Link href={`/junk-removal/${c.slug}`}>{c.name}</Link></span>
          ))}
        </div>
        <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}

export function CallBar() {
  return (
    <div className="callbar">
      <a className="btn btn-primary" href={site.phoneHref} data-cta="bar-call">📞 Call now</a>
      <a className="btn btn-dark" href="#quote" data-cta="bar-quote">Free quote</a>
    </div>
  );
}

export function Faq({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {faqs.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});
