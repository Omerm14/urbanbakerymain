export type SiteContent = {
  hero: {
    kicker: string;
    cta: string;
  };
  cafe: {
    headline1: string;
    headline2: string;
    lead1: string;
    lead2: string;
    body: string;
    address: string;
    hours: string;
    cta: string;
  };
  catering: {
    headline1: string;
    headline2: string;
    lead1: string;
    lead2: string;
    body: string;
    items: string[];
    cta: string;
  };
  business: {
    headline1: string;
    headline2: string;
    lead1: string;
    lead2: string;
    body: string;
    points: string[];
    cta: string;
  };
  contact: {
    headline1: string;
    headline2: string;
    cta: string;
  };
};

export const defaultSiteContent: SiteContent = {
  hero: {
    kicker: "BAKE HOUSE",
    cta: "LET'S TALK",
  },
  cafe: {
    headline1: "מחבוא קטן.",
    headline2: "בלב העיר.",
    lead1: "קצת אירופה.",
    lead2: "מאוד הבית.",
    body:
      "מבנה לשימור ירקרק, גינה שקטה וריח של אפייה מהבוקר. קפה איטלקי עדין, לחמי מחמצת ומאפים שנולדים בקונדיטוריה שמעבר לפינה.",
    address: "ניצנה 14, מתחם נגה\nתל אביב–יפו",
    hours: "א׳–ה׳ · 07:00–19:00\nו׳–ש׳ · 07:00–16:00",
    cta: "איך מגיעים",
  },
  catering: {
    headline1: "אירוח.",
    headline2: "בלי להתאמץ.",
    lead1: "פתוח. מוגש.",
    lead2: "נגמר מהר.",
    body:
      "מתוקים, מלוחים, כריכים ועוגות — למשרד, לאירוע או לבוקר של חתן וכלה. כל מגש מגיע מוקפד, נדיב ומוכן לרגע הנכון.",
    items: ["ישיבות ו-Happy Hour", "אירועים עסקיים", "התארגנות חתן וכלה"],
    cta: "בונים הזמנה יחד",
  },
  business: {
    headline1: "אנחנו אופים.",
    headline2: "אתם מגישים.",
    lead1: "טרי בבוקר.",
    lead2: "מוכן אצלכם.",
    body:
      "מאפים, לחמים, עוגות ועוגיות בעבודת יד. נאפים מוקדם, מגיעים בזמן ומוכנים להצבה — גם בשישי ובשבת.",
    points: ["אספקה יומית", "מוצר מוגמר", "טכניקות קלאסיות"],
    cta: "מתחילים לעבוד יחד",
  },
  contact: {
    headline1: "דברים טובים",
    headline2: "מתחילים כאן.",
    cta: "LET'S TALK",
  },
};

function shortText(value: unknown, fallback: string, maxLength = 180) {
  if (typeof value !== "string") return fallback;
  const normalized = value.trim().slice(0, maxLength);
  return normalized || fallback;
}

function stringList(value: unknown, fallback: string[]) {
  if (!Array.isArray(value)) return fallback;
  const items = value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim().slice(0, 100))
    .filter(Boolean)
    .slice(0, 6);
  return items.length ? items : fallback;
}

export function normalizeSiteContent(value: unknown): SiteContent {
  const input = value && typeof value === "object" ? value as Record<string, unknown> : {};
  const hero = input.hero && typeof input.hero === "object" ? input.hero as Record<string, unknown> : {};
  const cafe = input.cafe && typeof input.cafe === "object" ? input.cafe as Record<string, unknown> : {};
  const catering = input.catering && typeof input.catering === "object" ? input.catering as Record<string, unknown> : {};
  const business = input.business && typeof input.business === "object" ? input.business as Record<string, unknown> : {};
  const contact = input.contact && typeof input.contact === "object" ? input.contact as Record<string, unknown> : {};

  return {
    hero: {
      kicker: shortText(hero.kicker, defaultSiteContent.hero.kicker, 80),
      cta: shortText(hero.cta, defaultSiteContent.hero.cta, 80),
    },
    cafe: {
      headline1: shortText(cafe.headline1, defaultSiteContent.cafe.headline1),
      headline2: shortText(cafe.headline2, defaultSiteContent.cafe.headline2),
      lead1: shortText(cafe.lead1, defaultSiteContent.cafe.lead1),
      lead2: shortText(cafe.lead2, defaultSiteContent.cafe.lead2),
      body: shortText(cafe.body, defaultSiteContent.cafe.body, 900),
      address: shortText(cafe.address, defaultSiteContent.cafe.address, 300),
      hours: shortText(cafe.hours, defaultSiteContent.cafe.hours, 300),
      cta: shortText(cafe.cta, defaultSiteContent.cafe.cta, 100),
    },
    catering: {
      headline1: shortText(catering.headline1, defaultSiteContent.catering.headline1),
      headline2: shortText(catering.headline2, defaultSiteContent.catering.headline2),
      lead1: shortText(catering.lead1, defaultSiteContent.catering.lead1),
      lead2: shortText(catering.lead2, defaultSiteContent.catering.lead2),
      body: shortText(catering.body, defaultSiteContent.catering.body, 900),
      items: stringList(catering.items, defaultSiteContent.catering.items),
      cta: shortText(catering.cta, defaultSiteContent.catering.cta, 100),
    },
    business: {
      headline1: shortText(business.headline1, defaultSiteContent.business.headline1),
      headline2: shortText(business.headline2, defaultSiteContent.business.headline2),
      lead1: shortText(business.lead1, defaultSiteContent.business.lead1),
      lead2: shortText(business.lead2, defaultSiteContent.business.lead2),
      body: shortText(business.body, defaultSiteContent.business.body, 900),
      points: stringList(business.points, defaultSiteContent.business.points),
      cta: shortText(business.cta, defaultSiteContent.business.cta, 100),
    },
    contact: {
      headline1: shortText(contact.headline1, defaultSiteContent.contact.headline1),
      headline2: shortText(contact.headline2, defaultSiteContent.contact.headline2),
      cta: shortText(contact.cta, defaultSiteContent.contact.cta, 100),
    },
  };
}
