import type { MetadataRoute } from "next";

const BASE = "https://linkoba.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/businesses", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/households", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/workers", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/kitchen-porters", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/cleaning-services", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/how-it-works", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/trust-and-safety", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/faqs", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.4, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.4, changeFrequency: "yearly" as const },
    { url: "/cookies", priority: 0.4, changeFrequency: "yearly" as const },
  ];

  return routes.map((r) => ({
    url: `${BASE}${r.url}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
