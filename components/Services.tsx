const services = [
  {
    title: "Anahtar Teslim İnşaat",
    desc: "Projelendirmeden anahtar teslime kadar tüm süreçleri profesyonel ekiplerimizle yönetiyoruz.",
    icon: "🏗️"
  },
  {
    title: "Mimari Tasarım",
    desc: "Modern, estetik ve fonksiyonel yaşam alanlarını vizyoner mimarlarımızla tasarlıyoruz.",
    icon: "📐"
  },
  {
    title: "Restorasyon & Tadilat",
    desc: "Eski yapılarınızı aslına uygun şekilde yeniliyor veya modern ihtiyaçlara göre modernize ediyoruz.",
    icon: "🏠"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Uzmanlık Alanlarımız</h2>
          <p className="text-slate-600">Peta Yapı olarak sunduğumuz profesyonel çözümler.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="p-8 border border-slate-100 rounded-2xl hover:shadow-xl transition-all group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;