import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://sunshinedemolition.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 }];
}
