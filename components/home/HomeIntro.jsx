import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HomeIntro() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="intro-heading">
      <Container className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <SectionHeading
            id="intro-heading"
            eyebrow="About"
            title="Media buying tied to what the business actually keeps."
            description="I work with brands that need leads, cleaner tracking, and a reason to raise or cut the budget."
          />
        </div>
        <div className="space-y-4 text-base leading-7 text-muted lg:col-span-7">
          <p>
            The work is Meta ads, creative testing, and the measurement around them: Pixel, Conversions API, GA4, Tag
            Manager, and a spreadsheet that shows spend next to revenue and delivery.
          </p>
          <p>
            Where a project also needs the page itself, I build on WordPress and tighten the landing experience and
            search structure. Results on this site are reported outcomes from named periods, not a promise of the next
            account.
          </p>
          <Link href="/about" className="inline-flex min-h-11 items-center text-sm font-semibold text-accent">
            Read the approach
          </Link>
        </div>
      </Container>
    </section>
  );
}
