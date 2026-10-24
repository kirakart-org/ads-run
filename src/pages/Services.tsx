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
          title="AI-powered video ad creation for your products."
          description="Choose AI UGC-style video ads, product advertisement videos, creative variations or a custom package. Production may combine AI-generated visuals, voiceovers, editing, your product assets and human creators when appropriate."
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
                    Start Your Project
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

      <CtaBanner
        title="Get an AI-powered ad for your brand."
        description="Share your product and we’ll discuss the right creative scope, licensing and delivery."
        primaryLabel="Get an Ad for Your Brand"
      />
      <div className="pb-20" />
    </>
  );
}
