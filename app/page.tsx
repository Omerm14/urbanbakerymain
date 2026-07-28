import { getSiteContent } from "../db/content";
import { LanguageProvider } from "./LanguageContext";
import SiteView from "./SiteView";

export const dynamic = "force-dynamic";

const mapsHref =
  "https://www.google.com/maps/place/The+Urban+Bakery/@32.056378,34.7588157,17z/data=!3m1!4b1!4m6!3m5!1s0x151d4cbc55555555:0x6f63044d8c108031!8m2!3d32.0563735!4d34.7613906!16s%2Fg%2F11c5zyr9s0?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "The Urban Bakery",
  alternateName: "אורבן בייקרי",
  url: "https://urbanbakery.co",
  image: "https://urbanbakery.co/og.png",
  logo: "https://urbanbakery.co/images/urban-logo.png",
  telephone: "+972-55-775-6454",
  priceRange: "$$",
  servesCuisine: ["Bakery", "Café", "Catering"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nitzana 14, Noga Square",
    addressLocality: "Tel Aviv-Yafo",
    addressRegion: "Tel Aviv District",
    addressCountry: "IL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.0563735,
    longitude: 34.7613906,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "07:00",
      closes: "16:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/urbanbakerytlv",
    "https://www.tiktok.com/@urbnbakery",
    mapsHref,
  ],
};

export default async function Home() {
  const content = await getSiteContent();

  return (
    <LanguageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteView contentHe={content} />
    </LanguageProvider>
  );
}
