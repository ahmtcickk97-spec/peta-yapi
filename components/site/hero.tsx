'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Instagram, MessageCircle, ChevronDown } from 'lucide-react'
import { CONTACT, HERO_IMAGES } from '@/lib/site-data'

export function Hero() {
  const [active, setActive] = useState(0)
  const total = HERO_IMAGES?.length ?? 0

  useEffect(() => {
    if (total < 2) return
    const t = setInterval(() => setActive((i) => (i + 1) % total), 6000)
    return () => clearInterval(t)
  }, [total])

  return (
    <section id="anasayfa" className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden bg-primary text-white">
      {(HERO_IMAGES ?? []).map((src, i) => (
        <div
          key={src}
          aria-hidden
          className={`absolute inset-0 bg-cover bg-center transition-opacity [transition-duration:1500ms] ${i === active ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center ${i === active ? 'animate-slow-zoom' : ''}`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      <div className="relative z-10 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[32px] leading-[1.2] tracking-[3px] sm:text-5xl md:text-6xl md:tracking-[6px] lg:text-[72px]"
        >
          GÜVENLE DÖNÜŞÜM
          <span className="mt-2 block text-[18px] tracking-[6px] text-white/80 sm:text-2xl md:text-[28px] md:tracking-[10px]">SAĞLAM YARINLAR</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mx-auto mt-8 max-w-2xl text-sm font-light leading-relaxed text-white/80 md:text-base"
        >
          Peta Yapı ile modern mimari ve mühendislik disiplinini buluşturuyoruz. Geleceğin yapılarını bugünden güvenle inşa ediyoruz.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#projelerimiz" className="btn-outline-light">
            Projelerimizi İncele <ArrowRight className="h-5 w-5" />
          </a>
          <a href="#iletisim" className="btn-outline-light border-white bg-white text-primary hover:border-accent hover:bg-accent hover:text-white">
            Ücretsiz Ekspertiz Al <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 gap-5">
        <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-white hover:bg-white hover:text-primary">
          <Instagram className="h-[18px] w-[18px]" />
        </a>
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-white hover:bg-white hover:text-primary">
          <MessageCircle className="h-[18px] w-[18px]" />
        </a>
      </div>

      <a href="#hakkimizda" aria-label="Aşağı kaydır" className="absolute bottom-14 right-10 z-10 hidden animate-bounce text-white/60 hover:text-white md:block">
        <ChevronDown className="h-6 w-6" />
      </a>

      {total > 1 && (
        <div className="absolute bottom-14 left-10 z-10 hidden gap-3 md:flex">
          {(HERO_IMAGES ?? []).map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Görsel ${i + 1}`}
              className={`h-px transition-all duration-500 ${i === active ? 'w-12 bg-white' : 'w-6 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
