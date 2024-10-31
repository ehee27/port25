import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Nunito_Sans } from 'next/font/google'

const inter = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Scott's Portfolio Boiler",
  description: 'A website template',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
