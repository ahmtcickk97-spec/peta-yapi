import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services'; // 1. ADIM: Hizmetler bileşenini içeri aktardık

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Giriş Alanı */}
      <Hero />
      
      {/* Hoş Geldiniz Mesajı */}
      <section className="py-20 bg-white container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-800">Peta Yapı'ya Hoş Geldiniz</h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-4"></div>
        <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
          30 yılı aşkın tecrübemizle Türkiye'nin dört bir yanında sağlam temeller atıyoruz. 
          Modern mimariyi mühendislik disipliniyle birleştirerek güven inşa ediyoruz.
        </p>
      </section>

      {/* Projelerimiz Bölümü */}
      <Projects />
      
      {/* 2. ADIM: Hizmetler bölümünü en alta yerleştirdik */}
      <Services /> 
      <ContactForm />
    </main>
  );
}