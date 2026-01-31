"use client";
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="hakkimizda" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* GÖRSEL ALANI */}
          <div className="lg:w-1/2 relative">
            <div className="relative h-[400px] md:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/projects/midyat/ana-cephe.webp" 
                alt="Peta Yapı İstanbul Proje" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Dekoratif Bilgi Kutusu */}
            <div className="absolute -bottom-6 -right-6 bg-[#001F3F] text-white p-8 rounded-2xl hidden md:block border-b-4 border-[#38BDF8]">
              <p className="text-4xl font-black text-white">10+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">Yıllık Güven</p>
            </div>
          </div>

          {/* METİN ALANI */}
          <div className="lg:w-1/2">
            <h4 className="text-[#38BDF8] font-black text-sm tracking-[0.3em] uppercase mb-4">Biz Kimiz?</h4>
            <h2 className="text-4xl md:text-6xl font-black text-[#001F3F] mb-8 leading-tight uppercase tracking-tighter">
              İstanbul'un Kalbinde <br /> Değer İnşa Ediyoruz
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
              Peta Yapı olarak, **İstanbul Zeytinburnu** merkezli operasyonlarımızla şehrin çehresini değiştiren projelere imza atıyoruz. Modern mimariyi ve mühendislik disiplinini, Zeytinburnu'nun dinamik yapısıyla buluşturarak depreme dayanıklı ve estetik yaşam alanları sunuyoruz.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10 border-t border-gray-100 pt-8">
              <div>
                <h5 className="font-black text-[#001F3F] mb-2 uppercase text-xs tracking-widest text-[#38BDF8]">Vizyonumuz</h5>
                <p className="text-gray-500 text-sm">Zeytinburnu ve çevresinde kentsel dönüşümün öncüsü olarak modern bir gelecek kurmak.</p>
              </div>
              <div>
                <h5 className="font-black text-[#001F3F] mb-2 uppercase text-xs tracking-widest text-[#38BDF8]">Misyonumuz</h5>
                <p className="text-gray-500 text-sm">İstanbul'un her noktasında yüksek kalite standartlarında, güvenli ve lüks yapılar teslim etmek.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;