import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { PortfolioShell } from "@/components/ui/layout/portfolio-shell"
import ToasterClient from "@/components/ui/toast/toast-client"
import { metadataInfos } from "@/lib/values/metadata"

const openSans = localFont({ src: "../../public/fonts/OpenSans-variable.ttf", variable: "--font-open-sans", weight: "300 800", display: "swap" });

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
    <html lang="en" className="dark">
      <body className={`${openSans.variable} antialiased`}>
        <PortfolioShell>
          <Suspense fallback={null}>{children}</Suspense>
        </PortfolioShell>
        <ToasterClient />
        <Analytics />
      </body>
    </html>
  )
}
