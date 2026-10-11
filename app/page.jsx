import HomeHero from "@/components/home/HomeHero";
import MetricsStrip from "@/components/home/MetricsStrip";
import PerformanceDashboard from "@/components/home/PerformanceDashboard";
import HomeIntro from "@/components/home/HomeIntro";
import FeaturedCaseStudy from "@/components/home/FeaturedCaseStudy";
import SelectedProjects from "@/components/home/SelectedProjects";
import ResultsPreview from "@/components/home/ResultsPreview";
import ContactCta from "@/components/home/ContactCta";
import ServicesGrid from "@/components/services/ServicesGrid";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { createMetadata } from "@/data/profile";

export const metadata = createMetadata({
  title: "Tushar Sharma — Performance Marketing Expert & Meta Ads Specialist",
  description:
    "Portfolio of Tushar Sharma, a Delhi performance marketer. Reported results include Shubcure revenue, August leads, ROAS, and impressions, each labeled with its period.",
  path: "/",
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <MetricsStrip />
      <section className="py-16 sm:py-20" aria-labelledby="dashboard-heading">
        <Container>
          <SectionHeading
            id="dashboard-heading"
            eyebrow="Reporting"
            title="The same numbers, with the period still attached."
            description="Use this table when you need the label, not only the headline figure."
          />
          <div className="mt-8">
            <PerformanceDashboard />
          </div>
        </Container>
      </section>
      <HomeIntro />
      <section className="border-t border-line py-16 sm:py-20" aria-labelledby="services-heading">
        <Container>
          <SectionHeading
            id="services-heading"
            eyebrow="Services"
            title="From the ad account to the page it lands on."
            description="Four of the eight services. The services page covers deliverables and objectives for each."
          />
          <div className="mt-8">
            <ServicesGrid limit={4} />
          </div>
        </Container>
      </section>
      <FeaturedCaseStudy />
      <SelectedProjects />
      <ResultsPreview />
      <ContactCta />
    </>
  );
}
