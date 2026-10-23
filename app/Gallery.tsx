"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { cateringAlts, galleryAlts, translations, type Lang } from "./i18n";

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
  "/images/gallery/pastry-flatlay.jpg",
  "/images/gallery/flour-hands-dough.jpg",
  "/images/gallery/pain-au-chocolat.jpg",
  "/images/gallery/oven-loading.jpg",
  "/images/gallery/raspberry-danish-sugar.jpg",
  "/images/gallery/sourdough-oven.jpg",
  "/images/gallery/glazed-pastries-closeup.jpg",
  "/images/gallery/flour-pour.jpg",
  "/images/gallery/apron-tie.jpg",
];

const CATERING_SRCS = [
  "/images/catering-pretzel-sandwiches.jpg",
  "/images/catering-boxes-overhead.jpg",
  "/images/catering-spread.jpg",
];

export default function Gallery() {
  return <PhotoGrid srcs={IMAGE_SRCS} alts={galleryAlts} className="gallery-grid" sizes="(max-width: 620px) 50vw, 33vw" />;
}

export function CateringPhotos() {
  return <PhotoGrid srcs={CATERING_SRCS} alts={cateringAlts} className="catering-strip" sizes="(max-width: 900px) 33vw, 15vw" />;
}

function PhotoGrid({
  srcs,
  alts,
  className,
  sizes,
}: {
  srcs: string[];
  alts: Record<Lang, string[]>;
  className: string;
  sizes: string;
}) {
  const { lang } = useLanguage();
  const t = translations[lang];
  const IMAGES = srcs.map((src, index) => ({ src, alt: alts[lang][index] }));
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
  }, [activeIndex, IMAGES.length]);

  return (
    <>
      <div className={className}>
        {IMAGES.map((image, index) => (
          <button
            type="button"
            key={image.src}
            className="gallery-item"
            onClick={() => setActiveIndex(index)}
            aria-label={image.alt}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={sizes}
              loading="lazy"
            />
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
