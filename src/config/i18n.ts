import { property, type AmenityKey } from './property';

export type Locale = 'sr' | 'en';

export const locales: readonly Locale[] = ['sr', 'en'];
export const defaultLocale: Locale = 'sr';

/** BCP 47 tags used for `lang`, `hreflang` and Open Graph. */
export const langTag: Record<Locale, string> = {
  sr: 'sr-Latn',
  en: 'en',
};

export const ogLocale: Record<Locale, string> = {
  sr: 'sr_ME',
  en: 'en_GB',
};

/** Root-relative path of each localized home page. */
export const localePath: Record<Locale, string> = {
  sr: '/',
  en: '/en/',
};

/** Localized in-page anchor ids, so URLs read naturally in each language. */
export const anchors: Record<Locale, { house: string; gallery: string; location: string; booking: string }> = {
  sr: { house: 'kuca', gallery: 'galerija', location: 'lokacija', booking: 'rezervacija' },
  en: { house: 'house', gallery: 'gallery', location: 'location', booking: 'booking' },
};

const capacity = property.capacity.value;

const sr = {
  meta: {
    title: 'Villa Vučje – kuća za odmor u Crkvinama kod Kolašina',
    description: `Villa Vučje je planinska kuća od drveta i kamena u Crkvinama kod Kolašina, za do ${capacity} gostiju, sa kaminom, dvorištem i terasom s pogledom na planine. Rezervacija preko Booking.com-a.`,
    switchLabel: 'English',
    switchAria: 'Read this page in English',
    skipToContent: 'Pređi na sadržaj',
  },
  nav: {
    house: 'Kuća',
    gallery: 'Galerija',
    location: 'Lokacija',
    menuOpen: 'Meni',
    menuClose: 'Zatvori meni',
    menuAria: 'Glavna navigacija',
  },
  cta: {
    booking: 'Pogledajte na Booking.com-u',
    airbnb: 'Pogledajte na Airbnb-u',
    explore: 'Istražite kuću',
    newTab: 'otvara se u novom prozoru',
  },
  hero: {
    location: 'Crkvine · Kolašin · Crna Gora',
    title: 'Planinska kuća od drveta i kamena, nadomak Kolašina.',
    lede: `Cijela kuća za do ${capacity} gostiju, sa kaminom, ograđenim dvorištem i terasom s pogledom na okolne planine.`,
  },
  facts: {
    heading: 'Ukratko',
    location: { label: 'Lokacija', value: 'Crkvine, Kolašin' },
    guests: { label: 'Gosti', value: `do ${capacity}` },
    bedrooms: { label: 'Spavaće sobe', value: String(property.bedrooms.value) },
    bathrooms: { label: 'Kupatila', value: String(property.bathrooms.value) },
    area: { label: 'Površina', value: `${property.floorAreaM2.value} m²` },
    parking: { label: 'Parking', value: 'besplatan, uz kuću' },
  },
  inside: {
    label: 'Unutra',
    heading: 'Dnevni boravak uz kamin',
    body: [
      'Zidovi obloženi borovinom, kamin od prirodnog kamena i fotelje boje rđe uz svijetli ugaoni kauč: dnevni boravak je mjesto gdje se provode večeri.',
      'Trpezarija i kuhinja dijele isti otvoreni prostor, a prozori i vrata terase gledaju na dvorište i brda iznad Crkvina.',
    ],
    amenitiesHeading: 'U kući',
  },
  outside: {
    label: 'Napolju',
    heading: 'Dvorište, terasa i pogled na planine',
    body: [
      'Kuću okružuju kameni zid, travnato dvorište i kamenom popločana terasa. Ljeti se dan provodi napolju, uz roštilj i pogled na vrhove oko Kolašina.',
      'U hladnijem dijelu godine kuća je baza za skijalište na Bjelasici i zimske šetnje, uz kamin koji čeka po povratku.',
    ],
  },
  gallery: {
    label: 'Galerija',
    heading: 'Kuća u slikama',
    open: 'Otvori uvećanu fotografiju',
    close: 'Zatvori galeriju',
    prev: 'Prethodna fotografija',
    next: 'Sljedeća fotografija',
    counterOf: 'od',
    dialogLabel: 'Galerija fotografija',
  },
  location: {
    label: 'Lokacija',
    heading: 'Crkvine, kod Kolašina',
    body: [
      `Crkvine su mirno naselje u sjevernoj Crnoj Gori, oko ${property.distanceToKolasinKm.value} km od centra Kolašina.`,
      'Kolašin je poznat po skijalištima na Bjelasici, Nacionalnom parku Biogradska gora i kanjonu Tare, pa je kuća dobra polazna tačka i ljeti i zimi.',
    ],
    addressLabel: 'Adresa',
    address: `Crkvine, ${property.postalCode} Kolašin, Crna Gora`,
    mapLink: 'Otvorite lokaciju u Google mapama',
    mapNote: 'Tačnu lokaciju i uputstva za dolazak dobijate uz potvrdu rezervacije.',
  },
  booking: {
    label: 'Rezervacija',
    heading: 'Rezervišite svoj boravak',
    body: 'Cijene, slobodni termini i uslovi otkazivanja su uvijek ažurni na stranici oglasa. Rezervacija se obavlja direktno kod izabranog provajdera.',
    rulesHeading: 'Kućni red',
    checkIn: `Prijava ${property.houseRules.checkInFrom}–${property.houseRules.checkInUntil}`,
    checkOut: `Odjava ${property.houseRules.checkOutFrom}–${property.houseRules.checkOutUntil}`,
    noSmoking: 'Pušenje nije dozvoljeno',
    noPets: 'Kućni ljubimci nisu dozvoljeni',
    noParties: 'Bez zabava i proslava',
  },
  footer: {
    tagline: 'Kuća za odmor u Crkvinama kod Kolašina, Crna Gora.',
    instagram: 'Instagram',
    contactHeading: 'Kontakt',
    followHeading: 'Pratite nas',
    languageHeading: 'Jezik',
    rights: 'Sva prava zadržana.',
  },
  bar: {
    label: 'Rezervacija',
  },
  amenities: {
    fireplace: 'Kamin',
    garden: 'Dvorište',
    terrace: 'Terasa',
    balcony: 'Balkon',
    kitchen: 'Opremljena kuhinja',
    bbq: 'Roštilj',
    parking: 'Besplatan parking',
    wifi: 'Wi‑Fi',
    washer: 'Veš mašina',
    dishwasher: 'Mašina za suđe',
  } satisfies Record<AmenityKey, string>,
  photos: {
    exterior: 'Villa Vučje spolja: drvena fasada sa zelenim krovom, balkon sa drvenom ogradom i visoki kameni zid sa lučnom kapijom uz put.',
    livingDining: 'Otvoreni dnevni boravak sa trpezarijskim stolom, svijetlim kaučem, foteljama boje rđe, kaminom od kamena i prozorom s pogledom na brda.',
    livingRoom: 'Dnevni boravak sa svijetlim ugaonim kaučem, dvije fotelje boje rđe, televizorom na zidu od borovine i kaminom u uglu.',
    fireplace: 'Kamin od prirodnog kamena sa vratima od kovanog gvožđa i naslaganim drvima, ispred njega stakleni sto na postolju od kamena.',
    garden: 'Ljetni pogled iz dvorišta: travnjak, kamenom popločana terasa, crvena drvena ograda i planinski vrhovi pod vedrim nebom.',
  },
  captions: {
    exterior: 'Kuća s ulice',
    livingDining: 'Dnevni boravak i trpezarija',
    livingRoom: 'Dnevni boravak',
    fireplace: 'Kamin',
    garden: 'Dvorište ljeti',
  },
};

