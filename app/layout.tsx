import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Geist yerine Montserrat'ı ekledik
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Montserrat font ayarlarını yapıyoruz
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-montserrat", // CSS değişkeni olarak tanımladık
});

export const metadata: Metadata = {
  title: "Peta Yapı | Modern İnşaat ve Mimari",
  description: "Peta Yapı ile geleceği güvenle inşa ediyoruz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      {/* Montserrat değişkenini body'e ekledik. 
        'font-sans' sınıfı, Tailwind'in bu fontu kullanmasını sağlar.
      */}
      <body className={`${montserrat.variable} font-sans antialiased text-slate-900`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}