import { Metadata } from "next";
import JournalCategoryContainer from "@/components/ui/journal-content/journal-category-container";
import { CategorySSGProps } from "@/lib/interface/category-ssg-props";
import { journalPosts } from "@/lib/values/journal";
import { formatCategoryName } from "@/lib/helper/format-category-name";
import { metadataInfos } from "@/lib/values/metadata";

export async function generateMetadata({
  params,
}: CategorySSGProps): Promise<Metadata> {
  const category = (await params).category as keyof typeof journalPosts;
  const formattedName = formatCategoryName(category);

  return metadataInfos.titles.pages.journal(formattedName);
}

export async function generateStaticParams() {
  const categories = Object.keys(journalPosts) as (keyof typeof journalPosts)[];
  return categories.map((category) => ({ category }));
}

export default async function JournalCategoryPage({
  params,
}: CategorySSGProps) {
  const category = (await params).category as keyof typeof journalPosts;

  return <JournalCategoryContainer category={category} />;
}
