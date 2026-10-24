import Seo from '@/components/Seo';
import Button from '@/components/Button';
import { Section, SectionHeading } from '@/components/SectionHeading';
import { site } from '@/data/business';

const principles = [
  {
    title: 'Product-first thinking',
    description: 'We identify interesting products and shape an ad concept around their details and story.',
  },
  {
    title: 'Clear creative scope',
    description: 'We create a customised AI-powered UGC-style sample and share it with your brand team.',
  },
  {
    title: 'A straightforward process',
    description: 'After approval, scope, payment, licensing and delivery are agreed for additional ad creatives.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Seo />
      <Section className="!pt-12 md:!pt-16">
        <SectionHeading
          eyebrow="About"
          title="AI-powered ad concepts, built around your product."
          description={site.description}
        />
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-8 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="border border-kirakart-border bg-kirakart-white p-7"
            >
              <h2 className="font-grotesk text-xl font-semibold text-kirakart-ink">
                {principle.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-kirakart-muted">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="border border-kirakart-border bg-kirakart-cream p-8 sm:p-12">
          <h2 className="font-grotesk text-2xl font-bold text-kirakart-ink">
            From ad concept to paid production.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-kirakart-muted sm:text-base">
            Kirakart Ads creates AI-powered UGC-style video ad concepts for products. Production may
            combine AI-generated visuals, voiceovers, editing, product assets and human creators
            when appropriate.
          </p>
          <Button to="/contact" variant="primary" className="mt-7">
            Get an Ad for Your Brand
          </Button>
        </div>
      </Section>
    </>
  );
}
