type Logo = { src: string; alt: string };

const logos: Logo[] = [
  { src: "/images/logos/logo-1.png", alt: "Customer 1" },
  { src: "/images/logos/logo-2.png", alt: "Customer 2" },
  { src: "/images/logos/logo-3.png", alt: "Customer 3" },
  { src: "/images/logos/logo-4.png", alt: "Customer 4" },
  { src: "/images/logos/logo-5.png", alt: "Customer 5" },
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
