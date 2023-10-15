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
  description: 'студія звукозапису Олксандра Горошко',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <body className={`${cfont.variable}`}>
        {children}</body>
    </html>
  )
}
