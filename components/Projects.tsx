"use client";
import React, { useState } from 'react';
import Image from 'next/image';

// PROJE VERİLERİ VE FOTOĞRAF SIRALAMASI
const projectData = {
  id: "midyat-modern-konut",
  title: "Midyat Modern Konut Projesi",
  location: "Mardin / Midyat",
  description: "Midyat'ın yöresel taş mimarisi ile modern yaşamın konforunu birleştiren bu projemiz, Peta Yapı'nın kalite standartlarını yansıtan en seçkin eserlerindendir. Her detay, sağlamlık ve estetik önceliğiyle tasarlandı.",
  category: "Konut İnşaatı",
  details: ["Modern Mimari", "Deprem Yönetmeliğine Uygun", "Lüks İç Mekan", "Taş İşçiliği"],
  
  // Ana Kapak Fotoğrafı
  mainImage: "/projects/midyat/ana-cephe.webp", 

  // Galeri Fotoğrafları (Sırasıyla: Dış, İç, Detay)
  gallery: [
    "/projects/midyat/arka-cephe.webp",
    "/projects/midyat/teras.webp",
    "/projects/midyat/balkon.webp",
    "/projects/midyat/salon.webp",
    "/projects/midyat/mutfak.webp",
    "/projects/midyat/oda-1.webp",
    "/projects/midyat/oda-2.webp",
    "/projects/midyat/oda-3.webp",
    "/projects/midyat/banyo.webp",
    "/projects/midyat/banyo-2.webp",
    "/projects/midyat/asansor.webp",
  ]
};

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Başlık Bölümü */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#001F3F] uppercase tracking-tighter mb-4">
            PROJELERİMİZ
          </h2>
          <div className="h-1.5 w-32 bg-[#38BDF8] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 transition-all hover:shadow-blue-500/10">
            <div className="grid lg:grid-cols-2">
              
              {/* SOL TARAF: GÖRSELLER VE KAYDIRILABİLİR GALERİ */}
              <div className="p-6 md:p-10 space-y-6 bg-white">
                {/* Ana Fotoğraf */}
                <div 
                  className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-lg cursor-zoom-in group"
                  onClick={() => setSelectedImg(projectData.mainImage)}
                >
                  <Image 
                    src={projectData.mainImage} 
                    alt={projectData.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute top-6 left-6 bg-[#001F3F] text-white text-[10px] font-bold px-5 py-2.5 rounded-full uppercase tracking-widest shadow-xl">
                    {projectData.category}
                  </div>
                </div>
                
                {/* Küçük Resimler Galerisi (Yana Kaydırılabilir) */}
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {projectData.gallery.map((img, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedImg(img)}
                      className="relative h-24 w-32 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#38BDF8] transition-all shadow-md active:scale-95"
                    >
                      <Image src={img} alt={`Galeri ${i}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center">← Fotoğrafları yana kaydırın →</p>
              </div>

              {/* SAĞ TARAF: PROJE DETAYLARI */}
              <div className="p-10 lg:p-20 flex flex-col justify-center">
                <div className="flex items-center text-[#38BDF8] font-black text-sm tracking-[0.2em] uppercase mb-6">
                  <span className="mr-2 text-xl">📍</span> {projectData.location}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-[#001F3F] mb-8 uppercase tracking-tight leading-[1.1]">
                  {projectData.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-12 text-lg font-medium">
                  {projectData.description}
                </p>

                {/* Özellikler */}
                <div className="flex flex-wrap gap-3">
                  {projectData.details.map((detail, index) => (
                    <span 
                      key={index} 
                      className="bg-[#001F3F]/5 px-6 py-3 rounded-2xl text-[11px] font-black text-[#001F3F] uppercase tracking-wider border border-[#001F3F]/10"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX (FOTOĞRAFI BÜYÜTME MODALI) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-[#001F3F]/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
            <Image 
              src={selectedImg} 
              alt="Büyük Görünüm" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <button className="absolute top-10 right-10 text-white text-5xl font-light hover:text-[#38BDF8] transition-colors">&times;</button>
        </div>
      )}
    </section>
  );
};

export default Projects;