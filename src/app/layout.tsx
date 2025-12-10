import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/ui/providers/theme-provider"
import ToasterClient from "@/components/ui/toast/toast-client"

export const metadata: Metadata = {
  title: "Lester Andig",
  description:
    "Portfolio of Lester Andig - Web Developer specializing in React, Next.js, and modern web technologies",

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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="white" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
          <ToasterClient />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
