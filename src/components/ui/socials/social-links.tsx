import { socialLinks } from "@/lib/values/socials";
import { Send } from "lucide-react";
import { ContactForm } from "@/components/ui/form/contact-form";
import DownloadCVButton from "@/components/ui/download-button/download-cv-button";

export function SocialLinks() {
  return (
    <div className="social-links" role="group" aria-label="Contact and social links">
      <div className="contact-actions">
        <ContactForm>
          <button type="button" className="expand-action" aria-label="Get in touch">
            <Send size={16} aria-hidden="true" />
            <span className="action-label" aria-hidden="true">get in touch</span>
          </button>
        </ContactForm>
        <DownloadCVButton />
      </div>
      <div className="social-icons">
        {socialLinks.map(({ name, href, icon: Icon }) => (
          <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}>
            <Icon size={16} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  );
}
