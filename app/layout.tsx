import type { Metadata } from "next";
import { Montserrat, Krona_One } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const kronaOne = Krona_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-krona",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.petayapi.com"),
  title: "Peta Yapı | Güvenle Dönüşüm Sağlam Yarınlar",
  description: "Peta Yapı; İstanbul genelinde modern konut projeleri, kentsel dönüşüm ve güvenli inşaat çözümleri sunar.",
  
  alternates: {
    canonical: "/",
  },

  // Google Search Console Doğrulaması (İşte burası!)
  verification: {
    google: "X7ZRguWySSkUw1MUue-Qi_Ecw4ZstpzKwyVMEcVtjFo",
  },

  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Peta Yapı | İstanbul'un Güvenli İnşaat Markası",
    description: "Güvenle Dönüşüm Sağlam Yarınlar",
    url: "https://www.petayapi.com",
    siteName: "Peta Yapı",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Peta Yapı",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${montserrat.variable} ${kronaOne.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}