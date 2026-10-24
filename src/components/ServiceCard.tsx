import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { ServiceItem } from '@/data/services';

export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="group flex flex-col border border-kirakart-border bg-kirakart-cream transition-colors duration-300 hover:border-kirakart-ink/30">
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-kirakart-border/40">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-grotesk text-xl font-semibold tracking-tight text-kirakart-ink">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-kirakart-muted">{service.short}</p>
        <Link
          to="/services"
          className="mt-5 inline-flex items-center gap-1 font-grotesk text-xs font-medium uppercase tracking-wide text-kirakart-ink transition-colors hover:text-kirakart-red"
        >
          Learn more
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
