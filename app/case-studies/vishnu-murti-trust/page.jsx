import { notFound } from "next/navigation";
import CaseStudyArticle from "@/components/case-studies/CaseStudyArticle";
import { getCaseStudy } from "@/data/caseStudies";
import { createMetadata } from "@/data/profile";

const study = getCaseStudy("vishnu-murti-trust");

export const metadata = createMetadata({
  title: "Vishnu Murti Trust Case Study",
  description: study.seo,
  path: "/case-studies/vishnu-murti-trust",
});

export default function VishnuMurtiTrustPage() {
  if (!study) notFound();
  return <CaseStudyArticle study={study} />;
}
