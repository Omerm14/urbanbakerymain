import type { MetadataRoute } from "next";

const SITE_URL = "https://urbanbakery.co";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: "2026-07-28",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
