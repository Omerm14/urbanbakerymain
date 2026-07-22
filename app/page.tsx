const whatsappHref = "https://wa.me/972557756454";

const Arrow = () => <span aria-hidden="true">←</span>;

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-link" href="#top" aria-label="Urban Bakery — דף הבית">
          <img src="/images/urban-logo.png" alt="The Urban Bakery" />
        </a>

        <nav className="desktop-nav" aria-label="ניווט ראשי">
          <a href="#bakery">הבייקרי</a>
          <a href="#cafe">בית הקפה</a>
          <a href="#business">לקוחות עסקיים</a>
          <a href="#catering">מגשי אירוח</a>
        </nav>

        <a className="header-cta" href={whatsappHref} target="_blank" rel="noreferrer">
          דברו איתנו <Arrow />
        </a>

        <details className="mobile-menu">
          <summary aria-label="פתיחת תפריט">תפריט</summary>
          <nav aria-label="ניווט למובייל">
            <a href="#bakery">הבייקרי</a>
            <a href="#cafe">בית הקפה</a>
            <a href="#business">לקוחות עסקיים</a>
            <a href="#catering">מגשי אירוח</a>
            <a href="#contact">צור קשר</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">BAKERY · CAFÉ · CATERING</p>
          <h1 id="hero-title">
            בייקרי. בית קפה.
            <br />
            מגשי אירוח.
          </h1>
          <p className="hero-lede">הטובים ביותר. בחומרי הגלם. ובאנשים.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#bakery">
              לגלות את הבייקרי <Arrow />
            </a>
            <a className="text-link" href="#catering">
              למגשי האירוח <Arrow />
            </a>
          </div>
        </div>

        <div className="hero-stage" aria-label="קרואסון טרי של Urban Bakery">
          <div className="photo-card photo-card-back">
            <img src="/images/croissant-layers.jpg" alt="שכבות קרואסון בעבודת יד" />
          </div>
          <div className="photo-card photo-card-front">
            <img src="/images/croissant-layers.jpg" alt="קרואסון טרי על כף יד" />
            <span>נאפה כאן, כל יום.</span>
          </div>
        </div>

        <div className="marble-counter hero-counter" aria-hidden="true">
          <img src="/images/urban-logo.png" alt="" />
          <span>NOGA · TEL AVIV–YAFO</span>
        </div>
      </section>

      <section className="location-strip" aria-label="פרטי ביקור">
        <div>
          <span className="micro-label">איפה אנחנו</span>
          <strong>ניצנה 14, מתחם נגה</strong>
          <span>תל אביב–יפו</span>
        </div>
        <div>
          <span className="micro-label">שעות פתיחה</span>
          <strong>א׳–ה׳ · 07:00–19:00</strong>
          <span>ו׳–ש׳ · 07:00–16:00</span>
        </div>
        <a href="https://maps.google.com/?q=%D7%A0%D7%99%D7%A6%D7%A0%D7%94+14+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91" target="_blank" rel="noreferrer">
          ניווט למקום <Arrow />
        </a>
      </section>

      <section className="section cafe-section" id="cafe">
        <div className="section-copy">
          <p className="eyebrow">THE CAFÉ · מתחם נגה</p>
          <h2>מחבוא קטן בלב העיר.</h2>
          <p>
            בין מבני השימור, המושבה הגרמנית ופארק המסילה, יצרנו מקום שמרגיש קצת כמו
            אירופה ומאוד כמו הבית. בכל בוקר החלל מתמלא בריח של מאפים ולחמים טריים,
            לצד קפה איטלקי מוקפד בקלייה עדינה.
          </p>
          <div className="inline-facts">
            <span>גינה ירוקה</span>
            <span>אפייה יומית</span>
            <span>קפה מוקפד</span>
          </div>
        </div>
        <figure className="image-frame tall-frame">
          <img src="/images/matcha.jpg" alt="משקאות מאצ׳ה קרים ב-Urban Bakery" />
          <figcaption>בוקר במתחם נגה</figcaption>
        </figure>
      </section>

      <section className="section bakery-section" id="bakery">
        <div className="bakery-heading">
          <p className="eyebrow">THE BAKERY</p>
          <h2>איכות שנבנית בשכבות. יום אחרי יום.</h2>
          <p>
            בלוק אחד מבית הקפה שוכן הלב הפועם שממנו הכול מתחיל: קונדיטוריה של עבודת
            יד, טכניקות קלאסיות ודיוק ישראלי.
          </p>
        </div>

        <div className="bakery-grid">
          <article className="product-story product-story-image">
            <img src="/images/cake.jpg" alt="עוגת גזר עם קרם ואגוזים" />
            <div>
              <span className="micro-label">PÂTISSERIE & SWEETS</span>
              <h3>עוגות ועוגיות בעבודת יד</h3>
              <p>איזון מדויק בין מתיקות, מרקם ואסתטיקה נקייה.</p>
            </div>
          </article>
          <article className="product-story product-story-marble">
            <span className="micro-label">SPECIALTY BAKES</span>
            <h3>מאפים צרפתיים קלאסיים</h3>
            <p>קרואסונים, בריושים ופחזניות עם שכבות חמאה מושלמות.</p>
            <img src="/images/croissant-layers.jpg" alt="חתך קרואסון עם שכבות אווריריות" />
          </article>
        </div>

        <div className="values-grid" aria-label="עקרונות האפייה שלנו">
          <article>
            <span>01</span>
            <h3>אומנות באפייה</h3>
            <p>טכניקות קלאסיות ושקט מקצועי שמורגשים בכל פירור.</p>
          </article>
          <article>
            <span>02</span>
            <h3>טריות מוקפדת</h3>
            <p>המאפים נכנסים לתנור בכל בוקר ומגיעים אל הוויטרינה בשיאם.</p>
          </article>
          <article>
            <span>03</span>
            <h3>חומרי גלם מובחרים</h3>
            <p>רכיבים נקיים ומדויקים שמאפשרים לכל שכבה לדבר.</p>
          </article>
        </div>
      </section>

      <section className="business-section" id="business">
        <div className="business-visual">
          <img src="/images/croissant-layers.jpg" alt="קרואסון מוכן להגשה לעסקים" />
          <div className="gold-seal">FRESH<br />DAILY</div>
        </div>
        <div className="business-copy">
          <p className="eyebrow">FOR BUSINESS</p>
          <h2>יש לכם בית קפה? מסעדה?</h2>
          <p>
            אנחנו מספקים מאפים, לחמים, עוגות ועוגיות גם בשישי ובשבת — נאפים בשעת
            בוקר מוקדמת ומגיעים אליכם כשהם מוכנים להגשה.
          </p>
          <ul>
            <li><strong>אספקה יומית טרייה</strong><span>בטווחי זמן קבועים ומדויקים</span></li>
            <li><strong>מוצר מוגמר</strong><span>אסתטי, ארוז ומוכן להצבה</span></li>
            <li><strong>עבודת יד</strong><span>סטנדרט של מאפיית בוטיק אירופאית</span></li>
          </ul>
          <a className="button button-gold" href={whatsappHref} target="_blank" rel="noreferrer">
            מתחילים שיתוף פעולה <Arrow />
          </a>
        </div>
      </section>

      <section className="section catering-section" id="catering">
        <div className="catering-intro">
          <p className="eyebrow">URBAN TABLE</p>
          <h2>מגשי אירוח שמכבדים את הרגע.</h2>
          <p>
            מתוקים, מלוחים, כריכים ועוגות — לעסק, לאירוע מיוחד או לבוקר התארגנות.
            הכול מגיע מוקפד, נעים ומוכן להגשה.
          </p>
          <a className="button button-dark" href={whatsappHref} target="_blank" rel="noreferrer">
            בונים הזמנה יחד <Arrow />
          </a>
        </div>
        <div className="catering-cards">
          <article>
            <span>01</span>
            <h3>ישיבת צוות</h3>
            <p>בוקר מדויק למשרד, בלי הכנות ובלי פשרות.</p>
          </article>
          <article>
            <span>02</span>
            <h3>אירוע עסקי</h3>
            <p>מגשים שנראים טוב ומרגישים אפילו יותר.</p>
          </article>
          <article>
            <span>03</span>
            <h3>חתן וכלה</h3>
            <p>כיבוד למלווים ולספקים שמגיע עד אליכם.</p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <img src="/images/urban-logo.png" alt="The Urban Bakery" />
          <p className="eyebrow">LET&apos;S TALK</p>
          <h2>מחכים לדבר איתכם.</h2>
          <p>להזמנות מיוחדות, מגשי אירוח, אספקה לעסקים או שאלה קטנה בדרך.</p>
        </div>
        <div className="contact-actions">
          <a className="contact-row" href={whatsappHref} target="_blank" rel="noreferrer">
            <span>וואטסאפ</span><strong>055-775-6454</strong><Arrow />
          </a>
          <a className="contact-row" href="tel:+972557756454">
            <span>טלפון</span><strong>055-775-6454</strong><Arrow />
          </a>
          <a className="contact-row" href="https://maps.google.com/?q=%D7%A0%D7%99%D7%A6%D7%A0%D7%94+14+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91" target="_blank" rel="noreferrer">
            <span>כתובת</span><strong>ניצנה 14, מתחם נגה</strong><Arrow />
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 Urban Bakery</span>
        <span>ניצנה 14 · תל אביב–יפו</span>
        <a href="#top">חזרה למעלה ↑</a>
      </footer>
    </main>
  );
}
