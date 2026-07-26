"use client";

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import type { Lang } from "./i18n";

type LanguageContextValue = { lang: Lang; toggleLang: () => void };

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "ub-lang";
const listeners = new Set<() => void>();

function readLang(): Lang {
  return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "he";
}

function getServerSnapshot(): Lang {
  return "he";
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, readLang, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    // Flipping `dir` can leave a stale compositor frame on transformed
    // elements (e.g. the animated hero image) in some browsers. Forcing a
    // synchronous reflow right after clears it.
    void document.body.offsetHeight;
  }, [lang]);

  const toggleLang = useCallback(() => {
    const next: Lang = readLang() === "he" ? "en" : "he";
    window.localStorage.setItem(STORAGE_KEY, next);
    listeners.forEach((listener) => listener());
  }, []);

  return <LanguageContext.Provider value={{ lang, toggleLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
