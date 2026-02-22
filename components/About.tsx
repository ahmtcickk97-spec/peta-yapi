"use client";
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="hakkimizda" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* --- GÖRSEL ALANI (Güncellendi) --- */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50">
              <Image 
                // YENİ GÖRSEL YOLU: render.webp olarak ayarlandı
                src="/render.webp" 
                alt="Peta Yapı Kurumsal" 
                width={700}
                height={800}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Dekoratif Mavi Kutu */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#38BDF8] rounded-[3rem] -z-10 opacity-20 blur-2xl"></div>
            
            {/* Deneyim Rozeti */}
            <div className="absolute -bottom-10 -left-10 bg-[#001F3F] text-white p-8 rounded-[2rem] shadow-2xl hidden md:block z-20">
              <p className="text-4xl font-black text-[#38BDF8]">10+</p>
              <p className="text-xs uppercase tracking-widest font-bold opacity-80">Yıllık Tecrübe</p>
            </div>
          </div>

          {/* --- İÇERİK ALANI --- */}
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-[#38BDF8]/10 text-[#38BDF8] rounded-full text-xs font-black uppercase tracking-widest">
              Biz Kimiz?
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#001F3F] leading-tight uppercase tracking-tighter">
              Zeytinburnu’nda <br />
              <span className="text-[#38BDF8]">Geleceği İnşa</span> Ediyoruz
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Peta Yapı olarak, 10 yılı aşkın süredir kentsel dönüşüm ve modern mimari disipliniyle sağlam yarınlar inşa ediyoruz. Özellikle Zeytinburnu ve İstanbul genelinde binlerce aileyi güvenli ve estetik yaşam alanlarıyla buluşturduk.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="text-[#001F3F] font-black mb-2 uppercase text-sm">Vizyonumuz</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Modern mimariyi, deprem yönetmeliğine uygun en sağlam tekniklerle harmanlamak.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="text-[#001F3F] font-black mb-2 uppercase text-sm">Misyonumuz</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Her projemizde "Güvenle Dönüşüm" sözünü tutarak hak sahiplerine değer katmak.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;