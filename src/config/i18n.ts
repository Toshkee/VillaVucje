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

/**
 * Each language written in itself, so the switch reads the same on both pages,
 * plus the short badge the header uses where a full word would crowd the bar.
 */
export const localeName: Record<Locale, string> = {
  sr: 'Crnogorski',
  en: 'English',
};

export const localeBadge: Record<Locale, string> = {
  sr: 'CG',
  en: 'EN',
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
    switchTo: {
      sr: 'Ova stranica je na crnogorskom',
      en: 'Pročitajte ovu stranicu na engleskom',
    },
    skipToContent: 'Pređi na sadržaj',
  },
  nav: {
    house: 'Kuća',
    gallery: 'Galerija',
    location: 'Lokacija',
    menuOpen: 'Meni',
    menuClose: 'Zatvori meni',
    menuAria: 'Glavna navigacija',
    langAria: 'Jezik stranice',
  },
  cta: {
    booking: 'Pogledajte na Booking.com-u',
    airbnb: 'Pogledajte na Airbnb-u',
    availability: 'Provjerite dostupnost',
    explore: 'Pogledajte kuću',
    newTab: 'otvara se u novom prozoru',
  },
  hero: {
    location: 'Crkvine, Kolašin, Crna Gora',
    title: 'Planinska kuća, samo vaša.',
    lede: `Cijela kuća za do ${capacity} gostiju, sa tri spavaće sobe, kaminom i ograđenim dvorištem, 9 km od Kolašina.`,
  },
  facts: {
    heading: 'Ukratko',
    location: { label: 'Smještaj', value: 'cijela kuća' },
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
    amenityGroups: {
      together: 'Za zajednički boravak',
      outside: 'Napolju',
      practical: 'Praktično',
    },
  },
  outside: {
    heading: 'Kafa se pije napolju.',
    body: [
      'Iz kuće izlazite na kamenu terasu i travnato dvorište, ograđeno kamenim zidom. Ispred vas su planine, a ljeti ima mjesta za ručak i roštilj na otvorenom.',
      'Zimi možete do skijališta na Bjelasici, pa nazad u toplu kuću.',
    ],
    highlights: ['Ograđeno dvorište', 'Terasa s pogledom', 'Roštilj', 'Privatni parking'],
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
    distanceLabel: 'Do centra Kolašina',
    distanceValue: `${property.distanceToKolasinKm.value} km`,
    accessLabel: 'Dolazak',
    accessValue: 'pristup automobilom i parking uz kuću',
  },
  reviews: {
    eyebrow: 'Utisci gostiju',
    heading: 'Gosti su kuću ocijenili izuzetnom.',
    scoreLabel: 'Ocjena na Booking.com-u',
    count: '11 provjerenih recenzija',
    readAll: 'Pročitajte sve recenzije',
    sourceNote: 'Ocjena i broj recenzija provjereni 7. septembra 2026.',
    excerpts: {
      gabriel: 'Čista, moderna i prostrana planinska oaza.',
      meli: 'Osjećali smo se kao kod kuće.',
      andrei: 'Pažnja posvećena detaljima je posebna.',
    },
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
    kitchenLiving: 'Prostrani zajednički prostor sa svijetlim ugaonim kaučem, foteljom, opremljenom kuhinjom i drvenim stepeništem za gornji sprat.',
    staircaseEntry: 'Drveno stepenište sa ugrađenim klupama i prostorom za odlaganje u prizemlju kuće.',
    diningDetail: 'Postavljen trpezarijski sto sa čašama, voćem i lokalnim pićem, uz kuhinju u pozadini.',
    bedroomHallway: 'Svijetli hodnik na spratu koji povezuje spavaće sobe, sa prirodnim drvenim vratima i podovima.',
    bathroom: 'Svijetlo kupatilo obloženo kamenom, sa tušem bez praga, staklenom pregradom i zidnim umivaonikom.',
    twinBedroom: 'Spavaća soba sa dva odvojena kreveta, drvenim zidovima i izlazom na balkon s pogledom na okolna brda.',
    doubleBedroom: 'Spavaća soba sa bračnim krevetom, drvenim zidovima, noćnim lampama i izlazom na balkon.',
    livingDining: 'Otvoreni dnevni boravak sa trpezarijskim stolom, svijetlim kaučem, foteljama boje rđe, kaminom od kamena i prozorom s pogledom na brda.',
    livingRoom: 'Dnevni boravak sa svijetlim ugaonim kaučem, dvije fotelje boje rđe, televizorom na zidu od borovine i kaminom u uglu.',
    fireplace: 'Kamin od prirodnog kamena sa vratima od kovanog gvožđa i naslaganim drvima, ispred njega stakleni sto na postolju od kamena.',
    garden: 'Ljetni pogled iz dvorišta: travnjak, kamenom popločana terasa, crvena drvena ograda i planinski vrhovi pod vedrim nebom.',
    exteriorWinter: 'Kuća pod snijegom dok pahulje padaju: drvena fasada, zeleni krov i balkon sa girlandom od zelenila, a ispred nje dvorište i kamene stepenice pod snijegom.',
  },
  captions: {
    exterior: 'Kuća s ulice',
    kitchenLiving: 'Dnevni boravak, kuhinja i stepenište',
    staircaseEntry: 'Stepenište i ulazni prostor',
    diningDetail: 'Trpezarijski sto',
    bedroomHallway: 'Hodnik na spratu',
    bathroom: 'Kupatilo sa tušem',
    twinBedroom: 'Soba sa odvojenim krevetima',
    doubleBedroom: 'Soba sa bračnim krevetom',
    livingDining: 'Dnevni boravak i trpezarija',
    livingRoom: 'Dnevni boravak',
    fireplace: 'Kamin',
    garden: 'Dvorište ljeti',
    exteriorWinter: 'Kuća zimi',
  },
};

