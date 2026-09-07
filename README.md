# Villa Vučje — website

Static marketing site for Villa Vučje, a mountain holiday house in Crkvine near Kolašin, Montenegro. Built with Astro (static output, TypeScript strict), bespoke scoped CSS and a few small native scripts. There is no booking engine: guests are sent to the property's Booking.com or Airbnb listing.

Default language is Montenegrin/Serbian (Latin) at `/`, with English at `/en/`.

## Commands

| Command           | What it does                                                    |
| ----------------- | --------------------------------------------------------------- |
| `npm install`     | Install dependencies (Node 22+ recommended; built with Node 24). |
| `npm run dev`     | Local development server with hot reload.                       |
| `npm run check`   | Type-check `.astro`/`.ts` files (`astro check`).                 |
| `npm run build`   | Production build to `dist/` (generates AVIF/WebP/JPEG renditions). |
| `npm run preview` | Serve the built `dist/` locally.                                 |
| `npm run validate`| `check` followed by `build`.                                     |

The lockfile is `package-lock.json`. Deploy `dist/` to any static host or CDN (Netlify, Cloudflare Pages, Vercel static, GitHub Pages, an nginx bucket). No server runtime is needed.

## Where things live

```
src/
  config/
    property.ts   property facts, house rules, booking providers, Instagram, contact, map pin
    i18n.ts       every string on the site, per language (sr, en), alt text and captions
    media.ts      photo manifest: file, roles, focal points, season; optional hero video
    site.ts       reads SITE_URL from the environment
  assets/photos/  original photographs (imported by media.ts)
  components/     Header, Hero, Facts, Inside, Outside, Gallery, Location, BookingSection, Footer, BookingBar, Photo
  layouts/Base.astro   <head>: meta, hreflang, Open Graph, JSON-LD, fonts
  scripts/        nav.ts, reveal.ts, gallery.ts (lightbox), booking-bar.ts, hero-video.ts
  styles/global.css    design tokens, type scale, buttons, motion rules
  pages/          index.astro (sr), en/index.astro, robots.txt.ts
public/           favicon.svg, favicon.ico, apple-touch-icon.png, og-villa-vucje.jpg
```

## Changing content

### Photos

1. Drop the original JPEG into `src/assets/photos/` (full resolution; the build downsizes, never upsizes).
2. Add or edit its entry in `src/config/media.ts`: `key`, `file`, `image` import, `roles`, focal points (`focalMobile`/`focalDesktop` are percentages used for `object-position`) and `season`.
3. Add its alt text and caption under `photos.*` and `captions.*` in both languages in `src/config/i18n.ts`.
4. Put its key into `galleryOrder` in `media.ts` if it belongs in the gallery.

Roles: `hero` (one photo), `inside-large`, `inside-detail`, `outside`, `gallery`. Build once; Astro generates responsive AVIF/WebP sources with a JPEG fallback and keeps width/height so nothing shifts while loading.

### Property facts

Edit `src/config/property.ts`. Each numeric fact records its `source` (`owner`, `instagram`, `booking`). Amenity keys map to labels in `i18n.ts`. Set `geo.verified = true` only after confirming the coordinates; that also adds them to the structured data. The Google Maps link uses `geo` either way.

### Languages

All copy is in `src/config/i18n.ts`. The English object must have the same shape as the Serbian one (the type checker enforces it). To add a language: extend `Locale`, `langTag`, `ogLocale`, `localePath`, `anchors`, add the translation object, create `src/pages/<code>/index.astro`, and add the locale to `astro.config.ts`.

### Booking links

`bookingProviders` in `property.ts`. Only entries with `verified: true` are rendered. Booking.com is set to the listing that the profile share link resolved to on 2026‑09‑07:

`https://www.booking.com/hotel/me/villa-vucje-near-kolasin.html`

