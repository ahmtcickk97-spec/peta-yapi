const projects = [
  {
    id: "midyat-modern-konut",
    title: "Midyat Modern Konut Projesi",
    location: "Mardin / Midyat",
    description: "Midyat'ın gelişen yüzüne uygun, modern mimari anlayışıyla inşa edilmiş, asansörlü ve yüksek kaliteli iç mekanlara sahip konforlu yaşam alanları.",
    mainImage: "/projects/midyat/midyat-ana.jpg", // PETA İNŞ yazılı ana fotoğraf
    gallery: [
      "/projects/midyat/midyat-dis-1.jpg", // Diğer dış cephe
      "/projects/midyat/midyat-dis-2.jpg", // PETA YAPI yazılı cephe
      "/projects/midyat/midyat-ic-1.jpg", // Asansör
      "/projects/midyat/midyat-ic-2.jpg", // Mutfak
      "/projects/midyat/midyat-ic-3.jpg"  // Balkonlu oda
    ],
    category: "Konut İnşaatı",
    details: "Modern Tasarım | Asansörlü | Ferah İç Mekanlar"
  }
  // Gelecek diğer projeleri buraya ekleyebilirsiniz...
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-black text-brand-primary text-center mb-16 uppercase">PROJELERİMİZ</h2>
        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((p) => (
            <div key={p.id} className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Sol Taraf: Ana Fotoğraf ve Galeri */}
                <div className="space-y-4">
                  <div className="h-96 rounded-2xl overflow-hidden relative group">
                    <img src={p.mainImage} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                    <div className="absolute top-4 left-4 bg-brand-primary px-4 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                      {p.category}
                    </div>
                  </div>
                  {/* Galeri - İlk 5 fotoğrafı gösterir */}
                  <div className="grid grid-cols-5 gap-2">
                    {p.gallery.slice(0, 5).map((img, i) => (
                      <div key={i} className="h-20 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition border border-gray-200">
                        <img src={img} alt="Proje Detayı" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Sağ Taraf: Detaylar */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center text-[#38BDF8] font-bold text-sm tracking-widest uppercase mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg"className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {p.location}
                  </div>
                  <h3 className="text-4xl font-black text-brand-primary mb-6 uppercase leading-none">{p.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">{p.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {p.details.split(' | ').map((detail, index) => (
                      <span key={index} className="bg-white px-4 py-2 rounded-xl border border-gray-200 text-[11px] font-bold text-brand-primary uppercase tracking-wider shadow-sm">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;