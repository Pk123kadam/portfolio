'use client';

import React from 'react';

export default function Tools() {
  const workflowFeatures = [
    {
      label: 'Cut & Edit Pages',
      detail: 'Swift timeline trimming, multi-cam sync, and jump-cut precision without visual fatigue.',
    },
    {
      label: 'Fairlight Audio',
      detail: 'Dialogue isolation, room noise attenuation, compression, and loudness normalization.',
    },
    {
      label: 'Export & Delivery',
      detail: 'Web-optimized ProRes, H.264, and H.265 encoding calibrated for YouTube and social platforms.',
    },
  ];

  return (
    <section id="tools" className="py-20 sm:py-28 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs uppercase font-semibold tracking-widest text-blue-400 mb-2 block">
            Software &amp; Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools I Use
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            I rely on industry-standard, professional software to deliver stable, high-fidelity edits with clean audio and precise visual rhythm.
          </p>
        </div>

        {/* DaVinci Resolve Featured Showcase Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#101319] border border-white/[0.08] relative overflow-hidden transition-all duration-300 hover:border-blue-500/30">
          {/* Subtle Ambient Background Gradient */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
            aria-hidden="true"
          />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Primary Tool Brand & Info */}
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                {/* DaVinci Resolve Iconic Pinwheel SVG Emblem */}
                <div className="w-12 h-12 rounded-xl bg-[#151922] border border-white/10 flex items-center justify-center p-2.5 shadow-md">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="DaVinci Resolve logo"
                  >
                    {/* Red Petal */}
                    <path
                      d="M 50 15 C 65 15 80 25 80 45 C 80 55 70 65 50 50 Z"
                      fill="#ef4444"
                    />
                    {/* Green Petal */}
                    <path
                      d="M 85 50 C 85 70 70 85 50 85 C 40 85 35 75 50 50 Z"
                      fill="#22c55e"
                    />
                    {/* Blue Petal */}
                    <path
                      d="M 15 50 C 15 30 30 15 50 50 C 35 65 25 70 15 50 Z"
                      fill="#3b82f6"
                    />
                  </svg>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      DaVinci Resolve
                    </h3>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
                      Primary Editor
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Blackmagic Design &bull; NLE, Audio &amp; Color Suite
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                DaVinci Resolve is my primary video editing and post-production software. I use it for the complete editing pipeline—organizing media, cutting speech for rhythm, scrubbing multi-camera angles, balancing audio dialogue, and rendering sharp exports.
              </p>
            </div>

            {/* Workflow Capability Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5 w-full lg:w-80 shrink-0">
              {workflowFeatures.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#141822] border border-white/[0.06] hover:border-white/10 transition-colors"
                >
                  <span className="text-xs font-semibold text-white flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {item.label}
                  </span>
                  <p className="text-[11px] text-zinc-400 leading-normal">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
