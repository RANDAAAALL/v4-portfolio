import Link from "next/link";
import { SendHorizonalIcon } from "lucide-react";
import { socialLinks } from "@/lib/values/socials";
import { ContactForm } from "../form/contact-form";
// import { Button } from "../button";
import DownloadCVButton from "../download-button/download-cv-button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../tooltip";

export function SocialLinks() {
  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex space-x-4 items-center justify-center md:justify-start">
        <Tooltip>
          <TooltipTrigger>
            <div>
              <ContactForm>
                <SendHorizonalIcon className="cursor-pointer h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </ContactForm>
            </div>
          </TooltipTrigger>
          <TooltipContent>Contact Me</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <div>
              <DownloadCVButton />
            </div>
          </TooltipTrigger>
          <TooltipContent>Download CV</TooltipContent>
        </Tooltip>
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Tooltip key={link.name}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>{link.name}</TooltipContent>
            </Tooltip>
          );
        })}
        {/* <Link href="mailto:lesterandig17@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
  
          <Mail className="h-5 w-5" />
          <span className="sr-only">Contact</span>
     
      </Link> */}
      </div>
    </TooltipProvider>
  );
}
