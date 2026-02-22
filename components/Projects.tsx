"use client";
import React, { useState } from 'react';
import Image from 'next/image';

// 1. Tip Tanımlaması (Video desteği eklendi)
type ProjectType = {
  id: string;
  title: string;
  location: string;
  description: string;
  category: string;
  details: string[];
  status: "completed" | "ongoing";
  currentImage?: string; 
  futureImage?: string;  
  mainImage?: string;
  videoUrl?: string; // Yeni projeniz için video alanı
  gallery?: string[];
};

// 2. Proje Verileri
const projects: ProjectType[] = [
  {
    id: "zeytinburnu-sumer-projesi",
    title: "Sümer Yaşam ve Kentsel Dönüşüm",
    location: "İstanbul / Zeytinburnu (Hatboyu & Sahil Hattı)",
    description: "Zeytinburnu’nun kalbi Sümer Mahallesi’nde, Hatboyu Caddesi ile Sahil Yolu arasında stratejik bir konumda yer alan kentsel dönüşüm projemiz. Hem ulaşım akslarına hem de sahil hattına yürüme mesafesinde, modern ve güvenli bir yaşamın kapılarını aralıyoruz.",
    category: "Kentsel Dönüşüm Projesi",
    details: ["Anlaşma Sağlandı", "Hatboyu'na Yakın", "Sahil Yoluna Komşu", "Depreme Dayanıklı"],
    status: "ongoing",
    mainImage: "/projects/sumer/ana-gorsel.webp", // Buraya görselin ismini yazabilirsin
    videoUrl: "/projects/sumer/proje-video.mp4",  // Buraya videonun ismini yazabilirsin
  },
  {
    id: "kagithane-projesi",
    title: "Kağıthane Prestij Kule",
    location: "İstanbul / Kağıthane (Talatpaşa Caddesi)",
    description: "İstanbul'un kalbinde, Levent iş merkezlerine komşu lokasyonda yükselen yeni projemiz. Şehrin dinamizmini modern mimari ve yüksek yatırım değeriyle buluşturuyoruz.",
    category: "Karma Proje (Konut + Ticari)",
    details: ["Temel Aşamasında", "Levent'e 5 Dk", "Yüksek Kira Getirisi", "Metroya Yakın"],
    status: "ongoing",
    currentImage: "/projects/kagithane/temel.webp",
    futureImage: "/projects/kagithane/render.webp",
  },
  {
    id: "midyat-modern-konut",
    title: "Midyat Modern Konutları",
    location: "Mardin / Midyat",
    description: "Midyat'ın yöresel taş mimarisi ile modern yaşamın konforunu birleştiren bu projemiz, Peta Yapı'nın kalite standartlarını yansıtan en seçkin eserlerindendir.",
    category: "Tamamlanmış Proje",
    details: ["Modern Mimari", "Deprem Yönetmeliğine Uygun", "Lüks İç Mekan", "Taş İşçiliği"],
    status: "completed",
    mainImage: "/projects/midyat/ana-cephe.webp", 
    gallery: [
      "/projects/midyat/arka-cephe.webp",
      "/projects/midyat/teras.webp",
      "/projects/midyat/balkon.webp",
      "/projects/midyat/salon.webp",
      "/projects/midyat/mutfak.webp",
      "/projects/midyat/oda-1.webp",
      "/projects/midyat/oda-2.webp",
      "/projects/midyat/banyo-2.webp",
    ]
  }
];

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="projelerimiz" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:max-w-[95%]">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-[#001F3F] uppercase tracking-tighter mb-4">
            PROJELERİMİZ
          </h2>
          <div className="h-1 w-20 md:w-32 bg-[#38BDF8] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-16 md:space-y-28">
          {projects.map((project, index) => (
            <div key={project.id} className="bg-gray-50 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* --- GÖRSEL VE VİDEO ALANI --- */}
                <div className="p-4 md:p-8 bg-white h-full">
                  {project.videoUrl ? (
                    // Eğer video varsa video player gösterilir
                    <div className="space-y-4">
                       <div className="relative h-[250px] sm:h-[350px] md:h-[450px] rounded-[1.5rem] overflow-hidden shadow-lg">
                        <video 
                          src={project.videoUrl} 
                          controls 
                          className="w-full h-full object-cover"
                          poster={project.mainImage} // Video yüklenene kadar görünecek resim
                        />
                      </div>
                      <p className="text-[10px] font-bold text-[#38BDF8] uppercase tracking-widest text-center">Proje Tanıtım Videosu</p>
                    </div>
                  ) : project.status === "ongoing" ? (
                    <div className="flex flex-col gap-6 h-full justify-center">
                      <div className="relative h-[220px] md:h-[280px] rounded-[1.5rem] overflow-hidden shadow-lg cursor-zoom-in group" onClick={() => setSelectedImg(project.futureImage || null)}>
                         <Image 
                           src={project.futureImage || ""} 
                           alt="Gelecek Vizyonu" 
                           fill 
                           className="object-cover transition-transform duration-700 group-hover:scale-105" 
                           sizes="(max-width: 768px) 100vw, 500px"
                           quality={75}
                           priority={index === 0}
                         />
                         <div className="absolute top-3 left-3 bg-[#38BDF8] text-white text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm z-10">
                           PROJE BİTİŞ VİZYONU (RENDER)
                         </div>
                      </div>
                      <div className="relative h-[220px] md:h-[280px] rounded-[1.5rem] overflow-hidden shadow-lg cursor-zoom-in group" onClick={() => setSelectedImg(project.currentImage || null)}>
                         <Image 
                           src={project.currentImage || ""} 
                           alt="Mevcut Durum" 
                           fill 
                           className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" 
                           sizes="(max-width: 768px) 100vw, 500px"
                           quality={75}
                         />
                         <div className="absolute top-3 left-3 bg-gray-800 text-white text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm z-10">
                           MEVCUT DURUM (ŞANTİYE)
                         </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="relative h-[250px] sm:h-[350px] md:h-[500px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg cursor-zoom-in group" onClick={() => setSelectedImg(project.mainImage || null)}>
                        <Image 
                          src={project.mainImage || ""} 
                          alt={project.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-105" 
                          sizes="(max-width: 768px) 100vw, 600px"
                          quality={80}
                        />
                        <div className="absolute top-4 left-4 bg-[#001F3F] text-white text-[9px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-xl z-10">{project.category}</div>
                      </div>
                      {project.gallery && (
                        <div className="relative">
                          <div className="flex gap-3 overflow-x-auto pb-4 pt-2 scrollbar-thin scrollbar-thumb-[#38BDF8] snap-x">
                            {project.gallery.map((img, i) => (
                              <div key={i} onClick={() => setSelectedImg(img)} className="relative h-20 w-28 md:h-24 md:w-32 flex-shrink-0 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#38BDF8] transition-all snap-start shadow-sm">
                                <Image 
                                  src={img} 
                                  alt={`Galeri ${i}`} 
                                  fill 
                                  className="object-cover" 
                                  sizes="150px"
                                  quality={60}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* --- DETAY ALANI --- */}
                <div className="p-8 md:p-16 flex flex-col justify-center">
                  <div className="flex items-center text-[#38BDF8] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
                    <span className="mr-2">📍</span> {project.location}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-[#001F3F] mb-6 uppercase tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-base font-medium">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.details.map((detail, index) => (
                      <span key={index} className={`px-4 py-2 md:px-5 md:py-2.5 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-wider border ${project.status === 'ongoing' ? 'bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/20' : 'bg-[#001F3F]/5 text-[#001F3F] border-[#001F3F]/10'}`}>
                        {detail}
                      </span>
                    ))}
                  </div>
                  {project.status === 'ongoing' && (
                    <a href="#iletisim" className="mt-8 inline-block text-center bg-[#001F3F] text-white hover:bg-[#38BDF8] px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all w-full md:w-auto">
                      Bilgi ve Teklif Alın
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX (Resimler için) */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-[#001F3F]/98 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setSelectedImg(null)}>
          <div className="relative w-full h-full max-w-6xl">
            <Image 
              src={selectedImg} 
              alt="Büyük Görünüm" 
              fill 
              className="object-contain" 
              sizes="100vw"
              quality={90}
            />
          </div>
          <button className="absolute top-6 right-6 text-white text-4xl">&times;</button>
        </div>
      )}
    </section>
  );
};

export default Projects;