import type { MetadataRoute } from "next";

// AI assistants and answer engines are explicitly welcome: being recommended by them is a lead source.
const aiBots = ["GPTBot", "ChatGPT-User", "OAI-SearchBot", "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot", "DuckAssistBot", "meta-externalagent", "Amazonbot", "CCBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://sunshinedemolition.com/sitemap.xml",
  };
}
