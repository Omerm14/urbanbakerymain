"use client";

import { useState } from "react";
import type { SiteContent } from "../site-content";

type Props = {
  initialContent: SiteContent;
};

type SectionName = "hero" | "cafe" | "catering" | "business" | "contact";

const sectionTitles: Record<SectionName, string> = {
  hero: "Hero",
  cafe: "בית הקפה",
  catering: "מגשי אירוח",
  business: "לקוחות עסקיים",
  contact: "צור קשר",
};

export default function ContentEditor({ initialContent }: Props) {
  const [content, setContent] = useState(initialContent);
  const [active, setActive] = useState<SectionName>("hero");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  function update<K extends SectionName>(
    section: K,
    field: keyof SiteContent[K],
    value: string | string[],
  ) {
    setStatus("idle");
    setContent((current) => ({
      ...current,
      [section]: { ...current[section], [field]: value },
    }));
  }

  async function save() {
    setStatus("saving");
    try {
      const response = await fetch("/api/content", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(content),
      });
      if (!response.ok) throw new Error("Save failed");
      const data = await response.json() as { content: SiteContent };
      setContent(data.content);
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  async function logout() {
    await fetch("/api/editor-logout", { method: "POST" });
    window.location.reload();
  }

  return (
    <main className="editor-shell" dir="rtl">
      <header className="editor-header">
        <div>
          <span>URBAN BAKERY</span>
          <h1>Content Creator</h1>
        </div>
        <div className="editor-user">
          <button type="button" onClick={logout}>יציאה</button>
          <a href="/" target="_blank" rel="noreferrer">פתיחת האתר ↗</a>
        </div>
      </header>

      <div className="editor-workspace">
        <aside className="editor-sidebar" aria-label="חלקי האתר">
          {(Object.keys(sectionTitles) as SectionName[]).map((section) => (
            <button
              type="button"
              key={section}
              className={active === section ? "active" : ""}
              onClick={() => setActive(section)}
            >
              {sectionTitles[section]}
            </button>
          ))}
        </aside>

        <section className="editor-panel">
          <div className="editor-panel-title">
            <span>{String((Object.keys(sectionTitles) as SectionName[]).indexOf(active) + 1).padStart(2, "0")}</span>
            <h2>{sectionTitles[active]}</h2>
          </div>

          {active === "hero" && (
            <div className="editor-fields">
              <TextField label="שורת מותג" value={content.hero.kicker} onChange={(value) => update("hero", "kicker", value)} />
              <TextField label="כפתור" value={content.hero.cta} onChange={(value) => update("hero", "cta", value)} />
            </div>
          )}

          {active === "cafe" && (
            <div className="editor-fields">
              <TwoLineHeadline
                first={content.cafe.headline1}
                second={content.cafe.headline2}
                onFirst={(value) => update("cafe", "headline1", value)}
                onSecond={(value) => update("cafe", "headline2", value)}
              />
              <TwoLineLead
                first={content.cafe.lead1}
                second={content.cafe.lead2}
                onFirst={(value) => update("cafe", "lead1", value)}
                onSecond={(value) => update("cafe", "lead2", value)}
              />
              <TextArea label="טקסט" value={content.cafe.body} onChange={(value) => update("cafe", "body", value)} />
              <TextArea label="כתובת" value={content.cafe.address} onChange={(value) => update("cafe", "address", value)} />
              <TextArea label="שעות" value={content.cafe.hours} onChange={(value) => update("cafe", "hours", value)} />
              <TextField label="כפתור" value={content.cafe.cta} onChange={(value) => update("cafe", "cta", value)} />
            </div>
          )}

          {active === "catering" && (
            <div className="editor-fields">
              <TwoLineHeadline
                first={content.catering.headline1}
                second={content.catering.headline2}
                onFirst={(value) => update("catering", "headline1", value)}
                onSecond={(value) => update("catering", "headline2", value)}
              />
              <TwoLineLead
                first={content.catering.lead1}
                second={content.catering.lead2}
                onFirst={(value) => update("catering", "lead1", value)}
                onSecond={(value) => update("catering", "lead2", value)}
              />
              <TextArea label="טקסט" value={content.catering.body} onChange={(value) => update("catering", "body", value)} />
              <TextArea label="רשימה — שורה לכל פריט" value={content.catering.items.join("\n")} onChange={(value) => update("catering", "items", value.split("\n"))} />
              <TextField label="כפתור" value={content.catering.cta} onChange={(value) => update("catering", "cta", value)} />
            </div>
          )}

          {active === "business" && (
            <div className="editor-fields">
              <TwoLineHeadline
                first={content.business.headline1}
                second={content.business.headline2}
                onFirst={(value) => update("business", "headline1", value)}
                onSecond={(value) => update("business", "headline2", value)}
              />
              <TwoLineLead
                first={content.business.lead1}
                second={content.business.lead2}
                onFirst={(value) => update("business", "lead1", value)}
                onSecond={(value) => update("business", "lead2", value)}
              />
              <TextArea label="טקסט" value={content.business.body} onChange={(value) => update("business", "body", value)} />
              <TextArea label="נקודות — שורה לכל פריט" value={content.business.points.join("\n")} onChange={(value) => update("business", "points", value.split("\n"))} />
              <TextField label="כפתור" value={content.business.cta} onChange={(value) => update("business", "cta", value)} />
            </div>
          )}

          {active === "contact" && (
            <div className="editor-fields">
              <TwoLineHeadline
                first={content.contact.headline1}
                second={content.contact.headline2}
                onFirst={(value) => update("contact", "headline1", value)}
                onSecond={(value) => update("contact", "headline2", value)}
              />
              <TextField label="כפתור" value={content.contact.cta} onChange={(value) => update("contact", "cta", value)} />
            </div>
          )}

          <div className="editor-actions">
            <button type="button" onClick={save} disabled={status === "saving"}>
              {status === "saving" ? "שומר..." : "שמירת שינויים"}
            </button>
            {status === "saved" && <span className="success">נשמר. אפשר לפתוח את האתר ולרענן.</span>}
            {status === "error" && <span className="error">לא הצלחנו לשמור. נסו שוב.</span>}
          </div>
        </section>
      </div>
    </main>
  );
}

function TextField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="editor-field"><span>{label}</span><input value={value} onChange={(event) => onChange(event.target.value)} /></label>;
}

function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="editor-field"><span>{label}</span><textarea rows={4} value={value} onChange={(event) => onChange(event.target.value)} /></label>;
}

function TwoLineHeadline({ first, second, onFirst, onSecond }: { first: string; second: string; onFirst: (value: string) => void; onSecond: (value: string) => void }) {
  return <div className="editor-field-group"><span>כותרת ראשית</span><input value={first} onChange={(event) => onFirst(event.target.value)} /><input value={second} onChange={(event) => onSecond(event.target.value)} /></div>;
}

function TwoLineLead({ first, second, onFirst, onSecond }: { first: string; second: string; onFirst: (value: string) => void; onSecond: (value: string) => void }) {
  return <div className="editor-field-group"><span>כותרת משנה</span><input value={first} onChange={(event) => onFirst(event.target.value)} /><input value={second} onChange={(event) => onSecond(event.target.value)} /></div>;
}
