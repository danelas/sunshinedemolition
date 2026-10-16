import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { cities } from "@/lib/geo";
import { services, serviceBySlug } from "@/lib/services";
import { SiteHeader, SiteFooter, CallBar, CtaBand, Faq, faqSchema } from "@/app/chrome";
import QuoteForm from "@/app/quote-form";

type Props = { params: Promise<{ service: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  const s = serviceBySlug(service);
  if (!s) return {};
  const title = `${s.title} in Broward County, FL | ${site.name}`;
  const description = `${s.short} Free estimates and same-day service across Broward County. Call ${site.phone}.`;
  return {
    title,
    description,
    alternates: { canonical: `${site.url}/services/${s.slug}` },
    openGraph: { title, description, url: `${site.url}/services/${s.slug}`, images: ["/photos/project-02.webp"] },
  };
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const s = serviceBySlug(service);
  if (!s) notFound();

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.title,
      serviceType: s.title,
      description: s.short,
      provider: { "@type": "LocalBusiness", name: site.name, telephone: "+19548719578", url: site.url },
      areaServed: { "@type": "AdministrativeArea", name: "Broward County, FL" },
      url: `${site.url}/services/${s.slug}`,
    },
    faqSchema(s.faqs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: s.title, item: `${site.url}/services/${s.slug}` },
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
              <p className="crumb"><Link href="/">Home</Link> › Services › {s.title}</p>
              <h1>{s.title} in <em>Broward County</em></h1>
              <p>{s.short}</p>
              <div className="ctas">
                <a className="btn btn-primary" href={site.phoneHref} data-cta="hero-call">Call {site.phone}</a>
                <a className="btn btn-ghost" style={{ borderColor: "#fff", color: "#fff" }} href="#quote" data-cta="hero-quote">Get a free quote</a>
              </div>
            </div>
            <QuoteForm defaultService={s.title} />
          </div>
        </div>

        <section>
          <div className="wrap prose">
            <h2>How our {s.title.toLowerCase()} service works</h2>
            <p>{s.intro}</p>
          </div>
        </section>

        <section className="alt">
          <div className="wrap">
            <h2>What&apos;s included</h2>
            <ul className="checks">
              {s.items.map((i) => <li key={i}>✔ {i}</li>)}
            </ul>
          </div>
        </section>

        <section>
          <div className="wrap">
            <h2>Common questions</h2>
            <Faq faqs={s.faqs} />
          </div>
        </section>

        <section className="alt">
          <div className="wrap">
            <h2>{s.title} across Broward County</h2>
            <ul className="cities">
              {cities.map((c) => <li key={c.slug}><Link href={`/junk-removal/${c.slug}`}>{c.name}</Link></li>)}
            </ul>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
      <CallBar />
    </>
  );
}
