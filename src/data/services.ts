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
    title: 'AI UGC-Style Video Ads',
    short:
      'AI-powered UGC-style video ads tailored to your product and built for social feeds.',
    description:
      'Product-specific, AI-powered UGC-style ads that combine a relatable creative concept with a clear product story and a polished short-form edit.',
    suits:
      'Brands looking for product video ads for social media, e-commerce and digital campaigns.',
    deliverables: ['Custom ad concept', 'AI-generated visuals', 'Voiceover options', 'Edited video ad'],
    image:
      'https://images.pexels.com/photos/7481393/pexels-photo-7481393.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
  {
    id: 'product-demonstrations',
    title: 'AI Product Advertisement Videos',
    short:
      'AI-powered product videos that bring product benefits, details and use cases to life.',
    description:
      'We build product advertisement videos around the details and use cases your customers need to see, using your product assets alongside AI-generated visuals and editing.',
    suits: 'E-commerce and consumer brands that want to explain or showcase a product clearly.',
    deliverables: ['Product-focused concept', 'Product asset integration', 'AI visuals and editing', 'Social-ready export'],
    image:
      'https://images.pexels.com/photos/9774854/pexels-photo-9774854.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
  {
    id: 'creative-variations',
    title: 'AI-Generated Hooks and Creative Variations',
    short:
      'Alternative AI-generated hooks and creative directions for product ads.',
    description:
      'Explore different openings, story angles and pacing for your product. Each variation is developed as an ad creative, not a promise of campaign performance.',
    suits: 'Brands that want multiple creative approaches for a product or campaign.',
    deliverables: ['Alternative hooks', 'Creative variations', 'Editing and captions', 'Video exports'],
    image:
      'https://images.pexels.com/photos/11025645/pexels-photo-11025645.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
  {
    id: 'monthly-creative-production',
    title: 'Custom Product Ad Packages',
    short:
      'Flexible video ad packages shaped around your product, scope and production needs.',
    description:
      'Choose a proposed starting package or request a custom scope. We agree on deliverables, production requirements, licensing and commercial usage rights before paid production begins.',
    suits: 'Brands looking for a one-off product ad set or a recurring monthly creative package.',
    deliverables: ['Agreed number of videos', 'Custom product concepts', 'Defined delivery schedule', 'Scope and usage agreed upfront'],
    image:
      'https://images.pexels.com/photos/8770513/pexels-photo-8770513.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
];

export const serviceIds = services.map((s) => s.id);
