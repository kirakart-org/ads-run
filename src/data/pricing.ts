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
    blurb: 'A focused first package to test the creative direction.',
    features: [
      '2 short-form videos',
      'Basic concept and scripting',
      'Editing and captions',
      'One agreed revision per video',
      'Usage rights defined in the quotation',
    ],
    cta: 'Choose Starter',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹14,999',
    blurb: 'More volume and creative variation for brands running paid.',
    features: [
      '5 short-form videos',
      'Creative concepts and scripts',
      'Editing and captions',
      'Selected hook variations',
      'Agreed revisions and usage terms',
    ],
    cta: 'Choose Growth',
    highlight: true,
  },
  {
    id: 'monthly',
    name: 'Monthly Creative',
    price: '₹29,999',
    cadence: '/month',
    blurb: 'A retained creative pipeline for brands refreshing paid often.',
    features: [
      '8 short-form videos per month',
      'Monthly creative planning',
      'Selected creative variations',
      'Monthly delivery schedule',
      'Agreed revisions and usage terms',
    ],
    cta: 'Discuss Monthly',
  },
];

export const packageAddOns = [
  { title: 'Extra hook variation', detail: 'Additional opening hooks cut from the same footage.' },
  { title: 'Additional revision round', detail: 'Beyond the agreed revisions in your package.' },
  { title: 'Extended usage rights', detail: 'Broader or longer-term commercial usage than the standard quote.' },
  { title: 'Reshoot', detail: 'Extensive reshoots beyond the agreed production scope.' },
];

export const pricingFootnote =
  'These are proposed introductory prices, subject to final scope. Creator fees, shipping, extensive reshoots, special licensing and additional usage rights may affect the quotation.';
