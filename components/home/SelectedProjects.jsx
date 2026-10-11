import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export default function SelectedProjects() {
  const projects = caseStudies.filter((study) => !study.featured);

  return (
    <section className="py-16 sm:py-20" aria-labelledby="projects-heading">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            id="projects-heading"
            eyebrow="Selected projects"
            title="Web, ads, and nonprofit work."
            description="Three further engagements. Full write-ups live on their own pages."
          />
          <Link href="/case-studies" className="inline-flex min-h-11 items-center text-sm font-semibold text-accent">
            All case studies
          </Link>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((study) => (
            <CaseStudyCard key={study.slug} study={study} heading="h3" />
          ))}
        </div>
      </Container>
    </section>
  );
}
