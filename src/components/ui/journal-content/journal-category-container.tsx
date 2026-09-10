import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageGallery } from "@/components/ui/gallery/image-gallery";
import { journalPosts } from "@/lib/values/journal";
import { JournalCategoryClientProps } from "@/lib/interface/journal-category-client-props";
import { formatCategoryName } from "@/lib/helper/format-category-name";

export default function JournalCategoryContainer({ category }: JournalCategoryClientProps) {
  const posts = journalPosts[category] || [];
  const title = formatCategoryName(category);
  return (
    <section aria-labelledby="page-title">
      <Link href="/journal" className="text-link back-link"><ArrowLeft size={13} aria-hidden="true" /> back to journal</Link>
      <ImageGallery items={posts.map((post, index) => ({ src: post.src, alt: post.alt, title: `${title} · ${index + 1}` }))} />
    </section>
  );
}
