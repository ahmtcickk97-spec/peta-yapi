import type { Metadata } from "next";

export const metadata: Metadata = {
  // Google'da görünecek ana başlık
  title: "Peta Yapı | İstanbul Zeytinburnu & Kağıthane Konut Projeleri",
  
  // Sitenin özeti (Maksimum 160 karakter önerilir)
  description: "Peta Yapı; Zeytinburnu, Kağıthane ve tüm İstanbul genelinde modern konut projeleri, kentsel dönüşüm ve lüks mimari çözümler sunar. Güvenli ve estetik yaşam alanları inşa ediyoruz.",
  
  // Anahtar Kelimeler (Google bunları eskisi kadar okumasa da diğer botlar için önemlidir)
  keywords: ["Peta Yapı", "Zeytinburnu inşaat firmaları", "Kağıthane konut projeleri", "Kentsel dönüşüm İstanbul", "Lüks daire Zeytinburnu", "Peta Yapı Kağıthane", "İstanbul mimarlık ofisi"],

  // Sosyal Medya Paylaşım Görünümü (OpenGraph)
  openGraph: {
    title: "Peta Yapı | Geleceği İnşa Ediyoruz",
    description: "İstanbul'un kalbinde modern ve güvenli projeler.",
    url: "https://www.petayapi.com", // Sitenin gerçek URL'si buraya gelecek
    siteName: "Peta Yapı",
    locale: "tr_TR",
    type: "website",
    // Link paylaştığında görünecek resim (public klasörüne bir og-image.jpg eklemelisin)
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Peta Yapı Projeleri",
      },
    ],
  },

  // Arama motoru robotları için talimatlar
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
      <body>{children}</body>
    </html>
  );
}