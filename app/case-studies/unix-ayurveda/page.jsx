import { notFound } from "next/navigation";
import CaseStudyArticle from "@/components/case-studies/CaseStudyArticle";
import { getCaseStudy } from "@/data/caseStudies";
import { createMetadata } from "@/data/profile";

const study = getCaseStudy("unix-ayurveda");

export const metadata = createMetadata({
  title: "Unix Ayurveda Case Study",
  description: study.seo,
  path: "/case-studies/unix-ayurveda",
});

export default function UnixAyurvedaPage() {
  if (!study) notFound();
  return <CaseStudyArticle study={study} />;
}
