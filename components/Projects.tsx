"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const projectData = {
  id: "midyat-modern-konut",
  title: "Midyat Modern Konut Projesi",
  location: "Mardin / Midyat",
  description: "Midyat'ın geleneksel mimarisini modern konforla birleştiren bu projemizde, estetik ve sağlamlığı tek bir yapıda buluşturduk. Peta Yapı güvencesiyle hayata geçen bu özel projede her detay, kaliteli bir yaşam için tasarlandı.",
  category: "Konut İnşaatı",
  details: ["Modern Mimari", "Deprem Yönetmeliğine Uygun", "Lüks İç Mekan", "Taş İşçiliği"],
  
  // ANA KAPAK
  mainImage: "/projects/midyat/ana cephe.webp", 

  // GALERİ SIRALAMASI: Dış -> Ortak Alan -> İç Mekan
  gallery: [
    "/projects/midyat/arka cephe.webp",
    "/projects/midyat/teras.webp",
    "/projects/midyat/balkon.webp",
    "/projects/midyat/salon.webp",
    "/projects/midyat/mutfak.webp",
    "/projects/midyat/oda 1.webp",
    "/projects/midyat/oda 2.webp",
    "/projects/midyat/oda 3.webp",
    "/projects/midyat/banyo.webp",
    "/projects/midyat/banyo 2.webp",
    "/projects/midyat/asansor.webp",
  ]
};

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#001F3F] uppercase tracking-tighter mb-4">
            PROJELERİMİZ
          </h2>
          <div className="h-1.5 w-32 bg-[#38BDF8] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
            <div className="grid lg:grid-cols-2">
              
              {/* GÖRSEL ALANI */}
              <div className="p-6 md:p-8 space-y-4 bg-white">
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
                
                {/* Kaydırılabilir Küçük Resimler */}
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                  {projectData.gallery.map((img, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedImg(img)}
                      className="relative h-20 w-28 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#38BDF8] transition-all shadow-md active:scale-95"
                    >
                      <Image src={img} alt={`Detay ${i}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* DETAY ALANI */}
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center text-[#38BDF8] font-black text-sm tracking-widest uppercase mb-6">
                  📍 {projectData.location}
                </div>
                
                <h3 className="text-4xl font-black text-[#001F3F] mb-8 uppercase tracking-tight leading-none">
                  {projectData.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-10 text-lg font-medium">
                  {projectData.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {projectData.details.map((detail, index) => (
                    <span 
                      key={index} 
                      className="bg-white px-5 py-3 rounded-2xl text-[11px] font-black text-[#001F3F] uppercase tracking-wider border border-gray-200 shadow-sm"
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

      {/* LIGHTBOX (BÜYÜTME MODALI) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
            <Image src={selectedImg} alt="Büyük Görsel" fill className="object-contain" />
          </div>
          <button className="absolute top-8 right-8 text-white text-5xl hover:text-[#38BDF8] transition-colors">&times;</button>
        </div>
      )}
    </section>
  );
};

export default Projects;