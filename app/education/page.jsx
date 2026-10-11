import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { education } from "@/data/education";
import { createMetadata } from "@/data/profile";

export const metadata = createMetadata({
  title: "Education",
  description:
    "Education record for Tushar Sharma: B.Com at the University of Delhi (pursuing), Digiuprise, a 2023 IT diploma, and an advanced English course.",
  path: "/education",
});

export default function EducationPage() {
  return (
    <>
      <PageHero
        eyebrow="Education"
        title="Study record, with only the dates that were supplied."
        description="The commerce degree is in progress. The information technology diploma is marked 2023. Other items do not get a year they did not come with."
      />
      <section className="py-14 sm:py-16" aria-labelledby="education-list">
        <Container>
          <h2 id="education-list" className="sr-only">
            Credentials
          </h2>
          <ol className="grid gap-4">
            {education.map((item) => (
              <li key={item.title}>
                <article className="grid gap-4 rounded-3xl border border-line bg-card p-6 sm:grid-cols-[8rem_1fr] sm:items-start">
                  <p className="font-display text-lg font-semibold text-accent">{item.status}</p>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink">{item.organization}</p>
                    <p className="mt-3 text-sm leading-6 text-muted">{item.note}</p>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
