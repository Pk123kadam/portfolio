'use client';

import React, { useState } from 'react';
import { Project, ProjectCategory } from '@/src/types';
import ProjectCard from './ProjectCard';

interface SelectedWorkProps {
  projects: Project[];
  onSelectProject: (project: Project, triggerEl: HTMLElement) => void;
}

type FilterCategory = 'all' | ProjectCategory;

export default function SelectedWork({ projects, onSelectProject }: SelectedWorkProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filterTabs: { label: string; value: FilterCategory; count: number }[] = [
    { label: 'All Projects', value: 'all', count: projects.length },
    {
      label: 'Podcast',
      value: 'podcast',
      count: projects.filter((p) => p.category === 'podcast').length,
    },
    {
      label: 'Talking Head',
      value: 'talking-head',
      count: projects.filter((p) => p.category === 'talking-head').length,
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="work" className="py-20 sm:py-28 border-t border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-semibold tracking-widest text-blue-400 mb-2 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="mt-3 text-base text-zinc-400 leading-relaxed">
              A few edits that show how I approach pacing, clarity, and storytelling.
            </p>
          </div>

          {/* Accessible Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex items-center gap-1.5 p-1 bg-[#101319] border border-white/[0.08] rounded-lg self-start md:self-auto"
          >
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="projects-grid"
                  id={`tab-${tab.value}`}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                  <span
                    className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-zinc-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div
          id="projects-grid"
          role="tabpanel"
          aria-labelledby={`tab-${activeFilter}`}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
