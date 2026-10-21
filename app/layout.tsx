import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { cities } from "@/lib/geo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Junk Removal & Demolition in Broward County, FL`,
  description: `Same-day junk removal and demolition across Broward County. Free estimates, fair pricing, licensed and insured. Call ${site.phone}.`,
  openGraph: {
    title: `${site.name} | Junk Removal & Demolition`,
    description: `Free estimates. Same-day service in Broward County. Call ${site.phone}.`,
    url: site.url,
    siteName: site.name,
    images: ["/og.jpg"],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: site.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: site.legalName,
    description: "Junk removal, cleanouts and light demolition across Broward County, Florida. Same-day service, free on-site estimates, flat pricing, licensed and insured.",
    telephone: "+19548719578",
    email: site.email,
    url: site.url,
    hasMap: site.socials.googleBusiness,
    image: [`${site.url}/og.jpg`, `${site.url}/photos/project-02.webp`],
    logo: `${site.url}/logo.jpg`,
    priceRange: "$$",
    currenciesAccepted: "USD",
    address: { "@type": "PostalAddress", streetAddress: site.address.street, addressLocality: site.address.city, addressRegion: site.address.region, postalCode: site.address.zip, addressCountry: "US" },
    geo: { "@type": "GeoCoordinates", latitude: 26.0329406, longitude: -80.1493619 },
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "06:00", closes: "23:00" }],
    paymentAccepted: "Cash, Credit Card, Debit Card, Zelle, Venmo, Cash App, Apple Pay, Check",
    sameAs: Object.values(site.socials).filter(Boolean),
    areaServed: [
      { "@type": "AdministrativeArea", name: "Broward County, FL" },
      ...cities.map((c) => ({ "@type": "City", name: `${c.name}, FL` })),
    ],
    contactPoint: { "@type": "ContactPoint", telephone: "+19548719578", contactType: "customer service", areaServed: "US-FL" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Junk removal and demolition services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.short, url: `${site.url}/services/${s.slug}` },
      })),
    },
    knowsAbout: ["junk removal", "demolition", "estate cleanouts", "hoarder cleanouts", "appliance removal", "furniture removal", "yard debris removal", "storm debris removal", "construction debris removal"],
    potentialAction: { "@type": "ReserveAction", name: "Get a free quote", target: `${site.url}/#quote` },
  };
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        {children}
      </body>
    </html>
  );
}
