import { Navigation } from "@/components/ui/navigation/navigation"
import { SocialLinks } from "@/components/ui/socials/social-links"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { techStack } from "@/lib/values/tech-stack"
import Image from "next/image"
import DownloadCVButton from "@/components/ui/download-button/download-cv-button"
import { Footer } from "@/components/ui/footer/all-rights-reserved"

export default function TechStackPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 space-y-8">
                <div className="relative w-55 h-55 ml-5 group">
                    {/* Default Image */}
                    <Image
                    className="rounded-full object-cover group-hover:hidden"
                    src="/randall-qt.png"
                    alt="profile-pic"
                    fill
                    sizes="360px"/>

                    {/* Hover Image */}
                    <Image
                    className="rounded-full object-cover hidden group-hover:block"
                    src="/randall-qt-rayban.png"
                    alt="profile-pic-hover"
                    fill
                    sizes="360px"
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

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Tech Stack</h2>
              <p className="text-muted-foreground leading-relaxed">
                Technologies and tools I use to build modern web applications.
              </p>
            </div>

            <div className="space-y-8">
              {Object.entries(techStack).map(([category, technologies]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {technologies.map((tech) => {
                        const Icon = tech.icon
                        return (
                          <div
                            key={tech.name}
                            className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                            <div className="mt-1 text-primary">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-1">
                                <h4 className="font-semibold text-foreground">{tech.name}</h4>
                              </div>
                              <p className="text-sm text-muted-foreground">{tech.description}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Always Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Technology evolves rapidly, and I&rsquo;m committed to continuous learning. I regularly explore new
                frameworks, languages, and tools to stay current with industry trends and best practices. Currently
                diving deep into systems programming and exploring the intersection of web development and machine
                learning.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
