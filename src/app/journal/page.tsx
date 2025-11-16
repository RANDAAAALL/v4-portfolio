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

export default function JournalPage() {
  const categories: (keyof typeof journalPosts)[] = [
    "before_departure",
    "vitro",
    "vikings",
    "jairosoft",
    "911",
  ];
  const { currentItems, currentPage, totalPages, setCurrentPage } = usePagination(categories, 2);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 space-y-5">
            <div className="relative w-55 h-55 ml-5 group">
              <Image
                className="rounded-full object-cover group-hover:hidden"
                src="/randall-qt.png"
                alt="profile-pic"
                fill
                sizes="360px"
              />
              <Image
                className="rounded-full object-cover hidden group-hover:block"
                src="/randall-qt-rayban.png"
                alt="profile-pic-hover"
                fill
                sizes="360px"
                priority
              />
            </div>

            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">Lester Andig</h1>
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

          {/* Main Content */}
          <div className="lg:col-span-8 h-auto lg:h-screen">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Journal</h2>
              <p className="text-muted-foreground leading-relaxed">
                Explore my journals, documenting projects, experiences, and adventures.
              </p>
            </div>

            <div className="space-y-6">
              {currentItems.length > 0 ? (
                currentItems.map((category) => {
                  const firstImage = journalPosts[category as keyof typeof journalPosts][0].src;
                  return (
                    <Link
                      key={category}
                      href={`/journal/${category}`}
                      className="block group"
                    >
                      <div className="relative w-full h-64 rounded-lg overflow-hidden border border-border cursor-pointer">
                        <Image
                          src={firstImage}
                          alt={category}
                          fill
                          className="object-cover group-hover:scale-102 transition-transform duration-300"
                        />
                        <div className="absolute bottom-4 left-4 text-white text-xl font-bold bg-black/40 px-2 py-1 rounded">
                          {category.replace("_", " ").toUpperCase()}
                        </div>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <span>Journal coming soon.....</span>
              )}
            </div>

            {totalPages > 1 && (
              <div className="mt-6 flex justify-center">
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
