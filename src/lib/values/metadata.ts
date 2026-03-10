export const metadataInfos = {
  metaDatabase: new URL("https://randall-is-a.dev"),
  titles: {
    defaults: {
      default: "Experience - Lester Andig",
      template: "%s - Lester Andig",
    },
    pages: {
      projects: {
        title: "Projects",
        description:
          "Explore a selection of projects I've worked on, showcasing my skills in web development. From personal projects to collaborative efforts, discover the diverse range of applications and websites I've built using modern technologies.",
      },
      certificates: {
        title: "Certificates",
        description:
          "A showcase of my certifications, demonstrating my skills, professional development, and commitment to continuous learning in the field of web development.",
      },
      journal: (params?: string) => ({
        title: !params ? "Journal" : `${params} - Journal`,
        description: !params
          ? "Explore my journals, documenting projects, experiences, and adventures."
          : `Journal entry and photos for ${params}.`,
      }),
      techstack: {
        title: "Tech Stack",
        description:
          "Explore the technologies and tools I use to build modern web applications. From frontend frameworks to backend services, discover my tech stack and how I leverage it to create impactful digital experiences.",
      },
    },
  },
  mainDescription:
    "Portfolio of Lester Andig - Web Developer specializing in React, Next.js, and modern web technologies",
  keywords: [
    "web developer",
    "gamer",
    "student",
    "programming",
    "software development",
    "portfolio",
    "projects",
    "certificates",
    "tech stack",
  ],
  creator: "Lester Andig",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/closing_tag_logo.png",
    shortcut: "/closing_tag_logo.png",
    apple: "/closing_tag_logo.png",
  },
  openGraph: {
    title: "Lester Andig",
    description:
      "Portfolio of Lester Andig - Web Developer specializing in React, Next.js, and modern web technologies",
    url: "https://your-portfolio-url.com",
    siteName: "Lester Andig Portfolio",
    images: [
      {
        url: "/randall-qt-rayban.png",
        width: 1200,
        height: 630,
        alt: "Preview image of Lester Andig",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lester Andig",
    description:
      "Portfolio of Lester Andig - Web Developer specializing in React, Next.js, and modern web technologies",
    images: ["/randall-qt-rayban.png"],
  },
};
