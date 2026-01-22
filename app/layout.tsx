import WhatsAppButton from "@/components/WhatsAppButton";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // @ simgesinin components klasörüne baktığından emin ol
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Peta Yapı | Modern İnşaat ve Mimari",
  description: "Peta Yapı ile geleceği güvenle inşa ediyoruz.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={`${montserrat.variable} font-sans antialiased text-brand-text`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}