The owner supplied the Airbnb listing on 2026-09-07: `https://www.airbnb.com/rooms/1402289748098090516`. Dates, guest counts and tracking parameters are omitted. Both providers appear in the hero, booking section and mobile bar; the header keeps Booking.com as its primary link. Airbnb ownership is confirmed by the supplied link; automated page fetching was unavailable.

### Contact details

Fill `contact` in `property.ts` (`email`, `phone`, `whatsapp`). The footer only shows what is set.

### Optional hero video

Leave `heroVideo = null` in `media.ts` for the photo hero. To use a silent loop:

- 6–12 s, no audio track, no captions/music/watermarks, H.264 MP4 (ideally under 2 MB) plus optional WebM, placed in `public/`.
- Set `heroVideo = { mp4: '/hero.mp4', webm: '/hero.webm' }`.

The poster (hero photo) always renders first. The script attaches the video only on screens 768 px and wider, without `prefers-reduced-motion`, without Save‑Data and not on 2G/3G. Autoplay refusal or errors keep the poster; playback pauses off-screen and when the tab is hidden; a visible button pauses/resumes.

### Domain, canonical URLs, sitemap

Copy `.env.example` to `.env` and set `SITE_URL=https://your-domain` (no trailing slash), or set it in the host's build environment. With it present the build emits canonical URLs, `hreflang` alternates, absolute Open Graph image URLs, `sitemap-index.xml` and the sitemap line in `robots.txt`. Without it those are omitted and the build prints a warning.

## Design notes

