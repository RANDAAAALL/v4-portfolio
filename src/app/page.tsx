import { Navigation } from "@/components/ui/navigation/navigation"
import { SocialLinks } from "@/components/ui/socials/social-links"
import { ContactForm } from "@/components/ui/form/contact-form"
import { Mail } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import Image from "next/image"

export default function HomePage() {
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
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <section>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I&rsquo;m a developer passionate about building <span className="text-primary font-medium">user-friendly web applications</span>, with a strong focus on creating websites that are both visually appealing and highly functional. I enjoy working at the intersection of design and development, crafting digital experiences that are seamless, responsive, and easy to use.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Currently, I&rsquo;m a <span className="text-primary font-medium">3rd-year BSIT student</span>, enhancing my skills in modern web development while also working as a <span className="text-primary font-medium">freelancer</span>, taking on projects that challenge me to deliver high-quality solutions for real-world clients.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I have experience developing software across various settings — from personal projects to client work — and I am always eager to explore new technologies and approaches to make applications more <span className="text-primary font-medium">efficient, accessible, and engaging</span>.
              </p>
            </section>

            {/* Experience Preview */}
            {/* <section className="space-y-6">
              <div className="group">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm text-muted-foreground">2024 — PRESENT</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Senior Frontend Engineer, Accessibility · TechCorp
                </h3>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  Build and maintain critical components used to construct TechCorp's frontend, across the whole
                  product. Work closely with cross- functional teams, including developers, designers, and product
                  managers, to implement and advocate for best practices in web accessibility.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                </div>
              </div>
            </section> */}

            {/* Call-to-action section with contact form */}
            <section className="border-t border-border pt-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Ready to work together?</h2>
                <p className="text-muted-foreground max-w-md">
                  I&rsquo;m always interested in new opportunities and exciting projects. Let&rsquo;s discuss how we can bring your
                  ideas to life.
                </p>
                <ContactForm>
                  <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors">
                    <Mail className="h-4 w-4" />
                    Let&rsquo;s get in touch
                  </button>
                </ContactForm>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
