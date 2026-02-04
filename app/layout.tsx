import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // 1. Ana Domain Tanımı
  metadataBase: new URL("https://www.petayapi.com"),

  // 2. Arama Motoru (Google) Ayarları
  title: "Peta Yapı | İstanbul Zeytinburnu & Kağıthane Konut Projeleri",
  description: "Peta Yapı; İstanbul genelinde modern konut projeleri, kentsel dönüşüm ve güvenli inşaat çözümleri sunar.",
  
  // 3. Google'a "Asıl Adresimiz Budur" Mesajı (Canonical)
  alternates: {
    canonical: "/",
  },

  // 4. İkonlar (Hata vermemesi için en sade hali)
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },

  // 5. WhatsApp ve Sosyal Medya Önizlemesi (OpenGraph)
  openGraph: {
    title: "Peta Yapı | Güvenle Dönüşüm, Sağlam Yarınlar",
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
        alt: "Peta Yapı Konut Projeleri",
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