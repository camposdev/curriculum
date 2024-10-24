import type { Metadata } from 'next'
import { Dela_Gothic_One, Syne } from 'next/font/google'
import './globals.css'

const dela = Dela_Gothic_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dela-gothic-one',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Felipe Campos | Frontend Engineer',
  description: 'Frontend Developer | React | Typescript',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dela.variable} ${syne.variable} antialiased`}>
      <body className={`overflow-x-hidden`}>{children}</body>
    </html>
  )
}
