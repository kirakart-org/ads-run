export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  cadence?: string;
  blurb: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

export const packages: PricingPackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹4,999',
    blurb: 'A proposed starting package for a first product ad concept.',
    features: [
      '2 short-form videos',
      'AI-powered ad concepts',
      'Editing and captions',
      'One agreed revision per video',
      'Licensing and usage rights agreed before production',
    ],
    cta: 'Choose Starter',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹14,999',
    blurb: 'A proposed package for more product video ad variations.',
    features: [
      '5 short-form videos',
      'AI-powered concepts and creative variations',
      'Editing and captions',
      'Selected hook variations',
      'Scope, licensing and usage rights agreed before production',
    ],
    cta: 'Choose Growth',
    highlight: true,
  },
  {
    id: 'monthly',
    name: 'Monthly Creative',
    price: '₹29,999',
    cadence: '/month',
    blurb: 'A proposed monthly package for an ongoing flow of product ads.',
    features: [
      '8 short-form videos per month',
      'Monthly AI-powered ad concepts',
      'Selected creative variations',
      'Monthly delivery schedule',
      'Scope, licensing and usage rights agreed before production',
    ],
    cta: 'Discuss Monthly',
  },
];

export const packageAddOns = [
  { title: 'Additional creative variation', detail: 'Another hook, story angle or edit for the same product.' },
  { title: 'Additional revision round', detail: 'Further edits beyond the agreed package scope.' },
  { title: 'Extended commercial usage', detail: 'Broader or longer-term usage rights, defined in the final quote.' },
  { title: 'Additional production requirements', detail: 'Special assets, licensing or production needs outside the agreed scope.' },
];

export const pricingFootnote =
  'These are proposed starting packages, subject to final scope, licensing, production requirements and commercial usage rights. Final pricing is confirmed before paid production begins.';
