import caseStudiesRaw from "@/data/case-studies.json";
import inquiryQuestionsRaw from "@/data/inquiry-questions.json";
import resourcesRaw from "@/data/resources.json";

export type CaseStudy = {
  clientName: string;
  slug: string;
  status: "flagship" | "coming-soon";
  title: string;
  shortSummary: string;
  industry?: string;
  year?: string;
  projectType?: string;
  role?: string;
  services?: string[];
  collaborationContext?: string;
  constraints?: string[];
  storyAngle?: string;
  reviewStatus: string;
};

export type Resource = {
  title: string;
  slug: string;
  type: string;
  summary: string;
  status: string;
};

export const caseStudies = caseStudiesRaw as CaseStudy[];
export const flagshipCaseStudies = caseStudies.filter((study) => study.status === "flagship");
export const comingSoonCaseStudies = caseStudies.filter((study) => study.status === "coming-soon");
export const resources = resourcesRaw as Resource[];
export const inquiryQuestions = inquiryQuestionsRaw as string[];

export const services = [
  "Strategy",
  "Brand",
  "Logo",
  "Content",
  "Custom visuals",
  "Website design",
  "Website build",
  "CMS",
  "AI systems",
  "Motion",
  "Launch"
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
