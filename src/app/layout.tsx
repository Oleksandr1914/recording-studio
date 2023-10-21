import Header from '@/components/header/Header'
import './globals.css'
import { Work_Sans } from 'next/font/google'
import type { Metadata } from 'next'

const workSans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex Goroshko',
  description: 'recording studio of Alex Goroshko',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Header />
        {children}</body>
    </html>
  )
}
