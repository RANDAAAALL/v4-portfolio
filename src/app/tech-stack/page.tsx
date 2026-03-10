import TechStackContainer from "@/components/ui/tech-stack-content/tech-stack-container";
import { metadataInfos } from "@/lib/values/metadata";
import { Metadata } from "next";

export const metadata: Metadata = metadataInfos.titles.pages.techstack;

export default function TechStackPage() {
  return <TechStackContainer />;
}
