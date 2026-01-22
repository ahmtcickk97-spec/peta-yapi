const projects = [
  {
    id: 1,
    title: "Modern Konut Projesi",
    description: "İstanbul'un merkezinde, deprem yönetmeliğine uygun, modern mimari ve lüks detaylarla inşa edilen konut projemiz.",
    image: "/proje1.jpg", // public klasörüne attığın fotoğrafın adı
    category: "Konut İnşaatı",
    details: "1200m² Toplam Alan | 24 Daire | 2025 Teslim"
  },
  {
    id: 2,
    title: "Kentsel Dönüşüm Çalışması",
    description: "Eski yapıların güvenle dönüştürülmesi ve sağlam yarınlar için modern yaşam alanlarına dönüştürülmesi süreci.",
    image: "/proje2.jpg",
    category: "Kentsel Dönüşüm",
    details: "Güçlendirilmiş Temel | Modern Cephe Tasarımı"
  },
  // Yeni projelerini buraya eklemeye devam edebilirsin
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-brand-primary text-center mb-12 uppercase tracking-tighter">
          PROJELERİMİZ
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-primary mb-2 uppercase">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="text-[11px] font-bold text-brand-text border-t pt-4 flex justify-between items-center">
                   <span>{project.details}</span>
                   <span className="text-[#38BDF8]">İNCELİ</span>
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