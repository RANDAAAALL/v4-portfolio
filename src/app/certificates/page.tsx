"use client";
import DownloadCVButton from "@/components/ui/download-button/download-cv-button";
import { Footer } from "@/components/ui/footer/all-rights-reserved";
import ImagePreviewContent from "@/components/ui/image-preview";
import { CertificateModal } from "@/components/ui/modal/certificate-modal";
import { Navigation } from "@/components/ui/navigation/navigation";
import { Pagination } from "@/components/ui/pagination/pagination";
import { SocialLinks } from "@/components/ui/socials/social-links";
import { ThemeToggle } from "@/components/ui/theme/theme-toggle";
import { usePagination } from "@/hooks/usePagination";
import { certificates } from "@/lib/values/certificates";

export default function Certificates() {
  const { currentItems, currentPage, totalPages, setCurrentPage } =
    usePagination(certificates, 4);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <ImagePreviewContent />
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-1 relative">
                    Lester Andig
                    <ThemeToggle />
                  </h1>
                  <p className="text-xl text-primary">Web Developer</p>
                </div>
              </div>
            </div>

            <Navigation />
            <SocialLinks />
            <DownloadCVButton />
          </div>

          <div className="lg:col-span-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Certificates
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A collection of certifications I&apos;ve earned, highlighting my
                skills, professional development, and commitment to continuous
                learning.
              </p>
            </div>
            <CertificateModal certificates={currentItems} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
      <div className="px-6">
        <Footer />
      </div>
    </div>
  );
}
