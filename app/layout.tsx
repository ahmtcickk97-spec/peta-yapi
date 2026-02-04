import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // Sitenin ana kimliği
  metadataBase: new URL("https://www.petayapi.com"),
  title: "Peta Yapı | İstanbul Zeytinburnu & Kağıthane Konut Projeleri",
  description: "Peta Yapı; İstanbul genelinde modern konut projeleri ve kentsel dönüşüm çözümleri sunar.",
  
  // Google'a "Asıl dükkan burası" diyen mühür
  alternates: {
    canonical: "https://www.petayapi.com",
  },

  // İkonlar (Hatanın düzeldiği kısım tam burası)
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon.png",
  },

  // WhatsApp ve Google için profesyonel görünüm
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