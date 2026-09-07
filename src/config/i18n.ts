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
    description: `Villa Vučje je planinska kuća od drveta i kamena u Crkvinama kod Kolašina, za do ${capacity} gostiju, sa kaminom, dvorištem i terasom s pogledom na planine. Rezervacija preko Booking.com-a ili Airbnb-a.`,
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
    location: 'Crkvine, Kolašin, Crna Gora',
    title: 'Vaša kuća u planinama.',
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
    heading: 'Svi na okupu, uz kamin.',
    body: [
      'U dnevnoj sobi ima mjesta da se svi smjestite. Tu su veliki ugaoni kauč, fotelje i kameni kamin za hladne večeri.',
      'Kuhinja i trpezarija su u istom prostoru, pa ste zajedno i dok spremate večeru. Kroz prozore se vide dvorište i brda iznad Crkvina.',
    ],
    amenitiesHeading: 'U kući',
  },
  outside: {
    heading: 'Kafa se pije napolju.',
    body: [
      'Iz kuće izlazite na kamenu terasu i travnato dvorište, ograđeno kamenim zidom. Ispred vas su planine, a ljeti ima mjesta za ručak i roštilj na otvorenom.',
      'Zimi možete do skijališta na Bjelasici, pa nazad u toplu kuću.',
    ],
  },
  gallery: {
    heading: 'Kuća u slikama',
    open: 'Otvori uvećanu fotografiju',
    close: 'Zatvori galeriju',
    prev: 'Prethodna fotografija',
    next: 'Sljedeća fotografija',
    counterOf: 'od',
    dialogLabel: 'Galerija fotografija',
  },
  location: {
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
    heading: 'Kad dolazite?',
    body: 'Izaberite datume na Booking.com-u ili Airbnb-u i pogledajte cijenu za svoj boravak. Tamo možete provjeriti slobodne termine, uslove otkazivanja i rezervisati kuću.',
    arrivalHeading: 'Dolazak i odlazak',
    reservationHeading: 'Kako rezervisati?',
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
    description: `Villa Vučje is a timber-and-stone mountain house in Crkvine near Kolašin, Montenegro, for up to ${capacity} guests, with a fireplace, a walled garden and a terrace with mountain views. Book on Booking.com or Airbnb.`,
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
    location: 'Crkvine, Kolašin, Montenegro',
    title: 'Your home in the mountains.',
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
    heading: 'Room for everyone by the fire.',
    body: [
      'There is room to settle in together, with a large corner sofa, armchairs and a stone fireplace for cold evenings.',
      'The kitchen and dining table share the living space, so whoever is cooking stays part of the conversation. The windows look onto the garden and the hills above Crkvine.',
    ],
    amenitiesHeading: 'In the house',
  },
  outside: {
    heading: 'Take your coffee outside.',
    body: [
      'Step onto the stone terrace and into a lawn enclosed by a stone wall. The mountains are right in front of you, with space for lunch and a barbecue outdoors in summer.',
      'In winter, head to the ski slopes on Bjelasica and come back to a warm house.',
    ],
  },
  gallery: {
    heading: 'The house in pictures',
    open: 'Open enlarged photo',
    close: 'Close gallery',
    prev: 'Previous photo',
    next: 'Next photo',
    counterOf: 'of',
    dialogLabel: 'Photo gallery',
  },
  location: {
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
    heading: 'When are you coming?',
    body: 'Choose your dates on Booking.com or Airbnb to see the price for your stay. You can check availability, read the cancellation terms and book the house there.',
    arrivalHeading: 'Arrival and departure',
    reservationHeading: 'How do I book?',
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
