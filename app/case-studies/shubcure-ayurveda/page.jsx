import { notFound } from "next/navigation";
import CaseStudyArticle from "@/components/case-studies/CaseStudyArticle";
import { getCaseStudy } from "@/data/caseStudies";
import { createMetadata } from "@/data/profile";

const study = getCaseStudy("shubcure-ayurveda");

export const metadata = createMetadata({
  title: "Shubcure Ayurveda Case Study",
  description: study.seo,
  path: "/case-studies/shubcure-ayurveda",
});

export default function ShubcureAyurvedaPage() {
  if (!study) notFound();
  return <CaseStudyArticle study={study} />;
}
