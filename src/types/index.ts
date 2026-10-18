export type VideoProvider = 'youtube' | 'vimeo' | 'mp4' | 'local' | 'none';

export type ProjectCategory = 'podcast' | 'talking-head';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  provider: VideoProvider;
  /**
   * For YouTube: 11-character video ID (e.g. 'dQw4w9WgXcQ' or unlisted ID)
   * For Vimeo: Numeric video ID (e.g. '76979871')
   */
  videoId?: string;
  /**
   * For direct MP4 streaming or local file path in /public
   * (e.g. 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' or '/videos/sample.mp4')
   */
  videoUrl?: string;
  /**
   * Thumbnail/poster image path (relative to /public or an absolute HTTPS URL)
   */
  poster: string;
  /**
   * Optional display duration, e.g. "12:40"
   */
  duration?: string;
  /**
   * Highlight as featured project in the hero section
   */
  featured?: boolean;
  /**
   * Short tag describing the format or style, e.g. "Long-Form Interview"
   */
  tag?: string;
  /**
   * Video aspect ratio: standard 16:9 (horizontal) or 9:16 (vertical/shorts)
   */
  aspectRatio?: '16:9' | '9:16';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface SiteConfig {
  name: string;
  brandTagline: string;
  description: string;
  url: string;
  author: {
    name: string;
    role: string;
    experienceNotice: string;
    email: string;
    phone: string;
    whatsappNumber: string;
    whatsappUrl: string;
    availability: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
}
