"use client";
import React, { useState } from 'react';
import Image from 'next/image';

// 1. Tip Tanımlaması
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
  videoUrl?: string;
  gallery?: string[];
};

// 2. Proje Verileri
const projects: ProjectType[] = [
  {
    id: "inci-yapi-residence",
    title: "İnci Yapı Residence",
    location: "Mersin / Yenişehir",
    description:
      "Mersin Yenişehir'de konumlanan İnci Yapı Residence, modern mimari çizgileri ve fonksiyonel yaşam alanlarıyla tasarlanmış nitelikli bir konut projesidir. Toplam 1.083 m² inşaat alanı üzerine inşa edilen proje, 1 blok, zemin + 5 kat olarak planlanmış olup, toplam 12 daireden oluşmaktadır. Düşük katlı ve butik proje anlayışıyla hayata geçirilen residence, geniş cam yüzeyler sayesinde gün ışığını maksimum seviyede içeri alan daireleriyle modern şehir yaşamını konforla buluşturur.",
    category: "Konut Projesi",
    details: ["1 Blok, Zemin + 5 Kat", "12 Daire", "1.083 m² İnşaat Alanı", "Butik Yaşam"],
    status: "completed",
    mainImage: "/projects/inci-yapi/1.jpg",
    gallery: ["/projects/inci-yapi/6.jpg"],
  },
  {
    id: "zeytinburnu-sumer-projesi",
    title: "Sümer Yaşam ve Kentsel Dönüşüm",
    location: "İstanbul / Zeytinburnu (Sümer)",
    description:
      "Zeytinburnu’nun kalbi Sümer Mahallesi’nde, Hatboyu Caddesi’ne komşu bu projemizde kentsel dönüşüm sürecini başlattık. Bölgenin dokusuna modern bir kimlik kazandırırken, hak sahiplerini depreme dayanıklı ve estetik yaşam alanlarıyla buluşturuyoruz.",
    category: "Kentsel Dönüşüm Projesi",
    details: ["Anlaşma Sağlandı", "Hatboyu'na Yakın", "Sahil Yoluna Komşu", "Depreme Dayanıklı"],
    status: "ongoing",
    mainImage: "/projects/sumer/ana-gorsel.webp",
    videoUrl: "/projects/sumer/proje-video.mp4",
  },
  {
    id: "kagithane-projesi",
    title: "Kağıthane Prestij Kule",
    location: "İstanbul / Kağıthane (Talatpaşa Caddesi)",
    description:
      "İstanbul'un kalbinde, Levent iş merkezlerine komşu lokasyonda yükselen yeni projemiz. Şehrin dinamizmini modern mimari ve yüksek yatırım değeriyle buluşturuyoruz.",
    category: "Karma Proje (Konut + Ticari)",
    details: ["İnşaat Aşamasında", "Levent'e 5 Dk", "Yüksek Kira Getirisi", "Metroya Yakın"],
    status: "ongoing",
    currentImage: "/projects/kagithane/santiye.jpg",
    futureImage: "/projects/kagithane/render.webp",
  },
  {
    id: "midyat-modern-konut",
    title: "Midyat Modern Konutları",
    location: "Mardin / Midyat",
    description:
      "Midyat'ın yöresel taş mimarisi ile modern yaşamın konforunu birleştiren bu projemiz, Peta Yapı'nın kalite standartlarını yansıtan en seçkin eserlerindendir.",
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
    ],
  },
];

