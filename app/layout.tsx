import type { Metadata } from "next";
import "./globals.css"; 

export const metadata: Metadata = {
  // Sitenin temel adresi (Resimlerin tam yolunu bulması için kritik)
  metadataBase: new URL("https://peta-yapi.vercel.app"),

  title: "Peta Yapı | İstanbul Zeytinburnu & Kağıthane Konut Projeleri",
  description: "Peta Yapı; Zeytinburnu, Kağıthane ve tüm İstanbul genelinde modern konut projeleri, kentsel dönüşüm ve lüks mimari çözümler sunar. Güvenli ve estetik yaşam alanları inşa ediyoruz.",
  keywords: ["Peta Yapı", "Zeytinburnu inşaat firmaları", "Kağıthane konut projeleri", "Kentsel dönüşüm İstanbul", "Lüks daire Zeytinburnu", "Peta Yapı Kağıthane", "İstanbul mimarlık ofisi"],
  
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "Peta Yapı | Geleceği İnşa Ediyoruz",
    description: "İstanbul'un kalbinde modern ve güvenli projeler.",
    url: "https://peta-yapi.vercel.app", 
    siteName: "Peta Yapı",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // metadataBase sayesinde otomatik tam adrese dönüşür
        width: 1200,
        height: 630,
        alt: "Peta Yapı Modern Projeler",
      },
    ],
  },
  
  // Twitter için kart görünümü (Paylaşımlarda etkili olur)
  twitter: {
    card: "summary_large_image",
    title: "Peta Yapı | İstanbul'un Güvenilir İnşası",
    description: "Modern mimari ve sağlam yapılar.",
    images: ["/og-image.jpg"],
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