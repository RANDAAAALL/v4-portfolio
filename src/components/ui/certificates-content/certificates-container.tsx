"use client"
import { Button } from "@/components/ui/button";
import DownloadCVButton from "@/components/ui/download-button/download-cv-button";
import { Footer } from "@/components/ui/footer/all-rights-reserved";
import { ContactForm } from "@/components/ui/form/contact-form";
import ImagePreviewContent from "@/components/ui/image-preview";
import { CertificateModal } from "@/components/ui/modal/certificate-modal";
import { Navigation } from "@/components/ui/navigation/navigation";
import { Pagination } from "@/components/ui/pagination/pagination";
import { SocialLinks } from "@/components/ui/socials/social-links";
import { ThemeToggle } from "@/components/ui/theme/theme-toggle";
import { usePagination } from "@/hooks/usePagination";
import { certificates } from "@/lib/values/certificates";
import { SendHorizonalIcon } from "lucide-react";

export default function CertificatesContainer(){
    const { currentItems, currentPage, totalPages, setCurrentPage } =
    usePagination(certificates, 4);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <ImagePreviewContent />
            <div className="mb-1 md:mb-3">
              <div className="flex items-center justify-center md:items-start md:justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-1 relative">
                    Lester Andig
                    <ThemeToggle
                      style="absolute top-3.5 -right-5"
                      iconStyle="h-4 w-4"
                    />
                  </h1>
                </div>
              </div>
              <p className="text-[17px] text-center md:text-start font-medium text-foreground ">
                Web Developer<span> • </span>BSIT Student
              </p>
            </div>

            <Navigation />
            <SocialLinks />
            <div className="flex items-center flex-col space-y-2 md:items-start">
              <ContactForm>
                <Button variant="outline" className="w-59 md:w-53 py-5 cursor-default">
                  Contact Me
                  <SendHorizonalIcon className="h-4 w-4" />
                </Button>
              </ContactForm>
              {/* <DownloadCVButton /> */}
            </div>
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