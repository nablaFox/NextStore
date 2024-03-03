import Header from '@/components/header'
import Footer from '@/components/footer'

import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
  title: 'Test Store',
  description: 'A test store for Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
