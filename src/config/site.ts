import { SiteConfig } from '@/src/types';

/**
 * Centralized Site Configuration for PK Edits
 *
 * Update this file to modify brand info, contact details,
 * navigation links, and canonical URLs.
 */
export const siteConfig: SiteConfig = {
  name: 'PK Edits',
  brandTagline: 'Thoughtful Editing. Clear Storytelling.',
  description:
    'Portfolio of PK Edits. Specialized in podcast editing and talking-head videos with thoughtful pacing, clean cuts, and purposeful storytelling.',
  
  // Update this to your real Vercel URL or custom domain once deployed
  url: 'https://portfolio-liard-six-gowco190rv.vercel.app',

  author: {
    name: 'PK Edits',
    role: 'Video Editor (Podcasts & Talking-Head)',
    experienceNotice:
      'Early-stage video editor building experience and open to suitable beginner-friendly or trial projects.',
    email: 'pkedits52001@gmail.com',
    phone: '8237503425',
    whatsappNumber: '918237503425',
    whatsappUrl: 'https://wa.me/918237503425',
    availability: 'Open to collaborations and selected projects.',
  },

  navigation: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};
