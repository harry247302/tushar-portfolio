import CampaignGallery from "@/components/case-studies/CampaignGallery";
import ReportingCharts from "@/components/results/ReportingCharts";
import Container from "@/components/ui/Container";
import MetricCard from "@/components/ui/MetricCard";
import PageHero from "@/components/ui/PageHero";
import { campaignShots } from "@/data/campaigns";
import { createMetadata } from "@/data/profile";
import { resultGroups } from "@/data/results";

export const metadata = createMetadata({
  title: "Campaign Results",
  description:
    "Reported campaign figures for Shubcure Ayurveda and Unix Ayurveda, separated by reporting period, plus a gallery for original Ads Manager screenshots.",
  path: "/results",
});

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Campaign results"
        title="Reported figures, kept in the window they came from."
        description="August spend is not mixed with the monthly revenue range. Unix ROAS is not mixed with Shubcure. Impressions stay unlabeled by month because the source did not name one."
      />
      <section className="py-14 sm:py-16" aria-labelledby="kpi-groups">
        <Container className="space-y-12">
          <h2 id="kpi-groups" className="sr-only">
            KPI groups
          </h2>
          {resultGroups.map((group) => (
            <section key={group.id} aria-labelledby={group.id} className="rounded-3xl border border-line bg-surface p-5 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">{group.eyebrow}</p>
              <h3 id={group.id} className="mt-3 font-display text-2xl font-semibold tracking-tight">
                {group.title}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">{group.note}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {group.metrics.map((metric) => (
                  <MetricCard key={metric.value + metric.label} value={metric.value} label={metric.label} period={metric.period} />
                ))}
              </div>
            </section>
          ))}
        </Container>
      </section>

      <section className="border-t border-line py-14 sm:py-16" aria-labelledby="charts-heading">
        <Container>
          <h2 id="charts-heading" className="font-display text-3xl font-semibold tracking-tight">
            Ranges you can switch between
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
            These charts use only the supplied ranges and the reported 52% delivery rate. They are not a reconstruction
            of an Ads Manager export.
          </p>
          <div className="mt-8">
            <ReportingCharts />
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-14 sm:py-16" aria-labelledby="gallery-heading">
        <Container>
          <h2 id="gallery-heading" className="font-display text-3xl font-semibold tracking-tight">
            Campaign performance gallery
          </h2>
          {campaignShots.length ? (
            <>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                Original screenshots, original aspect ratio. Open one to enlarge it. Captions name the reporting context.
              </p>
              <div className="mt-8">
                <CampaignGallery images={campaignShots} title="Campaign screenshots" />
              </div>
            </>
          ) : (
            <p className="mt-4 max-w-2xl text-sm leading-6 text-muted">
              No Meta Ads Manager image files were in the project folder, so none are shown. The figures above are the
              reported results supplied for this portfolio. To add a screenshot, place the file in{" "}
              <code className="text-ink">public/images/campaigns</code> and register it in{" "}
              <code className="text-ink">data/campaigns.js</code> with its real width, height, and caption.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
