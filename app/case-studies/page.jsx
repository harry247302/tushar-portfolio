import CaseStudyList from "@/components/case-studies/CaseStudyList";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ReportNote from "@/components/ui/ReportNote";
import { createMetadata } from "@/data/profile";

export const metadata = createMetadata({
  title: "Case Studies",
  description:
    "Case studies for Shubcure Ayurveda, Unix Ayurveda, Vishnu Murti Trust, and Brand On Top & Hisharder, with reported results only where they were supplied.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Projects, with the numbers that were actually supplied."
        description="Filter by the kind of work. Cards link to a full page. Where a screenshot exists, it is the original file."
      />
      <section className="py-14 sm:py-16" aria-labelledby="project-list">
        <Container>
          <h2 id="project-list" className="sr-only">
            Project list
          </h2>
          <ReportNote />
          <div className="mt-8">
            <CaseStudyList />
          </div>
        </Container>
      </section>
    </>
  );
}
