import ProjectsContainer from "@/components/ui/projects-content/projects-container";
import { metadataInfos } from "@/lib/values/metadata";
import { Metadata } from "next";

export const metadata: Metadata =  metadataInfos.titles.pages.projects;

export default function ProjectsPage() {
  return <ProjectsContainer />
}
