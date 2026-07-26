import type { SiteContent } from "./site-content";

export type Lang = "he" | "en";

export const enSiteContent: SiteContent = {
  hero: {
    kicker: "Bakery, Café, Catering, B2B",
    cta: "LET'S TALK",
  },
  cafe: {
    headline1: "A small hideaway.",
    headline2: "In the heart of the city.",
    lead1: "A touch of Europe.",
    lead2: "Very much home.",
    body:
      "A preserved green building, a quiet garden, and the smell of morning baking. Delicate Italian coffee, sourdough breads and pastries born in the patisserie around the corner.",
    address: "14 Nitzana St, Noga Square\nTel Aviv–Yafo",
    hours: "Sun–Thu · 07:00–19:00\nFri–Sat · 07:00–16:00",
    cta: "Get directions",
  },
  catering: {
    headline1: "Hosting.",
    headline2: "Without the effort.",
    lead1: "Laid out. Served.",
    lead2: "Gone fast.",
    body:
      "Sweets, savories, sandwiches and cakes — for the office, an event, or a wedding morning. Every tray arrives thoughtful, generous and ready for the moment.",
    items: ["Meetings & Happy Hour", "Corporate Events", "Wedding Prep"],
    cta: "Let's build your order",
  },
  business: {
    headline1: "We bake.",
    headline2: "You serve.",
    lead1: "Fresh in the morning.",
    lead2: "Ready at your place.",
    body:
      "Handmade pastries, breads, cakes and cookies. Baked early, delivered on time, and ready to set up at your business — even on Fridays and Saturdays. Join the best who already serve the finest product in the city.",
    points: ["Daily Delivery", "Finished Product", "Classic Techniques"],
    cta: "Let's start working together",
  },
  contact: {
    headline1: "Good things",
    headline2: "start here.",
    cta: "LET'S TALK",
  },
};

type UiStrings = {
  navHome: string;
  navCatering: string;
  navBusiness: string;
  navGallery: string;
  navCareers: string;
  navContact: string;
  menuLabel: string;
  menuOpenAria: string;
  logoAria: string;
  detailAddress: string;
  detailHours: string;
  galleryHeading: string;
  gallerySubtitle: string;
  galleryClose: string;
  galleryPrev: string;
  galleryNext: string;
  careersHeading: string;
  careersSubtitle: string;
  careersFirstName: string;
  careersLastName: string;
  careersPhone: string;
  careersEmail: string;
  careersArea: string;
  careersSending: string;
  careersSubmit: string;
  careersSuccess: string;
  contactAddress: string;
  contactHours: string;
  socialAria: string;
  socialInstagram: string;
  socialTikTok: string;
  socialMaps: string;
  whatsappAria: string;
  langToggleLabel: string;
  langToggleAria: string;
};

export const translations: Record<Lang, UiStrings> = {
  he: {
    navHome: "בית",
    navCatering: "מגשי אירוח",
    navBusiness: "לעסקים",
    navGallery: "גלריה",
    navCareers: "דרושים",
    navContact: "צרו קשר",
    menuLabel: "תפריט",
    menuOpenAria: "פתיחת תפריט",
    logoAria: "Urban Bakery — דף הבית",
    detailAddress: "כתובת",
    detailHours: "שעות",
    galleryHeading: "הרגעים שלנו",
    gallerySubtitle: "הצצה ליום עבודה באורבן — מהתנור אל השולחן.",
    galleryClose: "סגירה",
    galleryPrev: "הקודם",
    galleryNext: "הבא",
    careersHeading: "דרושים באורבן",
    careersSubtitle: "משפחת אורבן מתרחבת ואנחנו מחפשים את הטובים ביותר שיצטרפו אלינו למגוון תפקידים!",
    careersFirstName: "שם פרטי",
    careersLastName: "שם משפחה",
    careersPhone: "מספר טלפון",
    careersEmail: "אימייל",
    careersArea: "אזור מגורים",
    careersSending: "שולח...",
    careersSubmit: "שלח",
    careersSuccess: "תודה! קיבלנו את הפרטים שלך ונחזור אליך בקרוב.",
    contactAddress: "ניצנה 14, מתחם נגה",
    contactHours: "א׳–ה׳ 07:00–19:00 · ו׳–ש׳ 07:00–16:00",
    socialAria: "עקבו אחרינו",
    socialInstagram: "אינסטגרם",
    socialTikTok: "טיקטוק",
    socialMaps: "גוגל מפות",
    whatsappAria: "שליחת הודעה בוואטסאפ",
    langToggleLabel: "ENG",
    langToggleAria: "Switch to English",
  },
  en: {
    navHome: "Home",
    navCatering: "Catering",
    navBusiness: "For Business",
    navGallery: "Gallery",
    navCareers: "Careers",
    navContact: "Contact",
    menuLabel: "Menu",
    menuOpenAria: "Open menu",
    logoAria: "Urban Bakery — Home",
    detailAddress: "Address",
    detailHours: "Hours",
    galleryHeading: "Our Moments",
    gallerySubtitle: "A peek into a day at Urban — from the oven to the table.",
    galleryClose: "Close",
    galleryPrev: "Previous",
    galleryNext: "Next",
    careersHeading: "Careers at Urban",
    careersSubtitle: "The Urban family is growing, and we're looking for the best to join us across a variety of roles!",
    careersFirstName: "First name",
    careersLastName: "Last name",
    careersPhone: "Phone number",
    careersEmail: "Email",
    careersArea: "Area of residence",
    careersSending: "Sending...",
    careersSubmit: "Send",
    careersSuccess: "Thanks! We've received your details and will get back to you soon.",
    contactAddress: "14 Nitzana St, Noga Square",
    contactHours: "Sun–Thu 07:00–19:00 · Fri–Sat 07:00–16:00",
    socialAria: "Follow us",
    socialInstagram: "Instagram",
    socialTikTok: "TikTok",
    socialMaps: "Google Maps",
    whatsappAria: "Send a WhatsApp message",
    langToggleLabel: "עב",
    langToggleAria: "עבור לעברית",
  },
};

export const galleryAlts: Record<Lang, string[]> = {
  he: [
    "קרואסון טרי בחיתוך",
    "לחם מחמצת טרי מהתנור",
    "חמאה עם חותמת The Urban Bakery",
    "מגש מאפים ועוגת אוכמניות",
    "יוצקים מאצ׳ה קרה",
    "מגש מאפים עם ריבה וקרם",
    "יוצקים קפה קר",
    "תה קר עם לימון",
    "משקאות קרים בשורה",
    "מחזיקים משקה קר וקרואסון",
    "משקה מאצ׳ה קר על קטנוע",
    "מגש מאפים נבחרים מלמעלה",
  ],
  en: [
    "Fresh croissant, sliced open",
    "Fresh sourdough loaf from the oven",
    "Butter block stamped with The Urban Bakery",
    "Pastry tray and blueberry cake",
    "Pouring iced matcha",
    "Pastry tray with jam and cream",
    "Pouring iced coffee",
    "Iced tea with lemon",
    "Cold drinks lined up",
    "Holding an iced drink and a croissant",
    "Iced matcha on a scooter",
    "A rack of assorted pastries from above",
  ],
};
