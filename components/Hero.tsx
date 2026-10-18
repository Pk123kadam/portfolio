'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/src/types';
import { siteConfig } from '@/src/config/site';

interface HeroProps {
  featuredProject: Project;
  onPlayFeatured: (project: Project, triggerEl: HTMLElement) => void;
}

export default function Hero({ featuredProject, onPlayFeatured }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Background ambient glow effect */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Badge */}
        <div className="flex items-center justify-start mb-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#11141b] border border-white/[0.08] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-xs font-medium text-zinc-300">
              {siteConfig.author.availability}
            </span>
          </div>
        </div>

        {/* Editorial Headline & Value Statement */}
        <div className="max-w-3xl mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
            Your footage.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400">
              A story worth watching.
            </span>
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl text-pretty">
            I edit podcasts and talking-head videos into clear, engaging content with thoughtful pacing, clean cuts, and purposeful storytelling.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Explore My Work
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#141822] hover:bg-[#1a202c] text-zinc-200 hover:text-white font-medium text-sm border border-white/10 transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>

        {/* Featured Video Showcase Preview Container */}
        <div className="mt-12">
          <div
            role="button"
            tabIndex={0}
            aria-label={`Preview featured video: ${featuredProject.title}`}
            onClick={(e) => onPlayFeatured(featuredProject, e.currentTarget)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onPlayFeatured(featuredProject, e.currentTarget);
              }
            }}
            className="group relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-[#0c0e14] border border-white/10 shadow-2xl shadow-black/60 cursor-pointer transition-all duration-300 hover:border-blue-500/40 focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {/* Cinematic Poster Image */}
            <Image
              src="/images/hero-preview.svg"
              alt="Hero video editing preview showcase"
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1152px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Gradient Overlay for Cinematic Mood */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/30 opacity-90 group-hover:opacity-75 transition-opacity" />

            {/* Top Bar Details */}
            <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 flex items-center justify-between pointer-events-none">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Featured Edit Preview</span>
              </div>
              <span className="text-xs font-mono text-zinc-400 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded">
                16:9 Cinema Aspect
              </span>
            </div>

            {/* Play Button Center Highlight */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-3.5 px-5 py-3 rounded-full bg-blue-600/90 group-hover:bg-blue-600 text-white font-medium text-sm shadow-xl shadow-blue-900/50 backdrop-blur-md transform transition-all duration-300 group-hover:scale-105 border border-blue-400/30">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span>Play Sample Edit</span>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 flex items-end justify-between pointer-events-none">
              <div className="max-w-md">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block mb-1">
                  Pacing &bull; Dialogue &bull; Engagement
                </span>
                <p className="text-sm sm:text-base font-semibold text-white">
                  Crafted for smooth pacing, zero dead air, and maximum audience retention.
                </p>
              </div>
              <span className="hidden sm:inline-block text-xs text-zinc-400 font-mono">
                Click to open player
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
