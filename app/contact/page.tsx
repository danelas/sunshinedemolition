import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { SiteHeader, SiteFooter, CallBar } from "@/app/chrome";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: `Contact ${site.name} | Junk Removal & Demolition, Hollywood FL`,
  description: `Call or text ${site.phone}, email ${site.email}, or send a message. Open ${site.hours}. Serving all of Broward County from Hollywood, FL.`,
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${site.url}/contact`,
    mainEntity: { "@id": `${site.url}/#business` },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <SiteHeader />
      <main>
        <div className="hero hero-sub">
          <div className="wrap">
            <div>
              <p className="crumb"><Link href="/">Home</Link> › Contact</p>
              <h1>Talk to <em>{site.name}</em></h1>
              <p>Fastest answer is a call or text. For anything else, the form on this page lands in our inbox and we reply the same day.</p>
              <div className="ctas">
                <a className="btn btn-primary" href={site.phoneHref} data-cta="hero-call">Call {site.phone}</a>
                <a className="btn btn-ghost" style={{ borderColor: "#fff", color: "#fff" }} href={site.smsHref} data-cta="hero-text">Text us</a>
              </div>
              <ul className="contact-facts">
                <li><strong>Phone</strong><a href={site.phoneHref}>{site.phone}</a></li>
                <li><strong>Email</strong><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li><strong>Hours</strong><span>{site.hours}</span></li>
                <li><strong>Yard</strong><a href={site.socials.googleBusiness} target="_blank" rel="noopener">{site.address.street}, {site.address.city}, {site.address.region} {site.address.zip}</a></li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>

        <section>
          <div className="wrap prose">
            <h2>Need a price instead?</h2>
            <p>If you already know what needs to go, skip the message and <Link href="/#quote">request a free quote</Link>. Add a few photos by text to {site.phone} and we&apos;ll send a price range right away.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <CallBar />
    </>
  );
}
