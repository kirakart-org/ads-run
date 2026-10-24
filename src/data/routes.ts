export type Route = '/' | '/work' | '/services' | '/pricing' | '/about' | '/contact' | '/404';

export const navLinks: { label: string; to: Route }[] = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
];
