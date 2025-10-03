"use client"

import { Navigation } from "@/components/ui/navigation/navigation"
import { SocialLinks } from "@/components/ui/socials/social-links"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { Pagination } from "@/components/ui/pagination/pagination"
import { useState } from "react"
import { journalPosts } from "@/lib/values/journal"

const ITEMS_PER_PAGE = 5

export default function JournalPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(journalPosts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentPosts = journalPosts.slice(startIndex, endIndex)

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
                    sizes="360px"/>
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
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Journal</h2>
              <p className="text-muted-foreground leading-relaxed">
                Thoughts on design, development, and the intersection of technology and creativity.
              </p>
            </div>

            <div className="space-y-6">
              {currentPosts.length > 1 ? (
                  currentPosts.map((post) => (
                   <Card key={post.id} className="group hover:border-primary/50 transition-colors overflow-hidden">
                     <div className="relative w-full h-48 overflow-hidden">
                       <Image
                         src={post.image || "/placeholder.svg"}
                         alt={post.title}
                         fill
                         className="object-cover group-hover:scale-105 transition-transform duration-300"
                       />
                     </div>
                     <CardHeader>
                       <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                         <time dateTime={post.date}>
                           {new Date(post.date).toLocaleDateString("en-US", {
                             year: "numeric",
                             month: "long",
                             day: "numeric",
                           })}
                         </time>
                         <span>{post.readTime}</span>
                       </div>
                       <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                         {post.title}
                       </h3>
                     </CardHeader>
                     <CardContent>
                       <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                       <div className="flex flex-wrap gap-2">
                         {post.tags.map((tag) => (
                           <Badge key={tag} variant="secondary">
                             {tag}
                           </Badge>
                         ))}
                       </div>
                     </CardContent>
                   </Card>
                 )) 
                 ) : (
                    <>
                    <span>
                    Journal coming soon.....
                    </span>
                    </>
                 )}

            </div>

            {totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
