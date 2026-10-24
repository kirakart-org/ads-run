import { Check } from 'lucide-react';
import Seo from '@/components/Seo';
import { Section, SectionHeading } from '@/components/SectionHeading';
import Button from '@/components/Button';
import CtaBanner from '@/components/CtaBanner';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <>
      <Seo />
      <Section className="!pt-12 md:!pt-16">
        <SectionHeading
          eyebrow="Services"
          title="Services built around your product story."
          description="We produce video — we do not manage paid media, run influencer posting campaigns, or guarantee advertising performance. Everything below is creative production, scoped and quoted before we start."
        />
      </Section>

      <Section className="!pt-0">
        <div className="space-y-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="grid gap-8 border border-kirakart-border bg-kirakart-cream p-6 sm:p-8 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-4">
                <div className="relative aspect-[3/2] overflow-hidden bg-kirakart-border/30">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-grotesk text-2xl font-bold tracking-tight text-kirakart-ink sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-kirakart-muted sm:text-base">
                  {s.description}
                </p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="eyebrow mb-2">Who it suits</p>
                    <p className="text-sm leading-relaxed text-kirakart-ink/80">{s.suits}</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Typical deliverables</p>
                    <ul className="space-y-2">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-kirakart-ink/80">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-kirakart-red" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button to="/contact" variant="outline" className="!py-2.5 !px-5 text-xs">
                    Enquire about {s.title}
                  </Button>
                  <Button to="/work" variant="ghost" className="!py-2.5 text-xs">
                    See related work
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-2xl border border-kirakart-border bg-kirakart-white p-8 sm:p-12">
          <h2 className="font-grotesk text-2xl font-bold tracking-tight text-kirakart-ink">
            What we don&rsquo;t do
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-kirakart-muted sm:text-base">
            We produce video creative only. We are not a media buying agency, an influencer
            marketplace, a SaaS dashboard, or an AI generation tool. We do not guarantee sales,
            ROAS, virality or advertising performance — those depend on your audience, targeting and
            budget. Anything outside the agreed scope is quoted separately.
          </p>
        </div>
      </Section>

      <CtaBanner
        title="Tell us what you're building."
        description="Pick a service above or send a general brief — we will scope it and come back with a quote."
      />
      <div className="pb-20" />
    </>
  );
}
