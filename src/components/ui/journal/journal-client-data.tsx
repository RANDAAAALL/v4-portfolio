"use client";
import { useState } from "react";
import Image from "next/image";
import JournalModal from "@/components/ui/modal/journal-modal";
import { Pagination } from "@/components/ui/pagination/pagination";
import { Footer } from "../footer/all-rights-reserved";
import { ThemeToggle } from "../theme/theme-toggle";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePagination } from "@/hooks/usePagination";
import { JournalPost } from "@/lib/interface/journal-post-props";
import { journalPosts } from "@/lib/values/journal";
import { JournalCategoryClientProps } from "@/lib/interface/journal-category-client-props";
import { formatCategoryName } from "@/lib/helper/format-category-name";

export default function JournalCategoryClient({ category }: JournalCategoryClientProps) {
  const posts: JournalPost[] = journalPosts[category] || [];

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { currentItems, currentPage, totalPages, setCurrentPage, startIndex } = usePagination(posts, 6);

  const openModal = (index: number) => {
    setCurrentIndex(startIndex + index);
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center space-x-2">
            <Link href="/journal">
            <ArrowLeft 
            className="w-7 md:w-10 md:h-8 cursor-pointer" />
            </Link>
            <h1 className="text-md md:text-3xl font-bold">
                {formatCategoryName(category)}
            </h1>
        </div>
        <ThemeToggle />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((post, i) => (
          <div
            key={post.id}
            className="relative w-full h-64 rounded-lg overflow-hidden cursor-pointer border border-border"
            onClick={() => openModal(i)}
          >
            <Image src={post.src} alt={post.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        />
      </div>
      <JournalModal
        open={open}
        posts={posts}
        currentIndex={currentIndex}
        onClose={() => setOpen(false)}
      />

    </div>
      <div className="px-6">
        <Footer />
      </div>
    </div>
  );
}
