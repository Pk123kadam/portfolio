'use client';

import React from 'react';
import Image from 'next/image';
import { Project } from '@/src/types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project, triggerEl: HTMLElement) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(project, e.currentTarget);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} - ${project.categoryLabel}`}
      onClick={(e) => onSelect(project, e.currentTarget)}
      onKeyDown={handleKeyDown}
      className="group relative flex flex-col bg-[#11141b] border border-white/[0.08] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/20 hover:shadow-xl hover:shadow-black/40 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      {/* 16:9 Aspect Ratio Poster Container */}
      <div className="relative w-full aspect-video bg-[#0a0c10] overflow-hidden">
        <Image
          src={project.poster}
          alt={`Poster for ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          priority={project.featured}
        />

        {/* Subtle dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        {/* Top Badges: Category & Duration */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#090b0e]/80 backdrop-blur-sm text-zinc-300 border border-white/10">
            {project.categoryLabel}
          </span>
          {project.duration && (
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-zinc-300 border border-white/10">
              {project.duration}
            </span>
          )}
        </div>

        {/* Center Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-13 h-13 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg shadow-blue-900/50 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500">
            <svg
              className="w-6 h-6 translate-x-0.5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
          </div>
          <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-medium text-zinc-400">
          <span className="text-zinc-400">{project.tag || 'Video Edit'}</span>
          <span className="inline-flex items-center gap-1 text-blue-400 group-hover:translate-x-0.5 transition-transform">
            Watch Edit
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
