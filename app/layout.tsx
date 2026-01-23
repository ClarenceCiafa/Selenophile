import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ScrollToTop } from '@/components/ui/scroll-to-top'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Selenophile - Il nostro satellite',
  description: 'Un progetto digitale dedicato alla bellezza silenziosa della Luna. Scopri fasi lunari, curiosita, eventi e molto altro.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
