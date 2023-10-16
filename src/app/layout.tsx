import Header from '@/components/header/Header'
import './globals.css'
import type { Metadata } from 'next'

import LocalFont from 'next/font/local'

const cfont = LocalFont({
  src: [
    {
      path: '../../public/fonts/my-font.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/my-font-medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/my-font-bolt.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/my-font-italic.ttf',
      weight: '500',
      style: 'italic',
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
