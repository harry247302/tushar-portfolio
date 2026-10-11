import { notFound } from "next/navigation";
import CaseStudyArticle from "@/components/case-studies/CaseStudyArticle";
import { getCaseStudy } from "@/data/caseStudies";
import { createMetadata } from "@/data/profile";

const study = getCaseStudy("brand-on-top-hisharder");

export const metadata = createMetadata({
  title: "Brand On Top and Hisharder Case Study",
  description: study.seo,
  path: "/case-studies/brand-on-top-hisharder",
});

export default function BrandOnTopPage() {
  if (!study) notFound();
  return <CaseStudyArticle study={study} />;
}
