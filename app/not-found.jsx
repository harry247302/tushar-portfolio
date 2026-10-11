import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container>
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">404</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">That page is not on this site.</h1>
        <p className="mt-4 max-w-lg text-base leading-7 text-muted">
          The link may be out of date. Case studies, results, and contact are all linked from the home page.
        </p>
        <div className="mt-8">
          <Button href="/">Back home</Button>
        </div>
      </Container>
    </section>
  );
}
