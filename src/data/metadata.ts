import type { Route } from './routes';

export interface PageMeta {
  path: Route;
  title: string;
  description: string;
  h1: string;
}

export const pageMeta: Record<Route, PageMeta> = {
  '/': {
    path: '/',
    title: 'Kirakart Ads | UGC Video Ads for Growing Brands',
    description:
      'Create UGC-style video ads, product demonstrations, and short-form social creatives for growing brands. Explore Kirakart Ads services and packages.',
    h1: 'Your product. Their next favourite ad.',
  },
  '/work': {
    path: '/work',
    title: 'Work | Kirakart Ads',
    description:
      'A portfolio of creator-style UGC video ads, product demonstrations and short-form social creatives made for growing brands.',
    h1: 'Creative work, made to move products.',
  },
  '/services': {
    path: '/services',
    title: 'Services | Kirakart Ads',
    description:
      'UGC video ad production, creator-led product videos, product demonstrations, unboxing videos, short-form social ads, hook variations and monthly creative production.',
    h1: 'Services built around your product story.',
  },
  '/pricing': {
    path: '/pricing',
    title: 'Pricing | Kirakart Ads',
    description:
      'Transparent packages for UGC video ad production — Starter, Growth and Monthly Creative — with deliverables, revisions and usage rights explained.',
    h1: 'Pricing that scales with your creative needs.',
  },
  '/about': {
    path: '/about',
    title: 'About | Kirakart Ads',
    description:
      'Kirakart Ads helps product brands create stronger social-first advertising through thoughtful concepts, suitable creators and an organised production process.',
    h1: 'Creative thinking. Clear execution.',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact | Kirakart Ads',
    description:
      'Tell us what you are building. Send a brief and we will come back with a scoped quote for your UGC video ad production.',
    h1: 'Tell us what you\u2019re building.',
  },
  '/404': {
    path: '/404',
    title: 'Page not found | Kirakart Ads',
    description: 'The page you are looking for does not exist.',
    h1: 'Page not found',
  },
};
