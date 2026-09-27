import { MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'

export function WhatsAppButton() {
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Bize WhatsApp'tan Yazın"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap bg-primary px-4 py-2 text-xs tracking-[1px] text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
        Bize WhatsApp&apos;tan Yazın
      </span>
    </a>
  )
}
