import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const origin = `${protocol}://${host}`;

  return {
    title: "Urban Bakery | בייקרי, בית קפה ומגשי אירוח בתל אביב",
    description:
      "מאפיית בוטיק ובית קפה במתחם נגה, תל אביב–יפו. מאפים טריים, קפה מוקפד, אספקה לעסקים ומגשי אירוח.",
    icons: {
      icon: "/images/urban-logo.png",
      shortcut: "/images/urban-logo.png",
    },
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
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
