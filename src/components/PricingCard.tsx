import { Check } from 'lucide-react';
import type { PricingPackage } from '@/data/pricing';

interface PricingCardProps {
  pkg: PricingPackage;
  onSelect: (id: string) => void;
}

export default function PricingCard({ pkg, onSelect }: PricingCardProps) {
  return (
    <div
      className={`relative flex flex-col p-7 sm:p-8 transition-all duration-300 ${
        pkg.highlight
          ? 'border-2 border-kirakart-ink bg-kirakart-cream shadow-lg lg:-translate-y-3'
          : 'border border-kirakart-border bg-kirakart-cream/50 hover:border-kirakart-ink/30'
      }`}
    >
      {pkg.highlight && (
        <span className="absolute right-6 top-6 rounded-full bg-kirakart-red px-3 py-1 font-grotesk text-[10px] font-medium uppercase tracking-wide text-white">
          Popular
        </span>
      )}

      <h3 className="font-grotesk text-sm font-medium uppercase tracking-editorial text-kirakart-muted">
        {pkg.name}
      </h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-grotesk text-4xl font-bold tracking-tightest text-kirakart-ink">
          {pkg.price}
        </span>
        {pkg.cadence && (
          <span className="font-grotesk text-sm text-kirakart-muted">{pkg.cadence}</span>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-kirakart-muted">{pkg.blurb}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-kirakart-ink/80">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-kirakart-red" />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => onSelect(pkg.id)}
        className={`mt-8 inline-flex w-full items-center justify-center px-6 py-3.5 font-grotesk text-sm font-medium tracking-wide transition-all duration-300 ${
          pkg.highlight
            ? 'bg-kirakart-ink text-kirakart-cream hover:bg-kirakart-red'
            : 'border border-kirakart-ink text-kirakart-ink hover:bg-kirakart-ink hover:text-kirakart-cream'
        }`}
      >
        {pkg.cta}
      </button>
    </div>
  );
}
