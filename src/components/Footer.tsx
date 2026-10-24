import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { site } from '@/data/business';
import { navLinks } from '@/data/routes';

export default function Footer() {
  return (
    <footer className="border-t border-kirakart-border bg-kirakart-cream">
      <div className="container-editorial py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="font-grotesk text-xl font-bold tracking-tightest text-kirakart-ink">
              Kirakart <span className="text-kirakart-red">Ads</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-kirakart-muted">
              {site.tagline}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={site.social[0].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-kirakart-muted transition-colors hover:text-kirakart-ink"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={site.social[1].href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-kirakart-muted transition-colors hover:text-kirakart-ink"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                aria-label="Email"
                className="text-kirakart-muted transition-colors hover:text-kirakart-ink"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-kirakart-ink/80 transition-colors hover:text-kirakart-red link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-4">Contact</p>
            <a
              href={`mailto:${site.contact.email}`}
              className="block text-sm text-kirakart-ink/80 transition-colors hover:text-kirakart-red link-underline"
            >
              {site.contact.email}
            </a>
            <a
              href={`https://wa.me/${site.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-sm text-kirakart-ink/80 transition-colors hover:text-kirakart-red link-underline"
            >
              WhatsApp {site.contact.whatsappDisplay}
            </a>
            <p className="mt-4 text-xs leading-relaxed text-kirakart-muted">
              AI-powered UGC-style video ad creation for growing brands.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-kirakart-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-kirakart-muted">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-kirakart-muted">
            Proposed domain: {site.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
