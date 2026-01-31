import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="hakkımızda" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* GÖRSEL ALANI - Bina Fotoğrafı Artık Burada */}
          <div className="lg:w-1/2 relative">
            <div className="relative h-[400px] md:h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
              <Image 
                src="/projects/midyat/ana-cephe.webp" 
                alt="Peta Yapı Proje" 
                fill 
                className="object-cover"
              />
            </div>
            {/* Dekoratif Lacivert Kutu */}
            <div className="absolute -bottom-6 -right-6 bg-[#001F3F] text-white p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-black">10+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">Yıllık Tecrübe</p>
            </div>
          </div>

          {/* METİN ALANI */}
          <div className="lg:w-1/2">
            <h4 className="text-[#38BDF8] font-black text-sm tracking-[0.3em] uppercase mb-4">Biz Kimiz?</h4>
            <h2 className="text-4xl md:text-6xl font-black text-[#001F3F] mb-8 leading-tight uppercase tracking-tighter">
              Geleceği Güçlü <br /> Temellerle İnşa Ediyoruz
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
              Peta Yapı, modern mimari anlayışı ve mühendislik disiplinini birleştirerek güvenli yaşam alanları inşa eder. Özellikle Mardin ve çevresinde kentsel dönüşüm ve modern konut projelerinde öncü bir rol üstleniyoruz.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h5 className="font-black text-[#001F3F] mb-2 uppercase text-sm tracking-widest">Vizyonumuz</h5>
                <p className="text-gray-500 text-sm">Depreme dayanıklı, estetik ve sürdürülebilir yapılarla şehre değer katmak.</p>
              </div>
              <div>
                <h5 className="font-black text-[#001F3F] mb-2 uppercase text-sm tracking-widest">Misyonumuz</h5>
                <p className="text-gray-500 text-sm">Müşteri memnuniyetini merkeze alarak, her projede en yüksek kaliteyi sunmak.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;