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
    description: `Villa Vučje je kuća od drveta i kamena u Crkvinama, 9 km od Kolašina. Cijela kuća za do ${capacity} gostiju: tri spavaće sobe, kamin, ograđeno dvorište s pogledom na planine i parking. Rezervacija preko Booking.com-a ili Airbnb-a.`,
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
    booking: 'Rezervišite na Booking.com-u',
    airbnb: 'Rezervišite na Airbnb-u',
    availability: 'Provjerite slobodne termine',
    explore: 'Pogledajte kuću',
    newTab: 'otvara se u novom prozoru',
  },
  hero: {
    location: 'Crkvine, Kolašin, Crna Gora',
    title: 'Kuća od drveta i kamena, s pogledom na planine.',
    lede: `Cijela kuća samo za vas: tri spavaće sobe za do ${capacity} gostiju, kamin, ograđeno dvorište i parking, 9 km od Kolašina.`,
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
    heading: 'Prizemlje za druženje, sprat za spavanje.',
    body: [
      'U prizemlju je jedan veliki prostor: dnevna soba sa kaminom od kamena, ugaonim kaučem i televizorom, veliki trpezarijski sto i bijela kuhinja sa svim što treba za kuvanje. Zidovi su od borovine, a kroz prozore se vide dvorište i brda iznad Crkvina.',
      `Drvenim stepenicama se penjete na sprat, gdje su tri spavaće sobe: sa bračnim krevetom i sa odvojenim krevetima, pa je kuća zgodna i za porodicu i za društvo do ${capacity} osoba. Iz soba se izlazi na balkon. Kupatila su dva, obložena svijetlim kamenom.`,
    ],
    amenitiesHeading: 'Šta vas čeka u kući',
    amenityGroups: {
      together: 'Za boravak',
      outside: 'Napolju',
      practical: 'Praktično',
    },
  },
  outside: {
    heading: 'Dvorište sa planinom ispred vas.',
    body: [
      'Ispred kuće su kamena terasa i travnjak, ograđeni kamenim zidom i drvenom ogradom, pa djeca mogu slobodno da se igraju dok vi sjedite napolju. Pogled sa terase ide preko krovova Crkvina na planine. Ljeti se tu ruča, pali roštilj i pije kafa ujutru.',
      'Auto parkirate uz kuću, iza kapije. Zimi ste od dvorišta do skijališta na Bjelasici udaljeni kratku vožnju, a uveče vas čeka kamin.',
    ],
    highlights: ['Ograđeno dvorište', 'Terasa s pogledom', 'Roštilj', 'Parking iza kapije'],
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
    heading: 'Crkvine, 9 km od Kolašina',
    body: [
      `Crkvine su malo planinsko naselje kod Kolašina, na sjeveru Crne Gore. Kuća je u mirnoj ulici, okružena šumom i brdima, a do centra Kolašina, restorana i prodavnica vozite oko ${property.distanceToKolasinKm.value} km.`,
      'Zimi iz kuće idete na skijališta Kolašin 1450 i 1600 na Bjelasici. Ljeti su vam blizu Biogradsko jezero i Nacionalni park Biogradska gora, kanjon Tare i planinske staze, pa je Villa Vučje dobra baza za cijelu godinu.',
    ],
    addressLabel: 'Adresa',
    address: `Crkvine, ${property.postalCode} Kolašin, Crna Gora`,
    mapLink: 'Otvorite lokaciju u Google mapama',
    mapNote: 'Tačnu lokaciju i uputstva za dolazak dobijate uz potvrdu rezervacije.',
    distanceLabel: 'Do centra Kolašina',
    distanceValue: `${property.distanceToKolasinKm.value} km`,
    accessLabel: 'Dolazak',
    accessValue: 'asfaltnim putem do kuće, parking uz kuću',
  },
  reviews: {
    eyebrow: 'Utisci gostiju',
    heading: 'Šta kažu oni koji su već bili.',
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
    body: 'Kuća se rezerviše preko Booking.com-a ili Airbnb-a. Unesite datume i broj gostiju, pa ćete odmah vidjeti da li je kuća slobodna i koliko košta vaš boravak.',
    arrivalHeading: 'Dolazak i odlazak',
    reservationHeading: 'Kako rezervisati?',
    reservationBody:
      'Kliknite na jedno od dugmadi iznad, izaberite datume i potvrdite rezervaciju na toj stranici. Potvrdu, tačnu adresu i uputstva za dolazak dobijate na e-mail. Uslove otkazivanja vidite prije nego što platite.',
    rulesHeading: 'Kućni red',
    checkIn: `Prijava ${property.houseRules.checkInFrom}–${property.houseRules.checkInUntil}`,
    checkOut: `Odjava ${property.houseRules.checkOutFrom}–${property.houseRules.checkOutUntil}`,
    noSmoking: 'Pušenje nije dozvoljeno',
    noPets: 'Kućni ljubimci nisu dozvoljeni',
    noParties: 'Bez zabava i proslava',
  },
  footer: {
    tagline: `Kuća za odmor za porodicu ili društvo do ${capacity} osoba, u Crkvinama kod Kolašina.`,
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
    fireplace: 'Kamin na drva',
    garden: 'Ograđeno dvorište',
    terrace: 'Kamena terasa',
    balcony: 'Balkon uz spavaće sobe',
    kitchen: 'Kuhinja sa frižiderom i posuđem',
    bbq: 'Roštilj',
    parking: 'Besplatan parking uz kuću',
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
    staircaseEntry: 'Ulaz: klupe za obuću i stepenice na sprat',
    diningDetail: 'Trpezarijski sto',
    bedroomHallway: 'Hodnik na spratu, između spavaćih soba',
    bathroom: 'Kupatilo sa tušem',
    twinBedroom: 'Soba sa odvojenim krevetima i izlazom na balkon',
    doubleBedroom: 'Soba sa bračnim krevetom',
    livingDining: 'Dnevni boravak i trpezarija',
    livingRoom: 'Dnevni boravak uz kamin',
    fireplace: 'Kamin na drva',
    garden: 'Dvorište ljeti, s pogledom na planine',
    exteriorWinter: 'Kuća zimi',
  },
};

