import Link from "next/link";
import Container from "@/components/ui/Container";
import ContactCta from "@/components/home/ContactCta";

const principles = [
  {
    title: "Marketing philosophy",
    text: "A campaign is a commercial instrument. Attention is useful when it produces a lead, an order, or a donation the organization can recognize. Vanity reach is not the goal.",
  },
  {
    title: "Data-driven approach",
    text: "Decisions use CPL, CPC, CPM, CTR, and ROAS, then get checked against revenue and delivery. If the business number and the ad platform disagree, the tracking is reviewed before the budget moves.",
  },
  {
    title: "Creative testing methodology",
    text: "Tests stay small and comparable: one offer, a few hooks or formats, and a rule for what continues. Winners stay in rotation. Losers stop spending. The next batch is based on what the test actually showed.",
  },
  {
    title: "Revenue-focused optimization",
    text: "Scaling is allowed when efficiency holds. For Shubcure, that meant watching orders and a reported 52% delivery rate beside media metrics, using Excel P&L views for revenue, spend, and delivery. A strong CTR is not treated as revenue.",
  },
];

export default function AboutContent() {
  return (
    <>
      <section className="py-16" aria-labelledby="intro-title">
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="intro-title" className="font-display text-3xl font-semibold tracking-tight">
              Professional introduction
            </h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-muted lg:col-span-7">
            <p>
              I am Tushar Sharma, a performance marketer based in Delhi. Most of the paid work is Meta ads for businesses
              that need leads and a clearer read on return. I also build WordPress sites, set up tracking, and handle
              the search and social work that sits around a campaign.
            </p>
            <p>
              The longest recent role is performance marketing at Shubcure Ayurveda, eight months of media buying,
              creative testing, and reporting. Before and around that are a social role at Santosh Fashion, website and
              digital work for Vishnu Murti Trust, an internship at Digiuprise, and five months of freelance digital
              marketing. Dates for those roles were not supplied, so the experience page lists durations only.
            </p>
            <p>
              I am pursuing a Bachelor of Commerce through the School of Open Learning at the University of Delhi. The
              rest of the training record is on the education page, without invented graduation years.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16" aria-labelledby="principles-title">
        <Container>
          <h2 id="principles-title" className="font-display text-3xl font-semibold tracking-tight">
            How the work is run
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {principles.map((item) => (
              <article key={item.title} className="rounded-3xl border border-line bg-card p-6">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16" aria-labelledby="background-title">
        <Container className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-line bg-surface p-6">
            <h2 id="background-title" className="font-display text-xl font-semibold">
              Professional background
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Roles, durations, and what each engagement covered. No calendar dates are invented.
            </p>
            <Link href="/experience" className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-accent">
              View experience
            </Link>
          </article>
          <article className="rounded-3xl border border-line bg-surface p-6">
            <h2 className="font-display text-xl font-semibold">Skills</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Paid media, measurement, WordPress, SEO, and content. Listed as capabilities, not as percentage scores.
            </p>
            <Link href="/skills" className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-accent">
              View skills
            </Link>
          </article>
          <article className="rounded-3xl border border-line bg-surface p-6">
            <h2 className="font-display text-xl font-semibold">Education</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              B.Com in progress, plus the digital marketing course, IT diploma, and English course on record.
            </p>
            <Link href="/education" className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-accent">
              View education
            </Link>
          </article>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
