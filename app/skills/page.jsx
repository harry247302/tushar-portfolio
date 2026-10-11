import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/data/profile";
import { skillGroups } from "@/data/skills";

export const metadata = createMetadata({
  title: "Skills",
  description:
    "Tushar Sharma’s skills across Meta and Google Ads, performance marketing, tracking, WordPress, SEO, social, video, and spreadsheets.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <>
      <PageHero
        eyebrow="Skills"
        title="The toolkit behind the campaigns and the sites."
        description="Grouped by how the work actually splits. These are capabilities, not scored proficiency bars."
      />
      <section className="py-14 sm:py-16" aria-label="Skill groups">
        <Container className="grid gap-6">
          {skillGroups.map((group) => {
            const headingId = group.title.toLowerCase().replaceAll(" ", "-");
            return (
            <section key={group.title} aria-labelledby={headingId} className="rounded-3xl border border-line bg-card p-6 sm:p-8">
              <h2 id={headingId} className="font-display text-2xl font-semibold">
                {group.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{group.intro}</p>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item.name} className="rounded-2xl border border-line bg-surface p-4">
                    <h3 className="text-sm font-semibold text-ink">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </section>
            );
          })}
        </Container>
      </section>
    </>
  );
}
