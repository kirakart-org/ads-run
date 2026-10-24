import { Link } from 'react-router-dom';
import type { ReactNode, MouseEventHandler } from 'react';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  variant?: Variant;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  ariaLabel?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 font-grotesk text-sm font-medium tracking-wide transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'bg-kirakart-ink text-kirakart-cream px-6 py-3.5 hover:bg-kirakart-red',
  secondary:
    'bg-kirakart-cream text-kirakart-ink border border-kirakart-border px-6 py-3.5 hover:border-kirakart-ink',
  ghost:
    'bg-transparent text-kirakart-ink px-0 py-1 link-underline',
  outline:
    'bg-transparent text-kirakart-ink border border-kirakart-ink/20 px-6 py-3.5 hover:border-kirakart-ink hover:bg-kirakart-ink hover:text-kirakart-cream',
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled,
  ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {variant !== 'ghost' && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} aria-label={ariaLabel} aria-disabled={disabled}>
        <span className="group inline-flex items-center gap-2">{content}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        <span className="group inline-flex items-center gap-2">{content}</span>
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      <span className="group inline-flex items-center gap-2">{content}</span>
    </button>
  );
}
