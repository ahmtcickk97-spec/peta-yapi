"use client";
import React from 'react';

const ContactForm = () => {
  return (
    <section id="iletisim" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          
          {/* Sol Panel: Kurumsal İletişim Bilgileri */}
          <div className="bg-[#111111] p-10 md:p-14 text-white md:w-2/5 flex flex-col justify-between relative overflow-hidden">
            {/* Dekoratif Arka Plan Efekti */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#a89b89]/10 rounded-full -mr-16 -mt-16"></div>
            
            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl mb-6 uppercase tracking-[0.02em]">Bize Ulaşın</h3>
              <p className="text-slate-300 mb-10 text-sm leading-relaxed font-medium">
                Bahçeşehir merkezli ofisimizde sizi ağırlamaktan mutluluk duyarız. Projeniz için ücretsiz keşif ve teklif almak için formu doldurmanız yeterlidir.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="bg-[#a89b89]/20 p-2 rounded-lg text-[#a89b89]">📍</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#a89b89] font-bold">Merkez Ofis</p>
                    <p className="text-sm font-medium">Bahçeşehir, İstanbul</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="bg-[#a89b89]/20 p-2 rounded-lg text-[#a89b89]">📞</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#a89b89] font-bold">Telefon & WhatsApp</p>
                    <p className="text-sm font-medium">0532 557 85 70</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="bg-[#a89b89]/20 p-2 rounded-lg text-[#a89b89]">✉️</span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#a89b89] font-bold">E-Posta</p>
                    <p className="text-sm font-medium">petayapi@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
              Peta Yapı İnşaat & Mimarlık
            </div>
          </div>

          {/* Sağ Panel: Formspree Entegrasyonu */}
          <form 
            action="https://formspree.io/f/xrepzqyz" 
            method="POST" 
            className="p-10 md:p-14 md:w-3/5 space-y-6 bg-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-wider text-[#111111]">Ad Soyad</label>
                <input 
                  type="text" 
                  name="fullname" 
                  required 
                  className="w-full border-b-2 border-slate-100 bg-slate-50/50 px-4 py-4 focus:border-[#a89b89] outline-none transition-all rounded-xl text-sm" 
                  placeholder="Ahmet Cicek" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-wider text-[#111111]">E-posta</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full border-b-2 border-slate-100 bg-slate-50/50 px-4 py-4 focus:border-[#a89b89] outline-none transition-all rounded-xl text-sm" 
                  placeholder="ahmet@gmail.com" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-wider text-[#111111]">Hizmet Türü</label>
              <select 
                name="service_type" 
                className="w-full border-b-2 border-slate-100 bg-slate-50/50 px-4 py-4 focus:border-[#a89b89] outline-none transition-all rounded-xl text-sm appearance-none cursor-pointer"
              >
                <option>Konut İnşaatı / Kentsel Dönüşüm</option>
                <option>Mimari Tasarım & Projelendirme</option>
                <option>Tadilat & Anahtar Teslim Restorasyon</option>
                <option>Mühendislik Çözümleri</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-black uppercase tracking-wider text-[#111111]">Mesajınız</label>
              <textarea 
                name="message" 
                required 
                rows={4} 
                className="w-full border-b-2 border-slate-100 bg-slate-50/50 px-4 py-4 focus:border-[#a89b89] outline-none transition-all rounded-xl text-sm resize-none" 
                placeholder="Projeniz hakkında kısa bir bilgi verin..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#111111] hover:bg-[#a89b89] text-white font-black py-5 rounded-xl shadow-xl transition-all transform active:scale-[0.98] uppercase tracking-[0.2em] text-xs"
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