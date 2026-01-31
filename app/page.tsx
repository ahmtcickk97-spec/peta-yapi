import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton"; // Buraya ekledik

export default function Home() {
  return (
    <main className="min-h-screen relative"> {/* 'relative' eklemek z-index yönetimi için iyidir */}
      <Navbar />
      <Hero />
      <div id="hakkimizda"><About /></div>
      <div id="hizmetlerimiz"><Services /></div>
      <div id="projelerimiz"><Projects /></div>
      <div id="iletisim"><ContactForm /></div>
      <Footer />
      
      {/* WhatsApp Butonu en altta, her şeyin üstünde görünecek */}
      <WhatsAppButton /> 
    </main>
  );
}