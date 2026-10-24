export const site = {
  name: 'Kirakart Ads',
  domain: 'https://ads.kirakart.com',
  tagline: 'AI-powered UGC-style video ads, tailored to your products.',
  description:
    'We create AI-powered UGC-style video ads tailored to your products, helping growing brands turn product stories into engaging social media creatives.',
  contact: {
    email: 'kirakartsupport@gmail.com',
    whatsapp: '+919894690119',
    whatsappDisplay: '+91 9894690119',
    instagram: 'https://www.instagram.com/kirakart__/',
  },
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/kirakart__/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/kirakart' },
    { label: 'Email', href: 'mailto:kirakartsupport@gmail.com' },
  ],
} as const;

export type SiteConfig = typeof site;
