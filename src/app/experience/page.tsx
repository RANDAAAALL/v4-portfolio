import { Navigation } from "@/components/ui/navigation/navigation"
import { SocialLinks } from "@/components/ui/socials/social-links"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { experiences } from "@/lib/values/experiences"
import Image from "next/image"
import DownloadCVButton from "@/components/ui/download-button/download-cv-button"
import { Footer } from "@/components/ui/footer/all-rights-reserved"

export default function ExperiencePage() {
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
          <div className="lg:col-span-8 min-h-screen">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Experience</h2>
              <p className="text-muted-foreground leading-relaxed">
                My experience in web development, focused on crafting user-friendly and engaging digital experiences.
              </p>
            </div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div key={index} className="group relative">
                  <div className="flex space-y-1.5 flex-col md:space-x-4  md:flex-row md:items-baseline">
                    <div className="flex-shrink-0 w-32">
                      <p className="text-sm text-muted-foreground font-mono">{experience.period}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {experience.title} · {experience.company}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{experience.description}</p>
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
              <h3 className="text-lg font-semibold text-foreground mb-4">Let&rsquo;s Work Together</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I&rsquo;m always interested in new opportunities and exciting projects.
                Whether you&rsquo;re looking for a developer or collaborator, I&rsquo;d love to hear from you.
              </p>
              <Link
                href="lesterandig17@gmail.com"
                className="inline-flex items-center text-primary hover:underline">
                Get in touch →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6"> 
        <Footer />
      </div>
    </div>
  )
}
