import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/ui/providers/theme-provider"
import ToasterClient from "@/components/ui/toast/toast-client"
import { metadataInfos } from "@/lib/values/metadata"

export const metadata: Metadata = {
  metadataBase: metadataInfos.metaDatabase,
  title: metadataInfos.titles.defaults,
  description: metadataInfos.mainDescription,
  keywords: metadataInfos.keywords,
  creator: metadataInfos.creator,
  robots: metadataInfos.robots as Metadata["robots"],
  icons: metadataInfos.icons,
  openGraph: metadataInfos.openGraph,
  twitter: metadataInfos.twitter,
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
