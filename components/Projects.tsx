"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const projectData = {
  id: "midyat-modern-konut",
  title: "Midyat Modern Konut Projesi",
  location: "Mardin / Midyat",
  description: "Midyat'ın yöresel taş mimarisi ile modern yaşamın konforunu birleştiren bu projemiz, Peta Yapı'nın kalite standartlarını yansıtan en seçkin eserlerindendir.",
  category: "Konut İnşaatı",
  details: ["Modern Mimari", "Deprem Yönetmeliğine Uygun", "Lüks İç Mekan", "Taş İşçiliği"],
  mainImage: "/projects/midyat/ana-cephe.webp", 
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
    <section id="projects" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Başlık */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-[#001F3F] uppercase tracking-tighter mb-4">
            PROJELERİMİZ
          </h2>
          <div className="h-1 w-20 md:w-32 bg-[#38BDF8] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* GÖRSEL ALANI */}
              <div className="p-4 md:p-8 space-y-4 bg-white">
                {/* Ana Fotoğraf - Mobilde yüksekliği düşürdük */}
                <div 
                  className="relative h-[250px] sm:h-[350px] md:h-[500px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg cursor-zoom-in group"
                  onClick={() => setSelectedImg(projectData.mainImage)}
                >
                  <Image 
                    src={projectData.mainImage} 
                    alt={projectData.title} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-[#001F3F] text-white text-[9px] font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                    {projectData.category}
                  </div>
                </div>
                
                {/* Galeri - Mobilde kaydırılabilir yapıyı düzelttik */}
                <div className="relative">
                  <div className="flex gap-3 overflow-x-auto pb-4 pt-2 scrollbar-thin scrollbar-thumb-[#38BDF8] snap-x">
                    {projectData.gallery.map((img, i) => (
                      <div 
                        key={i} 
                        onClick={() => setSelectedImg(img)}
                        className="relative h-20 w-28 md:h-24 md:w-32 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#38BDF8] transition-all snap-start shadow-sm"
                      >
                        <Image src={img} alt={`Galeri ${i}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  {/* Mobilde kaydırma ipucu */}
                  <div className="md:hidden text-center text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                    ← Fotoğrafları Kaydırın →
                  </div>
                </div>
              </div>

              {/* DETAY ALANI */}
              <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center">
                <div className="flex items-center text-[#38BDF8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
                  <span className="mr-2">📍</span> {projectData.location}
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black text-[#001F3F] mb-6 md:mb-8 uppercase tracking-tight leading-tight">
                  {projectData.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8 md:mb-12 text-base md:text-lg font-medium">
                  {projectData.description}
                </p>

                {/* Özellik Etiketleri */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {projectData.details.map((detail, index) => (
                    <span 
                      key={index} 
                      className="bg-[#001F3F]/5 px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl text-[9px] md:text-[11px] font-black text-[#001F3F] uppercase tracking-wider border border-[#001F3F]/10"
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

      {/* LIGHTBOX MODAL */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-[#001F3F]/98 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative w-full h-[70vh] md:h-full max-w-6xl">
            <Image src={selectedImg} alt="Büyük Görünüm" fill className="object-contain" />
          </div>
          <button className="absolute top-6 right-6 text-white text-4xl">&times;</button>
        </div>
      )}
    </section>
  );
};

export default Projects;