import ServicesGrid from "@/components/services/ServicesGrid";
import ContactCta from "@/components/home/ContactCta";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/data/profile";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Meta ads, lead generation, ROAS optimization, creative testing, tracking, WordPress, SEO, and social media. Deliverables and objectives, without guaranteed results.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Eight ways to tighten acquisition."
        description="Each service has a job, a set of deliverables, and a business objective. Past ROAS and revenue on this site are reported results, not a guarantee of the next account."
      />
      <section className="py-4" aria-label="Service details">
        <Container>
          <ServicesGrid detailed />
        </Container>
      </section>
      <ContactCta
        title="Tell me which of these is actually the constraint."
        text="A short note on the offer, the current budget, and the metric you trust is enough to start."
      />
    </>
  );
}
