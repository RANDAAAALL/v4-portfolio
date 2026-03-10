import { Metadata } from "next";
import JournalContainer from "@/components/ui/journal-content/journal-container";
import { metadataInfos } from "@/lib/values/metadata";

export const metadata: Metadata = metadataInfos.titles.pages.journal();

export default function JournalPage() {
  return <JournalContainer />;
}
