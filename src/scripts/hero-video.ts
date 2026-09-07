/**
 * Optional silent hero loop. The poster is always rendered first; the video
 * is attached only when conditions are suitable (no reduced-motion, no
 * data-saver, wide enough screen, reasonable connection). Autoplay refusal
 * and playback errors fall back to the poster. Playback pauses when the
 * hero is off-screen or the tab is hidden. A visible button pauses/resumes.
 */
export function initHeroVideo(): void {
  const wrap = document.querySelector<HTMLElement>('[data-hero-video]');
  const video = wrap?.querySelector<HTMLVideoElement>('video');
  const toggle = wrap?.querySelector<HTMLButtonElement>('[data-video-toggle]');
  if (!wrap || !video || !toggle) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wide = window.matchMedia('(min-width: 48em)').matches;
  const nav = navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  };
  const saveData = nav.connection?.saveData === true;
  const slow = /(^|\b)(slow-2g|2g|3g)\b/.test(nav.connection?.effectiveType ?? '');

  if (reduced || saveData || slow || !wide) return;

  const labelPause = toggle.dataset.labelPause ?? 'Pause video';
  const labelPlay = toggle.dataset.labelPlay ?? 'Play video';
  let userPaused = false;

  const setLabel = (playing: boolean): void => {
    toggle.textContent = playing ? labelPause : labelPlay;
    toggle.setAttribute('aria-pressed', String(!playing));
  };

  const fail = (): void => {
    wrap.classList.remove('is-playing');
    toggle.hidden = true;
  };

  const tryPlay = (): void => {
    if (userPaused) return;
    const p = video.play();
    if (p && typeof p.catch === 'function') p.catch(fail);
  };

  video.addEventListener('playing', () => {
    wrap.classList.add('is-playing');
    toggle.hidden = false;
    setLabel(true);
  });
  video.addEventListener('pause', () => setLabel(false));
  video.addEventListener('error', fail);

  toggle.addEventListener('click', () => {
    if (video.paused) {
      userPaused = false;
      tryPlay();
    } else {
      userPaused = true;
      video.pause();
    }
  });

  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries[0]?.isIntersecting ?? false;
      if (visible) tryPlay();
      else video.pause();
    },
    { threshold: 0.2 },
  );
  io.observe(wrap);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) video.pause();
    else tryPlay();
  });

  // Attach the sources only now, so unsuitable devices never download video.
  for (const source of Array.from(video.querySelectorAll<HTMLSourceElement>('source[data-src]'))) {
    source.src = source.dataset.src ?? '';
  }
  video.load();
  tryPlay();
}
