import type { Metadata } from "next";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "Peta Yapı | İstanbul Zeytinburnu & Kağıthane Konut Projeleri",
  description: "Peta Yapı; Zeytinburnu, Kağıthane ve tüm İstanbul genelinde modern konut projeleri, kentsel dönüşüm and lüks mimari çözümler sunar. Güvenli ve estetik yaşam alanları inşa ediyoruz.",
  keywords: ["Peta Yapı", "Zeytinburnu inşaat firmaları", "Kağıthane konut projeleri", "Kentsel dönüşüm İstanbul", "Lüks daire Zeytinburnu", "Peta Yapı Kağıthane", "İstanbul mimarlık ofisi"],
  
  // İKON AYARI BURADA:
  icons: {
    icon: "/icon.png",
    apple: "/icon.png", // iPhone ana ekrana eklemeler için
  },

  openGraph: {
    title: "Peta Yapı | Geleceği İnşa Ediyoruz",
    description: "İstanbul'un kalbinde modern ve güvenli projeler.",
    url: "https://www.petayapi.com",
    siteName: "Peta Yapı",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Peta Yapı Projeleri",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}