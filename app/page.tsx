const whatsappHref = "https://wa.me/972557756454";

export default function Home() {
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
          <h1 id="hero-title">BAKE HOUSE</h1>
          <span className="hero-rule" />
          <a href={whatsappHref} target="_blank" rel="noreferrer">LET&apos;S TALK</a>
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
          <h2>מחבוא קטן.<br />בלב העיר.</h2>
          <p className="chapter-lead">קצת אירופה.<br />מאוד הבית.</p>
          <p className="chapter-body">מבנה לשימור ירקרק, גינה שקטה וריח של אפייה מהבוקר. קפה איטלקי עדין, לחמי מחמצת ומאפים שנולדים בקונדיטוריה שמעבר לפינה.</p>
          <div className="chapter-details">
            <p><span>כתובת</span>ניצנה 14, מתחם נגה<br />תל אביב–יפו</p>
            <p><span>שעות</span>א׳–ה׳ · 07:00–19:00<br />ו׳–ש׳ · 07:00–16:00</p>
          </div>
          <a className="text-cta" href="https://maps.google.com/?q=%D7%A0%D7%99%D7%A6%D7%A0%D7%94+14+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91" target="_blank" rel="noreferrer">איך מגיעים ←</a>
        </div>
      </section>

      <section className="chapter chapter-reverse" id="catering">
        <figure className="chapter-image">
          <img src="/images/catering-tray.jpg" alt="מגש אירוח של Urban Bakery" />
          <figcaption>02 · URBAN TABLE</figcaption>
        </figure>
        <div className="chapter-copy chapter-copy-paper">
          <span className="chapter-label">CATERING</span>
          <h2>אירוח.<br />בלי להתאמץ.</h2>
          <p className="chapter-lead">פתוח. מוגש.<br />נגמר מהר.</p>
          <p className="chapter-body">מתוקים, מלוחים, כריכים ועוגות — למשרד, לאירוע או לבוקר של חתן וכלה. כל מגש מגיע מוקפד, נדיב ומוכן לרגע הנכון.</p>
          <ul className="chapter-list"><li>ישיבות ו-Happy Hour</li><li>אירועים עסקיים</li><li>התארגנות חתן וכלה</li></ul>
          <a className="text-cta" href={whatsappHref} target="_blank" rel="noreferrer">בונים הזמנה יחד ←</a>
        </div>
      </section>

      <section className="chapter" id="business">
        <figure className="chapter-image">
          <img src="/images/business-croissant.jpg" alt="קרואסונים טריים בדרך ללקוחות עסקיים" />
          <figcaption>03 · FRESH DAILY</figcaption>
        </figure>
        <div className="chapter-copy marble">
          <span className="chapter-label">FOR BUSINESS</span>
          <h2>אנחנו אופים.<br />אתם מגישים.</h2>
          <p className="chapter-lead">טרי בבוקר.<br />מוכן אצלכם.</p>
          <p className="chapter-body">מאפים, לחמים, עוגות ועוגיות בעבודת יד. נאפים מוקדם, מגיעים בזמן ומוכנים להצבה — גם בשישי ובשבת.</p>
          <div className="business-points"><span>אספקה יומית</span><span>מוצר מוגמר</span><span>טכניקות קלאסיות</span></div>
          <a className="text-cta" href={whatsappHref} target="_blank" rel="noreferrer">מתחילים לעבוד יחד ←</a>
        </div>
      </section>

      <section className="contact" id="contact">
        <img src="/images/urban-logo.png" alt="The Urban Bakery" />
        <span className="contact-rule" />
        <h2>דברים טובים<br />מתחילים כאן.</h2>
        <a className="contact-cta" href={whatsappHref} target="_blank" rel="noreferrer">LET&apos;S TALK</a>
        <div className="contact-details"><a href="tel:+972557756454">055–775–6454</a><a href="https://maps.google.com/?q=%D7%A0%D7%99%D7%A6%D7%A0%D7%94+14+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91" target="_blank" rel="noreferrer">ניצנה 14, מתחם נגה</a><span>א׳–ה׳ 07:00–19:00 · ו׳–ש׳ 07:00–16:00</span></div>
      </section>

      <footer><span>© 2026 THE URBAN BAKERY</span><span>BAKERY · CAFÉ · CATERING</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