export type Translation = typeof sr;

const en: Translation = {
  meta: {
    title: 'Villa Vučje – holiday house in Crkvine near Kolašin, Montenegro',
    description: `Villa Vučje is a timber-and-stone mountain house in Crkvine near Kolašin, Montenegro, for up to ${capacity} guests, with a fireplace, a walled garden and a terrace with mountain views. Book on Booking.com or Airbnb.`,
    switchTo: {
      sr: 'Read this page in Montenegrin',
      en: 'This page is in English',
    },
    skipToContent: 'Skip to content',
  },
  nav: {
    house: 'The house',
    gallery: 'Gallery',
    location: 'Location',
    menuOpen: 'Menu',
    menuClose: 'Close menu',
    menuAria: 'Main navigation',
    langAria: 'Page language',
  },
  cta: {
    booking: 'View on Booking.com',
    airbnb: 'View on Airbnb',
    availability: 'Check availability',
    explore: 'View the house',
    newTab: 'opens in a new tab',
  },
  hero: {
    location: 'Crkvine, Kolašin, Montenegro',
    title: 'A mountain house, all to yourself.',
    lede: `The whole house for up to ${capacity} guests, with three bedrooms, a fireplace and a walled garden, 9 km from Kolašin.`,
  },
  facts: {
    heading: 'At a glance',
    location: { label: 'Property', value: 'entire house' },
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
    amenityGroups: {
      together: 'For time together',
      outside: 'Outdoors',
      practical: 'Practical details',
    },
  },
  outside: {
    heading: 'Take your coffee outside.',
    body: [
      'Step onto the stone terrace and into a lawn enclosed by a stone wall. The mountains are right in front of you, with space for lunch and a barbecue outdoors in summer.',
      'In winter, head to the ski slopes on Bjelasica and come back to a warm house.',
    ],
    highlights: ['Walled garden', 'Terrace with a view', 'Barbecue', 'Private parking'],
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
    distanceLabel: 'Kolašin town centre',
    distanceValue: `${property.distanceToKolasinKm.value} km`,
    accessLabel: 'Arrival',
    accessValue: 'car access and parking by the house',
  },
  reviews: {
    eyebrow: 'Guest reviews',
    heading: 'Guests rate the house exceptional.',
    scoreLabel: 'Booking.com score',
    count: '11 verified reviews',
    readAll: 'Read all reviews',
    sourceNote: 'Score and review count checked on 7 September 2026.',
    excerpts: {
      gabriel: 'A clean, modern, spacious mountain oasis!',
      meli: 'Like we were in our home.',
      andrei: 'Attention to detail is one of a kind.',
    },
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
    kitchenLiving: 'Spacious shared living area with a pale corner sofa, armchair, equipped kitchen and timber staircase to the upper floor.',
    staircaseEntry: 'Timber staircase with built-in benches and storage in the ground-floor entrance area.',
    diningDetail: 'Dining table set with glasses, fruit and local drinks, with the kitchen softly visible behind it.',
    bedroomHallway: 'Bright upstairs hallway connecting the bedrooms, with natural timber doors and flooring.',
    bathroom: 'Bright stone-tiled bathroom with a walk-in shower, glass screen and wall-mounted basin.',
    twinBedroom: 'Bedroom with two single beds, timber walls and a balcony overlooking the surrounding hills.',
    doubleBedroom: 'Bedroom with a double bed, timber walls, bedside lamps and access to the balcony.',
    livingDining: 'Open-plan living room with a dining table, pale sofa, rust-coloured armchairs, a stone fireplace and a window looking out to the hills.',
    livingRoom: 'Living room with a pale corner sofa, two rust-coloured armchairs, a television on a pine-clad wall and a fireplace in the corner.',
    fireplace: 'Natural-stone fireplace with wrought-iron doors and stacked firewood, with a glass-topped stone coffee table in front.',
    garden: 'Summer view from the garden: lawn, stone-paved terrace, red wooden fence and mountain peaks under a clear sky.',
    exteriorWinter: 'The house under snow as flakes fall: timber facade, green roof and a balcony hung with an evergreen garland, with the snow-covered garden and stone steps in front.',
  },
  captions: {
    exterior: 'The house from the street',
    kitchenLiving: 'Living room, kitchen and staircase',
    staircaseEntry: 'Staircase and entrance area',
    diningDetail: 'The dining table',
    bedroomHallway: 'Upstairs hallway',
    bathroom: 'Bathroom with walk-in shower',
    twinBedroom: 'Twin bedroom',
    doubleBedroom: 'Double bedroom',
    livingDining: 'Living room and dining area',
    livingRoom: 'Living room',
    fireplace: 'The fireplace',
    garden: 'The garden in summer',
    exteriorWinter: 'The house in winter',
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
