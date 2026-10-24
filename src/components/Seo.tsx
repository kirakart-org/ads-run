import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageMeta } from '@/data/metadata';
import { site } from '@/data/business';
import type { Route } from '@/data/routes';

interface SeoProps {
  path?: Route;
  title?: string;
  description?: string;
}

function setTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function Seo({ path, title, description }: SeoProps) {
  const location = useLocation();
  const resolvedPath = (path ?? (location.pathname as Route)) || '/';
  const meta = pageMeta[resolvedPath] ?? pageMeta['/'];

  const finalTitle = title ?? meta.title;
  const finalDescription = description ?? meta.description;
  const canonical = `${site.domain}${resolvedPath === '/' ? '' : resolvedPath}`;

  useEffect(() => {
    document.title = finalTitle;
    setTag('name', 'description', finalDescription);
    setTag('property', 'og:title', finalTitle);
    setTag('property', 'og:description', finalDescription);
    setTag('property', 'og:url', canonical);
    setTag('name', 'twitter:title', finalTitle);
    setTag('name', 'twitter:description', finalDescription);
    setCanonical(canonical);
  }, [finalTitle, finalDescription, canonical]);

  return null;
}
