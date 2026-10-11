import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { campaignShots } from "@/data/campaigns";

export default function CaseStudyCard({ study, heading = "h2" }) {
  const Title = heading;
  const image = campaignShots.find((shot) => shot.slug === study.slug);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card">
      {image ? (
        <div className="bg-[#0c111b] p-3">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-auto w-full object-contain"
          />
        </div>
      ) : (
        <div className="flex min-h-36 flex-col justify-between border-b border-line bg-surface px-5 py-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">{study.industry}</p>
          {study.cardResults[0] ? (
            <p className="mt-4 font-display text-3xl font-semibold text-accent">{study.cardResults[0].value}</p>
          ) : (
            <p className="mt-4 text-sm leading-6 text-muted">Scope is documented without estimated performance totals.</p>
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <Title className="font-display text-xl font-semibold tracking-tight">{study.name}</Title>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-cyan">{study.industry}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{study.summary}</p>
        {study.cardResults.length ? (
          <ul className="mt-4 space-y-2">
            {study.cardResults.map((result) => (
              <li key={result.value + result.label} className="text-xs leading-5 text-muted">
                <span className="font-semibold text-ink">
                  {result.value} {result.label}.
                </span>{" "}
                {result.period}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-xs leading-5 text-muted">No performance totals were supplied for this project.</p>
        )}
        <Link
          href={`/case-studies/${study.slug}`}
          className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent"
        >
          View case study
          <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </article>
  );
}
