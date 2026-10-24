import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import WhatsAppButton from './WhatsAppButton';
import { Section } from './SectionHeading';

interface CtaBannerProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
}

export default function CtaBanner({
  title,
  description,
  primaryLabel = 'Start a Project',
  primaryTo = '/contact',
}: CtaBannerProps) {
  return (
    <Section className="!pb-0">
      <div className="relative overflow-hidden rounded-2xl bg-kirakart-ink px-6 py-16 text-center sm:px-12 md:py-24">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-kirakart-red blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-grotesk text-3xl font-bold tracking-tightest text-kirakart-cream sm:text-4xl md:text-[2.75rem] md:leading-[1.05]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-kirakart-cream/70 sm:text-lg">
            {description}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to={primaryTo} variant="primary" className="bg-kirakart-red hover:bg-kirakart-cream hover:text-kirakart-ink">
              {primaryLabel}
            </Button>
            <WhatsAppButton />
          </div>
          <Link
            to="/work"
            className="mt-6 inline-flex items-center gap-1 font-grotesk text-sm text-kirakart-cream/60 transition-colors hover:text-kirakart-cream link-underline"
          >
            or explore our work first
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
