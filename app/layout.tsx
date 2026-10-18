import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/src/config/site';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Video Editor for Podcasts & Talking-Head Content`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Video Editor',
    'DaVinci Resolve Editor',
    'DaVinci Resolve',
    'Podcast Editing',
    'Talking-Head Editor',
    'A-Roll Editing',
    'Video Pacing',
    'YouTube Video Editor',
    'PK Edits',
  ],
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} | Video Editor for Podcasts & Talking-Head Content`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/hero-preview.svg',
        width: 1280,
        height: 720,
        alt: `${siteConfig.name} - Video Editing Portfolio Showcase`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Video Editor for Podcasts & Talking-Head Content`,
    description: siteConfig.description,
    images: ['/images/hero-preview.svg'],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Real, accurate structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.author.email,
    telephone: `+${siteConfig.author.whatsappNumber}`,
    knowsAbout: [
      'Video Editing',
      'DaVinci Resolve Post-Production',
      'Podcast Post-Production',
      'Talking-Head Content',
      'Audio Cleanup and Pacing',
      'Subtitles and Captions',
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#090b0e] text-[#f4f4f6]">
        {children}
      </body>
    </html>
  );
}
