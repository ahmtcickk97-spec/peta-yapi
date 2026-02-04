import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.petayapi.com"),
  title: "Peta Yapı | İstanbul Zeytinburnu & Kağıthane Konut Projeleri",
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
    description: "Zeytinburnu ve Kağıthane'de modern konut projeleri.",
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
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}