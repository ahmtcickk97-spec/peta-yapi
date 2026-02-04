import type { Metadata } from "next";
import "./globals.css"; 

export const metadata: Metadata = {
  // Sitenin ana adresi (Tüm görsel yollarını tam adrese çevirir)
  metadataBase: new URL("https://www.petayapi.com"),

  title: "Peta Yapı | İstanbul Zeytinburnu & Kağıthane Konut Projeleri",
  description: "Peta Yapı; İstanbul genelinde modern konut projeleri ve kentsel dönüşüm çözümleri sunar.",
  
  // 1. Google Favicon Sorunu İçin Kesin Tanımlama
  icons: {
    icon: [
      { url: "/icon.png", width: 32, height: 32 },
      { url: "/icon.png", width: 192, height: 192 },
      { url: "/icon.png", width: 512, height: 512 },
    ],
    apple: "/icon.png",
  },

  // 2. WhatsApp Görseli İçin OpenGraph Ayarı
  openGraph: {
    title: "Peta Yapı | Geleceği İnşa Ediyoruz",
    description: "İstanbul'un kalbinde modern ve güvenli projeler.",
    url: "https://www.petayapi.com", 
    siteName: "Peta Yapı",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // metadataBase sayesinde otomatik tam yol olur
        width: 1200,
        height: 630,
        alt: "Peta Yapı Projeleri",
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
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}