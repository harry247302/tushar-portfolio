import Link from "next/link";
import Container from "@/components/ui/Container";
import MetricCard from "@/components/ui/MetricCard";
import PageHero from "@/components/ui/PageHero";
import ReportNote from "@/components/ui/ReportNote";
import CampaignGallery from "@/components/case-studies/CampaignGallery";
import ContactCta from "@/components/home/ContactCta";
import { campaignShots } from "@/data/campaigns";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudyArticle({ study }) {
  const images = campaignShots.filter((shot) => shot.slug === study.slug);
  const related = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow={study.industry} title={study.name} description={study.overview}>
        <ul className="flex flex-wrap gap-2">
          {study.services.map((item) => (
            <li key={item} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
              {item}
            </li>
          ))}
        </ul>
      </PageHero>

      {study.results.length ? (
        <section className="py-16" aria-labelledby="results-dashboard">
          <Container>
            <h2 id="results-dashboard" className="font-display text-3xl font-semibold tracking-tight">
              Results dashboard
            </h2>
            <div className="mt-3">
              <ReportNote />
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {study.results.map((metric) => (
                <MetricCard key={metric.value + metric.label} value={metric.value} label={metric.label} period={metric.period} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {study.sections.map((section, index) => (
        <section key={section.title} className="border-t border-line py-12" aria-labelledby={`${study.slug}-${index}`}>
          <Container className="grid gap-6 lg:grid-cols-12">
            <p className="font-display text-sm text-accent lg:col-span-3">{String(index + 1).padStart(2, "0")}</p>
            <div className="lg:col-span-8">
              <h2 id={`${study.slug}-${index}`} className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-7 text-muted">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Container>
        </section>
      ))}

      {study.lessons.length ? (
        <section className="border-t border-line py-16" aria-labelledby="lessons-heading">
          <Container>
            <h2 id="lessons-heading" className="font-display text-3xl font-semibold tracking-tight">
              Lessons learned
            </h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-2">
              {study.lessons.map((lesson, index) => (
                <li key={lesson} className="rounded-2xl border border-line bg-card p-5">
                  <p className="text-xs font-semibold tracking-[0.16em] text-cyan">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-3 text-sm leading-6 text-ink">{lesson}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>
      ) : null}

      {images.length ? (
        <section className="border-t border-line py-16" aria-labelledby="gallery-heading">
          <Container>
            <h2 id="gallery-heading" className="font-display text-3xl font-semibold tracking-tight">
              Campaign screenshots
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              Original aspect ratios are preserved. Open a screenshot to view it larger.
            </p>
            <div className="mt-8">
              <CampaignGallery images={images} title={`${study.name} screenshots`} />
            </div>
          </Container>
        </section>
      ) : null}

      <section className="border-t border-line py-12" aria-labelledby="related-heading">
        <Container>
          <h2 id="related-heading" className="font-display text-2xl font-semibold">
            Other projects
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/case-studies/${item.slug}`}
                  className="block rounded-2xl border border-line px-4 py-4 text-sm font-semibold hover:border-accent/40"
                >
                  {item.name}
                  <span className="mt-1 block text-xs font-medium text-muted">{item.industry}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactCta
        title={`Talk through a project with the same kind of brief as ${study.name}.`}
        text="Bring the current offer and the metric you want to watch. Reported results on this page are not a forecast."
      />
    </>
  );
}
