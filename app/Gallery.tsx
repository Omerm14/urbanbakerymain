"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { galleryAlts, translations } from "./i18n";

const IMAGE_SRCS = [
  "/images/gallery/croissant-swirl.jpg",
  "/images/gallery/bread-loaf.jpg",
  "/images/gallery/butter-block.jpg",
  "/images/gallery/pastry-wall-blueberry.jpg",
  "/images/gallery/matcha-pour.jpg",
  "/images/gallery/pastry-wall-jam.jpg",
  "/images/gallery/coffee-pour.jpg",
  "/images/gallery/iced-tea-tray.jpg",
  "/images/gallery/stacked-drinks.jpg",
  "/images/gallery/iced-drink-croissant.jpg",
  "/images/gallery/matcha-scooter.jpg",
  "/images/gallery/pastry-rack-overhead.jpg",
];

export default function Gallery() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const IMAGES = IMAGE_SRCS.map((src, index) => ({ src, alt: galleryAlts[lang][index] }));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    function next() {
      setActiveIndex((current) => (current === null ? current : (current + 1) % IMAGE_SRCS.length));
    }
    function prev() {
      setActiveIndex((current) => (current === null ? current : (current - 1 + IMAGE_SRCS.length) % IMAGE_SRCS.length));
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  return (
    <>
      <div className="gallery-grid">
        {IMAGES.map((image, index) => (
          <button
            type="button"
            key={image.src}
            className="gallery-item"
            onClick={() => setActiveIndex(index)}
            aria-label={image.alt}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="gallery-lightbox"
          dir="ltr"
          role="dialog"
          aria-modal="true"
          aria-label={IMAGES[activeIndex].alt}
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            className="gallery-close"
            aria-label={t.galleryClose}
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex(null);
            }}
          >
            ✕
          </button>
          <button
            type="button"
            className="gallery-nav gallery-prev"
            aria-label={t.galleryPrev}
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((current) => (current === null ? current : (current - 1 + IMAGES.length) % IMAGES.length));
            }}
          >
            ←
          </button>
          <img
            src={IMAGES[activeIndex].src}
            alt={IMAGES[activeIndex].alt}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="gallery-nav gallery-next"
            aria-label={t.galleryNext}
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((current) => (current === null ? current : (current + 1) % IMAGES.length));
            }}
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
