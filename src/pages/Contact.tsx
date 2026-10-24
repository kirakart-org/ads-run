import { Mail } from 'lucide-react';
import Seo from '@/components/Seo';
import ContactForm from '@/components/ContactForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Section, SectionHeading } from '@/components/SectionHeading';
import { site } from '@/data/business';

export default function ContactPage() {
  return (
    <>
      <Seo />
      <Section className="!pt-12 md:!pt-16">
        <SectionHeading
          eyebrow="Contact"
          title="Get an AI-powered ad for your brand."
          description="Share your product details and desired video scope. We’ll follow up to discuss the concept, production requirements and usage rights."
        />
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="lg:col-span-5">
            <div className="border border-kirakart-border bg-kirakart-white p-7">
              <Mail className="h-6 w-6 text-kirakart-red" />
              <h2 className="mt-4 font-grotesk text-lg font-semibold text-kirakart-ink">
                Prefer email?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-kirakart-muted">
                You can reach us directly and tell us about your project.
              </p>
              <a
                href={`mailto:${site.contact.email}`}
                className="mt-4 inline-block text-sm font-medium text-kirakart-red link-underline"
              >
                {site.contact.email}
              </a>
              <div className="mt-6 border-t border-kirakart-border pt-6">
                <p className="text-sm leading-relaxed text-kirakart-muted">
                  Prefer WhatsApp? Message us about your product and ad requirements.
                </p>
                <WhatsAppButton label="Chat on WhatsApp" className="mt-4" />
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
