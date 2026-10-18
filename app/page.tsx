'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import Services from '@/components/Services';
import About from '@/components/About';
import Tools from '@/components/Tools';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import VideoModal from '@/components/VideoModal';
import { projects } from '@/src/data/projects';
import { Project } from '@/src/types';

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [triggerEl, setTriggerEl] = useState<HTMLElement | null>(null);

  const featuredProject = projects.find((p) => p.featured) || projects[0];

  const handleOpenVideo = (project: Project, el: HTMLElement) => {
    setActiveProject(project);
    setTriggerEl(el);
    setIsModalOpen(true);
  };

  const handleCloseVideo = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090b0e] text-[#f4f4f6]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Global Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <Hero
          featuredProject={featuredProject}
          onPlayFeatured={handleOpenVideo}
        />

        <SelectedWork
          projects={projects}
          onSelectProject={handleOpenVideo}
        />

        <Services />

        <About />

        <Tools />

        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Accessible Video Player Modal */}
      <VideoModal
        project={activeProject}
        isOpen={isModalOpen}
        onClose={handleCloseVideo}
        triggerElement={triggerEl}
      />
    </div>
  );
}
