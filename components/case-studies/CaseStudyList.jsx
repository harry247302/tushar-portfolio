"use client";

import { useState } from "react";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { caseStudies, caseStudyFilters } from "@/data/caseStudies";

export default function CaseStudyList() {
  const [filter, setFilter] = useState("All");
  const visible = caseStudies.filter((study) => filter === "All" || study.filter === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter case studies">
        {caseStudyFilters.map((item) => {
          const selected = filter === item;
          const count =
            item === "All" ? caseStudies.length : caseStudies.filter((study) => study.filter === item).length;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item)}
              className={`min-h-11 rounded-full border px-4 text-sm ${
                selected ? "border-accent bg-accent text-canvas" : "border-line text-ink hover:border-accent/40"
              }`}
            >
              {item}
              <span className="sr-only">, {count} projects</span>
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {visible.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </div>
  );
}
