import { useEffect, useRef } from 'react';

const IN_VIEW_CLASS = 'in-view';

/**
 * Hook that observes an element and adds the "in-view" class when it enters the viewport.
 * Use with .animate-fade-slide-up in CSS for scroll-triggered animations.
 */
export function useInView(options?: { threshold?: number; rootMargin?: string }) {
  const ref = useRef<HTMLElement>(null);
  const { threshold = 0.1, rootMargin = '0px 0px -40px 0px' } = options ?? {};

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(IN_VIEW_CLASS);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
