import Seo from '@/components/Seo';
import PortfolioGrid from '@/components/PortfolioGrid';
import { Section, SectionHeading } from '@/components/SectionHeading';
import CtaBanner from '@/components/CtaBanner';
import { publishedProjects } from '@/data/portfolio';

export default function WorkPage() {
  const conceptCount = publishedProjects.filter((p) => p.isConcept).length;

  return (
    <>
      <Seo />
      <Section className="!pt-12 !pb-12 md:!pt-16 md:!pb-16">
        <SectionHeading
          eyebrow="Portfolio"
          title="AI Ad Samples"
          description="Explore product-specific ad concepts created with AI to show brands what's possible. Previews are illustrative; these are concept samples, not client campaigns or performance claims."
        />
        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-kirakart-muted">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-kirakart-yellow" />
            {conceptCount} AI-generated concepts
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-kirakart-border" />
            Published only — drafts are hidden
          </span>
        </div>
      </Section>

      <Section className="!pt-0">
        <PortfolioGrid showFilters />
      </Section>

      <CtaBanner
        title="See what AI-powered creative can do for your product."
        description="Tell us about your brand and get started on a tailored product ad."
        primaryLabel="Get an Ad for Your Brand"
      />
      <div className="pb-20" />
    </>
  );
}
