"use client";
import React from 'react';

const Hero = () => {
  return (
    <section id="anasayfa" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Arka Plan Görseli */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/projects/midyat/ana-cephe.webp" 
          alt="Peta Yapı" 
          className="w-full h-full object-cover"
        />
        {/* Görselin üzerine hafif bir karartma (yazıların okunması için) */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* İçerik Alanı */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          PETA YAPI
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          Modern Mimari ve Güvenli İnşaatın Adresi
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* TUŞ 1: Projelerimize Kaydırır */}
          <a 
            href="#projelerimiz" 
            className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all"
          >
            Projelerimizi İncele
          </a>

          {/* TUŞ 2: İletişim Formuna Kaydırır */}
          <a 
            href="#iletisim" 
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all"
          >
            Ücretsiz Ekspertiz Al
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;