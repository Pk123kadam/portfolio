'use client';

import React, { useEffect, useRef } from 'react';
import { siteConfig } from '@/src/config/site';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      // Set focus to the close button
      firstFocusableRef.current?.focus();
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-[#090b0e]/95 backdrop-blur-xl md:hidden animate-fade-in"
      ref={navRef}
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
        <span className="text-lg font-bold tracking-tight text-white">
          {siteConfig.name}
        </span>
        <button
          ref={firstFocusableRef}
          type="button"
          onClick={onClose}
          className="p-2 text-zinc-400 hover:text-white rounded-md hover:bg-white/5 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col flex-1 justify-between px-6 py-8 overflow-y-auto">
        <nav aria-label="Mobile primary navigation" className="flex flex-col space-y-6">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="text-2xl font-semibold text-zinc-300 hover:text-white hover:translate-x-1 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Bottom CTA & Contact summary */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <p className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
            Let&apos;s collaborate
          </p>
          <a
            href="#contact"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
          >
            Let&apos;s Work Together
          </a>
          <div className="flex flex-col text-xs text-zinc-400 space-y-1">
            <span>Email: {siteConfig.author.email}</span>
            <span>WhatsApp: +{siteConfig.author.whatsappNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
