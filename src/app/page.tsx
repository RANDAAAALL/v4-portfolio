import { Navigation } from "@/components/ui/navigation/navigation";
import { SocialLinks } from "@/components/ui/socials/social-links";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/theme/theme-toggle";
import { experiences } from "@/lib/values/experiences";
import DownloadCVButton from "@/components/ui/download-button/download-cv-button";
import { Footer } from "@/components/ui/footer/all-rights-reserved";
import ImagePreviewContent from "@/components/ui/image-preview";
import { ContactForm } from "@/components/ui/form/contact-form";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <ImagePreviewContent />
            <div className="mb-3">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-1 relative">
                    Lester Andig
                    <ThemeToggle
                      style="absolute top-3.5 -right-5.5"
                      iconStyle="h-4 w-4"
                    />
                  </h1>
                </div>
              </div>
              <p className="text-[17px] font-medium text-foreground ">
                Web Developer<span> • </span>BSIT Student
              </p>
            </div>

            <Navigation />
            <SocialLinks />
            <div className="flex flex-col space-y-2 w-53">
              <ContactForm>
                <Button variant="outline" className="py-5 cursor-default">
                  Contact Me
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </ContactForm>
              <DownloadCVButton />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 ">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Experience
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                My experience in web development, focused on crafting
                user-friendly and engaging digital experiences.
              </p>
            </div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="group relative">
                  <div className="flex space-y-1.5 flex-col md:space-x-4  md:flex-row md:items-baseline">
                    <div className="flex-shrink-0 w-32">
                      <p className="text-sm text-muted-foreground font-mono">
                        {experience.period}
                      </p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {experience.title} · {experience.company}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {experience.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Let&rsquo;s Work Together
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                I&rsquo;m always interested in new opportunities and exciting
                projects. Whether you&rsquo;re looking for a developer or
                collaborator, I&rsquo;d love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 mt-8">
        <Footer />
      </div>
    </div>
  );
}
