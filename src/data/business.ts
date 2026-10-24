export const site = {
  name: 'Kirakart Ads',
  domain: 'https://ads.kirakart.com',
  tagline: 'Creator-style ads. Made for brands that want to stand out.',
  description:
    'We turn product stories into creator-led video ads for social media and paid campaigns — from the first hook to the final edit.',
  // Configurable contact details. Replace before launch.
  contact: {
    email: 'hello@kirakart.com',
    whatsapp: '919999999999',
    whatsappDisplay: '+91 99999 99999',
    instagram: 'https://instagram.com/kirakart',
  },
  social: [
    { label: 'Instagram', href: 'https://instagram.com/kirakart' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/kirakart' },
    { label: 'Email', href: 'mailto:hello@kirakart.com' },
  ],
} as const;

export type SiteConfig = typeof site;
