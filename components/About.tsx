"use client";
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="hakkimizda" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          
          {/* GÖRSEL ALANI - Mobilde de görünmesi için optimize edildi */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[300px] sm:h-[400px] md:h-[600px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/projects/midyat/ana-cephe.webp" 
                alt="Peta Yapı Zeytinburnu" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Sağ Alt Köşedeki Tecrübe Kutusu (Mobilde gizledik, ekranı kaplamasın) */}
            <div className="absolute -bottom-4 -right-4 bg-[#001F3F] text-white p-6 rounded-2xl hidden sm:block border-b-4 border-[#38BDF8]">
              <p className="text-3xl font-black">10+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#38BDF8]">Yıllık Güven</p>
            </div>
          </div>

          {/* METİN ALANI */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h4 className="text-[#38BDF8] font-black text-xs md:text-sm tracking-[0.3em] uppercase mb-4">Biz Kimiz?</h4>
            <h2 className="text-3xl md:text-6xl font-black text-[#001F3F] mb-6 leading-tight uppercase tracking-tighter">
              İstanbul'un Kalbinde <br /> Değer İnşa Ediyoruz
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
              Peta Yapı olarak, **İstanbul Zeytinburnu** merkezli operasyonlarımızla şehrin çehresini değiştiren projelere imza atıyoruz. Modern mimariyi ve mühendislik disiplinini, Zeytinburnu'nun dinamik yapısıyla buluşturarak depreme dayanıklı ve estetik yaşam alanları sunuyoruz.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
              <div className="space-y-2">
                <h5 className="font-black text-[#001F3F] uppercase text-xs tracking-widest text-[#38BDF8]">Vizyonumuz</h5>
                <p className="text-gray-500 text-sm">Zeytinburnu'nda kentsel dönüşümün öncüsü olarak modern bir gelecek kurmak.</p>
              </div>
              <div className="space-y-2">
                <h5 className="font-black text-[#001F3F] uppercase text-xs tracking-widest text-[#38BDF8]">Misyonumuz</h5>
                <p className="text-gray-500 text-sm">İstanbul genelinde güvenli ve lüks yapıları en yüksek kalitede teslim etmek.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;