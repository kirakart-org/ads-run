import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/routes';
import { site } from '@/data/business';
import Button from './Button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-kirakart-cream/95 backdrop-blur-sm border-b border-kirakart-border'
          : 'bg-kirakart-cream/0 border-b border-transparent'
      }`}
    >
      <div className="container-editorial">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            to="/"
            className="font-grotesk text-lg font-bold tracking-tightest text-kirakart-ink"
            onClick={() => setOpen(false)}
            aria-label={`${site.name} home`}
          >
            Kirakart <span className="text-kirakart-red">Ads</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-grotesk text-sm font-medium text-kirakart-ink/80 transition-colors hover:text-kirakart-ink link-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button to="/contact" variant="primary" className="!py-2.5 !px-5 text-xs">
              Get an Ad for Your Brand
            </Button>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-kirakart-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-kirakart-cream border-t border-kirakart-border">
          <div className="container-editorial py-6">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="py-3 font-grotesk text-base font-medium text-kirakart-ink border-b border-kirakart-border/60"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button to="/contact" variant="primary" className="mt-5 w-full" onClick={() => setOpen(false)}>
                Get an Ad for Your Brand
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
