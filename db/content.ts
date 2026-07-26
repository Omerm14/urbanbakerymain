import { Redis } from "@upstash/redis";
import {
  defaultSiteContent,
  normalizeSiteContent,
  type SiteContent,
} from "../app/site-content";

const CONTENT_KEY = "site-content";

type StoredRecord = {
  content: unknown;
  updatedBy: string;
  updatedAt: string;
};

function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

export async function getSiteContent(): Promise<SiteContent> {
  const redis = getRedis();
  if (!redis) return defaultSiteContent;

  try {
    const stored = await redis.get<StoredRecord>(CONTENT_KEY);
    if (!stored) return defaultSiteContent;
    return normalizeSiteContent(stored.content);
  } catch {
    return defaultSiteContent;
  }
}

export async function saveSiteContent(
  value: unknown,
  updatedBy: string,
): Promise<SiteContent> {
  const redis = getRedis();
  if (!redis) {
    throw new Error(
      "Content storage is not configured. Add a Redis integration (KV_REST_API_URL / KV_REST_API_TOKEN) in your Vercel project to enable saving.",
    );
  }

  const content = normalizeSiteContent(value);
  const record: StoredRecord = {
    content,
    updatedBy,
    updatedAt: new Date().toISOString(),
  };
  await redis.set(CONTENT_KEY, record);

  return content;
}
