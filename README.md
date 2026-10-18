# PK Edits — Premium Video Editing Portfolio

A production-ready, cinematic portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed specifically for showcasing podcast editing and talking-head / A-roll video projects with thoughtful pacing, clean aesthetics, and zero bloat.

---

## Features

- **Cinematic Dark Theme**: Deep charcoal canvas, warm white typography, subtle electric blue accents, and fine hairline borders.
- **Poster-First Video Playback**: Fast initial load with zero third-party iframe lag. Videos load only when the user clicks Play.
- **Universal Provider Support**: Supports YouTube (public or unlisted), Vimeo, direct MP4 URLs, and local video clips.
- **Graceful Video Fallback**: If a video link is not configured yet, the viewer displays an elegant "Project Preview Ready" placeholder instead of a broken screen.
- **Interactive Category Filtering**: Real-time filtering between **All Projects**, **Podcast**, and **Talking Head**.
- **Accessible & Keyboard Friendly**:
  - Focus trapping and Escape-key dismissal on video modal.
  - Body scroll-lock when player or mobile menu is active.
  - Screen-reader accessible landmarks, ARIA labels, and skip-to-content link.
  - Full support for `prefers-reduced-motion`.
- **Technical SEO Built-in**:
  - Dynamic Next.js Metadata API with OpenGraph and Twitter cards.
  - Structured data (`JSON-LD` ProfessionalService schema).
  - Search engine `robots.txt` and `sitemap.xml` generated automatically.
- **Direct Contact Channels**: One-click direct email (`mailto`) and WhatsApp chat without requiring any backend database or third-party email API keys.

---

## Project Structure

```
my-app/
├── app/
│   ├── favicon.ico         # Brand icon
│   ├── globals.css         # Dark theme tokens, accessible focus states & reduced motion
│   ├── layout.tsx          # Root layout with SEO metadata & JSON-LD
│   ├── page.tsx            # Main portfolio page assembling all sections
│   ├── robots.ts           # Automatic robots.txt route
│   └── sitemap.ts          # Automatic sitemap.xml route
├── components/
│   ├── Header.tsx          # Minimalist sticky header with brand wordmark
│   ├── MobileNav.tsx       # Accessible mobile drawer navigation
│   ├── Hero.tsx            # Headline, availability badge, and featured video preview
│   ├── SelectedWork.tsx    # Category filter tabs and project grid
│   ├── ProjectCard.tsx     # 16:9 poster cards with play hover states
│   ├── VideoModal.tsx      # Video player dialog with YouTube/Vimeo/MP4 embeds & fallbacks
│   ├── Services.tsx        # 6 core editing service offerings
│   ├── About.tsx           # Editorial background and trial project invitation
│   ├── Contact.tsx         # Direct Email & WhatsApp contact cards
│   └── Footer.tsx          # Copyright, navigation, and smooth back-to-top
├── src/
│   ├── config/
│   │   └── site.ts         # Brand name, email, WhatsApp, and canonical URL settings
│   ├── data/
│   │   └── projects.ts     # Strongly typed project entries & services list
│   └── types/
│       └── index.ts        # TypeScript interfaces & types
├── public/
│   └── images/             # Posters, SVGs, and preview graphics
├── VIDEO_SETUP.md          # Step-by-step video replacement tutorial
└── README.md               # Project documentation
```

---

## Getting Started Locally

### 1. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## Customizing Your Portfolio

### 1. Brand Name & Contact Info
Open `src/config/site.ts`:
- Change `name` (currently `"PK Edits"`).
- Update `author.email` (currently `"pkedits52001@gmail.com"`).
- Update `author.whatsappNumber` (currently `"918237503425"`).
- Update `url` when your custom domain or Vercel production URL is ready.

### 2. Video Links & Thumbnails
Open `src/data/projects.ts`:
- Change project titles, categories, and descriptions.
- Paste your YouTube video ID (e.g. `videoId: 'YOUR_ID'`).
- See [VIDEO_SETUP.md](./VIDEO_SETUP.md) for full instructions on YouTube unlisted videos, Vimeo, and MP4 files.

---

## Running Quality Checks

### Type Check & Build
Verify TypeScript types and build the optimized production bundle:
```bash
npm run build
```

### Linting
Check ESLint code style and rules:
```bash
npm run lint
```

---

## Preparing for Manual Deployment to Vercel

You can deploy this project completely free on Vercel's Hobby plan:

1. **Commit and push your changes to GitHub / GitLab / Bitbucket**:
   ```bash
   git add .
   git commit -m "Complete PK Edits video editing portfolio"
   git push origin main
   ```
2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **Add New...** > **Project**.
   - Select your Git repository.
   - Framework preset: **Next.js** (detected automatically).
   - Root directory: `./`
   - Build Command: `npm run build` (default).
   - Output Directory: `.next` (default).
3. **No Environment Variables Needed**:
   - The website does not require any paid APIs, database connections, or secret keys.
4. **Deploy**:
   - Click **Deploy**. Vercel will build and launch your live portfolio in seconds.
5. **Update Canonical Domain**:
   - Once deployed, copy your live Vercel domain (e.g. `https://pkedits.vercel.app`) or custom domain.
   - Paste it into `src/config/site.ts` under `url`.
