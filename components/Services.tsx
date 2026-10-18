'use client';

import React from 'react';
import { services } from '@/src/data/projects';

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase font-semibold tracking-widest text-blue-400 mb-2 block">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Can Help With
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            Focused post-production services tailored to video creators, podcasters, and solo educators looking for clean, intentional edits.
          </p>
        </div>

        {/* Services Grid (6 Core Offerings) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-[#101319] border border-white/[0.07] hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1"
            >
              <div>
                {/* Index & Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-blue-400/80 tracking-widest">
                    0{index + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-60 group-hover:scale-150 transition-transform" />
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Concrete Outcomes / Deliverables */}
              <div className="pt-4 border-t border-white/[0.06]">
                <ul className="space-y-2 text-xs text-zinc-300">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
