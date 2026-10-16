import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { cities, cityBySlug } from "@/lib/geo";
import { services } from "@/lib/services";
import { SiteHeader, SiteFooter, CallBar, CtaBand, Faq, faqSchema } from "@/app/chrome";
import QuoteForm from "@/app/quote-form";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const c = cityBySlug(city);
  if (!c) return {};
  const title = `Junk Removal & Demolition in ${c.name}, FL | ${site.name}`;
  const description = `Same-day junk removal, cleanouts and light demolition in ${c.name}, Florida. Free on-site estimates, flat pricing, licensed and insured. Call ${site.phone}.`;
  return {
    title,
    description,
    alternates: { canonical: `${site.url}/junk-removal/${c.slug}` },
    openGraph: { title, description, url: `${site.url}/junk-removal/${c.slug}`, images: ["/photos/project-02.webp"] },
  };
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const c = cityBySlug(city);
  if (!c) notFound();

  const faqs = [
    { q: `How fast can you get to ${c.name}?`, a: `Usually same day or next day. ${c.name} is inside our core Broward County service area, so a crew is never far away. Call before noon and we can often come out that afternoon.` },
    { q: `What does junk removal cost in ${c.name}?`, a: `Pricing is by volume, not by the hour. We give a firm flat price on site before we start, and it covers labor, hauling, disposal fees and cleanup. Single items start at our minimum charge; a full trailer load is our maximum.` },
    { q: `Do you do demolition in ${c.name} too?`, a: `Yes. Sheds, fences, decks, kitchens, bathrooms, tile floors and other light demolition, with all debris hauled away the same day.` },
    { q: `Which ${c.name} zip codes do you serve?`, a: `All of them, including ${c.zips.join(", ")}.` },
  ];

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Junk removal and demolition",
      provider: { "@type": "LocalBusiness", name: site.name, telephone: "+19548719578", url: site.url },
      areaServed: { "@type": "City", name: `${c.name}, FL` },
      url: `${site.url}/junk-removal/${c.slug}`,
    },
    faqSchema(faqs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: `Junk Removal in ${c.name}`, item: `${site.url}/junk-removal/${c.slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <SiteHeader />
      <main>
        <div className="hero hero-sub">
          <div className="wrap">
            <div>
              <p className="crumb"><Link href="/">Home</Link> › {c.name}</p>
              <h1>Junk Removal &amp; Demolition in <em>{c.name}, FL</em></h1>
              <p>{c.blurb}</p>
              <div className="ctas">
                <a className="btn btn-primary" href={site.phoneHref} data-cta="hero-call">Call {site.phone}</a>
                <a className="btn btn-ghost" style={{ borderColor: "#fff", color: "#fff" }} href="#quote" data-cta="hero-quote">Get a free quote</a>
              </div>
              <div className="trust"><ul>
                <li>✔ Same-day service in {c.name}</li>
                <li>✔ Free on-site estimates</li>
                <li>✔ Licensed &amp; insured</li>
              </ul></div>
            </div>
            <QuoteForm defaultCity={c.name} />
          </div>
        </div>

        <section>
          <div className="wrap prose">
            <h2>Local crews who know {c.name}</h2>
            <p>{c.local}</p>
            <p>Whatever you need gone, the process is the same: call or text us photos, get a price range right away, and we confirm a firm flat price on site before we lift a thing. We do all the loading, haul everything to licensed Broward County facilities, donate and recycle what we can, and sweep up before we go.</p>
          </div>
        </section>

        <section className="alt">
          <div className="wrap">
            <h2>What we handle in {c.name}</h2>
            <p className="lead">Residential and commercial. One crew, one visit, one price.</p>
            <div className="grid">
              {services.map((s) => (
                <Link className="svc svc-link" href={`/services/${s.slug}`} key={s.slug}>
                  <h3>{s.title}</h3><p>{s.short}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <h2>{c.name} junk removal questions</h2>
            <Faq faqs={faqs} />
          </div>
        </section>

        <section className="alt">
          <div className="wrap">
            <h2>Also serving nearby</h2>
            <ul className="cities">
              {c.nearby.map((slug) => {
                const n = cityBySlug(slug);
                return n ? <li key={slug}><Link href={`/junk-removal/${n.slug}`}>{n.name}</Link></li> : null;
              })}
              <li><Link href="/#areas">All of Broward County</Link></li>
            </ul>
          </div>
        </section>

        <CtaBand city={c.name} />
      </main>
      <SiteFooter />
      <CallBar />
    </>
  );
}
