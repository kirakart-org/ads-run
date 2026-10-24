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
      <Section className="!pt-12 md:!pt-16">
        <SectionHeading
          eyebrow="Portfolio"
          title="Creative work, made to move products."
          description="A selection of creator-style video ads, product demonstrations and short-form social creatives. Every piece here is labelled concept work — built to show how we think, not to claim a client relationship."
        />
        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-kirakart-muted">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-kirakart-yellow" />
            {conceptCount} concept projects
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
        title="Like the way we tell product stories?"
        description="Send us your product and we will come back with a creative direction worth exploring."
        primaryLabel="Start a Project"
      />
      <div className="pb-20" />
    </>
  );
}
