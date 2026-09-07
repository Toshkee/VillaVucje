import type { ImageMetadata } from 'astro';
import exterior from '@assets/photos/exterior-house.jpg';
import exteriorPortrait from '@assets/photos/exterior-house-portrait.jpg';
import livingDining from '@assets/photos/living-dining.jpg';
import livingRoom from '@assets/photos/living-room.jpg';
import fireplace from '@assets/photos/fireplace.jpg';
import garden from '@assets/photos/garden-view.jpg';

/**
 * Media manifest. Alt text and captions live in i18n.ts under the same key
 * (`photos.*` and `captions.*`). Focal points are percentages used for
 * `object-position` so crops on narrow screens keep the important part of
 * the photograph.
 */
export type PhotoKey = 'exterior' | 'livingDining' | 'livingRoom' | 'fireplace' | 'garden';

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
  season: 'summer' | 'late-autumn';
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
    key: 'livingDining',
    file: 'living-dining.jpg',
    image: livingDining,
    roles: ['inside-large', 'gallery'],
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

/** Gallery order tells the story: exterior, fireplace, living, dining, outside. */
export const galleryOrder: readonly PhotoKey[] = [
  'exterior',
  'fireplace',
  'livingRoom',
  'livingDining',
  'garden',
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
