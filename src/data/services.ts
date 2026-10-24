export interface ServiceItem {
  id: string;
  title: string;
  short: string;
  description: string;
  suits: string;
  deliverables: string[];
  image: string;
}

export const services: ServiceItem[] = [
  {
    id: 'ugc-video-ads',
    title: 'UGC Video Ads',
    short:
      'Creator-style short-form ads built for social feeds and paid campaigns, from hook to final edit.',
    description:
      'We write, shoot and edit creator-style video ads that read as organic content first and advertising second. Each ad is structured around a hook, a clear product story and a usable final asset you can run on paid.',
    suits:
      'D2C brands that need scroll-stopping social creatives without the overhead of a full production crew.',
    deliverables: ['Concept & script', 'Creator coordination', 'Shoot & edit', 'Captions', 'Final ad-ready files'],
    image:
      'https://images.pexels.com/photos/7481393/pexels-photo-7481393.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
  {
    id: 'product-demonstrations',
    title: 'Product Demonstrations',
    short:
      'Clear, repeatable demos that show exactly how your product fits into a real routine.',
    description:
      'Demonstration videos built around a single believable routine. We keep the product in context and let the application do the explaining, so the viewer can see themselves using it.',
    suits: 'Skincare, beauty and lifestyle products that need to be seen in use to be understood.',
    deliverables: ['Routine-led script', 'Creator shoot', 'Close-up product b-roll', 'Edit & captions'],
    image:
      'https://images.pexels.com/photos/9774854/pexels-photo-9774854.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
  {
    id: 'creative-variations',
    title: 'Creative Variations',
    short:
      'Multiple hooks, opens and pacing cut from one shoot, so you can test what earns attention.',
    description:
      'From a single production day we cut several creative variations — different hooks, opens and pacing — so you can test what actually earns attention in paid before scaling spend.',
    suits: 'Brands running paid social who need more than one creative to test against the same audience.',
    deliverables: ['Hook variations', 'Alternate opens', 'Pacing edits', 'Test-ready exports'],
    image:
      'https://images.pexels.com/photos/11025645/pexels-photo-11025645.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
  {
    id: 'monthly-creative-production',
    title: 'Monthly Creative Production',
    short:
      'A retained creative pipeline: monthly planning, production and delivery of a set volume of videos.',
    description:
      'For brands that need a steady flow of fresh creative. We plan monthly, produce to an agreed volume and deliver on a schedule, so paid always has something new to test.',
    suits: 'Growing brands that refresh paid creative every few weeks and want a reliable production partner.',
    deliverables: ['Monthly creative planning', 'Agreed video volume', 'Scheduled delivery', 'Ongoing revisions within scope'],
    image:
      'https://images.pexels.com/photos/8770513/pexels-photo-8770513.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
  {
    id: 'creator-led-product-videos',
    title: 'Creator-led Product Videos',
    short:
      'A creator shows and talks through your product in their own voice, shot to a brief you approve.',
    description:
      'We brief, coordinate and shoot with creators who fit your category. The creator stays in their own voice — we keep the structure and product story on brief.',
    suits: 'Brands that want the authenticity of creator-led content with the structure of an ad.',
    deliverables: ['Creator sourcing & briefing', 'Approved script beats', 'Shoot coordination', 'Edit & captions'],
    image:
      'https://images.pexels.com/photos/6593779/pexels-photo-6593779.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
  {
    id: 'unboxing-videos',
    title: 'Unboxing Videos',
    short:
      'Hands-first unboxing that builds curiosity around the reveal and lands on a clean hero shot.',
    description:
      'We structure the unboxing around the reveal — pacing the hands, the box and the product so the moment earns attention and finishes on a frame you can reuse.',
    suits: 'Subscription, e-commerce and gift-led products where the unboxing is part of the appeal.',
    deliverables: ['Unboxing script', 'Hands-first shoot', 'Reveal pacing', 'Hero frame export'],
    image:
      'https://images.pexels.com/photos/6958447/pexels-photo-6958447.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
  {
    id: 'short-form-social-ads',
    title: 'Short-form Social Ads',
    short:
      'Reels, TikTok and Shorts-ready cuts paced for the first three seconds and a fast swipe.',
    description:
      'Edits paced for short-form platforms — a hook inside three seconds, captions for sound-off viewing and a clean finish for paid or organic use.',
    suits: 'Any brand that needs platform-native cuts rather than repurposed long-form video.',
    deliverables: ['Platform-native aspect ratios', 'Captions', 'Sound-off readability', 'Hook-first pacing'],
    image:
      'https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
  {
    id: 'hook-variations',
    title: 'Hook Variations',
    short:
      'Separate opening hooks cut from the same footage so you can find the open that holds attention.',
    description:
      'A focused variation service: we cut multiple opening hooks from one shoot so you can test which open earns the first three seconds before committing to a full edit.',
    suits: 'Brands already running paid and looking to lift hold-through with better opens.',
    deliverables: ['Multiple hook cuts', 'One shared body edit', 'Test-ready exports'],
    image:
      'https://images.pexels.com/photos/29542363/pexels-photo-29542363.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
];

export const serviceIds = services.map((s) => s.id);
