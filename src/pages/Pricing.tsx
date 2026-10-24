import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import Seo from '@/components/Seo';
import { Section, SectionHeading } from '@/components/SectionHeading';
import PricingCard from '@/components/PricingCard';
import FAQAccordion from '@/components/FaqAccordion';
import CtaBanner from '@/components/CtaBanner';
import { packages, packageAddOns, pricingFootnote } from '@/data/pricing';
import { faqs } from '@/data/faq';

const comparisonRows = [
  { feature: 'Short-form videos', starter: '2', growth: '5', monthly: '8 / month' },
  { feature: 'Concept & scripting', starter: 'Basic', growth: 'Yes', monthly: 'Yes' },
  { feature: 'Editing & captions', starter: 'Yes', growth: 'Yes', monthly: 'Yes' },
  { feature: 'Hook variations', starter: '—', growth: 'Selected', monthly: 'Selected' },
  { feature: 'Monthly creative planning', starter: '—', growth: '—', monthly: 'Yes' },
  { feature: 'Revisions', starter: '1 per video', growth: 'Agreed', monthly: 'Agreed' },
  { feature: 'Delivery schedule', starter: 'Per project', growth: 'Per project', monthly: 'Monthly' },
];

const suitableFor = [
  { pkg: 'Starter', text: 'Brands testing UGC video for the first time with a single product.' },
  { pkg: 'Growth', text: 'Brands running paid social who need several creatives to test.' },
  { pkg: 'Monthly', text: 'Growing brands refreshing paid creative every few weeks.' },
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
          title="Pricing that scales with your creative needs."
          description="Proposed introductory prices. Every package is scoped and quoted before production, so the final price reflects your actual requirements."
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
                Usage rights — platforms, duration and territory — are defined in your quotation
                before production. There is no perpetual, unlimited licence by default.
              </p>
              <p>
                You can use the final videos in paid advertising within the agreed usage terms.
                Extended usage rights are available as an add-on.
              </p>
              <p>
                We do not offer unlimited revisions. Each package includes an agreed number of
                revision rounds; further rounds are quoted as add-ons.
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
        title="Ready to pick a package?"
        description="Choose a package above and we will scope it to your product before production."
        primaryLabel="Start a Project"
      />
      <div className="pb-20" />
    </>
  );
}
