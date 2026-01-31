"use client";
import React from 'react';

const Hero = () => {
  return (
    <section id="anasayfa" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* İnşaat Temalı Arka Plan */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] scale-105" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')"}}
      >
        {/* Koyu Overlay (Yazıların okunması için) */}
        <div className="absolute inset-0 bg-[#001F3F]/60 backdrop-blur-[1px]"></div>
      </div>

      {/* İçerik Alanı */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
          GÜVENLE DÖNÜŞÜM <br />
          <span className="text-white bg-[#001F3F] px-4 py-1">SAĞLAM YARINLAR</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
          Peta Yapı ile modern mimari ve mühendislik disiplinini buluşturuyoruz. Geleceğin yapılarını bugünden güvenle inşa ediyoruz.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          {/* Çalışan Tuş 1 */}
          <a 
            href="#projelerimiz" 
            className="bg-white text-[#001F3F] px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-[#38BDF8] hover:text-white transition-all shadow-2xl active:scale-95"
          >
            PROJELERİMİZİ İNCELE
          </a>

          {/* Çalışan Tuş 2 */}
          <a 
            href="#iletisim" 
            className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#001F3F] transition-all active:scale-95"
          >
            ÜCRETSİZ EKSPERTİZ AL
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;