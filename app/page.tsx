import { getSiteContent } from "../db/content";
import CareersForm from "./CareersForm";

const whatsappHref = "https://wa.me/972557756454";
const mapsHref =
  "https://www.google.com/maps/place/The+Urban+Bakery/@32.056378,34.7588157,17z/data=!3m1!4b1!4m6!3m5!1s0x151d4cbc55555555:0x6f63044d8c108031!8m2!3d32.0563735!4d34.7613906!16s%2Fg%2F11c5zyr9s0?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D";
const instagramHref = "https://www.instagram.com/urbanbakerytlv";
const tiktokHref = "https://www.tiktok.com/@urbnbakery";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();

  return (
    <main>
      <header className="site-header">
        <a className="mini-logo" href="#top" aria-label="Urban Bakery — דף הבית">
          <img src="/images/urban-logo.png" alt="The Urban Bakery" />
        </a>
        <nav className="site-nav" aria-label="ניווט ראשי">
          <a href="#top">בית</a>
          <a href="#catering">מגשי אירוח</a>
          <a href="#business">לעסקים</a>
          <a href="#careers">דרושים</a>
          <a href="#contact">צרו קשר</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="פתיחת תפריט">תפריט</summary>
          <nav><a href="#top">בית</a><a href="#catering">מגשי אירוח</a><a href="#business">לעסקים</a><a href="#careers">דרושים</a><a href="#contact">צרו קשר</a></nav>
        </details>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-bg" src="/images/croissant-layers.jpg" alt="מאפים טריים של Urban Bakery" />
        <div className="hero-shade" />
        <div className="hero-center">
          <img src="/images/urban-logo.png" alt="The Urban Bakery" />
          <h1 id="hero-title">{content.hero.kicker}</h1>
          <span className="hero-rule" />
          <a className="hero-cta" href={whatsappHref} target="_blank" rel="noreferrer" aria-label={content.hero.cta}>
            <PhoneIcon />
          </a>
        </div>
        <div className="hero-bottom"><span>NITZANA 14 · NOGA SQUARE</span><span className="hero-bottom-city">TEL AVIV–YAFO</span><span>EST. 2012</span></div>
      </section>

      <section className="chapter" id="cafe">
        <figure className="chapter-image">
          <img src="/images/cafe-building.jpg" alt="בית הקפה Urban Bakery במתחם נגה" />
          <figcaption>01 · NOGA, TEL AVIV–YAFO</figcaption>
        </figure>
        <div className="chapter-copy marble">
          <span className="chapter-label">THE CAFÉ</span>
          <h2>{content.cafe.headline1}<br />{content.cafe.headline2}</h2>
          <p className="chapter-lead">{content.cafe.lead1}<br />{content.cafe.lead2}</p>
          <p className="chapter-body">{content.cafe.body}</p>
          <div className="chapter-details">
            <p><span className="detail-label">כתובת</span><span className="detail-value" dir="rtl">{content.cafe.address}</span></p>
            <p><span className="detail-label">שעות</span><span className="detail-value" dir="rtl">{content.cafe.hours}</span></p>
          </div>
          <a className="text-cta" href={mapsHref} target="_blank" rel="noreferrer">{content.cafe.cta} ←</a>
        </div>
      </section>

      <section className="chapter chapter-reverse" id="catering">
        <figure className="chapter-image">
          <img src="/images/catering-tray.jpg" alt="מגש אירוח של Urban Bakery" />
          <figcaption>02 · URBAN TABLE</figcaption>
        </figure>
        <div className="chapter-copy chapter-copy-paper">
          <span className="chapter-label">CATERING</span>
          <h2>{content.catering.headline1}<br />{content.catering.headline2}</h2>
          <p className="chapter-lead">{content.catering.lead1}<br />{content.catering.lead2}</p>
          <p className="chapter-body">{content.catering.body}</p>
          <ul className="chapter-list">{content.catering.items.map((item) => <li key={item}>{item}</li>)}</ul>
          <a className="text-cta" href={whatsappHref} target="_blank" rel="noreferrer">{content.catering.cta} ←</a>
        </div>
      </section>

      <section className="chapter" id="business">
        <figure className="chapter-image">
          <img src="/images/business-croissant.jpg" alt="קרואסונים טריים בדרך ללקוחות עסקיים" />
          <figcaption>03 · FRESH DAILY</figcaption>
        </figure>
        <div className="chapter-copy marble">
          <span className="chapter-label">FOR BUSINESS</span>
          <h2>{content.business.headline1}<br />{content.business.headline2}</h2>
          <p className="chapter-lead">{content.business.lead1}<br />{content.business.lead2}</p>
          <p className="chapter-body">{content.business.body}</p>
          <div className="business-points">{content.business.points.map((point) => <span key={point}>{point}</span>)}</div>
          <a className="text-cta" href={whatsappHref} target="_blank" rel="noreferrer">{content.business.cta} ←</a>
        </div>
      </section>

      <section className="careers" id="careers">
        <h2>דרושים באורבן</h2>
        <p className="careers-subtitle">משפחת אורבן מתרחבת ואנחנו מחפשים את הטובים ביותר שיצטרפו אלינו למגוון תפקידים!</p>
        <div className="careers-form-wrap">
          <CareersForm />
        </div>
      </section>

      <section className="contact" id="contact">
        <img src="/images/urban-logo.png" alt="The Urban Bakery" />
        <span className="contact-rule" />
        <h2>{content.contact.headline1}<br />{content.contact.headline2}</h2>
        <a className="contact-cta" href={whatsappHref} target="_blank" rel="noreferrer">{content.contact.cta}</a>
        <a className="contact-address" href={mapsHref} target="_blank" rel="noreferrer">ניצנה 14, מתחם נגה</a>
        <div className="contact-details">
          <a className="contact-phone" href="tel:+972557756454" dir="ltr">
            <PhoneIcon />
            <span>+972-55-775-6454</span>
          </a>
          <span>א׳–ה׳ 07:00–19:00 · ו׳–ש׳ 07:00–16:00</span>
        </div>
      </section>

      <section className="social-links" aria-label="עקבו אחרינו">
        <a href={instagramHref} target="_blank" rel="noreferrer" aria-label="אינסטגרם">
          <InstagramIcon />
        </a>
        <a href={tiktokHref} target="_blank" rel="noreferrer" aria-label="טיקטוק">
          <TikTokIcon />
        </a>
        <a href={mapsHref} target="_blank" rel="noreferrer" aria-label="גוגל מפות">
          <MapsIcon />
        </a>
      </section>

      <footer><span>© 2026 THE URBAN BAKERY</span><span>BAKERY · CAFÉ · CATERING</span><a href="#top">BACK TO TOP ↑</a></footer>

      <div className="credit-bar">
        <a href="https://aaa-tech.com/" target="_blank" rel="noreferrer">
          <AAALogo />
          Built by AAA – AI Agents Agency
        </a>
      </div>

      <a className="whatsapp-float" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="שליחת הודעה בוואטסאפ">
        <WhatsAppIcon />
      </a>
    </main>
  );
}

