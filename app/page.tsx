import Navbar from "@/components/Navbar"; // Eksik olan buydu!
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Navigasyon her zaman en üstte durmalı */}
      <Navbar />

      {/* 2. Bölümler (ID'leri Navbar'daki linklerle eşitledim) */}
      <div id="anasayfa">
        <Hero />
      </div>

      <div id="hakkimizda">
        <About />
      </div>

      <div id="hizmetlerimiz">
        <Services />
      </div>

      <div id="projelerimiz">
        <Projects />
      </div>

      <div id="iletisim" className="bg-gray-50">
        <ContactForm />
      </div>
    </main>
  );
}