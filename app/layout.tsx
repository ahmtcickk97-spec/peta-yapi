// app/layout.tsx
import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Peta Yapı | Güvenle Dönüşüm, Sağlam Yarınlar",
    template: "%s | Peta Yapı"
  },
  description: "Peta Yapı; modern inşaat, mimari tasarım ve kentsel dönüşüm alanlarında profesyonel çözümler sunar. Geleceği güvenle inşa ediyoruz.",
  keywords: ["inşaat", "mimari", "kentsel dönüşüm", "Peta Yapı", "tadilat", "modern yapılar"],
  verification: {
    google: "WLZjGuPsyLsML2mAQi-NTo3Z1d8Yb_FhgUFjR7XbiSs",
  },
  openGraph: {
    title: "Peta Yapı | Modern İnşaat ve Mimari",
    description: "Geleceği güvenle inşa ediyoruz.",
    url: "https://peta-yapi.vercel.app", 
    siteName: "Peta Yapı",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased text-brand-text bg-white`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}