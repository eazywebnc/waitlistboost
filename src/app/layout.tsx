import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ variable: '--font-sans', subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'WaitlistBoost — Smart Waitlist Management for Product Launches',
  description: 'Turn launches into events. Collect emails, gamify referrals, build hype with smart waitlist management. Free to start.',
  keywords: ['waitlist management', 'product launch', 'referral marketing', 'email collection', 'pre-launch', 'viral waitlist', 'launch page'],
  authors: [{ name: 'EazyWebNC', url: 'https://eazyweb.nc' }],
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  metadataBase: new URL('https://waitlistboost.eazyweb.nc'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'WaitlistBoost — Turn Launches Into Events',
    description: 'Smart waitlist management with viral referrals. Collect emails, build hype, launch big.',
    url: 'https://waitlistboost.eazyweb.nc',
    siteName: 'WaitlistBoost',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WaitlistBoost — Turn Launches Into Events',
    description: 'Smart waitlist management with viral referrals. Collect emails, build hype, launch big.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WaitlistBoost',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://waitlistboost.eazyweb.nc',
  description: 'Smart waitlist management for product launches with viral referral engine.',
  offers: { '@type': 'AggregateOffer', lowPrice: '0', highPrice: '79', priceCurrency: 'USD', offerCount: '3' },
  creator: { '@type': 'Organization', name: 'EazyWebNC', url: 'https://eazyweb.nc' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-violet-500 focus:text-white focus:rounded-lg">
          Skip to main content
        </a>
        <main id="main-content" role="main">{children}</main>
      </body>
    </html>
  )
}
