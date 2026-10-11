import AboutContent from "@/components/about/AboutContent";
import PageHero from "@/components/ui/PageHero";
import { createMetadata } from "@/data/profile";

export const metadata = createMetadata({
  title: "About",
  description:
    "How Tushar Sharma approaches performance marketing: measurement, creative testing, and revenue-focused optimization for Meta ads and related web work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A media practice built around the number the business keeps."
        description="Leads, return, and fulfilled orders come before a prettier dashboard. The method below is how campaigns are planned, tested, and judged."
      />
      <AboutContent />
    </>
  );
}
