import Container from "@/components/ui/Container";
import MetricCard from "@/components/ui/MetricCard";
import ReportNote from "@/components/ui/ReportNote";
import { headlineMetrics } from "@/data/results";

export default function MetricsStrip() {
  return (
    <section className="border-b border-line py-14 sm:py-16" aria-labelledby="headline-metrics">
      <Container>
        <h2 id="headline-metrics" className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Reported results
        </h2>
        <div className="mt-3">
          <ReportNote />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {headlineMetrics.map((metric) => (
            <MetricCard key={metric.label + metric.value} value={metric.value} label={metric.label} period={metric.period} />
          ))}
        </div>
      </Container>
    </section>
  );
}
