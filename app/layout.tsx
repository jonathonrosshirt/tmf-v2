import { Analytics } from '@vercel/analytics/next'
import { Roboto } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Run it like you own it | Loan support',
  description:
    'Built for ambitious mortgage producers, with a full loan team behind you so every hour goes to growing your business.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#07142f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${roboto.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
