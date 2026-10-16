import Image from "next/image";
import { site } from "@/lib/site";
import QuoteForm from "./quote-form";

export default function Home() {
  return (
    <>
      <header className="hdr">
        <div className="wrap">
          <a className="brand" href="#top"><span />{site.name}</a>
          <nav>
            <a href="#services">Services</a>
            <a href="#work">Our Work</a>
            <a href="#areas">Service Area</a>
            <a href="#quote">Free Quote</a>
          </nav>
          <a className="call" href={site.phoneHref} data-cta="header-call">📞 {site.phone}</a>
        </div>
      </header>

      <main id="top">
        <div className="hero">
          <Image src="/photos/project-02.webp" alt="Sunshine Demolition crew loading a trailer with debris in Broward County" fill priority sizes="100vw" />
          <div className="wrap">
            <div>
              <h1>Junk Removal &amp; Demolition in <em>Broward County</em>. Gone today.</h1>
              <p>Furniture, appliances, construction debris, sheds, kitchens, whole-house cleanouts. We show up on time, quote a fair flat price, and leave the space broom-clean.</p>
              <div className="ctas">
                <a className="btn btn-primary" href={site.phoneHref} data-cta="hero-call">Call {site.phone}</a>
                <a className="btn btn-ghost" style={{ borderColor: "#fff", color: "#fff" }} href="#quote" data-cta="hero-quote">Get a free quote</a>
              </div>
              <div className="trust"><ul>
                <li>✔ Free on-site estimates</li>
                <li>✔ Same-day &amp; next-day service</li>
                <li>✔ Licensed &amp; insured</li>
                <li>✔ Residential &amp; commercial</li>
              </ul></div>
            </div>
            <QuoteForm />
          </div>
        </div>

        <section id="services">
          <div className="wrap">
            <h2>What we haul and tear out</h2>
            <p className="lead">If it needs to go, we take it. One crew, one visit, one flat price. Donatable and recyclable items are kept out of the landfill whenever possible.</p>
            <div className="grid">
              {site.services.map((s) => (
                <div className="svc" key={s.title}><h3>{s.title}</h3><p>{s.desc}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="alt" id="how">
          <div className="wrap">
            <h2>How it works</h2>
            <p className="lead">Three steps. No surprises on the invoice.</p>
            <div className="steps">
              <div className="step"><b>1</b><h3>Call or send photos</h3><p>Text us a few pictures and we&apos;ll give you a price range right away.</p></div>
              <div className="step"><b>2</b><h3>Firm quote on site</h3><p>We confirm the price before we touch anything. Like it? We start right then.</p></div>
              <div className="step"><b>3</b><h3>Loaded, hauled, swept</h3><p>We do all the lifting and leave the area clean. Pay when the job is done.</p></div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <h2>Recent jobs</h2>
            <p className="lead">Real crews, real trailers, real South Florida jobs.</p>
            <div className="photos">
              <img src="/photos/project-01.webp" alt="Junk removal job in Broward County" loading="lazy" />
              <img src="/photos/project-03.webp" alt="Demolition debris cleanup" loading="lazy" />
              <img src="/photos/project-04.webp" alt="Loaded trailer after a property cleanout" loading="lazy" />
              <img src="/photos/project-02.webp" alt="Sunshine Demolition crew member securing a load" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="alt" id="areas">
          <div className="wrap">
            <h2>Serving all of {site.area}</h2>
            <p className="lead">Based in {site.city}. Fast service across the county, including:</p>
            <ul className="cities">{site.cities.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </section>

        <div className="cta-band">
          <div className="wrap">
            <div><h2>Ready to get rid of it?</h2><p>Call now for a free estimate. Most jobs done same day or next day.</p></div>
            <a className="btn btn-dark" href={site.phoneHref} data-cta="band-call">Call {site.phone}</a>
          </div>
        </div>
      </main>

      <footer>
        <div className="wrap">
          <div><strong>{site.name}</strong> · {site.tagline}</div>
          <div><a href={site.phoneHref}>{site.phone}</a> · {site.city}</div>
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
        </div>
      </footer>

      <div className="callbar">
        <a className="btn btn-primary" href={site.phoneHref} data-cta="bar-call">📞 Call now</a>
        <a className="btn btn-dark" href="#quote" data-cta="bar-quote">Free quote</a>
      </div>
    </>
  );
}
