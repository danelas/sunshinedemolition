import Image from "next/image";
import Link from "next/link";
import { cities } from "@/lib/geo";
import { services } from "@/lib/services";
import { SiteHeader, SiteFooter, CallBar, CtaBand } from "./chrome";
import { site } from "@/lib/site";
import QuoteForm from "./quote-form";
import { Icon } from "./icons";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <div className="hero">
          <Image src="/photos/project-02.webp" alt="Sunshine Demolition crew loading a trailer with debris in Broward County" fill priority sizes="100vw" />
          <div className="wrap">
            <div>
              <h1>Junk Removal &amp; Demolition in <em>Broward County</em>. Gone today.</h1>
              <p>Furniture, appliances, construction debris, sheds, kitchens, whole-house cleanouts. We show up on time, quote a fair flat price, and leave the space broom-clean.</p>
              <div className="ctas">
                <a className="btn btn-primary" href={site.phoneHref} data-cta="hero-call"><Icon name="phone" size={18} />Call {site.phone}</a>
                <a className="btn btn-ghost" style={{ borderColor: "#fff", color: "#fff" }} href="#quote" data-cta="hero-quote">Get a free quote</a>
              </div>
              <div className="trust"><ul>
                <li><Icon name="tag" size={18} />Free on-site estimates</li>
                <li><Icon name="bolt" size={18} />Same-day &amp; next-day service</li>
                <li><Icon name="shield" size={18} />Licensed &amp; insured</li>
                <li><Icon name="home" size={18} />Residential &amp; commercial</li>
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
              {services.map((s) => (
                <Link className="svc svc-link" href={`/services/${s.slug}`} key={s.slug}>
                  <span className="svc-icon"><Icon name={s.icon} size={28} /></span>
                  <h3>{s.title}</h3><p>{s.short}</p>
                  <span className="svc-more">Learn more<Icon name="arrow" size={16} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="alt" id="how">
          <div className="wrap">
            <h2>How it works</h2>
            <p className="lead">Three steps. No surprises on the invoice.</p>
            <div className="steps">
              <div className="step"><span className="step-icon"><Icon name="camera" size={26} /><b>1</b></span><h3>Call or send photos</h3><p>Text us a few pictures and we&apos;ll give you a price range right away.</p></div>
              <div className="step"><span className="step-icon"><Icon name="clipboard" size={26} /><b>2</b></span><h3>Firm quote on site</h3><p>We confirm the price before we touch anything. Like it? We start right then.</p></div>
              <div className="step"><span className="step-icon"><Icon name="broom" size={26} /><b>3</b></span><h3>Loaded, hauled, swept</h3><p>We do all the lifting and leave the area clean. Pay when the job is done.</p></div>
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
            <ul className="cities">{cities.map((c) => <li key={c.slug}><Link href={`/junk-removal/${c.slug}`}><Icon name="pin" size={15} />{c.name}</Link></li>)}</ul>
          </div>
        </section>

        <CtaBand />
      </main>

      <SiteFooter />

      <CallBar />
    </>
  );
}
