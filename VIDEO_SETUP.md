# Video Setup & Replacement Guide for PK Edits

This guide walks you step-by-step through replacing the sample projects with your real video edits. You only need to edit **one single file**: `src/data/projects.ts`. You do not need to touch any design code or React components.

---

## Central Configuration File
Open:
```
src/data/projects.ts
```

In this file, you will find four project entries:
1. `podcast-edit-01`
2. `podcast-edit-02`
3. `talking-head-01`
4. `talking-head-02`

---

## Method 1: Using YouTube (Recommended for Most Edits)

YouTube provides the fastest global video streaming with no bandwidth costs on Vercel.

### Step 1: Upload your video as "Unlisted"
1. Go to [YouTube Studio](https://studio.youtube.com).
2. Click **Create** > **Upload videos**.
3. Select your edited video file.
4. In the **Visibility** step, select **Unlisted**.
   > *Note: "Unlisted" means only people with the link can watch your video. It won't appear on your public YouTube channel or in search results, but it will play seamlessly on your portfolio website.*
5. Click **Save**.

### Step 2: Copy your Video ID
The video ID is the 11-character code in your YouTube URL:
- If your URL is `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, your video ID is `dQw4w9WgXcQ`.
- If your URL is `https://youtu.be/dQw4w9WgXcQ`, your video ID is `dQw4w9WgXcQ`.

### Step 3: Paste into `src/data/projects.ts`
Find the project in `src/data/projects.ts` and update the `videoId` field:
```typescript
{
  id: 'podcast-edit-01',
  title: 'My Client Podcast Episode 12',
  category: 'podcast',
  categoryLabel: 'Podcast Editing',
  description: 'Clean dialogue cut, host-guest audio leveling, and micro-pause removal.',
  provider: 'youtube',
  videoId: 'dQw4w9WgXcQ', // <-- Paste your 11-character YouTube ID here
  poster: '/images/podcast-edit-01.svg',
  duration: '14:20',
  featured: true,
}
```

---

## Method 2: Using Vimeo

If you host your portfolio edits on Vimeo:
1. Upload your video to Vimeo and set privacy to "Anyone" or "Hide from Vimeo".
2. Copy the numeric ID from the Vimeo URL:
   - Example URL: `https://vimeo.com/76979871` -> ID is `76979871`.
3. In `src/data/projects.ts`, set `provider: 'vimeo'` and paste your ID into `videoId`:
```typescript
{
  id: 'talking-head-01',
  title: 'Founder Explainer A-Roll',
  category: 'talking-head',
  categoryLabel: 'A-Roll / Talking-Head',
  description: 'Tight pacing with punch-ins and b-roll inserts.',
  provider: 'vimeo',
  videoId: '76979871', // <-- Paste your numeric Vimeo ID here
  poster: '/images/talking-head-01.svg',
  duration: '03:45',
}
```

---

## Method 3: Using Direct MP4 URLs

If you host your MP4 file on a CDN or cloud storage (e.g. Supabase Storage, Cloudflare R2, AWS S3, or direct HTTPS link):
1. In `src/data/projects.ts`, set `provider: 'mp4'`.
2. Add the direct video URL in `videoUrl`:
```typescript
{
  id: 'talking-head-02',
  title: 'Tech Breakdown Sample',
  category: 'talking-head',
  categoryLabel: 'A-Roll / Talking-Head',
  description: 'Jump-cut editing and screen-recording integration.',
  provider: 'mp4',
  videoUrl: 'https://your-bucket.com/my-video.mp4',
  poster: '/images/talking-head-02.svg',
  duration: '05:10',
}
```

---

## How to Change Thumbnails / Posters

1. Prepare your thumbnail image (recommended size: `1280 x 720` or `1920 x 1080` in `.jpg`, `.png`, or `.webp`).
2. Copy the image file into your project's `public/images/` folder (for example, `public/images/my-podcast-thumb.jpg`).
3. In `src/data/projects.ts`, update the `poster` path:
```typescript
poster: '/images/my-podcast-thumb.jpg',
```

---

## What Happens If a Video Link Is Left Blank?

If you leave `videoId: ''` empty or haven't uploaded a video yet:
- The website **will never crash or show a broken player**.
- Clicking the project opens a designed, cinematic **"Project Preview Ready"** modal card displaying the project details and placeholder notice.

---

## Testing Your Changes Locally

After editing `src/data/projects.ts`:
1. Save the file.
2. In your terminal, run:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.
4. Click on your project card to confirm the video plays!
