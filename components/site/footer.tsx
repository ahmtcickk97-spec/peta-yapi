import Image from 'next/image'
import { Instagram, MessageCircle } from 'lucide-react'
import { CONTACT, NAV_LINKS } from '@/lib/site-data'

export function Footer({ year }: { year: number }) {
  return (
    <footer className="bg-primary pt-20 text-primary-foreground">
      <div className="container-site">
        <div className="grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.3fr_0.9fr]">
          <div>
            <a href="#anasayfa" className="relative block h-[45px] w-[120px]" aria-label="Peta Yapı — Anasayfa">
              <Image src="/logo-mark-white.png" alt="Peta Yapı" fill sizes="120px" className="object-contain object-left" />
            </a>
            <p className="mt-5 font-display text-xs italic tracking-[2px] text-accent">Güvenle Dönüşüm, Sağlam Yarınlar</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              İstanbul genelinde, kentsel dönüşüm ve modern mimari disipliniyle sağlam yarınlar inşa ediyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[3px] text-accent">Hızlı Bağlantılar</h4>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[3px] text-accent">İletişim</h4>
            <ul className="mt-6 space-y-4 text-sm text-white/60">
              <li className="leading-relaxed">{CONTACT.address}</li>
              <li>
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-white" suppressHydrationWarning>
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-white" suppressHydrationWarning>
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[3px] text-accent">Sosyal Medya</h4>
            <div className="mt-6 flex gap-3">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all hover:border-accent hover:bg-accent">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-all hover:border-accent hover:bg-accent">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 text-center text-xs text-white/50">© {year} Peta Yapı. Tüm Hakları Saklıdır.</div>
      </div>
    </footer>
  )
}
