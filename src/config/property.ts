/**
 * Property facts and external links for Villa Vučje.
 *
 * Every fact carries a `source` so the owner can see where it came from.
 * Facts sourced from the Booking.com listing were read on 2026-09-07 and
 * are owner-published there, but the owner should still confirm them.
 * Nothing here is invented; unknown values are left out on purpose.
 */

export type FactSource = 'owner' | 'instagram' | 'booking';

export interface Fact<T> {
  value: T;
  source: FactSource;
}

export const property = {
  name: 'Villa Vučje',
  locality: 'Crkvine',
  town: 'Kolašin',
  /** From the Booking.com listing address. */
  postalCode: '81210',
  countryCode: 'ME',
  countryName: { sr: 'Crna Gora', en: 'Montenegro' },

  capacity: { value: 6, source: 'booking' } satisfies Fact<number>,
  bedrooms: { value: 3, source: 'booking' } satisfies Fact<number>,
  bathrooms: { value: 2, source: 'booking' } satisfies Fact<number>,
  floorAreaM2: { value: 127, source: 'booking' } satisfies Fact<number>,

  /** Distance to the centre of Kolašin as written by the host on Booking.com. */
  distanceToKolasinKm: { value: 9, source: 'booking' } satisfies Fact<number>,

  /**
   * Amenities published by the owner (Instagram bio / Booking.com listing).
   * Keys map to `amenities.*` in i18n.ts.
   */
  amenities: [
    'fireplace',
    'garden',
    'terrace',
    'balcony',
    'kitchen',
    'bbq',
    'parking',
    'wifi',
    'washer',
    'dishwasher',
  ] as const,

  /**
   * Map pin as published on the Booking.com listing map. Used only for the
   * external map link until the owner confirms it; `verified` gates its use
   * in structured data.
   */
  geo: {
    latitude: 42.798722,
    longitude: 19.45032,
    source: 'booking' as FactSource,
    verified: false,
  },

  /** House rules from the Booking.com listing. */
  houseRules: {
    checkInFrom: '14:00',
    checkInUntil: '21:00',
    checkOutFrom: '08:00',
    checkOutUntil: '11:00',
    smoking: false,
    pets: false,
    parties: false,
  },
} as const;

export type AmenityKey = (typeof property.amenities)[number];

/** External booking providers. Omit a provider rather than linking to a homepage. */
export interface BookingProvider {
  id: 'booking' | 'airbnb';
  /** Direct link to THIS property's listing. */
  url: string;
  /** Confirmed by the owner or checked against the listing (noted in README). */
  verified: boolean;
}

export const bookingProviders: readonly BookingProvider[] = [
  {
    id: 'booking',
    // Resolved from the profile share link https://www.booking.com/Share-99uwtiO on 2026-09-07.
    url: 'https://www.booking.com/hotel/me/villa-vucje-near-kolasin.html',
    verified: true,
  },
  {
    id: 'airbnb',
    // Listing supplied by the owner on 2026-09-07; dates and tracking removed.
    url: 'https://www.airbnb.com/rooms/1402289748098090516',
    verified: true,
  },
];

/** Providers that are safe to show to guests. */
export const activeProviders: readonly BookingProvider[] = bookingProviders.filter(
  (p) => p.verified && p.url.startsWith('https://'),
);

/** Primary provider used by the header CTA. */
export const primaryProvider: BookingProvider | undefined = activeProviders[0];

export const social = {
  instagram: {
    handle: 'villa_vucje_kolasin',
    url: 'https://www.instagram.com/villa_vucje_kolasin/',
  },
} as const;

/**
 * Contact details. Left empty until the owner supplies them; the footer
 * renders only the entries that have a value.
 */
export const contact: { email?: string; phone?: string; whatsapp?: string } = {};

/** External map destination built from the listing pin. */
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${property.geo.latitude}%2C${property.geo.longitude}`;
