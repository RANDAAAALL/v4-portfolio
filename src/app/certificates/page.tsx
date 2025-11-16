import DownloadCVButton from "@/components/ui/download-button/download-cv-button";
import { Footer } from "@/components/ui/footer/all-rights-reserved";
import { CertificateModal } from "@/components/ui/modal/certificate-modal";
import { Navigation } from "@/components/ui/navigation/navigation";
import { SocialLinks } from "@/components/ui/socials/social-links";
import { ThemeToggle } from "@/components/ui/theme/theme-toggle";
import { certificates } from "@/lib/values/certificates";
import Image from "next/image";

export default function Certificates(){
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-4 space-y-5">
                        <div className="relative w-55 h-55 ml-5 group">
                            {/* Default Image */}
                            <Image
                            className="rounded-full object-cover group-hover:hidden"
                            src="/randall-qt.png"
                            alt="profile-pic"
                            fill
                            sizes="360px"
                            priority/>

                            {/* Hover Image */}
                            <Image
                            className="rounded-full object-cover hidden group-hover:block"
                            src="/randall-qt-rayban.png"
                            alt="profile-pic-hover"
                            sizes="360px"
                            fill
                            priority/>
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

                    <div className="lg:col-span-8">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Certificates</h2>
                            <p className="text-muted-foreground leading-relaxed">
                            A collection of certifications I&apos;ve earned, highlighting my skills, professional development, and commitment to continuous learning.
                            </p>
                        </div>
                        <CertificateModal certificates={certificates} />
                    </div>
                </div>
            </div>
            <div className="px-6"> 
                <Footer />
            </div>
        </div>
    );
}