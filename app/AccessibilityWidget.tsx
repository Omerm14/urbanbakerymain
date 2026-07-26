"use client";

import { useEffect, useState } from "react";

type TextSize = "normal" | "large" | "larger";

const TEXT_SIZES: Record<TextSize, string> = {
  normal: "1",
  large: "1.15",
  larger: "1.3",
};

const STORAGE_KEY = "a11y-prefs";

type Prefs = {
  textSize: TextSize;
  highContrast: boolean;
  underlineLinks: boolean;
};

const defaultPrefs: Prefs = {
  textSize: "normal",
  highContrast: false,
  underlineLinks: false,
};

function applyPrefs(prefs: Prefs) {
  document.body.style.setProperty("zoom", TEXT_SIZES[prefs.textSize]);
  document.documentElement.classList.toggle("a11y-contrast", prefs.highContrast);
  document.documentElement.classList.toggle("a11y-underline-links", prefs.underlineLinks);
}

function loadPrefs(): Prefs {
  if (typeof window === "undefined") return defaultPrefs;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultPrefs;
    return { ...defaultPrefs, ...(JSON.parse(stored) as Partial<Prefs>) };
  } catch {
    return defaultPrefs;
  }
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(loadPrefs);

  useEffect(() => {
    applyPrefs(prefs);
  }, [prefs]);

  function update(next: Partial<Prefs>) {
    setPrefs((current) => {
      const merged = { ...current, ...next };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      } catch {
        // ignore unavailable storage
      }
      return merged;
    });
  }

  return (
    <div className="a11y-widget" dir="rtl">
      <button
        type="button"
        className="a11y-toggle"
        aria-label="אפשרויות נגישות"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <AccessibilityIcon />
      </button>

      {open && (
        <div className="a11y-panel" role="dialog" aria-label="תפריט נגישות">
          <h2>נגישות</h2>

          <div className="a11y-group">
            <span>גודל טקסט</span>
            <div className="a11y-row">
              <button type="button" className={prefs.textSize === "normal" ? "active" : ""} onClick={() => update({ textSize: "normal" })}>רגיל</button>
              <button type="button" className={prefs.textSize === "large" ? "active" : ""} onClick={() => update({ textSize: "large" })}>גדול</button>
              <button type="button" className={prefs.textSize === "larger" ? "active" : ""} onClick={() => update({ textSize: "larger" })}>גדול מאוד</button>
            </div>
          </div>

          <label className="a11y-check">
            <input
              type="checkbox"
              checked={prefs.highContrast}
              onChange={(event) => update({ highContrast: event.target.checked })}
            />
            <span>ניגודיות גבוהה</span>
          </label>

          <label className="a11y-check">
            <input
              type="checkbox"
              checked={prefs.underlineLinks}
              onChange={(event) => update({ underlineLinks: event.target.checked })}
            />
            <span>הדגשת קישורים</span>
          </label>

          <button type="button" className="a11y-reset" onClick={() => update(defaultPrefs)}>
            איפוס הגדרות
          </button>
        </div>
      )}
    </div>
  );
}

function AccessibilityIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="4.5" r="1.8" />
      <path d="M4 8.5c2.6 1 5.2 1.5 8 1.5s5.4-.5 8-1.5" strokeLinecap="round" />
      <path d="M12 10v4m0 0-3 7m3-7 3 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.3 13.5h5.4" strokeLinecap="round" />
    </svg>
  );
}
