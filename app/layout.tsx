import type { Metadata } from "next";
import { headers } from "next/headers";
import { IBM_Plex_Sans_Hebrew } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://urbanbakery.co";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const ibmPlexSansHebrew = IBM_Plex_Sans_Hebrew({
  subsets: ["hebrew", "latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-ibm-plex-hebrew",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: "Urban Bakery | בייקרי, בית קפה ומגשי אירוח בתל אביב",
    description:
      "מאפיית בוטיק ובית קפה במתחם נגה, תל אביב–יפו. מאפים טריים, קפה מוקפד, אספקה לעסקים ומגשי אירוח.",
    keywords: [
      "Urban Bakery",
      "אורבן בייקרי",
      "בייקרי תל אביב",
      "בית קפה מתחם נגה",
      "מאפיית בוטיק תל אביב",
      "מגשי אירוח תל אביב",
      "אספקה לעסקים תל אביב",
      "bakery Tel Aviv",
      "cafe Noga Square",
    ],
    robots: { index: true, follow: true },
    alternates: { canonical: "/" },
    openGraph: {
      title: "The Urban Bakery",
      description: "בייקרי. בית קפה. מגשי אירוח. במתחם נגה, תל אביב–יפו.",
      url: origin,
      siteName: "Urban Bakery",
      locale: "he_IL",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1536, height: 1024, alt: "The Urban Bakery" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "The Urban Bakery",
      description: "בייקרי. בית קפה. מגשי אירוח. במתחם נגה, תל אביב–יפו.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" className={ibmPlexSansHebrew.variable}>
      <body>
        {children}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <Script
          id="aioa-adawidget"
          src="https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode=%23420083&token=&position=bottom_left"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