export type Translation = typeof sr;

const en: Translation = {
  meta: {
    title: 'Villa Vučje – holiday house in Crkvine near Kolašin, Montenegro',
    description: `Villa Vučje is a timber-and-stone house in Crkvine, 9 km from Kolašin, Montenegro. The whole house for up to ${capacity} guests: three bedrooms, a fireplace, a walled garden with mountain views and parking. Book on Booking.com or Airbnb.`,
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
    booking: 'Book on Booking.com',
    airbnb: 'Book on Airbnb',
    availability: 'Check available dates',
    explore: 'See the house',
    newTab: 'opens in a new tab',
  },
  hero: {
    location: 'Crkvine, Kolašin, Montenegro',
    title: 'A timber and stone house, facing the mountains.',
    lede: `The whole house to yourselves: three bedrooms for up to ${capacity} guests, a fireplace, a walled garden and parking, 9 km from Kolašin.`,
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
    heading: 'Downstairs for being together, upstairs for sleeping.',
    body: [
      'The ground floor is one big room: a living area with a stone fireplace, corner sofa and television, a big dining table and a white kitchen with everything you need to cook. The walls are pine, and the windows look onto the garden and the hills above Crkvine.',
      `A timber staircase leads up to three bedrooms, with a double bed and with separate single beds, so the house works for a family or a group of friends of up to ${capacity}. The bedrooms open onto the balcony. There are two bathrooms, tiled in pale stone.`,
    ],
    amenitiesHeading: 'What is in the house',
    amenityGroups: {
      together: 'Living',
      outside: 'Outdoors',
      practical: 'Practical',
    },
  },
  outside: {
    heading: 'A garden with the mountains in front of you.',
    body: [
      'In front of the house are a stone terrace and a lawn, enclosed by a stone wall and a wooden fence, so children can play freely while you sit outside. From the terrace the view runs over the roofs of Crkvine to the mountains. In summer this is where lunch, the barbecue and the morning coffee happen.',
      'You park by the house, behind the gate. In winter the ski slopes on Bjelasica are a short drive away, and the fireplace is waiting when you get back.',
    ],
    highlights: ['Walled garden', 'Terrace with a view', 'Barbecue', 'Parking behind the gate'],
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
    heading: 'Crkvine, 9 km from Kolašin',
    body: [
      `Crkvine is a small mountain village near Kolašin, in the north of Montenegro. The house sits on a quiet lane surrounded by forest and hills, about ${property.distanceToKolasinKm.value} km by car from the centre of Kolašin with its restaurants and shops.`,
      'In winter you drive from the house to the Kolašin 1450 and 1600 ski resorts on Bjelasica. In summer, Lake Biograd and Biogradska Gora National Park, the Tara canyon and the mountain trails are all close by, so Villa Vučje makes a good base all year round.',
    ],
    addressLabel: 'Address',
    address: `Crkvine, ${property.postalCode} Kolašin, Montenegro`,
    mapLink: 'Open the location in Google Maps',
    mapNote: 'The exact location and arrival directions come with your booking confirmation.',
    distanceLabel: 'Kolašin town centre',
    distanceValue: `${property.distanceToKolasinKm.value} km`,
    accessLabel: 'Arrival',
    accessValue: 'paved road to the house, parking on site',
  },
  reviews: {
    eyebrow: 'Guest reviews',
    heading: 'What guests say after their stay.',
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
    body: 'The house is booked through Booking.com or Airbnb. Enter your dates and number of guests and you will see straight away whether the house is free and what your stay costs.',
    arrivalHeading: 'Arrival and departure',
    reservationHeading: 'How do I book?',
    reservationBody:
      'Use one of the buttons above, pick your dates and confirm the booking on that site. Your confirmation, the exact address and arrival directions arrive by email. You see the cancellation terms before you pay.',
    rulesHeading: 'House rules',
    checkIn: `Check-in ${property.houseRules.checkInFrom}–${property.houseRules.checkInUntil}`,
    checkOut: `Check-out ${property.houseRules.checkOutFrom}–${property.houseRules.checkOutUntil}`,
    noSmoking: 'No smoking',
    noPets: 'No pets',
    noParties: 'No parties or events',
  },
  footer: {
    tagline: `A holiday house for a family or a group of up to ${capacity}, in Crkvine near Kolašin.`,
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
    fireplace: 'Wood-burning fireplace',
    garden: 'Walled garden',
    terrace: 'Stone terrace',
    balcony: 'Balcony off the bedrooms',
    kitchen: 'Kitchen with fridge and cookware',
    bbq: 'Barbecue',
    parking: 'Free parking by the house',
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
    staircaseEntry: 'Entrance: benches for boots and the stairs up',
    diningDetail: 'The dining table',
    bedroomHallway: 'Upstairs hallway between the bedrooms',
    bathroom: 'Bathroom with walk-in shower',
    twinBedroom: 'Twin bedroom with balcony access',
    doubleBedroom: 'Double bedroom',
    livingDining: 'Living room and dining area',
    livingRoom: 'Living room by the fireplace',
    fireplace: 'The wood-burning fireplace',
    garden: 'The garden in summer, facing the mountains',
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