const Projects = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="projelerimiz" className="py-20 md:py-28 bg-[#f7f6f4] overflow-hidden">
      <div className="container mx-auto px-4 lg:max-w-[95%]">
        <div className="text-center mb-14 md:mb-20">
          <h4 className="text-[#a89b89] font-medium text-[11px] tracking-[0.35em] uppercase mb-4">
            Referanslarımız
          </h4>
          <h2 className="font-display text-3xl md:text-4xl text-[#111111] uppercase tracking-[0.03em]">
            Projelerimiz
          </h2>
          <p className="text-[#777] text-sm md:text-base font-light mt-6 max-w-xl mx-auto">
            Modern mimari anlayışı ve yenilikçi tasarım yaklaşımımızla hayata geçirdiğimiz projelerimiz.
          </p>
          <div className="h-px w-16 bg-[#a89b89] mx-auto mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-14 md:space-y-24">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white overflow-hidden shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] border border-[#eee]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* --- SOL TARAF: GÖRSEL / VİDEO --- */}
                <div className="p-4 md:p-8 bg-white h-full">
                  {project.videoUrl ? (
                    <div className="space-y-4">
                      <div className="relative h-[250px] sm:h-[350px] md:h-[450px] overflow-hidden shadow-lg border border-[#eee]">
                        <video
                          src={project.videoUrl}
                          controls
                          playsInline
                          className="w-full h-full object-cover"
                          poster={project.mainImage}
                        />
                      </div>
                      <p className="text-[10px] font-medium text-[#a89b89] uppercase tracking-[0.25em] text-center">
                        Proje Tanıtım Videosu
                      </p>
                    </div>
                  ) : project.status === "ongoing" ? (
                    <div className="flex flex-col gap-6 h-full justify-center">
                      <div
                        className="relative h-[220px] md:h-[280px] overflow-hidden shadow-lg cursor-zoom-in group"
                        onClick={() => setSelectedImg(project.futureImage || null)}
                      >
                        <Image src={project.futureImage || ""} alt="Gelecek Vizyonu" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 500px" quality={85} />
                        <div className="absolute top-3 left-3 bg-[#a89b89] text-white text-[9px] font-medium px-3 py-1.5 uppercase tracking-[0.2em] z-10">
                          Proje Bitiş Vizyonu (Render)
                        </div>
                      </div>
                      <div
                        className="relative h-[220px] md:h-[280px] overflow-hidden shadow-lg cursor-zoom-in group"
                        onClick={() => setSelectedImg(project.currentImage || null)}
                      >
                        <Image src={project.currentImage || ""} alt="Mevcut Durum" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 500px" quality={85} />
                        <div className="absolute top-3 left-3 bg-[#111111] text-white text-[9px] font-medium px-3 py-1.5 uppercase tracking-[0.2em] z-10">
                          Mevcut Durum (Şantiye)
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div
                        className="relative h-[250px] sm:h-[350px] md:h-[500px] overflow-hidden shadow-lg cursor-zoom-in group"
                        onClick={() => setSelectedImg(project.mainImage || null)}
                      >
                        <Image src={project.mainImage || ""} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 600px" quality={90} />
                        <div className="absolute top-4 left-4 bg-[#a89b89] text-white text-[9px] font-medium px-4 py-2 uppercase tracking-[0.2em] z-10">
                          {project.category}
                        </div>
                      </div>
                      {project.gallery && (
                        <div className="relative">
                          <div className="flex gap-3 overflow-x-auto pb-4 pt-2 scrollbar-thin snap-x">
                            {project.gallery.map((img, i) => (
                              <div
                                key={i}
                                onClick={() => setSelectedImg(img)}
                                className="relative h-20 w-28 md:h-24 md:w-32 flex-shrink-0 overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#a89b89] transition-all snap-start shadow-sm"
                              >
                                <Image src={img} alt={`Galeri ${i}`} fill className="object-cover" sizes="150px" quality={70} />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* --- SAĞ TARAF: DETAYLAR --- */}
                <div className="p-8 md:p-16 flex flex-col justify-center">
                  <div className="flex items-center text-[#a89b89] font-medium text-[11px] md:text-xs tracking-[0.2em] uppercase mb-5">
                    <span className="mr-2 text-sm">📍</span> {project.location}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl text-[#111111] mb-6 uppercase tracking-[0.02em] leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[#555555] leading-relaxed mb-8 text-sm md:text-base font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.details.map((detail, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 md:px-5 md:py-2.5 text-[9px] md:text-[10px] font-medium uppercase tracking-[0.1em] border border-[#e6e2dc] bg-[#f7f6f4] text-[#555555]"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                  {project.status === 'ongoing' && (
                    <a
                      href="#iletisim"
                      className="mt-8 inline-flex items-center justify-center gap-3 bg-[#111111] text-white hover:bg-[#a89b89] px-8 py-4 font-medium text-[11px] uppercase tracking-[0.2em] transition-all w-full md:w-max"
                    >
                      Bilgi ve Teklif Alın
                      <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[150] bg-[#111111]/98 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative w-full h-full max-w-6xl">
            <Image src={selectedImg} alt="Büyük Görünüm" fill className="object-contain" sizes="100vw" quality={100} />
          </div>
          <button className="absolute top-6 right-6 text-white text-4xl hover:text-[#a89b89] transition-colors">&times;</button>
        </div>
      )}
    </section>
  );
};

export default Projects;
