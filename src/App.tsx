import { useEffect } from 'react';
import { AsciiGrid } from './components/AsciiGrid';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DetailPage, NotFound } from './components/DetailPage';
import { detailPages } from './content/pages';
import { normalizePath } from './content/site';
import { getMetaTags, updateMetaTags } from './utils/updateMetaTags';

declare global {
  interface Window {
    Lenis?: new (options?: Record<string, unknown>) => {
      raf: (time: number) => void;
      scrollTo: (target: HTMLElement | number, options?: Record<string, unknown>) => void;
      destroy: () => void;
    };
  }
}

export default function App({ path = typeof window === 'undefined' ? '/' : window.location.pathname }: { path?: string }) {
  const pathname = normalizePath(path);
  const page = detailPages.find((item) => item.path === pathname);
  useEffect(() => { updateMetaTags(getMetaTags(pathname)); }, [pathname]);
  // Master IntersectionObserver — adds .in-view to anything tagged
  // with data-reveal or [data-text-reveal] when it scrolls into view.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: reveal everything immediately
      document.querySelectorAll('[data-reveal], [data-text-reveal]').forEach((el) => {
        el.classList.add('in-view');
      });
      document.documentElement.classList.remove('no-js');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('[data-reveal], [data-text-reveal]').forEach((el) => {
      observer.observe(el);
    });
    document.documentElement.classList.remove('no-js');

    return () => observer.disconnect();
  }, []);

  // Lenis smooth scroll + anchor link interception
  useEffect(() => {
    if (typeof window === 'undefined' || !window.Lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new window.Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!link || link.classList.contains('skip-link')) return;
      const href = link.getAttribute('href') ?? '';
      if (href === '#') {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.4 });
        return;
      }
      if (href.length < 2) return;
      const target = document.querySelector(href) as HTMLElement | null;
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, { offset: -40, duration: 1.4 });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      {pathname === '/' ? (
        <>
          <AsciiGrid />
          <main id="main-content" tabIndex={-1}>
            <Hero />
            <Projects />
            <TechStack />
            <Experience />
            <About />
            <Interests />
            <Contact />
          </main>
          <Footer />
        </>
      ) : page ? <DetailPage page={page} /> : <NotFound />}
    </>
  );
}
