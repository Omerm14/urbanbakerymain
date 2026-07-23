import { getSiteContent } from "../db/content";

const whatsappHref = "https://wa.me/972557756454";

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
          <a href="#contact">צרו קשר</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="פתיחת תפריט">תפריט</summary>
          <nav><a href="#top">בית</a><a href="#catering">מגשי אירוח</a><a href="#business">לעסקים</a><a href="#contact">צרו קשר</a></nav>
        </details>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-bg" src="/images/croissant-layers.jpg" alt="מאפים טריים של Urban Bakery" />
        <div className="hero-shade" />
        <div className="hero-center">
          <img src="/images/urban-logo.png" alt="The Urban Bakery" />
          <h1 id="hero-title">{content.hero.kicker}</h1>
          <span className="hero-rule" />
          <a href={whatsappHref} target="_blank" rel="noreferrer">{content.hero.cta}</a>
        </div>
        <div className="hero-bottom"><span>NITZANA 14</span><span>TEL AVIV–YAFO</span><span>EST. 2012</span></div>
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
          <a className="text-cta" href="https://maps.google.com/?q=%D7%A0%D7%99%D7%A6%D7%A0%D7%94+14+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91" target="_blank" rel="noreferrer">{content.cafe.cta} ←</a>
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

      <section className="contact" id="contact">
        <img src="/images/urban-logo.png" alt="The Urban Bakery" />
        <span className="contact-rule" />
        <h2>{content.contact.headline1}<br />{content.contact.headline2}</h2>
        <a className="contact-cta" href={whatsappHref} target="_blank" rel="noreferrer">{content.contact.cta}</a>
        <div className="contact-details"><a href="tel:+972557756454">055–775–6454</a><a href="https://maps.google.com/?q=%D7%A0%D7%99%D7%A6%D7%A0%D7%94+14+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91" target="_blank" rel="noreferrer">ניצנה 14, מתחם נגה</a><span>א׳–ה׳ 07:00–19:00 · ו׳–ש׳ 07:00–16:00</span></div>
      </section>

      <footer><span>© 2026 THE URBAN BAKERY</span><span>BAKERY · CAFÉ · CATERING</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
