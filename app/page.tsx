import { getSiteContent } from "../db/content";
import { LanguageProvider } from "./LanguageContext";
import SiteView from "./SiteView";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <LanguageProvider>
      <SiteView contentHe={content} />
    </LanguageProvider>
  );
}