function AAALogo() {
  return (
    <svg viewBox="0 0 200 200" width="18" height="18" aria-hidden="true">
      <rect x="0" y="0" width="200" height="200" rx="30" fill="#191510" />
      <polyline
        points="15,165 45,35 75,130 100,35 125,130 155,35 185,165"
        fill="none"
        stroke="#f7f4ee"
        strokeWidth="26"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M38 42 L45 25 L52 42 Z" fill="#191510" />
      <path d="M93 42 L100 25 L107 42 Z" fill="#191510" />
      <path d="M148 42 L155 25 L162 42 Z" fill="#191510" />
      <rect x="8" y="95" width="184" height="26" fill="#c1893f" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.34 2.06 1.72 3.55 3.9 3.7v2.72c-1.34.05-2.62-.36-3.75-1.15v6.1c0 3.15-2.35 5.63-5.5 5.63S5.65 17.52 5.65 14.37c0-3.05 2.2-5.5 5.2-5.62v2.75c-1.4.12-2.4 1.28-2.4 2.87 0 1.62 1.28 2.9 2.9 2.9s2.95-1.28 2.95-2.9V3z" />
    </svg>
  );
}

function MapsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 21s-7-6.13-7-11.5A7 7 0 0 1 19 9.5C19 14.87 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.25 1.02z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
      <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.657 4.527 1.797 6.393L4 29l7.822-1.77A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.356l-.355-.21-4.64 1.05 1.08-4.518-.232-.37A9.68 9.68 0 0 1 5.25 15c0-5.93 4.823-10.75 10.754-10.75S26.75 9.07 26.75 15 21.935 24.75 16.004 24.75Zm5.61-7.36c-.307-.154-1.816-.897-2.098-1-.281-.103-.486-.154-.69.154-.204.308-.79 1-.968 1.206-.178.205-.357.23-.664.077-.307-.154-1.296-.478-2.469-1.523-.913-.814-1.53-1.82-1.709-2.128-.178-.308-.019-.474.135-.628.138-.138.307-.36.46-.54.154-.18.205-.308.307-.513.103-.205.052-.385-.026-.539-.077-.154-.69-1.663-.945-2.278-.249-.598-.502-.517-.69-.527l-.588-.01c-.205 0-.539.077-.82.385-.281.308-1.075 1.05-1.075 2.56s1.1 2.97 1.253 3.175c.154.205 2.166 3.307 5.248 4.637.733.316 1.305.505 1.751.647.735.234 1.404.2 1.933.121.59-.088 1.816-.742 2.072-1.459.256-.717.256-1.332.18-1.46-.077-.128-.281-.205-.588-.36Z" />
    </svg>
  );
}
