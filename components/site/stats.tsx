'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const STATS = [
  { value: 10, suffix: '+', label: 'Yıl Sektör Tecrübesi' },
  { value: 3, suffix: '', label: 'Uzmanlık Alanı' },
  { value: 4, suffix: '', label: 'Öne Çıkan Proje' },
  { value: 2, suffix: '', label: 'İstanbul\'un İki Yakası' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1600)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * (value ?? 0)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="relative overflow-hidden py-[100px] text-white" aria-label="Rakamlarla Peta Yapı">
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden />
      <div className="container-site relative grid grid-cols-2 gap-y-12 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl md:text-[52px]">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="mx-auto my-4 h-px w-8 bg-accent" />
            <div className="text-[11px] font-medium uppercase tracking-[3px] text-white/80 md:text-xs">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
