import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Film, Clapperboard } from 'lucide-react';
import Seo from '@/components/Seo';
import Button from '@/components/Button';
import { Section, SectionHeading } from '@/components/SectionHeading';
import PortfolioGrid from '@/components/PortfolioGrid';
import ServiceCard from '@/components/ServiceCard';
import PricingCard from '@/components/PricingCard';
import FAQAccordion from '@/components/FAQAccordion';
import CtaBanner from '@/components/CtaBanner';
import { services } from '@/data/services';
import { packages, pricingFootnote } from '@/data/pricing';
import { faqs } from '@/data/faq';
import { useNavigate } from 'react-router-dom';

const heroImages = [
  {
    src: 'https://images.pexels.com/photos/6167865/pexels-photo-6167865.jpeg?auto=compress&cs=tinysrgb&h=750&w=500',
    alt: 'Skincare bottle on marble',
    span: 'row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/9513108/pexels-photo-9513108.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Snack pack product shot',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/30466066/pexels-photo-30466066.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    alt: 'Fashion handbags',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/8101534/pexels-photo-8101534.jpeg?auto=compress&cs=tinysrgb&h=750&w=500',
    alt: 'Serum dropper texture',
    span: 'row-span-2',
  },
];

const creativeConcepts = [
  {
    icon: Sparkles,
    label: 'The Hook',
    title: 'Earn attention',
    text: 'A strong opening that stops the scroll in the first three seconds — without shouting.',
  },
  {
    icon: Film,
    label: 'The Story',
    title: 'Show the product in context',
    text: 'Build a UGC-inspired product story around relatable routines and product details.',
  },
  {
    icon: Clapperboard,
    label: 'The Creative',
    title: 'Deliver usable ad assets',
    text: 'Create polished, short-form ad assets tailored for social channels and e-commerce.',
  },
];

const processSteps = [
  { number: '01', title: 'Discover Your Product', text: 'We identify interesting brands and products.' },
  { number: '02', title: 'Create Your Ad Concept', text: 'We produce a customised AI-powered UGC-style ad sample.' },
  { number: '03', title: 'Share the Idea', text: 'We send the concept to your brand team.' },
  { number: '04', title: 'Produce Paid Ads', text: 'Once approved, we agree on scope, payment and delivery for additional ad creatives.' },
];

const principles = [
  'Product-first thinking',
  'Clear deliverables',
  'AI-powered creative concepts',
  'Product-first video formats',
  'A straightforward approval process',
  'Flexible packages',
];

const industries = [
  { title: 'Beauty & Skincare', image: 'https://images.pexels.com/photos/8709584/pexels-photo-8709584.jpeg?auto=compress&cs=tinysrgb&h=600&w=400', text: 'Serums, routines and texture studies that show the product in use.' },
  { title: 'Food & Beverages', image: 'https://images.pexels.com/photos/25402112/pexels-photo-25402112.jpeg?auto=compress&cs=tinysrgb&h=600&w=400', text: 'Pour, pack and appetite-appeal spots paced for a fast swipe.' },
  { title: 'Fashion & Accessories', image: 'https://images.pexels.com/photos/30466066/pexels-photo-30466066.jpeg?auto=compress&cs=tinysrgb&h=600&w=400', text: 'Styling cuts and mirror looks that show versatility in seconds.' },
  { title: 'Lifestyle & Consumer', image: 'https://images.pexels.com/photos/7364096/pexels-photo-7364096.jpeg?auto=compress&cs=tinysrgb&h=600&w=400', text: 'In-context product videos that feel like a daily choice.' },
];

