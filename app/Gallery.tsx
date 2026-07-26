"use client";

import { useEffect, useState } from "react";

type GalleryImage = { src: string; alt: string };

const IMAGES: GalleryImage[] = [
  { src: "/images/gallery/croissant-swirl.jpg", alt: "קרואסון טרי בחיתוך" },
  { src: "/images/gallery/bread-loaf.jpg", alt: "לחם מחמצת טרי מהתנור" },
  { src: "/images/gallery/butter-block.jpg", alt: "חמאה עם חותמת The Urban Bakery" },
  { src: "/images/gallery/pastry-wall-blueberry.jpg", alt: "מגש מאפים ועוגת אוכמניות" },
  { src: "/images/gallery/matcha-pour.jpg", alt: "יוצקים מאצ׳ה קרה" },
  { src: "/images/gallery/pastry-wall-jam.jpg", alt: "מגש מאפים עם ריבה וקרם" },
  { src: "/images/gallery/coffee-pour.jpg", alt: "יוצקים קפה קר" },
  { src: "/images/gallery/iced-tea-tray.jpg", alt: "תה קר עם לימון" },
  { src: "/images/gallery/stacked-drinks.jpg", alt: "משקאות קרים בשורה" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    function next() {
      setActiveIndex((current) => (current === null ? current : (current + 1) % IMAGES.length));
    }
    function prev() {
      setActiveIndex((current) => (current === null ? current : (current - 1 + IMAGES.length) % IMAGES.length));
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
            aria-label="סגירה"
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
            aria-label="הקודם"
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
            aria-label="הבא"
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
