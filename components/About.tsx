"use client";
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="hakkimizda" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">

          {/* GÖRSEL ALANI - Peta Yapı binası */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[340px] sm:h-[480px] md:h-[600px] w-full overflow-hidden shadow-2xl">
              <Image
                src="/images/peta-building.jpg"
                alt="Peta Yapı Binası"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Tecrübe Kutusu */}
            <div className="absolute -bottom-6 -right-4 md:right-6 bg-[#111111] text-white px-8 py-7 hidden sm:block shadow-2xl border-b-2 border-[#a89b89]">
              <p className="font-display text-4xl md:text-5xl">10+</p>
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#a89b89] mt-2">
                Yıllık Sektör Tecrübesi
              </p>
            </div>
          </div>

          {/* METİN ALANI */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h4 className="text-[#a89b89] font-medium text-[11px] md:text-xs tracking-[0.35em] uppercase mb-5">
              Kurumsal Kimliğimiz
            </h4>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[#111111] mb-8 leading-[1.25] uppercase tracking-[0.02em]">
              Zeytinburnu'ndan Başlayan
              <br />
              <span className="text-[#a89b89]">İstanbul Vizyonu</span>
            </h2>

            <p className="text-[#555555] text-sm md:text-base mb-10 leading-relaxed font-light">
              Peta Yapı olarak, merkezimizin bulunduğu Zeytinburnu başta olmak üzere,
              İstanbul'un her iki yakasında modern mimari ve mühendislik disipliniyle
              değer inşa ediyoruz. Şehrin dokusuna saygı duyan, deprem yönetmeliğine tam
              uyumlu ve estetik kaygısı yüksek projelerimizle, İstanbul'un kentsel dönüşüm
              sürecine öncülük ediyoruz.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#e6e2dc]">
              <div className="group">
                <h5 className="font-display text-[#111111] uppercase text-xs tracking-[0.1em] mb-3 group-hover:text-[#a89b89] transition-colors">
                  Geniş Hizmet Ağı
                </h5>
                <p className="text-[#777] text-sm font-light leading-relaxed">
                  Kağıthane'den Levent'e, Zeytinburnu'ndan çevre ilçelere kadar geniş bir
                  lokasyonda prestijli projeler üretiyoruz.
                </p>
              </div>
              <div className="group">
                <h5 className="font-display text-[#111111] uppercase text-xs tracking-[0.1em] mb-3 group-hover:text-[#a89b89] transition-colors">
                  Güvenli Yarınlar
                </h5>
                <p className="text-[#777] text-sm font-light leading-relaxed">
                  Yalnızca bina değil; İstanbul'un kalbinde huzurla yaşanacak, dayanıklı ve
                  modern yaşam alanları tasarlıyoruz.
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
