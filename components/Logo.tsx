import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center transition-transform duration-300 hover:scale-105 active:scale-95">
      <Image 
        src="/logo.png" 
        alt="Peta Yapı" 
        width={220}   // Orijinal genişlik
        height={75}    // Orijinal yükseklik
        className="w-auto h-[45px] md:h-[60px] object-contain" 
        priority 
      />
    </div>
  );
}