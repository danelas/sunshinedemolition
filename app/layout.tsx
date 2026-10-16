import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Junk Removal & Demolition in Broward County, FL`,
  description: `Same-day junk removal and demolition across Broward County. Free estimates, fair pricing, licensed and insured. Call ${site.phone}.`,
  openGraph: {
    title: `${site.name} | Junk Removal & Demolition`,
    description: `Free estimates. Same-day service in Broward County. Call ${site.phone}.`,
    url: site.url,
    siteName: site.name,
    images: ["/photos/project-02.webp"],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: site.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    telephone: "+19548719578",
    url: site.url,
    image: `${site.url}/photos/project-02.webp`,
    areaServed: site.cities.map((c) => ({ "@type": "City", name: `${c}, FL` })),
    address: { "@type": "PostalAddress", addressLocality: "Fort Lauderdale", addressRegion: "FL", addressCountry: "US" },
    priceRange: "$$",
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
