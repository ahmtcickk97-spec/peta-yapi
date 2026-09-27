"use client";
import React from 'react';

const Hero = () => {
  return (
    <section
      id="anasayfa"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* ARKA PLAN İNŞAAT GÖRSELİ */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070"
          alt="Peta Yapı İnşaat"
          className="w-full h-full object-cover"
        />
        {/* Koyu overlay (İnci Group tarzı) */}
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* İÇERİK */}
      <div className="relative z-20 text-center px-4 max-w-5xl">
        <h1 className="font-display text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.15] tracking-[0.06em] mb-8">
          Güvenle Dönüşüm
          <br />
          Sağlam Yarınlar
        </h1>

        <p className="text-white/80 text-sm sm:text-base md:text-lg mb-12 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
          Peta Yapı ile modern mimari ve mühendislik disiplinini buluşturuyoruz.
          Geleceğin yapılarını bugünden güvenle inşa ediyoruz.
        </p>

        {/* BUTONLAR */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projelerimiz"
            className="group inline-flex items-center gap-3 border border-white/70 text-white px-10 py-4 uppercase tracking-[0.2em] text-[11px] font-medium hover:bg-white hover:text-[#111111] transition-all duration-300"
          >
            Projelerimizi İncele
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#iletisim"
            className="inline-flex items-center gap-3 bg-[#a89b89] text-white px-10 py-4 uppercase tracking-[0.2em] text-[11px] font-medium hover:bg-[#8a7d6b] transition-all duration-300"
          >
            Ücretsiz Ekspertiz Al
          </a>
        </div>
      </div>

      {/* AŞAĞI KAYDIRMA İŞARETİ */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
