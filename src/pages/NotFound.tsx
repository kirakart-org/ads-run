import Seo from '@/components/Seo';
import Button from '@/components/Button';
import { Section, SectionHeading } from '@/components/SectionHeading';

export default function NotFoundPage() {
  return (
    <>
      <Seo path="/404" />
      <Section className="text-center">
        <SectionHeading
          eyebrow="404"
          title="We couldn’t find that page."
          description="The page may have moved or the link may be out of date. Head back home to keep exploring."
          align="center"
        />
        <Button to="/" variant="primary" className="mt-8">
          Back to home
        </Button>
      </Section>
    </>
  );
}
