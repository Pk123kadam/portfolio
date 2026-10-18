import type { MetadataRoute } from 'next';
import { siteConfig } from '@/src/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date('2026-10-18'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
