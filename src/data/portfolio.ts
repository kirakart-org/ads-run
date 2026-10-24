export type PortfolioCategory =
  | 'Beauty'
  | 'Food'
  | 'Fashion'
  | 'Lifestyle'
  | 'Product Demonstration'
  | 'Unboxing'
  | 'Creator-led Ads';

export interface PortfolioProject {
  id: string;
  title: string;
  brand?: string;
  category: PortfolioCategory;
  format: string;
  description: string;
  objective: string;
  thumbnail: string;
  poster?: string;
  videoUrl: string;
  isConcept: boolean;
  featured: boolean;
  published: boolean;
}

// Open-access sample clips used to demonstrate playback. Replace with real
// hosted video URLs before launch. Thumbnails are licensed Pexels photography.
export const portfolio: PortfolioProject[] = [
  {
    id: 'glow-serum-demo',
    title: 'Glow Serum Demonstration',
    category: 'Beauty',
    format: '9:16 · 30s',
    description:
      'A close, creator-led demonstration of a lightweight facial serum, focusing on texture, absorption and the morning ritual.',
    objective:
      'Show the product texture in natural light and let the application do the storytelling — no hard sell, just a believable routine.',
    thumbnail:
      'https://images.pexels.com/photos/8101523/pexels-photo-8101523.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    poster:
      'https://images.pexels.com/photos/8101523/pexels-photo-8101523.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    isConcept: true,
    featured: true,
    published: true,
  },
  {
    id: 'beauty-routine-edit',
    title: 'Everyday Beauty Routine',
    category: 'Beauty',
    format: '9:16 · 45s',
    description:
      'A quick three-step routine cut for Reels and TikTok, with soft transitions and captioned product cues.',
    objective:
      'Make a familiar morning routine feel achievable in 45 seconds, with the product as the quiet hero of the sequence.',
    thumbnail:
      'https://images.pexels.com/photos/7512743/pexels-photo-7512743.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    poster:
      'https://images.pexels.com/photos/7512743/pexels-photo-7512743.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    isConcept: true,
    featured: true,
    published: true,
  },
  {
    id: 'snack-pack-creative',
    title: 'Snack Pack Creative',
    category: 'Food',
    format: '9:16 · 20s',
    description:
      'A snappy unboxing-to-bite sequence for a packaged snack, paced for a six-second hold and a swipe.',
    objective:
      'Capture the crunch, the colours and the pack appeal inside the first two seconds to earn a second look.',
    thumbnail:
      'https://images.pexels.com/photos/9513108/pexels-photo-9513108.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    poster:
      'https://images.pexels.com/photos/9513108/pexels-photo-9513108.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    isConcept: true,
    featured: true,
    published: true,
  },
  {
    id: 'fashion-styling-cut',
    title: 'Accessories Styling Cut',
    category: 'Fashion',
    format: '9:16 · 35s',
    description:
      'A creator styles a single bag across three outfits, cutting quickly between looks to show versatility.',
    objective:
      'Demonstrate how one accessory works across occasions without a voiceover — let the styling rhythm carry it.',
    thumbnail:
      'https://images.pexels.com/photos/30466066/pexels-photo-30466066.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    poster:
      'https://images.pexels.com/photos/30466066/pexels-photo-30466066.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    isConcept: true,
    featured: true,
    published: true,
  },
  {
    id: 'unboxing-reveal',
    title: 'Product Unboxing Reveal',
    category: 'Unboxing',
    format: '9:16 · 40s',
    description:
      'A hands-first unboxing that slows down on the reveal moment, built for curiosity and a clean product hero shot.',
    objective:
      'Lead with the hands and the box, delay the reveal, and land on a single crisp product frame the brand can reuse.',
    thumbnail:
      'https://images.pexels.com/photos/6958447/pexels-photo-6958447.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    poster:
      'https://images.pexels.com/photos/6958447/pexels-photo-6958447.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    isConcept: true,
    featured: true,
    published: true,
  },
  {
    id: 'problem-solution-ad',
    title: 'Problem & Solution Spot',
    category: 'Creator-led Ads',
    format: '9:16 · 25s',
    description:
      'A creator names a relatable skincare frustration, introduces the product, and shows the difference in one routine.',
    objective:
      'Structure the spot as problem, introduction and result so the product earns its place in the story rather than interrupting it.',
    thumbnail:
      'https://images.pexels.com/photos/6475980/pexels-photo-6475980.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    poster:
      'https://images.pexels.com/photos/6475980/pexels-photo-6475980.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    isConcept: true,
    featured: true,
    published: true,
  },
  {
    id: 'dropper-texture',
    title: 'Dropper Texture Study',
    category: 'Beauty',
    format: '9:16 · 18s',
    description:
      'A macro study of a dropper serum — the drop, the spread, the glow — cut tight for an opening hook.',
    objective:
      'Lead with a single satisfying macro moment to earn attention before any product claim appears on screen.',
    thumbnail:
      'https://images.pexels.com/photos/8101534/pexels-photo-8101534.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    poster:
      'https://images.pexels.com/photos/8101534/pexels-photo-8101534.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    isConcept: true,
    featured: false,
    published: true,
  },
  {
    id: 'food-drink-pour',
    title: 'Pour & Serve Spot',
    category: 'Food',
    format: '9:16 · 22s',
    description:
      'A pour-and-serve sequence for a bottled drink, built around condensation, sound design and a single hero sip.',
    objective:
      'Use the pour as the hook and let sound design carry the craving — no voiceover, just appetite appeal.',
    thumbnail:
      'https://images.pexels.com/photos/25402112/pexels-photo-25402112.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    poster:
      'https://images.pexels.com/photos/25402112/pexels-photo-25402112.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    isConcept: true,
    featured: false,
    published: true,
  },
  {
    id: 'fashion-mirror-look',
    title: 'Mirror Look Cut',
    category: 'Fashion',
    format: '9:16 · 30s',
    description:
      'A mirror-frame styling video showing a single accessory completing a look, paced for a double-tap.',
    objective:
      'Keep the camera in the mirror so the viewer feels like the creator, with the product as the final piece of the look.',
    thumbnail:
      'https://images.pexels.com/photos/34620275/pexels-photo-34620275.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    poster:
      'https://images.pexels.com/photos/34620275/pexels-photo-34620275.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    isConcept: true,
    featured: false,
    published: true,
  },
  {
    id: 'lifestyle-fragrance',
    title: 'Fragrance In-Context',
    category: 'Lifestyle',
    format: '9:16 · 28s',
    description:
      'A fragrance placed in a lived-in moment — shelves, light, a held bottle — instead of a glossy product table.',
    objective:
      'Move the bottle out of the studio and into a believable scene so the scent feels like a daily choice, not a display object.',
    thumbnail:
      'https://images.pexels.com/photos/7364096/pexels-photo-7364096.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    poster:
      'https://images.pexels.com/photos/7364096/pexels-photo-7364096.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    isConcept: true,
    featured: false,
    published: true,
  },
  {
    id: 'product-demo-routine',
    title: 'Product Demo Routine',
    category: 'Product Demonstration',
    format: '9:16 · 35s',
    description:
      'A clear, repeatable demonstration of how a product fits into an existing routine, shot in one continuous take.',
    objective:
      'Remove cuts so the viewer trusts the routine is real, and let the product prove itself without a hard claim.',
    thumbnail:
      'https://images.pexels.com/photos/9774854/pexels-photo-9774854.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    poster:
      'https://images.pexels.com/photos/9774854/pexels-photo-9774854.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    isConcept: true,
    featured: false,
    published: true,
  },
  {
    id: 'creator-led-ad-hook',
    title: 'Creator-Led Hook Spot',
    category: 'Creator-led Ads',
    format: '9:16 · 15s',
    description:
      'A creator opens with a direct-to-camera hook, then pivots to the product for a tight, paid-ready spot.',
    objective:
      'Use a genuine creator hook to earn the first three seconds, then deliver the product message before attention drops.',
    thumbnail:
      'https://images.pexels.com/photos/6593779/pexels-photo-6593779.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    poster:
      'https://images.pexels.com/photos/6593779/pexels-photo-6593779.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    isConcept: true,
    featured: false,
    published: true,
  },
  {
    id: 'unpublished-placeholder',
    title: 'Unpublished Draft',
    category: 'Beauty',
    format: '9:16 · 20s',
    description: 'An unpublished draft kept to verify the published filter.',
    objective: 'Should never appear on the site.',
    thumbnail:
      'https://images.pexels.com/photos/8101523/pexels-photo-8101523.jpeg?auto=compress&cs=tinysrgb&h=900&w=600',
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    isConcept: true,
    featured: false,
    published: false,
  },
];

export const publishedProjects = portfolio.filter((p) => p.published);
export const featuredProjects = publishedProjects.filter((p) => p.featured);

export const portfolioFilters: ('All Work' | PortfolioCategory)[] = [
  'All Work',
  'Beauty',
  'Food',
  'Fashion',
  'Lifestyle',
  'Product Demonstration',
  'Unboxing',
  'Creator-led Ads',
];
