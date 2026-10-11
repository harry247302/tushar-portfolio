import Container from "@/components/ui/Container";

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative py-16 sm:py-20">
        {eyebrow ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          {title}
        </h1>
        {description ? <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}
