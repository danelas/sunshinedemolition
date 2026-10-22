import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import { guides, guideBySlug } from "@/lib/guides";
import { serviceBySlug } from "@/lib/services";
import { SiteHeader, SiteFooter, CallBar, CtaBand, Faq, faqSchema } from "@/app/chrome";
import QuoteForm from "@/app/quote-form";
import { Icon } from "@/app/icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) return {};
  const url = `${site.url}/guides/${g.slug}`;
  return {
    title: `${g.metaTitle} | ${site.name}`,
    description: g.description,
    alternates: { canonical: url },
    openGraph: { title: g.title, description: g.description, url, type: "article", images: ["/og.jpg"] },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = guideBySlug(slug);
  if (!g) notFound();
  const related = serviceBySlug(g.relatedService);
  const other = guides.filter((x) => x.slug !== g.slug);
  const url = `${site.url}/guides/${g.slug}`;

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: g.title,
      description: g.description,
      url,
      mainEntityOfPage: url,
      image: `${site.url}/og.jpg`,
      datePublished: g.updated,
      dateModified: g.updated,
      author: { "@type": "Organization", name: site.name, url: site.url },
      publisher: { "@type": "Organization", name: site.name, logo: { "@type": "ImageObject", url: `${site.url}${site.logo}` } },
      about: { "@id": `${site.url}/#business` },
    },
    faqSchema(g.faqs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: g.title, item: url },
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
              <p className="crumb"><Link href="/">Home</Link> › Guides › {g.title.replace(/\?$/, "")}</p>
              <span className="hero-icon"><Icon name={g.icon} size={34} /></span>
              <h1>{g.title}</h1>
              <p>{g.description.split(". ")[0]}.</p>
              <div className="ctas">
                <a className="btn btn-primary" href={site.phoneHref} data-cta="hero-call"><Icon name="phone" size={18} />Call {site.phone}</a>
                <a className="btn btn-ghost" style={{ borderColor: "#fff", color: "#fff" }} href="#quote" data-cta="hero-quote">Get a free quote</a>
              </div>
            </div>
            <QuoteForm defaultService={g.formService} />
          </div>
        </div>

        <article className="guide">
          <div className="wrap guide-wrap">
            <aside className="answer" aria-label="Quick answer">
              <p className="answer-label"><Icon name="bolt" size={16} />Quick answer</p>
              <p>{g.quickAnswer}</p>
            </aside>

            {g.sections.map((sec, i) => (
              <section className="guide-sec" key={sec.heading}>
                <h2>{sec.heading}</h2>
                {sec.body?.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
                {sec.list && (
                  <ul className={`guide-list${sec.list.some((x) => x.title) ? " guide-list-cards" : ""}`}>
                    {sec.list.map((li) => (
                      <li key={li.text.slice(0, 40)}>
                        <span className="gl-icon"><Icon name={li.icon ?? "check"} size={20} /></span>
                        <span>{li.title && <strong>{li.title}</strong>}{li.text}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {sec.table && (
                  <div className="table-scroll">
                    <table className="compare">
                      <thead><tr>{sec.table.head.map((h) => <th key={h || "blank"} scope="col">{h}</th>)}</tr></thead>
                      <tbody>
                        {sec.table.rows.map((r) => (
                          <tr key={r[0]}>{r.map((c, j) => (j === 0 ? <th key={j} scope="row">{c}</th> : <td key={j}>{c}</td>))}</tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {i === 1 && (
                  <div className="inline-cta">
                    <div><strong>Have a job like this?</strong> Text a few photos and get a price range right away.</div>
                    <a className="btn btn-primary" href={site.smsHref} data-cta="guide-inline-text"><Icon name="message" size={18} />Text {site.phone}</a>
                  </div>
                )}
              </section>
            ))}

            <section className="guide-sec">
              <h2>Common questions</h2>
              <Faq faqs={g.faqs} />
            </section>

            <section className="guide-sec guide-related">
              <h2>Keep reading</h2>
              <div className="grid">
                {related && (
                  <Link className="svc svc-link" href={`/services/${related.slug}`}>
                    <span className="svc-icon"><Icon name={related.icon} size={28} /></span>
                    <h3>{related.title} service</h3><p>{related.short}</p>
                    <span className="svc-more">See the service<Icon name="arrow" size={16} /></span>
                  </Link>
                )}
                {other.map((o) => (
                  <Link className="svc svc-link" href={`/guides/${o.slug}`} key={o.slug}>
                    <span className="svc-icon"><Icon name={o.icon} size={28} /></span>
                    <h3>{o.title}</h3><p>{o.quickAnswer.split(". ")[0]}.</p>
                    <span className="svc-more">Read the guide<Icon name="arrow" size={16} /></span>
                  </Link>
                ))}
              </div>
              <p className="guide-updated">Updated {new Date(g.updated + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} by the {site.name} crew, {site.address.city}, FL.</p>
            </section>
          </div>
        </article>

        <CtaBand />
      </main>
      <SiteFooter />
      <CallBar />
    </>
  );
}