- The September design refresh removes repeated section labels and decorative dividers, enlarges the headings, and uses more conversational copy in both languages. Buttons, gallery controls, and native `<details>` disclosures take interaction cues from [Sona UI](https://www.sonaui.com/components); these are independent Astro/CSS adaptations, with no React or animation-library dependency. Disclosures work with the keyboard and without JavaScript, with progressive height animation and reduced-motion support.
- The hero uses the garden photograph with ivory text directly over a directional dark gradient. Its height grows with the content; there is no overlapping cream panel. `getHeroSources()` supplies a build-time portrait crop for mobile, shared with the preload hints.
- Palette: ivory `#F5F1E8`, deep forest `#243E32`, sage `#8B9986` (darkened to `#5B6A57` for text), stone `#D8D0C1`, rust `#AD6143` (darkened to `#97523A` for text), charcoal `#252922`. Contrast ratios were measured, not assumed: charcoal/ivory 13.1, forest/ivory 10.3, sage‑text/ivory 5.1, rust‑text/ivory 5.2, ivory/forest 10.3. Raw sage (2.7) and raw rust (4.1) on ivory are used only decoratively.
- Type: Lora 400/500 for headings, Source Sans 3 400/600 for body and UI, self-hosted through `@fontsource` with Latin Extended subsets (needed for č, ć, đ, š, ž).
- Motion: one short hero entrance, a single IntersectionObserver-driven reveal, hover/focus feedback. Everything is visible without JavaScript and with `prefers-reduced-motion`.
- The mobile booking bar appears only after the hero button scrolls out of view, hides while the booking section, footer or the lightbox is on screen, and reserves its own height so it never covers content. It is not rendered from 960 px up, where the header button is always visible.

## Validation (2026‑09‑07, local)

- `astro check`: 0 errors, 0 warnings.
- `astro build`: 2 pages; total client JavaScript about 4.5 kB inlined across four modules; page HTML with inlined CSS about 36 kB.
- Rendered and inspected at 360, 390, 768, 844 and 1440 px in Chrome (via same-origin iframes because the review window could not be resized). No horizontal overflow at any width.
- Tested: mobile menu (toggle, Escape, close on link), language switch, gallery lightbox (open, arrow keys, Escape, close button, focus returns to the thumbnail), outbound links (`target="_blank"` with `rel="noopener noreferrer"`), reveal with reduced motion, structured data output.
- Lighthouse 13.4.1 (mobile emulation: Moto G class device, simulated slow 4G, headless Chrome, against `astro preview` on localhost, no CDN). A local diagnostic, not a guarantee for the production host.

  | Page   | Performance | Accessibility | Best practices | SEO | FCP   | LCP   | TBT  | CLS |
  | ------ | ----------- | ------------- | -------------- | --- | ----- | ----- | ---- | --- |
  | `/`    | 95          | 100           | 100            | 100 | 2.0 s | 2.7 s | 0 ms | 0   |
  | `/en/` | 95          | 100           | 100            | 100 | 2.0 s | 2.7 s | 0 ms | 0   |

  Before the art-directed portrait hero crop and the preload hint, LCP was 3.8–4.1 s (performance 85–87); phones were downloading the full landscape file and displaying under half of it.
- Not tested: iOS Safari and Android Chrome on real devices (no device available in this environment). The `100svh`/`100dvh` fallbacks, `env(safe-area-inset-*)` and the native `<dialog>` are all supported by current iOS Safari, but please check the lightbox and the bottom bar on an iPhone before launch.

## CDN and media notes

- Everything under `dist/_astro/` is content-hashed; serve it with `Cache-Control: public, max-age=31536000, immutable`. Serve HTML with a short max-age (for example `max-age=0, must-revalidate`) so content updates appear immediately.
- The hero loads eagerly with `fetchpriority="high"`; all other photos are lazy. The largest hero rendition is 1600 px wide (the source resolution), so 2× phones receive the sharpest available file without upscaling.
- Expect roughly 150–450 kB of images on a first mobile view depending on format support and viewport, and about 0.9 MB for a full scroll through the page. Supplying higher-resolution originals will raise these figures slightly but improve sharpness on large screens.

## Owner launch checklist

Facts marked "Booking" were read from the Booking.com listing on 2026‑09‑07 and should be confirmed.

- [ ] Confirm capacity (Booking: up to 6), bedrooms (Booking: 3), bathrooms (Booking: 2), floor area (Booking: 127 m²).
- [ ] Confirm the amenity list in `property.ts` (fireplace, garden, terrace, balcony, kitchen, BBQ, free parking, Wi‑Fi, washing machine, dishwasher) and the house rules (check-in 14:00–21:00, check-out 08:00–11:00, no smoking, no pets, no parties).
- [ ] Confirm "about 9 km from the centre of Kolašin" (from the host text on Booking). No Podgorica driving time is published.
- [ ] Confirm the map pin (currently the Booking.com pin, 42.798722, 19.45032) and then set `geo.verified = true`.
- [x] Airbnb listing URL supplied by the owner and added (see "Booking links" above).
- [ ] Contact email / phone / WhatsApp for the footer.
- [ ] Production domain → `SITE_URL`; then verify `sitemap-index.xml`, `robots.txt`, `hreflang` and the social preview.
- [ ] More photographs: kitchen, bedrooms, bathrooms, balcony, a winter exterior, and full-resolution originals of the five supplied (they are 1600 px exports). The yard photo was supplied sideways and has been rotated; its device metadata was stripped.
- [ ] Optional: a clean, silent outdoor clip for the hero (see above). No video was supplied, so the site ships with the photo hero.
- [ ] Decide whether the Booking.com listing name should be aligned with "Villa Vučje" (the listing is titled "Villa Vucje near Kolasin").

## Suggested 15–20 s vertical screen recording (studio portfolio)

Record at 390×844 (or an iPhone), 60 fps, no cursor.

1. 0–4 s: page load on the hero. Let the three-step text entrance play, then a slow scroll that reveals the facts row.
2. 4–8 s: continue scrolling through "Inside": the living room photo, then the fireplace detail.
3. 8–12 s: the "Outside" garden photo sliding into view, then the first gallery row; tap the fireplace thumbnail to open the lightbox and swipe once.
4. 12–16 s: close the lightbox; scroll to the forest-green booking section, pause on "View on Booking.com".
5. 16–20 s: keep scrolling so the bottom booking bar is visible, then end on the footer with the Instagram handle.
