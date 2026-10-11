import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MetricCard from "@/components/ui/MetricCard";
import { getCaseStudy } from "@/data/caseStudies";

export default function FeaturedCaseStudy() {
  const study = getCaseStudy("shubcure-ayurveda");

  return (
    <section className="border-y border-line bg-surface py-16 sm:py-20" aria-labelledby="featured-heading">
      <Container>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">Featured case study</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 id="featured-heading" className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              {study.name}
            </h2>
            <p className="mt-2 text-sm text-cyan">{study.industry}</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted">{study.summary}</p>
            <Link
              href={`/case-studies/${study.slug}`}
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent"
            >
              View case study
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
          <p className="text-sm leading-6 text-muted lg:col-span-5">
            The cards are a sample, not one dashboard. August leads are not the same reporting window as the monthly
            revenue range.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {study.cardResults.map((metric) => (
            <MetricCard key={metric.value} value={metric.value} label={metric.label} period={metric.period} />
          ))}
        </div>
      </Container>
    </section>
  );
}
