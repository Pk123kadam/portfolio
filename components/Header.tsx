'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/src/config/site';
import MobileNav from './MobileNav';

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-[#090b0e]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            onClick={(e) => handleScrollTo(e, '/')}
            className="group flex items-center gap-2.5 text-white font-bold tracking-tight text-xl focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-label={`${siteConfig.name} - Return to top of page`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-200" />
            <span className="text-zinc-100 group-hover:text-white transition-colors">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-0.5"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Header Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              onClick={(e) => handleScrollTo(e, '/contact')}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600/90 hover:bg-blue-600 border border-blue-500/30 rounded-md shadow-sm transition-all duration-150 hover:shadow-blue-500/20 hover:shadow-md focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Let&apos;s work together
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="p-2 text-zinc-300 hover:text-white rounded-md hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={isMobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                {isMobileNavOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </>
  );
}
