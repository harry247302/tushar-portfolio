import Link from "next/link";
import Container from "@/components/ui/Container";
import MetricCard from "@/components/ui/MetricCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { reported } from "@/data/results";

const preview = [reported.augustSpend, reported.momGrowth, reported.orders, reported.unixRoas];

export default function ResultsPreview() {
  return (
    <section className="border-t border-line py-16 sm:py-20" aria-labelledby="results-preview-heading">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            id="results-preview-heading"
            eyebrow="Campaign results"
            title="A preview, still split by period."
            description="The results page keeps August spend, month-over-month growth, orders, and the Unix ROAS in separate groups."
          />
          <Link href="/results" className="inline-flex min-h-11 items-center text-sm font-semibold text-accent">
            Open the report
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {preview.map((metric) => (
            <MetricCard key={metric.value + metric.label} value={metric.value} label={metric.label} period={metric.period} />
          ))}
        </div>
      </Container>
    </section>
  );
}
