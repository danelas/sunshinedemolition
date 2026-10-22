import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { guides, guideBlurb } from "@/lib/guides";
import { SiteHeader, SiteFooter, CallBar, CtaBand } from "@/app/chrome";
import { Icon } from "@/app/icons";

export const metadata: Metadata = {
  title: `Demolition & Junk Removal Guides | ${site.name}`,
  description: "Straight answers on demolition types, costs, permits and cleanup from a Broward County junk removal and light demolition crew.",
  alternates: { canonical: `${site.url}/guides` },
};

export default function GuidesIndex() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Demolition & Junk Removal Guides",
    url: `${site.url}/guides`,
    hasPart: guides.map((g) => ({ "@type": "Article", headline: g.title, url: `${site.url}/guides/${g.slug}` })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <SiteHeader />
      <main>
        <div className="hero hero-sub">
          <div className="wrap">
            <div>
              <p className="crumb"><Link href="/">Home</Link> › Guides</p>
              <h1>Demolition <em>guides</em></h1>
              <p>Straight answers on demolition types, costs, permits and cleanup, from the crew that does this work across Broward County every day.</p>
              <div className="ctas">
                <a className="btn btn-primary" href={site.phoneHref} data-cta="hero-call"><Icon name="phone" size={18} />Call {site.phone}</a>
                <a className="btn btn-ghost" style={{ borderColor: "#fff", color: "#fff" }} href={site.smsHref} data-cta="hero-text"><Icon name="message" size={18} />Text us photos</a>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="wrap">
            <div className="grid guides-grid">
              {guides.map((g) => (
                <Link className="svc svc-link" href={`/guides/${g.slug}`} key={g.slug}>
                  <span className="svc-icon"><Icon name={g.icon} size={28} /></span>
                  <h3>{g.title}</h3>
                  <p>{guideBlurb(g)}</p>
                  <span className="svc-more">Read the guide<Icon name="arrow" size={16} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
      <CallBar />
    </>
  );
}
