"use client"

import { Navigation } from "@/components/ui/navigation/navigation"
import { SocialLinks } from "@/components/ui/socials/social-links"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { Pagination } from "@/components/ui/pagination/pagination"
import { useState } from "react"
import { projects } from "@/lib/values/project"
import Image from "next/image"
import DownloadCVButton from "@/components/ui/download-button/download-cv-button"
import { Footer } from "@/components/ui/footer/all-rights-reserved"

const ITEMS_PER_PAGE = 7

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProjects = projects.slice(startIndex, endIndex)

  const featuredProjects = currentProjects.filter((project) => project.featured)
  const otherProjects = currentProjects.filter((project) => !project.featured)

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

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Projects</h2>
              <p className="text-muted-foreground leading-relaxed">
                A selection of projects  I&apos;ve worked on, ranging from web applications to personal and academic projects.
              </p>
            </div>

            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-6">Featured Projects</h3>
                <div className="space-y-8">
                  {featuredProjects.map((project) => (
                    <Card key={project.id} className="group p-6">
                      <div>
                        <div>
                        {Array.isArray(project.image) ? (
                        <div className="flex justify-center gap-4">
                          {project.image.map((img, index) => (
                           <div
                           key={index}
                           className="relative w-full sm:w-1/2 lg:w-1/3 rounded-sm overflow-hidden">
                           <Image
                             src={img}
                             alt={`${project.title} screenshot ${index + 1}`}
                             width={400}
                             height={250}
                             className="object-cover w-full h-auto group-hover:scale-102 transition-transform duration-300"
                           />
                         </div>
                          ))}
                        </div>
                      ) : (
                        <div className="relative w-full rounded-sm overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={350}
                            className="object-cover w-full group-hover:scale-102 transition-transform duration-300"/>                        
                            {project.status && (
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <span className="text-white text-sm font-semibold px-3 py-1 rounded">
                                    {project.status}
                                  </span>
                                </div>
                              )}
                          </div>
                        )}
                        </div>
                        <div className="mt-6">
                          <CardHeader className="p-0 mb-2">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                              {/* {project.type && <span className="ml-1 text-foreground">| {project.type}</span>} */}
                              </CardTitle>
                              <div className="flex space-x-2">
                                {project.liveUrl && (
                                  <Link
                                    href={project.liveUrl}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <ExternalLink className="h-5 w-5" />
                                  </Link>
                                )}
                                <Link
                                  href={project.githubUrl}
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer">
                                  <Github className="h-5 w-5" />
                                </Link>
                              </div>
                            </div>
                          </CardHeader>

                          <CardContent className="p-0">
                            <p className="text-muted-foreground text-justify hyphens-auto leading-relaxed mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            {/* Other Projects */}
            {otherProjects.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Other Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {otherProjects.map((project) => (
                    <Card 
                      key={project.id} 
                      className="group flex flex-col">
                      {/* Image */}
                      <div className="h-55 -mb-4 px-6">
                        <div className="w-full h-full rounded-sm overflow-hidden">
                          <Image
                            src={(project.image as string) || "/placeholder.svg"}
                            alt={project.title}
                            width={400}
                            height={250}
                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 p-6">
                        <CardHeader className="p-0 mb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </CardTitle>
                            <div className="flex space-x-2">
                              {project.liveUrl && (
                                <Link
                                  href={project.liveUrl}
                                  className="text-muted-foreground hover:text-primary transition-colors"
                                  target="_blank"
                                  rel="noopener noreferrer">
                                  <ExternalLink className="h-5 w-5" />
                                </Link>
                              )}
                              <Link
                                href={project.githubUrl}
                                className="text-muted-foreground hover:text-primary transition-colors"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Github className="h-5 w-5" />
                              </Link>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="p-0 flex flex-col flex-1">
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4  hyphens-auto text-justify">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-auto">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            {totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            )}
          </div>
        </div>
      </div>
      <div className="px-6"> 
        <Footer />
      </div>
    </div>
  )
}
