import { Project, ServiceItem } from '@/src/types';

/**
 * ============================================================================
 * PORTFOLIO PROJECTS CONFIGURATION
 * ============================================================================
 *
 * HOW TO ADD OR REPLACE VIDEOS:
 * 1. For YouTube:
 *    - Upload video to YouTube (Public or Unlisted).
 *    - Copy the video ID from the URL:
 *      e.g. For https://www.youtube.com/watch?v=dQw4w9WgXcQ -> videoId is 'dQw4w9WgXcQ'
 *    - Set provider: 'youtube'
 *    - Paste the ID into `videoId: 'YOUR_ID_HERE'`
 *
 * 2. For Vimeo:
 *    - Set provider: 'vimeo'
 *    - Paste the Vimeo numeric ID into `videoId: '123456789'`
 *
 * 3. For Direct MP4 (hosted URL or in /public):
 *    - Set provider: 'mp4'
 *    - Paste the full URL into `videoUrl: 'https://example.com/video.mp4'`
 *
 * 4. Poster / Thumbnail:
 *    - Put an image file in the `public/images/` directory
 *    - Set `poster: '/images/your-thumbnail.jpg'`
 *
 * If `videoId` or `videoUrl` is empty or left as '', the website will display
 * an elegant "Project Preview Ready" placeholder inside the player modal
 * without crashing or showing a broken screen.
 */
export const projects: Project[] = [
  {
    id: 'podcast-edit-01',
    title: 'Podcast Edit 01',
    category: 'podcast',
    categoryLabel: 'Podcast Editing',
    description:
      'Conversational pacing, dialogue smoothing, and clean cuts that eliminate dead air while preserving natural speech cadence.',
    provider: 'youtube',
    // Paste your YouTube video ID below (e.g., 'dQw4w9WgXcQ'). Leave blank to show the designed placeholder.
    videoId: '',
    poster: '/images/podcast-edit-01.svg',
    duration: '14:20',
    featured: true,
    tag: 'Long-Form Conversation',
  },
  {
    id: 'podcast-edit-02',
    title: 'Podcast Edit 02',
    category: 'podcast',
    categoryLabel: 'Podcast Editing',
    description:
      'Engagement retention, dynamic visual emphasis, and smooth thematic transitions for multi-topic interview formats.',
    provider: 'youtube',
    videoId: '',
    poster: '/images/podcast-edit-02.svg',
    duration: '09:45',
    featured: false,
    tag: 'Interview & Commentary',
  },
  {
    id: 'talking-head-01',
    title: 'Talking-Head Edit 01',
    category: 'talking-head',
    categoryLabel: 'A-Roll / Talking-Head',
    description:
      'Purposeful jump-cuts, micro-pause removal, and crisp visual rhythm that keeps single-speaker education engaging and tight.',
    provider: 'youtube',
    videoId: '',
    poster: '/images/talking-head-01.svg',
    duration: '04:30',
    featured: false,
    tag: 'Educational & Solo A-Roll',
  },
  {
    id: 'talking-head-02',
    title: 'Talking-Head Edit 02',
    category: 'talking-head',
    categoryLabel: 'A-Roll / Talking-Head',
    description:
      'Integrating supporting visuals, subtle punch-ins, and graphics designed to hold attention throughout technical explanations.',
    provider: 'youtube',
    videoId: '',
    poster: '/images/talking-head-02.svg',
    duration: '06:15',
    featured: false,
    tag: 'Explainer & B-Roll Mix',
  },
];

/**
 * Core Editing Services
 * Honest, clear, and tailored to early-stage collaborative work.
 */
export const services: ServiceItem[] = [
  {
    id: 'podcast-editing',
    title: 'Podcast Editing',
    description:
      'Balancing conversational flow, trimming awkward hesitations, removing false starts, and keeping long-form dialogue engaging from start to finish.',
    deliverables: [
      'Dialogue leveling & timing cleanup',
      'Removal of filler words & dead pauses',
      'Smooth topic transitions & marker notes',
    ],
  },
  {
    id: 'talking-head-editing',
    title: 'Talking-Head / A-Roll Editing',
    description:
      'Sculpting single-speaker footage into punchy, articulate content with deliberate jump-cuts, natural rhythm, and no visual fatigue.',
    deliverables: [
      'Tight, purposeful jump-cut assembly',
      'Digital punch-ins for emphasis',
      'Pacing tuned to viewer retention',
    ],
  },
  {
    id: 'short-form-content',
    title: 'Short-Form Content',
    description:
      'Extracting high-value segments from longer recordings, adapted for vertical (9:16) viewing across social platforms.',
    deliverables: [
      'Hook selection & quick setup',
      'Vertical re-framing of speakers',
      'Snappy, high-retention pacing',
    ],
  },
  {
    id: 'captions-and-subtitles',
    title: 'Captions and Subtitles',
    description:
      'Accurate, well-formatted on-screen captions styled for silent-scrolling readability without blocking important video details.',
    deliverables: [
      'Synchronized text timing',
      'Clean typography & brand consistency',
      'Keyword highlights for scanning',
    ],
  },
  {
    id: 'b-roll-integration',
    title: 'B-Roll Integration',
    description:
      'Contextual visual cutaways, screen captures, and imagery that clarify abstract concepts and give the viewer visual variety.',
    deliverables: [
      'Paced overlay cutaways',
      'Visual support for spoken concepts',
      'Smooth motion transitions',
    ],
  },
  {
    id: 'audio-cleanup',
    title: 'Basic Audio Cleanup and Pacing',
    description:
      'Essential dialogue conditioning to ensure the listener hears clear, consistent sound without harsh spikes or distracting background hum.',
    deliverables: [
      'Background noise attenuation',
      'Consistent loudness & leveling',
      'Breath and pop smoothing',
    ],
  },
];
