import Link from "next/link"
import { ContactForm } from "../form/contact-form"
import { Mail } from "lucide-react"
import { socialLinks } from "@/lib/values/socials"
import { ThemeToggle } from "../theme/theme-toggle"

export function SocialLinks() {
  return (
    <div className="flex space-x-4 items-center">
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer">
            <Icon className="h-5 w-5" />
            <span className="sr-only">{link.name}</span>
          </Link>
        )
      })
    }
      <ContactForm>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Contact</span>
        </button>
      </ContactForm>
    </div>
  )
}
