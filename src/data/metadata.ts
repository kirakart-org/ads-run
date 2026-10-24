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
    title: 'Kirakart Ads | AI UGC Video Ads for Brands',
    description:
      'AI-powered UGC video ad creation for brands. Explore product-specific AI ad concepts and video ads for e-commerce, social media and growing brands.',
    h1: 'Your Product. Our AI. Your Next Ad.',
  },
  '/work': {
    path: '/work',
    title: 'AI Ad Samples | Kirakart Ads',
    description:
      'Explore AI-generated UGC-style ad concepts for skincare, beauty, food, fashion and lifestyle products.',
    h1: 'AI Ad Samples',
  },
  '/services': {
    path: '/services',
    title: 'Services | Kirakart Ads',
    description:
      'AI UGC ads, AI product advertisement videos, AI-generated hooks and custom packages for product video ads across social media and e-commerce.',
    h1: 'AI-powered video ad creation for your products.',
  },
  '/pricing': {
    path: '/pricing',
    title: 'Pricing | Kirakart Ads',
    description:
      'Proposed starting packages for AI UGC video ads and product advertisement videos, with scope, licensing and commercial usage rights agreed before production.',
    h1: 'Proposed packages for AI video ad creation.',
  },
  '/about': {
    path: '/about',
    title: 'About | Kirakart Ads',
    description:
      'Learn how Kirakart Ads uses AI-powered UGC-style concepts to help product brands explore engaging video advertisements for social media.',
    h1: 'AI-powered ad concepts, built around your product.',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact | Kirakart Ads',
    description:
      'Tell us about your product and request AI UGC video ads, AI product advertisement videos or a custom product ad package.',
    h1: 'Get an AI-powered ad for your brand.',
  },
  '/404': {
    path: '/404',
    title: 'Page not found | Kirakart Ads',
    description: 'The page you are looking for does not exist.',
    h1: 'Page not found',
  },
};
