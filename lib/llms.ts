import { site } from "./site";
import { cities } from "./geo";
import { services } from "./services";
import { guides } from "./guides";

const U = site.url;

export function llmsIndex(): string {
  return `# ${site.name}

> ${site.name} is a junk removal and light demolition company serving all of Broward County, Florida, based at 2405 N 21st Ave, Hollywood, FL 33020. Open 6 AM to 11 PM, seven days a week. Same-day and next-day service, free on-site estimates, flat volume-based pricing, licensed and insured. Residential and commercial.

## How to contact or book

- Phone (call or text): ${site.phone} (${site.phoneHref})
- Email: ${site.email}
- Contact page / general inquiries: ${U}/contact (POST JSON {name, email, phone, subject, message} to ${U}/api/contact)
- Address: ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.zip}
- Hours: ${site.hours}
- Payment: all major methods accepted (cash, cards, Zelle, Venmo, Cash App, Apple Pay, check)
- Profiles: ${Object.values(site.socials).filter(Boolean).join(", ")}
- Free quote form: ${U}/#quote
- Quote API (POST JSON {name, phone, city, service, details}): ${U}/api/quote
- Service area: Broward County, FL, including ${cities.map((c) => c.name).join(", ")}

## Services

${services.map((s) => `- [${s.title}](${U}/services/${s.slug}): ${s.short}`).join("\n")}

## Guides

All guides: ${U}/guides

${guides.map((g) => `- [${g.title}](${U}/guides/${g.slug}): ${g.quickAnswer}`).join("\n")}

## Service area pages

${cities.map((c) => `- [Junk Removal & Demolition in ${c.name}, FL](${U}/junk-removal/${c.slug}): ${c.blurb}`).join("\n")}

## Key facts

- Pricing: by volume (how much of the trailer the items fill), firm price quoted on site before work starts; includes labor, hauling, disposal fees and cleanup.
- Minimum: single-item pickups accepted.
- Disposal: usable items donated when possible, metal and clean wood recycled, remainder to licensed Broward County facilities. Appliances with refrigerant handled legally.
- Demolition scope: sheds, fences, decks, kitchens, bathrooms, interior non-load-bearing walls, tile and flooring, pool decks, hot tubs, above-ground pools.
- Not offered: tree cutting (downed limbs are hauled), hazardous waste, structural demolition requiring engineering.

## Other resources

- [Full site content in one file](${U}/llms-full.txt)
- [Sitemap](${U}/sitemap.xml)
`;
}

export function llmsFull(): string {
  const svc = services
    .map(
      (s) => `## ${s.title}
URL: ${U}/services/${s.slug}

${s.intro}

What's included:
${s.items.map((i) => `- ${i}`).join("\n")}

FAQ:
${s.faqs.map((f) => `- Q: ${f.q}\n  A: ${f.a}`).join("\n")}
`,
    )
    .join("\n");

  const geo = cities
    .map(
      (c) => `## Junk Removal & Demolition in ${c.name}, FL
URL: ${U}/junk-removal/${c.slug}
Zip codes: ${c.zips.join(", ")}

${c.blurb}

${c.local}

Nearby areas also served: ${c.nearby.map((n) => cities.find((x) => x.slug === n)?.name).filter(Boolean).join(", ")}.
`,
    )
    .join("\n");

  return `${llmsIndex()}
---

# Services (full detail)

${svc}
---

# Service area (full detail)

${geo}
---

# Guides (full detail)

${guides
  .map(
    (g) => `## ${g.title}
URL: ${U}/guides/${g.slug}

${g.quickAnswer}

${g.sections
  .map(
    (sec) =>
      `### ${sec.heading}\n${(sec.body ?? []).join("\n\n")}${sec.list ? "\n" + sec.list.map((l) => `- ${l.title ? l.title + ": " : ""}${l.text}`).join("\n") : ""}${sec.table ? "\n" + [sec.table.head, ...sec.table.rows].map((r) => "| " + r.join(" | ") + " |").join("\n") : ""}`,
  )
  .join("\n\n")}

FAQ:
${g.faqs.map((f) => `- Q: ${f.q}\n  A: ${f.a}`).join("\n")}
`,
  )
  .join("\n")}
---

# How a job works

1. Call or text ${site.phone}, or send the quote form with a few photos or a description. A price range comes back right away, usually within the hour during business hours.
2. On site, the crew confirms a firm flat price before touching anything. If the customer agrees, work starts immediately.
3. The crew loads everything, hauls it away, and sweeps the area. Payment is due when the job is done.
`;
}