export type Translation = typeof sr;

const en: Translation = {
  meta: {
    title: 'Villa Vučje – holiday house in Crkvine near Kolašin, Montenegro',
    description: `Villa Vučje is a timber-and-stone mountain house in Crkvine near Kolašin, Montenegro, for up to ${capacity} guests, with a fireplace, a walled garden and a terrace with mountain views. Book on Booking.com.`,
    switchLabel: 'Srpski',
    switchAria: 'Pročitajte ovu stranicu na srpskom',
    skipToContent: 'Skip to content',
  },
  nav: {
    house: 'The house',
    gallery: 'Gallery',
    location: 'Location',
    menuOpen: 'Menu',
    menuClose: 'Close menu',
    menuAria: 'Main navigation',
  },
  cta: {
    booking: 'View on Booking.com',
    airbnb: 'View on Airbnb',
    explore: 'Explore the house',
    newTab: 'opens in a new tab',
  },
  hero: {
    location: 'Crkvine · Kolašin · Montenegro',
    title: 'A timber-and-stone mountain house, a short drive from Kolašin.',
    lede: `The whole house for up to ${capacity} guests, with a fireplace, a walled garden and a terrace looking out to the surrounding mountains.`,
  },
  facts: {
    heading: 'At a glance',
    location: { label: 'Location', value: 'Crkvine, Kolašin' },
    guests: { label: 'Guests', value: `up to ${capacity}` },
    bedrooms: { label: 'Bedrooms', value: String(property.bedrooms.value) },
    bathrooms: { label: 'Bathrooms', value: String(property.bathrooms.value) },
    area: { label: 'Floor area', value: `${property.floorAreaM2.value} m²` },
    parking: { label: 'Parking', value: 'free, on site' },
  },
  inside: {
    label: 'Inside',
    heading: 'A living room built around the fireplace',
    body: [
      'Pine-clad walls, a natural-stone fireplace and rust-coloured armchairs beside a pale corner sofa: the living room is where evenings are spent.',
      'The dining table and kitchen share the same open space, and the windows and terrace doors look out to the garden and the hills above Crkvine.',
    ],
    amenitiesHeading: 'In the house',
  },
  outside: {
    label: 'Outside',
    heading: 'Garden, terrace and mountain views',
    body: [
      'A stone wall, a lawn and a stone-paved terrace surround the house. In summer the day moves outdoors, with the barbecue and a view of the peaks around Kolašin.',
      'In the colder months the house is a base for the ski slopes on Bjelasica and winter walks, with the fireplace waiting when you get back.',
    ],
  },
  gallery: {
    label: 'Gallery',
    heading: 'The house in pictures',
    open: 'Open enlarged photo',
    close: 'Close gallery',
    prev: 'Previous photo',
    next: 'Next photo',
    counterOf: 'of',
    dialogLabel: 'Photo gallery',
  },
  location: {
    label: 'Location',
    heading: 'Crkvine, near Kolašin',
    body: [
      `Crkvine is a quiet village in northern Montenegro, about ${property.distanceToKolasinKm.value} km from the centre of Kolašin.`,
      'Kolašin is known for the ski slopes on Bjelasica, Biogradska Gora National Park and the Tara canyon, which makes the house a good base in summer and winter alike.',
    ],
    addressLabel: 'Address',
    address: `Crkvine, ${property.postalCode} Kolašin, Montenegro`,
    mapLink: 'Open the location in Google Maps',
    mapNote: 'The exact location and arrival directions come with your booking confirmation.',
  },
  booking: {
    label: 'Booking',
    heading: 'Book your stay',
    body: 'Prices, availability and cancellation terms are always up to date on the listing page. Booking is completed directly with the provider you choose.',
    rulesHeading: 'House rules',
    checkIn: `Check-in ${property.houseRules.checkInFrom}–${property.houseRules.checkInUntil}`,
    checkOut: `Check-out ${property.houseRules.checkOutFrom}–${property.houseRules.checkOutUntil}`,
    noSmoking: 'No smoking',
    noPets: 'No pets',
    noParties: 'No parties or events',
  },
  footer: {
    tagline: 'A holiday house in Crkvine near Kolašin, Montenegro.',
    instagram: 'Instagram',
    contactHeading: 'Contact',
    followHeading: 'Follow',
    languageHeading: 'Language',
    rights: 'All rights reserved.',
  },
  bar: {
    label: 'Book',
  },
  amenities: {
    fireplace: 'Fireplace',
    garden: 'Garden',
    terrace: 'Terrace',
    balcony: 'Balcony',
    kitchen: 'Equipped kitchen',
    bbq: 'Barbecue',
    parking: 'Free parking',
    wifi: 'Wi‑Fi',
    washer: 'Washing machine',
    dishwasher: 'Dishwasher',
  },
  photos: {
    exterior: 'Villa Vučje from the road: timber facade with a green roof, a balcony with a wooden railing and a tall stone wall with an arched gate.',
    livingDining: 'Open-plan living room with a dining table, pale sofa, rust-coloured armchairs, a stone fireplace and a window looking out to the hills.',
    livingRoom: 'Living room with a pale corner sofa, two rust-coloured armchairs, a television on a pine-clad wall and a fireplace in the corner.',
    fireplace: 'Natural-stone fireplace with wrought-iron doors and stacked firewood, with a glass-topped stone coffee table in front.',
    garden: 'Summer view from the garden: lawn, stone-paved terrace, red wooden fence and mountain peaks under a clear sky.',
  },
  captions: {
    exterior: 'The house from the street',
    livingDining: 'Living room and dining area',
    livingRoom: 'Living room',
    fireplace: 'The fireplace',
    garden: 'The garden in summer',
  },
};

export const translations: Record<Locale, Translation> = { sr, en };

export function t(locale: Locale): Translation {
  return translations[locale];
}

/** The other locale, for the language switch. */
export function otherLocale(locale: Locale): Locale {
  return locale === 'sr' ? 'en' : 'sr';
}
