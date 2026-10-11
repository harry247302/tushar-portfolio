import Link from "next/link";
import {
  ChartColumn,
  FlaskConical,
  LineChart,
  Megaphone,
  PanelsTopLeft,
  Search,
  Share2,
  Target,
} from "lucide-react";
import { services } from "@/data/services";

const icons = {
  "meta-ads-management": Megaphone,
  "lead-generation": Target,
  "performance-roas": LineChart,
  "creative-testing": FlaskConical,
  "analytics-tracking": ChartColumn,
  wordpress: PanelsTopLeft,
  "seo-landing-pages": Search,
  "social-media": Share2,
};

export default function ServicesGrid({ detailed = false, limit }) {
  const items = typeof limit === "number" ? services.slice(0, limit) : services;

  if (!detailed) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((service, index) => {
          const Icon = icons[service.slug];
          return (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="rounded-2xl border border-line bg-card p-5 transition duration-200 hover:border-accent/40"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold tracking-[0.16em] text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon aria-hidden="true" size={18} className="text-accent" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{service.summary}</p>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className="divide-y divide-white/10 border-y border-line">
      {items.map((service, index) => {
        const Icon = icons[service.slug];
        return (
          <article key={service.slug} id={service.slug} className="scroll-mt-28 grid gap-6 py-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 text-cyan">
                <Icon aria-hidden="true" size={18} />
                <p className="text-xs font-semibold tracking-[0.16em]">{String(index + 1).padStart(2, "0")}</p>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{service.title}</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base leading-7 text-muted">{service.description}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-card p-5">
                  <h3 className="text-sm font-semibold text-ink">Typical deliverables</h3>
                  <ul className="mt-3 space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="text-sm leading-6 text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-line bg-surface p-5">
                  <h3 className="text-sm font-semibold text-ink">Business objective</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{service.objective}</p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
