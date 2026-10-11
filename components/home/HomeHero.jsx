import { ArrowRight, FileText } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { reported } from "@/data/results";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative grid items-end gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:py-24">
        <div className="enter lg:col-span-7">
          <p className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{profile.name}</p>
          <p className="mt-2 text-base font-medium text-cyan sm:text-lg">{profile.role}</p>
          <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl lg:leading-[1.05]">
            Turning Ad Spend Into{" "}
            <span className="text-accent">Measurable Business Growth.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">{profile.support}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/case-studies">
              View case studies
              <ArrowRight aria-hidden="true" size={16} />
            </Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
            <Button href={profile.resume} variant="secondary" target="_blank" rel="noopener noreferrer">
              <FileText aria-hidden="true" size={16} />
              Resume
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-line bg-card/90 p-5 shadow-[0_0_40px_rgba(163,255,111,0.05)] sm:p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">Two separate proof points</p>
            <p className="mt-4 font-display text-4xl font-semibold text-accent">{reported.augustLeads.value}</p>
            <p className="mt-1 text-sm font-medium text-ink">Leads</p>
            <p className="mt-1 text-xs leading-5 text-muted">{reported.augustLeads.period}</p>
            <div className="my-5 h-px bg-white/10" />
            <p className="font-display text-4xl font-semibold text-ink">{reported.roasRange.value}</p>
            <p className="mt-1 text-sm font-medium text-ink">ROAS</p>
            <p className="mt-1 text-xs leading-5 text-muted">{reported.roasRange.period}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
