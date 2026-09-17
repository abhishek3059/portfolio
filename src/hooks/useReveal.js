import { useEffect, useRef } from 'react';

// Adds .reveal--revealed when the element scrolls into view (once).
export function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('reveal--revealed');
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: options.threshold },
    );
    el.classList.add('reveal');
    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold]);

  return ref;
}
