import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function ContactCta({
  title = "If the next quarter needs a clearer media plan, start there.",
  text = "Share the offer, the budget range, and the result you want to measure. I will reply by email.",
}) {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="contact-cta-heading">
      <Container>
        <div className="rounded-3xl border border-line bg-card px-6 py-10 sm:px-10 sm:py-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">Contact</p>
          <h2 id="contact-cta-heading" className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">{text}</p>
          <div className="mt-8">
            <Button href="/contact">
              Contact Tushar
              <ArrowRight aria-hidden="true" size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
