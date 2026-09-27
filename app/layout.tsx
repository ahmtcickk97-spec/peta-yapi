import type { Metadata } from 'next'
import { Krona_One, Montserrat } from 'next/font/google'
import './globals.css'

const krona = Krona_One({ subsets: ['latin', 'latin-ext'], weight: '400', variable: '--font-krona', display: 'swap' })
const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.petayapi.com'),
  title: 'Peta Yapı | Güvenle Dönüşüm Sağlam Yarınlar',
  description:
    'Peta Yapı; İstanbul genelinde modern konut projeleri, kentsel dönüşüm ve güvenli inşaat çözümleri sunar.',
  alternates: { canonical: '/' },
  verification: { google: 'X7ZRguWySSkUw1MUue-Qi_Ecw4ZstpzKwyVMEcVtjFo' },
  icons: { icon: '/icon.png', shortcut: '/icon.png', apple: '/icon.png' },
  openGraph: {
    title: "Peta Yapı | İstanbul'un Güvenli İnşaat Markası",
    description: 'Güvenle Dönüşüm Sağlam Yarınlar',
    url: 'https://www.petayapi.com',
    siteName: 'Peta Yapı',
    locale: 'tr_TR',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Peta Yapı' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${krona.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
