import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/data/profile";
import { experience } from "@/data/experience";

export const metadata = createMetadata({
  title: "Experience",
  description:
    "Work history for Tushar Sharma: Shubcure Ayurveda, Santosh Fashion, Vishnu Murti Trust, Digiuprise, and freelance digital marketing. Durations only — dates were not supplied.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience"
        title="Roles and durations, without invented dates."
        description="Start and end dates were not supplied. This timeline is ordered as a professional record, not as a confirmed calendar sequence."
      />
      <section className="py-14 sm:py-16" aria-labelledby="timeline-heading">
        <Container>
          <h2 id="timeline-heading" className="sr-only">
            Work experience
          </h2>
          <ol className="relative space-y-6 border-l border-line pl-6">
            {experience.map((role) => (
              <li key={role.organization + role.role} className="relative">
                <span className="absolute top-6 -left-[1.65rem] h-3 w-3 rounded-full border-2 border-accent bg-canvas" aria-hidden="true" />
                <article className="rounded-3xl border border-line bg-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">{role.duration}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{role.role}</h3>
                  <p className="mt-1 text-sm text-ink">{role.organization}</p>
                  <p className="mt-3 text-sm leading-6 text-muted">{role.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {role.points.map((point) => (
                      <li key={point} className="text-sm leading-6 text-muted">
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm leading-6 text-muted">
            Related pages: <Link href="/case-studies/shubcure-ayurveda" className="text-accent">Shubcure Ayurveda</Link>
            {" · "}
            <Link href="/case-studies/vishnu-murti-trust" className="text-accent">Vishnu Murti Trust</Link>
            {" · "}
            <Link href="/skills" className="text-accent">Skills</Link>
          </p>
        </Container>
      </section>
    </>
  );
}
