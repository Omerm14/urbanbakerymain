type Logo = { src: string; alt: string };

const logos: Logo[] = [
  { src: "/images/logos/BUTI_CO_LOGO.avif", alt: "Buti Co" },
  { src: "/images/logos/HOC.jpg", alt: "HOC" },
  { src: "/images/logos/adina.jpeg", alt: "Adina" },
  { src: "/images/logos/logo-beach-club-blanc.png", alt: "Beach Club Blanc" },
  { src: "/images/logos/gazeta.jpg", alt: "Gazeta" },
  { src: "/images/logos/paradiso.jpg", alt: "Paradiso" },
  { src: "/images/logos/facility.jpg", alt: "Facility" },
  { src: "/images/logos/kohi.jpg", alt: "Kohi" },
];

export default function CustomerLogos() {
  const track = [...logos, ...logos];

  return (
    <div className="customer-logos">
      <div className="customer-logos-track">
        {track.map((logo, i) => (
          <img key={`${logo.src}-${i}`} src={logo.src} alt={logo.alt} loading="lazy" />
        ))}
      </div>
    </div>
  );
}
