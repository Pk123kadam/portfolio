'use client';

import React from 'react';

export default function About() {
const principles = [
  {
    title: 'Every Cut Has a Purpose',
    description:
      'From cinematic travel edits to podcasts and creative meme videos, I focus on pacing, timing, and making every moment feel intentional.',
  },
  {
    title: 'Storytelling Through Editing',
    description:
      'Whether it’s a talking-head video, a travel montage, or a podcast, I aim to bring the story to life through thoughtful cuts, visuals, and creative timing.',
  },
  {
    title: 'Creative Collaboration',
    description:
      'I value clear communication, feedback, and continuous learning. Every project is an opportunity to understand the creator’s vision and turn ideas into engaging videos.',
  },
];

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Editorial Text (Left/Top) */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase font-semibold tracking-widest text-blue-400 mb-2 block">
              Philosophy &amp; Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Thoughtful Editing.{' '}
              <span className="text-zinc-400">Clear Storytelling.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              <p>
                I&apos;m an aspiring video editor focused on making content feel clear, engaging, and intentional. Working primarily in <strong className="text-white font-semibold">DaVinci Resolve</strong>, I enjoy editing podcast and talking-head videos—refining pacing, removing distractions, and helping the main message come through.
              </p>
              <p className="text-zinc-400 text-base">
                I&apos;m building my portfolio through practice, collaboration, and meaningful projects. Rather than overwhelming videos with unnecessary transitions or flashiness, my priority is rhythm, narrative coherence, and keeping viewers focused on what the speaker is saying.
              </p>
            </div>

            {/* Trial & Collaboration Notice */}
            <div className="mt-8 p-5 rounded-lg bg-[#11141b] border border-white/[0.08] flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <strong className="text-white font-semibold">Open to trial projects: </strong>
                If you have raw footage and want to test how I approach your material before committing to a larger scope, let&apos;s start with a sample cut.
              </div>
            </div>
          </div>

          {/* Guiding Principles Grid (Right/Bottom) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-1">
              Core Principles
            </h3>
            {principles.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-[#0f1218] border border-white/[0.06] hover:border-white/10 transition-colors"
              >
                <h4 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