export default function HomePage() {
  const navigate = useNavigate();

  const selectPackage = (id: string) => navigate(`/contact?package=${id}`);

  return (
    <>
      <Seo />

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 md:pt-20">
        <div className="container-editorial">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-5 animate-[fade-up_0.5s_ease-out]">
                AI UGC Ads / Video Ad Creation
              </p>
              <h1 className="font-grotesk text-4xl font-bold leading-[1.05] tracking-tightest text-kirakart-ink animate-[fade-up_0.6s_ease-out] sm:text-5xl md:text-6xl lg:text-[4rem]">
                Your Product. Our AI. Your Next Ad.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-kirakart-muted animate-[fade-up_0.7s_ease-out] sm:text-lg">
                We create AI-powered UGC-style video ads tailored to your products, helping growing
                brands turn product stories into engaging social media creatives.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center animate-[fade-up_0.8s_ease-out]">
                <Button to="/work" variant="primary">See Our Ad Samples</Button>
                <Button to="/contact" variant="secondary">Get an Ad for Your Brand</Button>
              </div>
              <p className="mt-6 font-grotesk text-xs font-medium uppercase tracking-editorial text-kirakart-muted animate-[fade-up_0.9s_ease-out]">
                Product · AI Concept · Video Ad · Creative
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {heroImages.map((img, i) => (
                  <div
                    key={img.src}
                    className={`relative overflow-hidden rounded-lg bg-kirakart-border/30 ${img.span} animate-[fade-up_0.8s_ease-out]`}
                    style={{ animationDelay: `${0.1 * i + 0.3}s` }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="eager"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-kirakart-ink/10 to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Ad Samples */}
      <Section className="!pt-24 md:!pt-32">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="AI Ad Samples"
            title="Product-specific concepts, made to show what’s possible."
            description="Explore product-specific ad concepts created with AI to show brands what's possible."
            className="!max-w-xl"
          />
          <Link
            to="/work"
            className="inline-flex items-center gap-1 font-grotesk text-sm font-medium text-kirakart-ink transition-colors hover:text-kirakart-red link-underline"
          >
            Explore All Ad Samples
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12">
          <PortfolioGrid limit={6} />
        </div>
      </Section>

      {/* Creative Opportunity */}
      <Section className="bg-kirakart-white">
        <SectionHeading
          eyebrow="The Creative Opportunity"
          title="Show your product in a fresh way."
          description="AI-powered video ad creation brings together a product-first concept, engaging visuals and a clear story for social media."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {creativeConcepts.map((c) => (
            <div key={c.label} className="border border-kirakart-border p-7 transition-colors duration-300 hover:border-kirakart-ink/30">
              <c.icon className="h-7 w-7 text-kirakart-red" />
              <p className="eyebrow mt-5">{c.label}</p>
              <h3 className="mt-2 font-grotesk text-xl font-semibold tracking-tight text-kirakart-ink">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-kirakart-muted">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Services" title="What we make." />
          <Link to="/services" className="inline-flex items-center gap-1 font-grotesk text-sm font-medium text-kirakart-ink hover:text-kirakart-red link-underline">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-kirakart-white">
        <SectionHeading
          eyebrow="Process"
          title="From product discovery to paid ad production."
        />
        <div className="mt-14 grid gap-0 border-t border-kirakart-border md:grid-cols-4">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col gap-3 border-b border-kirakart-border py-8 md:px-6 ${
                i !== processSteps.length - 1 ? 'md:border-r md:border-kirakart-border' : ''
              }`}
            >
              <span className="font-grotesk text-3xl font-bold tracking-tightest text-kirakart-red">
                {step.number}
              </span>
              <h3 className="font-grotesk text-base font-semibold text-kirakart-ink">{step.title}</h3>
              <p className="text-sm leading-relaxed text-kirakart-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Kirakart Ads */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why Kirakart Ads"
              title="AI-powered ad concepts, built around your product."
              description="We identify interesting products, create tailored UGC-style ad concepts with AI, and share the idea directly with your brand team."
            />
            <Button to="/about" variant="ghost" className="mt-8">Read our approach</Button>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-4 sm:grid-cols-2">
              {principles.map((p) => (
                <li key={p} className="flex items-center gap-3 border border-kirakart-border bg-kirakart-cream px-5 py-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-kirakart-red" />
                  <span className="font-grotesk text-sm font-medium text-kirakart-ink">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Industries */}
      <Section className="bg-kirakart-white">
        <SectionHeading eyebrow="Product Categories" title="Product stories across categories." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <div key={ind.title} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-kirakart-border/30">
                <img
                  src={ind.image}
                  alt={ind.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-grotesk text-base font-semibold text-kirakart-ink">{ind.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-kirakart-muted">{ind.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section>
        <SectionHeading
          eyebrow="Pricing"
          title="Proposed packages for AI video ad creation."
          description="Indicative starting packages for product ad videos. Final scope, licensing and commercial usage rights are agreed before production."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <PricingCard key={p.id} pkg={p} onSelect={selectPackage} />
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-kirakart-muted">{pricingFootnote}</p>
      </Section>

      {/* FAQ */}
      <Section className="bg-kirakart-white">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Straight answers." />
            <Button to="/contact" variant="primary" className="mt-8">Ask a question</Button>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Get an AI-powered ad for your brand."
        description="Tell us about your product and we’ll discuss a tailored ad concept and production scope."
        primaryLabel="Get an Ad for Your Brand"
      />

      <div className="pb-20" />
    </>
  );
}
