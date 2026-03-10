import { Navigation } from "@/components/ui/navigation/navigation";
import { SocialLinks } from "@/components/ui/socials/social-links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme/theme-toggle";
import { techStack } from "@/lib/values/tech-stack";
import DownloadCVButton from "@/components/ui/download-button/download-cv-button";
import { Footer } from "@/components/ui/footer/all-rights-reserved";
import ImagePreviewContent from "@/components/ui/image-preview";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/form/contact-form";
import { SendHorizonalIcon } from "lucide-react";

export default function TechStackContainer() {
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
                <Button
                  variant="outline"
                  className="w-59 md:w-53 py-5 cursor-default"
                >
                  Contact Me
                  <SendHorizonalIcon className="h-4 w-4" />
                </Button>
              </ContactForm>
              <DownloadCVButton />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Tech Stack
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Technologies and tools I use to build modern web applications.
              </p>
            </div>

            <div className="space-y-8">
              {Object.entries(techStack).map(([category, technologies]) => (
                <Card key={category} className="rounded-sm">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {technologies.map((tech) => {
                        const Icon = tech.icon;
                        return (
                          <div
                            key={tech.name}
                            className="flex items-start gap-3 p-4 rounded-sm border border-border"
                          >
                            <div className="mt-1 text-primary">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-1">
                                <h4 className="font-semibold text-foreground">
                                  {tech.name}
                                </h4>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {tech.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-sm border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Always Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Technology evolves rapidly, and I&rsquo;m committed to
                continuous learning. I regularly explore new frameworks,
                languages, and tools to stay current with industry trends and
                best practices. Currently diving deep into systems programming
                and exploring the intersection of web development and machine
                learning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6">
        <Footer />
      </div>
    </div>
  );
}
