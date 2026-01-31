const ContactForm = () => {
  return (
    <section id="iletisim" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          
          {/* Sol Panel: İletişim Bilgileri */}
          <div className="bg-brand-dark p-12 text-white md:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Bize Ulaşın</h3>
              <p className="text-slate-400 mb-8 text-sm">
                Projeniz için ücretsiz keşif ve teklif almak için formu doldurmanız yeterlidir.
              </p>
            </div>
            <div className="space-y-4 text-sm font-light">
              <p className="flex items-center gap-2">📍 İstanbul, Türkiye</p>
              <p className="flex items-center gap-2">📞 +90 212 555 0000</p>
              <p className="flex items-center gap-2">✉️ info@petayapi.com</p>
            </div>
          </div>

          {/* Sağ Panel: Form (Formspree Entegrasyonu) */}
          <form 
            action="https://formspree.io/f/xrepzqyz" 
            method="POST" 
            className="p-12 md:w-2/3 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Ad Soyad</label>
                <input 
                  type="text" 
                  name="fullname" 
                  required 
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition" 
                  placeholder="Ahmet Çiçek" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">E-posta</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition" 
                  placeholder="ahmet@email.com" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Hizmet Türü</label>
              <select 
                name="service_type" 
                className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition bg-white"
              >
                <option>Konut İnşaatı</option>
                <option>Mimari Tasarım</option>
                <option>Tadilat & Restorasyon</option>
                <option>Mühendislik Çözümleri</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Mesajınız</label>
              <textarea 
                name="message" 
                required 
                rows={4} 
                className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-primary outline-none transition" 
                placeholder="Projeniz hakkında kısa bir bilgi verin..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-brand-primary hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-orange-500/30 transition-all transform active:scale-[0.98]"
            >
              TEKLİF İSTEĞİ GÖNDER
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;