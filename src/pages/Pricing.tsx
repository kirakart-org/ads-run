import { useNavigate } from 'react-router-dom';
import Seo from '@/components/Seo';
import { Section, SectionHeading } from '@/components/SectionHeading';
import PricingCard from '@/components/PricingCard';
import FAQAccordion from '@/components/FAQAccordion';
import CtaBanner from '@/components/CtaBanner';
import { packages, packageAddOns, pricingFootnote } from '@/data/pricing';
import { faqs } from '@/data/faq';

const comparisonRows = [
  { feature: 'Short-form videos', starter: '2', growth: '5', monthly: '8 / month' },
  { feature: 'AI-powered ad concepts', starter: 'Included', growth: 'Included', monthly: 'Included' },
  { feature: 'Editing and captions', starter: 'Included', growth: 'Included', monthly: 'Included' },
  { feature: 'Creative variations', starter: 'Scoped', growth: 'Selected', monthly: 'Selected' },
  { feature: 'Delivery schedule', starter: 'Agreed', growth: 'Agreed', monthly: 'Monthly' },
  { feature: 'Licensing and usage rights', starter: 'Agreed before production', growth: 'Agreed before production', monthly: 'Agreed before production' },
];

const suitableFor = [
  { pkg: 'Starter', text: 'Brands starting with two AI-powered product video ads.' },
  { pkg: 'Growth', text: 'Brands looking for more product ad concepts and variations.' },
  { pkg: 'Monthly', text: 'Brands that want an ongoing monthly flow of video ad creatives.' },
];

export default function PricingPage() {
  const navigate = useNavigate();
  const selectPackage = (id: string) => navigate(`/contact?package=${id}`);

  return (
    <>
      <Seo />
      <Section className="!pt-12 md:!pt-16">
        <SectionHeading
          eyebrow="Pricing"
          title="Proposed starting packages for AI video ad creation."
          description="Indicative packages for AI UGC video ads and product advertisement videos. Final scope, licensing, production requirements and commercial usage rights are agreed before production."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <PricingCard key={p.id} pkg={p} onSelect={selectPackage} />
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-kirakart-muted">{pricingFootnote}</p>
      </Section>

      {/* Comparison table */}
      <Section className="bg-kirakart-white !pt-0">
        <SectionHeading eyebrow="Compare" title="What is in each package." />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-kirakart-border">
                <th className="py-4 font-grotesk text-xs font-medium uppercase tracking-wide text-kirakart-muted">Feature</th>
                <th className="py-4 font-grotesk text-sm font-semibold text-kirakart-ink">Starter</th>
                <th className="py-4 font-grotesk text-sm font-semibold text-kirakart-red">Growth</th>
                <th className="py-4 font-grotesk text-sm font-semibold text-kirakart-ink">Monthly</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-kirakart-border/60">
                  <td className="py-4 text-sm text-kirakart-ink/80">{row.feature}</td>
                  <td className="py-4 text-sm text-kirakart-muted">{row.starter}</td>
                  <td className="py-4 text-sm text-kirakart-ink">{row.growth}</td>
                  <td className="py-4 text-sm text-kirakart-muted">{row.monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Suitable for */}
      <Section className="!pt-0">
        <SectionHeading eyebrow="Who it suits" title="Which package fits you." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {suitableFor.map((s) => (
            <div key={s.pkg} className="border border-kirakart-border bg-kirakart-cream p-6">
              <h3 className="font-grotesk text-lg font-semibold text-kirakart-ink">{s.pkg}</h3>
              <p className="mt-3 text-sm leading-relaxed text-kirakart-muted">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Add-ons & usage */}
      <Section className="bg-kirakart-white !pt-0">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Add-ons" title="Optional production extras." />
            <ul className="mt-8 space-y-4">
              {packageAddOns.map((a) => (
                <li key={a.title} className="border-l-2 border-kirakart-red pl-4">
                  <p className="font-grotesk text-sm font-medium text-kirakart-ink">{a.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-kirakart-muted">{a.detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Usage Rights" title="How licensing works." />
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-kirakart-muted">
              <p>
                Commercial usage rights — including platforms, duration and territory — are defined
                in your quotation before paid production. There is no perpetual, unlimited licence by default.
              </p>
              <p>
                You can use the final videos within the agreed commercial usage terms. Additional
                licensing requirements are discussed as part of the scope.
              </p>
              <p>
                Each package has a defined production scope and revision allowance. Further work is
                agreed and quoted separately.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Pricing questions." />
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={faqs.slice(4, 10)} />
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Ready to choose your ad package?"
        description="Select a proposed package and we’ll confirm its scope, licensing and commercial usage rights with you."
        primaryLabel="Start a Project"
      />
      <div className="pb-20" />
    </>
  );
}
