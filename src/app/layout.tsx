import Header from '@/components/header/Header'
import './globals.css'
import type { Metadata } from 'next'

import LocalFont from 'next/font/local'

const cfont = LocalFont({
  src: [
    {
      path: '../../public/fonts/medium.ttf',
      weight: "500",
      style: 'medium',
    },
    {
      path: '../../public/fonts/bolt.ttf',
      weight: "700",
      style: 'bolt',
    },
    {
      path: '../../public/fonts/italic.ttf',
      weight: "400",
      style: 'italic',
    },
    {
      path: '../../public/fonts/extrabolt.ttf',
      weight: "800",
      style: 'extrabolt',
    },
    {
      path: '../../public/fonts/normal.ttf',
      weight: "400",
      style: 'normal',
    },
  ],
  variable: '--font-cfont',
})


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
      <body className={`${cfont.variable} relative`}>
        <Header />
        {children}</body>
    </html>
  )
}
