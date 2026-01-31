"use client";
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="hakkimizda" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          
          {/* GÖRSEL ALANI - Mobil uyumluluk korundu */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[300px] sm:h-[450px] md:h-[600px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/projects/midyat/ana-cephe.webp" 
                alt="Peta Yapı İstanbul Projeleri" 
                fill 
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Tecrübe Kutusu */}
            <div className="absolute -bottom-4 -right-4 bg-[#001F3F] text-white p-6 md:p-8 rounded-2xl hidden sm:block border-b-4 border-[#38BDF8] shadow-2xl">
              <p className="text-4xl font-black">10+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#38BDF8]">Yıllık Sektör Tecrübesi</p>
            </div>
          </div>

          {/* METİN ALANI */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h4 className="text-[#38BDF8] font-black text-xs md:text-sm tracking-[0.3em] uppercase mb-4">
              Kurumsal Kimliğimiz
            </h4>
            <h2 className="text-3xl md:text-6xl font-black text-[#001F3F] mb-6 leading-tight uppercase tracking-tighter">
              Zeytinburnu'ndan Başlayan <br /> 
              <span className="text-[#38BDF8]">İstanbul Vizyonu</span>
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
              Peta Yapı olarak, merkezimizin bulunduğu Zeytinburnu başta olmak üzere, İstanbul'un her iki yakasında modern mimari ve mühendislik disipliniyle değer inşa ediyoruz. Şehrin dokusuna saygı duyan, deprem yönetmeliğine tam uyumlu ve estetik kaygısı yüksek projelerimizle, İstanbul'un kentsel dönüşüm sürecine öncülük ediyoruz.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div className="group">
                <h5 className="font-black text-[#001F3F] uppercase text-xs tracking-widest mb-2 group-hover:text-[#38BDF8] transition-colors">
                  Geniş Hizmet Ağı
                </h5>
                <p className="text-gray-500 text-sm">
                  Kağıthane'den Levent'e, Zeytinburnu'ndan çevre ilçelere kadar geniş bir lokasyonda prestijli projeler üretiyoruz.
                </p>
              </div>
              <div className="group">
                <h5 className="font-black text-[#001F3F] uppercase text-xs tracking-widest mb-2 group-hover:text-[#38BDF8] transition-colors">
                  Güvenli Yarınlar
                </h5>
                <p className="text-gray-500 text-sm">
                  Yalnızca bina değil; İstanbul'un kalbinde huzurla yaşanacak, dayanıklı ve modern yaşam alanları tasarlıyoruz.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;