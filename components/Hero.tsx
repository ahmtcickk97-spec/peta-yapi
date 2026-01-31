import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Arka Plan Görseli */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] scale-105 hover:scale-100"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')`,
        }}
      >
        {/* Lacivert Ağırlıklı Overlay - Kurumsal hissi artırır */}
        <div className="absolute inset-0 bg-[#001F3F]/60 backdrop-blur-[2px]"></div>
      </div>

      {/* İçerik Alanı */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
          GÜVENLE DÖNÜŞÜM <br />
          <span className="text-white bg-[#001F3F] px-4 py-1 inline-block mt-2">SAĞLAM YARINLAR</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-medium tracking-wide">
          Peta Yapı ile modern mimari ve mühendislik disiplinini buluşturuyoruz. Geleceğin yapılarını bugünden güvenle inşa ediyoruz.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Ana Buton - Projelere Gider */}
          <a 
            href="#projects"
            className="w-full sm:w-auto bg-white text-[#001F3F] hover:bg-[#38BDF8] hover:text-white px-10 py-4 rounded-sm font-black text-sm uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95 text-center"
          >
            PROJELERİMİZİ İNCELE
          </a>
          
          {/* İkincil Buton - İletişim Formuna (Ekspertiz) Gider */}
          <a 
            href="#contact"
            className="w-full sm:w-auto bg-transparent border-2 border-white/50 hover:border-white text-white px-10 py-4 rounded-sm font-black text-sm uppercase tracking-[0.2em] transition-all active:scale-95 text-center"
          >
            ÜCRETSİZ EKSPERTİZ AL
          </a>
        </div>
      </div>

      {/* Alt Kısım Dekoratif Çizgi (İnşaat/Mimari Teması) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent opacity-50"></div>
    </section>
  );
};

export default Hero;