import JournalCategoryClient from "@/components/ui/journal/journal-client-data";
import { CategorySSGProps } from "@/lib/interface/category-ssg-props";
import { journalPosts } from "@/lib/values/journal";

export async function generateStaticParams() {
  const categories = Object.keys(journalPosts) as (keyof typeof journalPosts)[];
  return categories.map((category) => ({ category }));
}

export default async function JournalCategoryPage({ params }: CategorySSGProps) {
  const category = (await (params)).category as keyof typeof journalPosts;

  return <JournalCategoryClient category={category} />;
}
