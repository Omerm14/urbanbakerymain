const whatsappHref = "https://wa.me/972557756454";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="mini-logo" href="#top" aria-label="Urban Bakery — דף הבית">
          <img src="/images/urban-logo.png" alt="The Urban Bakery" />
        </a>
        <nav className="site-nav" aria-label="ניווט ראשי">
          <a href="#contact">צרו קשר</a>
          <a href="#business">לעסקים</a>
          <a href="#catering">מגשי אירוח</a>
          <a href="#about">בית</a>
        </nav>
        <details className="mobile-nav">
          <summary aria-label="פתיחת תפריט">תפריט</summary>
          <nav><a href="#about">אודות</a><a href="#business">לעסקים</a><a href="#catering">מגשי אירוח</a><a href="#contact">צרו קשר</a></nav>
        </details>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-bg" src="/images/croissant-layers.jpg" alt="מאפים טריים של Urban Bakery" />
        <div className="hero-shade" />
        <div className="hero-center">
          <img src="/images/urban-logo.png" alt="The Urban Bakery" />
          <h1 id="hero-title">BAKE HOUSE · NOGA</h1>
          <span className="hero-rule" />
          <p>רוצים Urban Bakery אצלכם?</p>
          <a href={whatsappHref} target="_blank" rel="noreferrer">LET&apos;S TALK ↙</a>
        </div>
        <div className="hero-bottom"><span>NITZANA 14</span><span>TEL AVIV–YAFO</span><span>EST. 2012</span></div>
      </section>

      <section className="intro marble" id="about">
        <div className="section-heading"><span className="hairline" /><h2>הסיפור שלנו.</h2><small>THE URBAN BAKERY</small></div>
        <div className="intro-copy">
          <p className="lead">בייקרי עירוני שנולד מאהבה גדולה לחומרי גלם, לאנשים ולרגע הזה שבו מאפה יוצא מהתנור.</p>
          <div className="columns">
            <p>בלב מתחם נגה, בין מבני השימור ופארק המסילה, יצרנו בית של אפייה מדויקת וקפה טוב. מקום שמרגיש קצת כמו אירופה ומאוד כמו הבית.</p>
            <p>בכל בוקר אנחנו מכינים קרואסונים, לחמים, עוגות ועוגיות בעבודת יד — בטכניקות קלאסיות, עם חומרי גלם מעולים וללא קיצורי דרך.</p>
          </div>
        </div>
      </section>

      <section className="image-break image-break-cake" aria-label="קונדיטוריה בעבודת יד">
        <img src="/images/cake.jpg" alt="עוגה בעבודת יד של Urban Bakery" />
        <div className="image-caption"><span>01</span><strong>PÂTISSERIE</strong><p>עוגות ועוגיות שנראות כמו שהן מרגישות.</p></div>
      </section>

      <section className="offerings" id="catering">
        <div className="section-heading"><span className="hairline" /><h2>מה אנחנו אופים.</h2><small>BAKED DAILY</small></div>
        <div className="offering-list">
          <article><span>01</span><h3>מאפים</h3><p>קרואסונים, בריושים ופחזניות עם שכבות חמאה מדויקות.</p></article>
          <article><span>02</span><h3>עוגות</h3><p>עוגות, טארטים ועוגיות בעבודת יד לאירוח או סתם כי בא.</p></article>
          <article><span>03</span><h3>קפה</h3><p>קפה איטלקי בקלייה עדינה, מוגש בדיוק כמו שאנחנו אוהבים.</p></article>
          <article><span>04</span><h3>Urban Table</h3><p>מגשי אירוח מתוקים ומלוחים, מוקפדים ומוכנים להגשה.</p></article>
        </div>
        <a className="quiet-link" href={whatsappHref} target="_blank" rel="noreferrer">לבניית הזמנה יחד ←</a>
      </section>

      <section className="image-break image-break-cafe" aria-label="בית הקפה במתחם נגה">
        <img src="/images/matcha.jpg" alt="משקאות בבית הקפה Urban Bakery" />
        <div className="floating-copy"><span>THE CAFÉ</span><h2>קצת אירופה.<br />מאוד הבית.</h2></div>
      </section>

      <section className="business marble" id="business">
        <div className="section-heading"><span className="hairline" /><h2>Urban Bakery<br />אצלכם בעסק.</h2><small>FOR BUSINESS</small></div>
        <div className="business-content">
          <p className="lead">יש לכם בית קפה או מסעדה? אנחנו אופים. אתם מגישים.</p>
          <div className="business-grid">
            <article><strong>טרי. כל יום.</strong><p>נאפה בשעת בוקר מוקדמת ומגיע אליכם כשהוא בשיא.</p></article>
            <article><strong>מוכן להגשה.</strong><p>מוצר אסתטי, ארוז ומוגמר — בלי צורך במטבח קונדיטוריה.</p></article>
            <article><strong>גם בסופ״ש.</strong><p>אספקה שוטפת גם בשישי ובשבת, בטווחי זמן קבועים.</p></article>
          </div>
          <a className="quiet-link" href={whatsappHref} target="_blank" rel="noreferrer">מתחילים שיתוף פעולה ←</a>
        </div>
      </section>

      <section className="contact" id="contact">
        <img src="/images/urban-logo.png" alt="The Urban Bakery" />
        <span className="hairline" />
        <p>מחכים לדבר איתכם.</p>
        <a href={whatsappHref} target="_blank" rel="noreferrer">LET&apos;S TALK</a>
        <div className="contact-details"><a href="tel:+972557756454">055–775–6454</a><a href="https://maps.google.com/?q=%D7%A0%D7%99%D7%A6%D7%A0%D7%94+14+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91" target="_blank" rel="noreferrer">ניצנה 14, מתחם נגה</a><span>א׳–ה׳ 07:00–19:00 · ו׳–ש׳ 07:00–16:00</span></div>
      </section>

      <footer><span>© 2026 THE URBAN BAKERY</span><span>BAKERY · CAFÉ · CATERING</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
