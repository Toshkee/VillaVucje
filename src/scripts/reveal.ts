/** Gentle one-time section reveal. Content is visible without JS or with reduced motion. */
export function initReveal(): void {
  const root = document.documentElement;
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (items.length === 0) return;

  if (root.classList.contains('reduced-motion') || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const delay = Number(el.dataset.revealDelay ?? 0);
        if (delay > 0) el.style.transitionDelay = `${delay}ms`;
        el.classList.add('is-visible');
        observer.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  items.forEach((el) => {
    // Anything already in view on load shows immediately; no waiting on scroll.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      el.classList.add('is-visible');
    } else {
      observer.observe(el);
    }
  });
}
