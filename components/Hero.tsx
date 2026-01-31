"use client";
import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="anasayfa" className="relative h-[90vh] flex items-center overflow-hidden bg-[#001F3F]">
      {/* Arka Plan Görseli ve Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F] via-[#001F3F]/80 to-transparent z-10" />
        <img 
          src="/projects/midyat/ana-cephe.webp" 
          alt="Peta Yapı Projeleri" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h4 className="text-[#38BDF8] font-black text-sm md:text-base tracking-[0.4em] uppercase mb-4 animate-fade-in">
            Geleceği İnşa Ediyoruz
          </h4>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] uppercase tracking-tighter">
            Modern Yaşamın <br /> 
            <span className="text-[#38BDF8]">Yeni Mimarı</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-medium">
            Zeytinburnu'ndan tüm İstanbul'a uzanan güvenli, estetik ve depreme dayanıklı konut projelerimizle hayatınıza değer katıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            {/* TUŞ 1: Projelerimizi İncele */}
            <a 
              href="#projelerimiz" 
              className="bg-[#38BDF8] text-[#001F3F] px-8 py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-xl text-center active:scale-95"
            >
              Projelerimizi İncele
            </a>

            {/* TUŞ 2: Ücretsiz Ekspertiz Al */}
            <a 
              href="#iletisim" 
              className="bg-transparent border-2 border-white/30 text-white px-8 py-5 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#001F3F] hover:border-white transition-all text-center active:scale-95"
            >
              Ücretsiz Ekspertiz Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;