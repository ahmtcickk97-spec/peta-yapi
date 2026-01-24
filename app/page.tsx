import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Giriş Alanı: İlk karşılama ekranı */}
      <Hero />

      {/* Hakkımızda Bölümü: Vizyon ve Deneyim */}
      <section id="about">
        <About />
      </section>

      {/* Hizmetlerimiz Bölümü: Sunulan çözümler */}
      <section id="services">
        <Services />
      </section>

      {/* Projelerimiz Bölümü: Midyat projesi ve diğerleri */}
      <section id="projects">
        <Projects />
      </section>

      {/* İletişim Formu Bölümü: Müşteri etkileşimi */}
      <section id="contact" className="bg-gray-50 py-12">
        <ContactForm />
      </section>
    </>
  );
}