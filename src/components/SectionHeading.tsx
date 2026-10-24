import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  as: Tag = 'h2',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`${alignClass} max-w-2xl ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Tag
        className={`font-grotesk font-bold tracking-tightest text-kirakart-ink text-3xl sm:text-4xl md:text-[2.75rem] md:leading-[1.05] ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      >
        {title}
      </Tag>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-kirakart-muted sm:text-lg">{description}</p>
      )}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-editorial">{children}</div>
    </section>
  );
}
