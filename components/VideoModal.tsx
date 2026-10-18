'use client';

import React, { useEffect, useRef } from 'react';
import { Project } from '@/src/types';

interface VideoModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  triggerElement?: HTMLElement | null;
}

export default function VideoModal({
  project,
  isOpen,
  onClose,
  triggerElement,
}: VideoModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus management & Escape key handling
  useEffect(() => {
    if (!isOpen || !project) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Set initial focus to close button
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      // Basic tab trapping inside modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      // Restore focus to original trigger element
      triggerElement?.focus();
    };
  }, [isOpen, project, onClose, triggerElement]);

  if (!isOpen || !project) return null;

  // Determine if video source is valid and ready
  const hasValidVideo = (() => {
    if (project.provider === 'youtube' && project.videoId?.trim()) return true;
    if (project.provider === 'vimeo' && project.videoId?.trim()) return true;
    if (
      (project.provider === 'mp4' || project.provider === 'local') &&
      project.videoUrl?.trim()
    )
      return true;
    return false;
  })();

  // Helper to extract YouTube video ID from either a full URL or raw ID
  const extractYouTubeId = (input: string): string => {
    const trimmed = input.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
      return trimmed;
    }
    const match = trimmed.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([a-zA-Z0-9_-]{11})/
    );
    if (match && match[1]) {
      return match[1];
    }
    return trimmed.replace(/[^a-zA-Z0-9_-]/g, '');
  };

  const extractVimeoId = (input: string): string => {
    const trimmed = input.trim();
    const match = trimmed.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (match && match[1]) {
      return match[1];
    }
    return trimmed.replace(/[^0-9]/g, '');
  };

  // Sanitize YouTube/Vimeo embed URLs
  const getEmbedUrl = (): string | null => {
    if (project.provider === 'youtube' && project.videoId?.trim()) {
      const cleanId = extractYouTubeId(project.videoId);
      if (cleanId) {
        return `https://www.youtube-nocookie.com/embed/${cleanId}?autoplay=1&rel=0&modestbranding=1`;
      }
    }
    if (project.provider === 'vimeo' && project.videoId?.trim()) {
      const cleanId = extractVimeoId(project.videoId);
      if (cleanId) {
        return `https://player.vimeo.com/video/${cleanId}?autoplay=1&title=0&byline=0&portrait=0`;
      }
    }
    return null;
  };

  const embedUrl = getEmbedUrl();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      ref={modalRef}
      onClick={(e) => {
        // Close on backdrop click (outside the modal container)
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#101319] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#141822]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-xs uppercase font-semibold tracking-wider text-zinc-400">
              {project.categoryLabel}
            </span>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Close video player"
          >
            <svg
              className="w-5 h-5"
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

        {/* Video Player or Fallback Placeholder Container */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          {hasValidVideo ? (
            embedUrl ? (
              <iframe
                src={embedUrl}
                title={`${project.title} - Video Player`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : project.videoUrl ? (
              <video
                controls
                autoPlay
                playsInline
                className="w-full h-full"
                src={project.videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            ) : null
          ) : (
            /* Graceful, Designed Fallback State when videoId is not yet configured */
            <div className="flex flex-col items-center justify-center text-center p-8 max-w-lg">
              <div className="w-16 h-16 mb-4 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white tracking-tight mb-2">
                Project Preview Ready
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                This project slot is configured and ready. To connect your edit, upload your video to YouTube as an unlisted video and paste the video ID into <code className="text-blue-300 bg-white/5 px-1.5 py-0.5 rounded text-xs font-mono">src/data/projects.ts</code>.
              </p>
              <div className="text-xs text-zinc-500 border border-white/5 bg-white/[0.02] px-3 py-2 rounded-md font-mono">
                Project ID: {project.id} &bull; Provider: {project.provider}
              </div>
            </div>
          )}
        </div>

        {/* Video Description & Metadata Footer */}
        <div className="p-5 sm:p-6 bg-[#0e1117] border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
            <h2 id="video-modal-title" className="text-xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            {project.duration && (
              <span className="text-xs font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded">
                Duration: {project.duration}
              </span>
            )}
          </div>
          <p className="text-sm text-zinc-300 leading-relaxed">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
