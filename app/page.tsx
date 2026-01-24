import Hero from '@/components/Hero';
import About from "@/components/About";
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Giriş Alanı: İlk izlenim burada oluşur */}
      <Hero />
      
      {/* 2. Hakkımızda Bölümü: Vizyon ve Deneyim (Daha önce yaptığımız About bileşeni) */}
      <About />

      {/* 3. Hizmetlerimiz: Ne yapıyoruz? */}
      <Services /> 

      {/* 4. Projelerimiz: Neler yaptık? (Midyat projesi burada parlayacak) */}
      <Projects />
      
      {/* 5. İletişim: Müşterinin bize ulaşacağı son durak */}
      <div className="bg-gray-50 py-12">
        <ContactForm />
      </div>
    </main>
  );
}