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

// Open-access illustrative video previews. Samples are concepts, not client campaigns.
export const portfolio: PortfolioProject[] = [
  {
    id: 'glow-serum-demo',
    title: 'AI Skincare Serum Routine',
    category: 'Beauty',
    format: '9:16 · 30s',
    description:
      'AI-generated UGC-style ad concept for an imagined skincare serum, focusing on texture, application and a simple morning routine.',
    objective:
      'Introduce a serum through a familiar routine and clear product details, with a natural-feeling UGC-style story.',
    thumbnail:
      'https://images.pexels.com/photos/7320788/pexels-photo-7320788.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    poster:
      'https://images.pexels.com/photos/7320788/pexels-photo-7320788.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    videoUrl:
      'https://videos.pexels.com/video-files/7597242/7597242-uhd_1440_2560_24fps.mp4',
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
      'AI-generated beauty ad concept showing a simple three-step routine with clear product cues and short-form pacing.',
    objective:
      'Make a beauty product part of an easy-to-follow routine, keeping the product central to the concept.',
    thumbnail:
      'https://images.pexels.com/photos/17891765/pexels-photo-17891765.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    poster:
      'https://images.pexels.com/photos/17891765/pexels-photo-17891765.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    videoUrl:
      'https://videos.pexels.com/video-files/5308682/5308682-hd_1920_1080_24fps.mp4',
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
      'AI-generated food ad concept following a snack from package reveal to first bite in a quick, social-first sequence.',
    objective:
      'Lead with the package reveal and appetising product details to establish an immediate visual hook.',
    thumbnail:
      'https://images.pexels.com/photos/6920009/pexels-photo-6920009.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    poster:
      'https://images.pexels.com/photos/6920009/pexels-photo-6920009.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    videoUrl:
      'https://videos.pexels.com/video-files/6547782/6547782-uhd_1440_2560_24fps.mp4',
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
      'AI-generated fashion ad concept presenting one accessory across multiple outfit ideas.',
    objective:
      'Show the accessory in different looks and let the visual styling tell the product story.',
    thumbnail:
      'https://images.pexels.com/photos/6347607/pexels-photo-6347607.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    poster:
      'https://images.pexels.com/photos/6347607/pexels-photo-6347607.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    videoUrl:
      'https://videos.pexels.com/video-files/13929683/13929683-uhd_1440_2560_24fps.mp4',
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
      'AI-generated unboxing-style ad concept that builds anticipation around a product reveal and finishes on a clear hero frame.',
    objective:
      'Build curiosity with a paced reveal, then finish on a clean product-focused frame.',
    thumbnail:
      'https://images.pexels.com/photos/6958455/pexels-photo-6958455.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    poster:
      'https://images.pexels.com/photos/6958455/pexels-photo-6958455.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    videoUrl:
      'https://videos.pexels.com/video-files/7191314/7191314-uhd_2560_1080_25fps.mp4',
    isConcept: true,
    featured: true,
    published: true,
  },
  {
    id: 'problem-solution-ad',
    title: 'UGC-Style Problem-Solution Ad',
    category: 'Creator-led Ads',
    format: '9:16 · 25s',
    description:
      'AI-generated UGC-style concept that frames a common skincare need, introduces an imagined product and shows how it fits a routine.',
    objective:
      'Use a clear problem, product introduction and routine to make the product story easy to follow.',
    thumbnail:
      'https://images.pexels.com/photos/4152967/pexels-photo-4152967.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    poster:
      'https://images.pexels.com/photos/4152967/pexels-photo-4152967.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    videoUrl:
      'https://videos.pexels.com/video-files/7314356/7314356-uhd_2732_1440_25fps.mp4',
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
      'AI-generated skincare concept centred on a serum dropper, texture and application for a close-up opening hook.',
    objective:
      'Lead with a tactile product detail, then introduce the product without making unsupported performance claims.',
    thumbnail:
      'https://images.pexels.com/photos/6724512/pexels-photo-6724512.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    poster:
      'https://images.pexels.com/photos/6724512/pexels-photo-6724512.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    videoUrl:
      'https://videos.pexels.com/video-files/7314356/7314356-uhd_2732_1440_25fps.mp4',
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
      'AI-generated food and beverage ad concept built around a drink pour, product details and a serving moment.',
    objective:
      'Use the pour as the visual hook and keep the product central throughout the short-form edit.',
    thumbnail:
      'https://images.pexels.com/photos/25402112/pexels-photo-25402112.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    poster:
      'https://images.pexels.com/photos/25402112/pexels-photo-25402112.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    videoUrl:
      'https://videos.pexels.com/video-files/7593122/7593122-uhd_2732_1318_30fps.mp4',
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
      'AI-generated fashion ad concept presenting an accessory as the finishing detail in a mirror-style look.',
    objective:
      'Use a familiar mirror-style framing and make the accessory the final detail of the outfit.',
    thumbnail:
      'https://images.pexels.com/photos/6347607/pexels-photo-6347607.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    poster:
      'https://images.pexels.com/photos/6347607/pexels-photo-6347607.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    videoUrl:
      'https://videos.pexels.com/video-files/13929683/13929683-uhd_1440_2560_24fps.mp4',
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
      'AI-generated lifestyle ad concept placing an imagined fragrance in a warm, everyday setting.',
    objective:
      'Position the product in a relatable daily moment instead of a standalone product display.',
    thumbnail:
      'https://images.pexels.com/photos/8371391/pexels-photo-8371391.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    poster:
      'https://images.pexels.com/photos/8371391/pexels-photo-8371391.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    videoUrl:
      'https://videos.pexels.com/video-files/5308682/5308682-hd_1920_1080_24fps.mp4',
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
      'AI-generated product demonstration concept showing how an imagined product could fit into a simple routine.',
    objective:
      'Keep the use case clear and product-led, without relying on unsupported product claims.',
    thumbnail:
      'https://images.pexels.com/photos/6724512/pexels-photo-6724512.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    poster:
      'https://images.pexels.com/photos/6724512/pexels-photo-6724512.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    videoUrl:
      'https://videos.pexels.com/video-files/7597242/7597242-uhd_1440_2560_24fps.mp4',
    isConcept: true,
    featured: false,
    published: true,
  },
  {
    id: 'creator-led-ad-hook',
    title: 'AI UGC-Style Product Hook',
    category: 'Creator-led Ads',
    format: '9:16 · 15s',
    description:
      'AI-generated UGC-style ad concept opening with a relatable hook before introducing an imagined product.',
    objective:
      'Introduce a simple product message early and keep the opening tailored to the intended audience.',
    thumbnail:
      'https://images.pexels.com/photos/4152967/pexels-photo-4152967.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    poster:
      'https://images.pexels.com/photos/4152967/pexels-photo-4152967.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    videoUrl:
      'https://videos.pexels.com/video-files/5308682/5308682-hd_1920_1080_24fps.mp4',
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
      'https://images.pexels.com/photos/7320788/pexels-photo-7320788.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600',
    videoUrl:
      'https://videos.pexels.com/video-files/7191314/7191314-uhd_2560_1080_25fps.mp4',
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
