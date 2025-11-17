"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/ui/navigation/navigation";
import { SocialLinks } from "@/components/ui/socials/social-links";
import { ThemeToggle } from "@/components/ui/theme/theme-toggle";
import { Pagination } from "@/components/ui/pagination/pagination";
import DownloadCVButton from "@/components/ui/download-button/download-cv-button";
import { Footer } from "@/components/ui/footer/all-rights-reserved";
import { journalPosts } from "@/lib/values/journal";
import { usePagination } from "@/hooks/usePagination";
import { formatCategoryName } from "@/lib/helper/format-category-name";
import ImagePreviewContent from "@/components/ui/image-preview";

export default function JournalPage() {
  const categories: (keyof typeof journalPosts)[] = [
    "davao_trip_before_departure",
    "davao_trip_vitro",
    "davao_trip_vikings",
    "davao_trip_jairosoft",
    "davao trip 911",
  ];

  const { currentItems, currentPage, totalPages, setCurrentPage } = usePagination(
    categories,
    2
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-4 space-y-5">
            <ImagePreviewContent/>

            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">
                    Lester Andig
                  </h1>
                  <p className="text-xl text-primary mb-4">Full Stack Developer</p>
                </div>
                <ThemeToggle />
              </div>

              <p className="text-muted-foreground leading-relaxed">
                I build user-friendly web applications that deliver seamless experiences.
              </p>
            </div>

            <Navigation />
            <SocialLinks />
            <DownloadCVButton />
          </div>

          {/* MAIN CONTENT */}
          <div className="lg:col-span-8">
            {/* HEADER */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Journal</h2>
              <p className="text-muted-foreground leading-relaxed">
                Explore my journals, documenting projects, experiences, and adventures.
              </p>
            </div>

            {/* JOURNAL CARDS */}
            <div className="space-y-8">
              {currentItems.length > 0 ? (
                currentItems.map((category) => {
                  const firstImage =
                    journalPosts[category as keyof typeof journalPosts][0].src;

                  return (
                    <Link
                      key={category}
                      href={`/journal/${category}`}
                      className="block group"
                    >
                      <div className="relative w-full h-72 rounded-xl overflow-hidden border border-border shadow-md hover:shadow-lg transition-shadow duration-300">
                        <Image
                          src={firstImage}
                          alt={category}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-102"
                        />

                        {/* GRADIENT OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70" />

                        {/* TEXT */}
                        <div className="absolute bottom-5 left-5">
                          <h3 className="text-xl font-bold text-white tracking-wide drop-shadow-lg">
                            {formatCategoryName(category)}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <span className="text-muted-foreground">Journal coming soon...</span>
              )}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="mt-10 flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-6">
        <Footer />
      </div>
    </div>
  );
}
