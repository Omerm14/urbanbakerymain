import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectFile = (path) => new URL(`../${path}`, import.meta.url);

test("ships the Urban Bakery homepage and RTL metadata", async () => {
  const [page, siteView, layout, content] = await Promise.all([
    readFile(projectFile("app/page.tsx"), "utf8"),
    readFile(projectFile("app/SiteView.tsx"), "utf8"),
    readFile(projectFile("app/layout.tsx"), "utf8"),
    readFile(projectFile("app/site-content.ts"), "utf8"),
  ]);

  assert.match(layout, /title:\s*"Urban Bakery/);
  assert.match(layout, /<html lang="he" dir="rtl"[^>]*>/);
  assert.doesNotMatch(layout, /codex-preview|Starter Project/);

  assert.match(page, /<SiteView/);
  assert.match(siteView, /id="cafe"/);
  assert.match(siteView, /id="catering"/);
  assert.match(siteView, /id="business"/);
  assert.match(siteView, /id="contact"/);
  assert.match(siteView, /className="detail-value" dir="rtl"/);
  assert.match(content, /kicker:\s*".+"/);
  assert.match(content, /cta:\s*"LET'S TALK"/);
});

test("supports switching the public site between Hebrew and English", async () => {
  const [siteView, i18n, languageContext] = await Promise.all([
    readFile(projectFile("app/SiteView.tsx"), "utf8"),
    readFile(projectFile("app/i18n.ts"), "utf8"),
    readFile(projectFile("app/LanguageContext.tsx"), "utf8"),
  ]);

  assert.match(siteView, /className="lang-toggle"/);
  assert.match(siteView, /toggleLang/);
  assert.match(i18n, /export const enSiteContent: SiteContent/);
  assert.match(i18n, /he:\s*\{/);
  assert.match(i18n, /en:\s*\{/);
  assert.match(languageContext, /export function useLanguage/);
  assert.match(languageContext, /export function LanguageProvider/);
});

test("keeps the Content Creator authenticated and connected to editable content", async () => {
  const [editorPage, editor, apiRoute, auth] = await Promise.all([
    readFile(projectFile("app/editor/page.tsx"), "utf8"),
    readFile(projectFile("app/editor/ContentEditor.tsx"), "utf8"),
    readFile(projectFile("app/api/content/route.ts"), "utf8"),
    readFile(projectFile("app/editor-auth.ts"), "utf8"),
  ]);

  assert.match(editorPage, /isEditorAuthenticated\(\)/);
  assert.match(editorPage, /<ContentEditor/);
  assert.match(editor, /\/api\/content/);
  assert.match(apiRoute, /isEditorAuthenticated\(\)/);
  assert.match(apiRoute, /saveSiteContent/);
  assert.match(apiRoute, /status:\s*401/);
  assert.match(auth, /EDITOR_PASSWORD/);
});
