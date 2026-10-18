'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/src/config/site';

interface FooterProps {
  year?: number;
}

export default function Footer({ year = 2026 }: FooterProps) {
  const scrollToTop = () => {
    if (window.location.pathname !== '/') {
      window.history.pushState(null, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '/' || href === '#' || !href) {
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const cleanPath = href.startsWith('/') ? href : `/${href.replace('#', '')}`;
    const targetId = cleanPath.replace('/', '');

    window.history.pushState(null, '', cleanPath);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#07080b] border-t border-white/[0.08] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-lg font-bold text-white tracking-tight">
              {siteConfig.name}
            </span>
            <p className="text-xs text-zinc-400 mt-1">
              {siteConfig.brandTagline}
            </p>
          </div>

          {/* Nav Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-6 text-xs text-zinc-400">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Back to top */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-2 py-1"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 text-center sm:text-left">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-zinc-400">
            Portfolio built for performance, accessibility, and visual clarity.
          </p>
        </div>
      </div>
    </footer>
  );
}
