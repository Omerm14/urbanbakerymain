import { env } from "cloudflare:workers";
import {
  defaultSiteContent,
  normalizeSiteContent,
  type SiteContent,
} from "../app/site-content";

const createTableSql = `
  CREATE TABLE IF NOT EXISTS site_content (
    id TEXT PRIMARY KEY,
    content TEXT NOT NULL,
    updated_by TEXT NOT NULL,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`;

async function ensureContentTable() {
  if (!env.DB) throw new Error("Cloudflare D1 binding `DB` is unavailable.");
  await env.DB.prepare(createTableSql).run();
}

export async function getSiteContent(): Promise<SiteContent> {
  await ensureContentTable();
  const row = await env.DB.prepare(
    "SELECT content FROM site_content WHERE id = ?",
  ).bind("main").first<{ content: string }>();

  if (!row) return defaultSiteContent;

  try {
    return normalizeSiteContent(JSON.parse(row.content));
  } catch {
    return defaultSiteContent;
  }
}

export async function saveSiteContent(
  value: unknown,
  updatedBy: string,
): Promise<SiteContent> {
  await ensureContentTable();
  const content = normalizeSiteContent(value);

  await env.DB.prepare(`
    INSERT INTO site_content (id, content, updated_by, updated_at)
    VALUES (?, ?, ?, CURRENT_TIMESTAMP)
    ON CONFLICT(id) DO UPDATE SET
      content = excluded.content,
      updated_by = excluded.updated_by,
      updated_at = CURRENT_TIMESTAMP
  `).bind("main", JSON.stringify(content), updatedBy).run();

  return content;
}
