'use client';

import React from 'react';
import { siteConfig } from '@/src/config/site';

export default function Contact() {
  const emailHref = `mailto:${siteConfig.author.email}?subject=${encodeURIComponent(
    'Video Editing Inquiry - PK Edits'
  )}`;

  const whatsappHref = `${siteConfig.author.whatsappUrl}?text=${encodeURIComponent(
    'Hi PK Edits, I have video footage and would like to discuss an edit.'
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <span className="text-xs uppercase font-semibold tracking-widest text-blue-400 mb-2 block">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Have Footage That Needs a Story?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          If you have a podcast, talking-head video, or content idea in mind, let&apos;s discuss how I can help.
        </p>

        {/* Direct Action Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto text-left">
          {/* Email Action Card */}
          <a
            href={emailHref}
            className="group p-6 rounded-xl bg-[#101319] border border-white/[0.08] hover:border-blue-500/40 hover:bg-[#131722] transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-black/20 focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
              Send an Email
            </h3>
            <p className="text-xs text-zinc-400 mb-3">
              Share details, Google Drive links, or project timelines.
            </p>
            <div className="text-xs font-medium text-blue-300 font-mono truncate">
              {siteConfig.author.email}
            </div>
          </a>

          {/* WhatsApp Action Card */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl bg-[#101319] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-[#131722] transition-all duration-200 hover:-translate-y-1 shadow-lg shadow-black/20 focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
              Chat on WhatsApp
            </h3>
            <p className="text-xs text-zinc-400 mb-3">
              Direct and fast communication for quick inquiries.
            </p>
            <div className="text-xs font-medium text-emerald-300 font-mono truncate">
              +{siteConfig.author.whatsappNumber}
            </div>
          </a>
        </div>

        {/* Turnaround & Availability reassurance */}
        <div className="mt-10 inline-flex items-center gap-2 text-xs text-zinc-400 border border-white/[0.06] bg-[#0c0e14] px-4 py-2 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Typically replies within 24 hours &bull; Open to trial edits</span>
        </div>
      </div>
    </section>
  );
}
