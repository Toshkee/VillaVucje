import type { ImageMetadata } from 'astro';
import exterior from '@assets/photos/exterior-house.jpg';
import exteriorPortrait from '@assets/photos/exterior-house-portrait.jpg';
import exteriorWinter from '@assets/photos/exterior-winter.jpg';
import livingDining from '@assets/photos/living-dining.jpg';
import livingRoom from '@assets/photos/living-room.jpg';
import fireplace from '@assets/photos/fireplace.jpg';
import garden from '@assets/photos/garden-view.jpg';
import kitchenLiving from '@assets/photos/kitchen-living.jpg';
import staircaseEntry from '@assets/photos/staircase-entry.jpg';
import diningDetail from '@assets/photos/dining-detail.jpg';
import bedroomHallway from '@assets/photos/bedroom-hallway.jpg';
import bathroom from '@assets/photos/bathroom.jpg';
import twinBedroom from '@assets/photos/twin-bedroom.jpg';
import doubleBedroom from '@assets/photos/double-bedroom.jpg';

/**
 * Media manifest. Alt text and captions live in i18n.ts under the same key
 * (`photos.*` and `captions.*`). Focal points are percentages used for
 * `object-position` so crops on narrow screens keep the important part of
 * the photograph.
 */
export type PhotoKey =
  | 'exterior'
  | 'exteriorWinter'
  | 'livingDining'
  | 'livingRoom'
  | 'fireplace'
  | 'garden'
  | 'kitchenLiving'
  | 'staircaseEntry'
  | 'diningDetail'
  | 'bedroomHallway'
  | 'bathroom'
  | 'twinBedroom'
  | 'doubleBedroom';

export type PhotoRole = 'hero' | 'inside-large' | 'inside-detail' | 'outside' | 'gallery';

export interface Focal {
  /** Percent from the left edge. */
  x: number;
  /** Percent from the top edge. */
  y: number;
}

export interface Photo {
  key: PhotoKey;
  /** File name under src/assets/photos, for the owner's reference. */
  file: string;
  image: ImageMetadata;
  /** Optional hand-made portrait crop for phones (art direction). */
  portrait?: ImageMetadata;
  roles: readonly PhotoRole[];
  /** Focal point on phones (portrait crops). */
  focalMobile: Focal;
  /** Focal point on wide screens. */
  focalDesktop: Focal;
  /** Season shown, so copy stays truthful. */
  season: 'summer' | 'late-autumn' | 'winter';
}

export const photos: readonly Photo[] = [
  {
    key: 'exterior',
    file: 'exterior-house.jpg',
    image: exterior,
    portrait: exteriorPortrait,
    roles: ['gallery'],
    focalMobile: { x: 24, y: 40 },
    focalDesktop: { x: 40, y: 45 },
    season: 'late-autumn',
  },
  {
    key: 'kitchenLiving',
    file: 'kitchen-living.jpg',
    image: kitchenLiving,
    roles: ['inside-large'],
    focalMobile: { x: 58, y: 58 },
    focalDesktop: { x: 50, y: 55 },
    season: 'late-autumn',
  },
  {
    key: 'doubleBedroom',
    file: 'double-bedroom.jpg',
    image: doubleBedroom,
    roles: ['gallery'],
    focalMobile: { x: 55, y: 52 },
    focalDesktop: { x: 50, y: 50 },
    season: 'late-autumn',
  },
  {
    key: 'twinBedroom',
    file: 'twin-bedroom.jpg',
    image: twinBedroom,
    roles: ['gallery'],
    focalMobile: { x: 52, y: 52 },
    focalDesktop: { x: 50, y: 50 },
    season: 'late-autumn',
  },
  {
    key: 'bathroom',
    file: 'bathroom.jpg',
    image: bathroom,
    roles: ['gallery'],
    focalMobile: { x: 58, y: 50 },
    focalDesktop: { x: 50, y: 50 },
    season: 'late-autumn',
  },
  {
    key: 'diningDetail',
    file: 'dining-detail.jpg',
    image: diningDetail,
    roles: ['gallery'],
    focalMobile: { x: 53, y: 55 },
    focalDesktop: { x: 50, y: 50 },
    season: 'late-autumn',
  },
  {
    key: 'staircaseEntry',
    file: 'staircase-entry.jpg',
    image: staircaseEntry,
    roles: ['gallery'],
    focalMobile: { x: 62, y: 50 },
    focalDesktop: { x: 50, y: 50 },
    season: 'late-autumn',
  },
  {
    key: 'bedroomHallway',
    file: 'bedroom-hallway.jpg',
    image: bedroomHallway,
    roles: ['gallery'],
    focalMobile: { x: 60, y: 50 },
    focalDesktop: { x: 50, y: 50 },
    season: 'late-autumn',
  },
  {
    key: 'livingDining',
    file: 'living-dining.jpg',
    image: livingDining,
    roles: ['gallery'],
    focalMobile: { x: 55, y: 55 },
    focalDesktop: { x: 50, y: 55 },
    season: 'late-autumn',
  },
  {
    key: 'fireplace',
    file: 'fireplace.jpg',
    image: fireplace,
    roles: ['inside-detail', 'gallery'],
    focalMobile: { x: 46, y: 50 },
    focalDesktop: { x: 46, y: 50 },
    season: 'late-autumn',
  },
  {
    key: 'garden',
    file: 'garden-view.jpg',
    image: garden,
    roles: ['hero', 'outside', 'gallery'],
    focalMobile: { x: 45, y: 50 },
    focalDesktop: { x: 50, y: 50 },
    season: 'summer',
  },
  {
    key: 'exteriorWinter',
    file: 'exterior-winter.jpg',
    image: exteriorWinter,
    roles: ['gallery'],
    focalMobile: { x: 46, y: 42 },
    focalDesktop: { x: 48, y: 45 },
    season: 'winter',
  },
  {
    key: 'livingRoom',
    file: 'living-room.jpg',
    image: livingRoom,
    roles: ['gallery'],
    focalMobile: { x: 55, y: 50 },
    focalDesktop: { x: 50, y: 50 },
    season: 'late-autumn',
  },
];

export function photoByRole(role: PhotoRole): Photo {
  const photo = photos.find((p) => p.roles.includes(role));
  if (!photo) throw new Error(`No photo configured for role "${role}"`);
  return photo;
}

/** Gallery order walks through the house without repeating section photographs. */
export const galleryOrder: readonly PhotoKey[] = [
  'exterior',
  'doubleBedroom',
  'twinBedroom',
  'bathroom',
  'livingDining',
  'diningDetail',
  'staircaseEntry',
  'bedroomHallway',
  'livingRoom',
  'exteriorWinter',
];

export const galleryPhotos: readonly Photo[] = galleryOrder.map((key) => {
  const photo = photos.find((p) => p.key === key);
  if (!photo) throw new Error(`Unknown gallery photo "${key}"`);
  return photo;
});

/**
 * Optional silent hero loop. Leave `null` to use the photo hero.
 * See README "Optional hero video" for the requirements.
 */
export interface HeroVideo {
  /** Public path to an H.264 MP4, ideally under 2 MB, 6–12 s, no audio track. */
  mp4: string;
  /** Optional WebM (AV1/VP9), listed first when present. */
  webm?: string;
}

export const heroVideo: HeroVideo | null = null;
