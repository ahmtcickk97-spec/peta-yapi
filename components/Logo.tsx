export default function Logo() {
  return (
    <div className="flex flex-col items-start font-sans select-none">
      {/* Üst Kısım: İkon + PETA + YAPI */}
      <div className="flex items-center">
        {/* Lacivert Kutu: İkon ve PETA */}
        <div className="bg-[#001F3F] flex items-center px-4 py-2 rounded-[6px] h-[55px]">
          {/* Fotoğraftaki "P" ve Ev Silüeti */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 120"
            className="mr-3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M15 10 H 60 C 85 10, 85 55, 60 55 H 35 V 110 H 15 V 10 Z" 
              fill="white" 
            />
            <path d="M35 55 L 50 40 L 65 55 V 85 H 35 V 55 Z" fill="#001F3F" />
            <rect x="47" y="65" width="6" height="20" fill="white" />
          </svg>

          {/* PETA Yazısı - İnce, Uzun ve Dar */}
          <span 
            className="text-4xl font-medium tracking-[-0.02em] text-white leading-none uppercase"
            style={{ 
              transform: 'scaleX(0.7) scaleY(1.3)', 
              transformOrigin: 'left center',
              display: 'inline-block',
              marginRight: '-10px' // Daralmadan kaynaklı boşluğu kapatmak için
            }}
          >
            PETA
          </span>
        </div>

        {/* YAPI Yazısı - Kutu Dışında, Aynı İnce/Uzun Stil */}
        <span 
          className="ml-4 text-4xl font-medium tracking-[-0.02em] text-black leading-none uppercase"
          style={{ 
            transform: 'scaleX(0.7) scaleY(1.3)', 
            transformOrigin: 'left center',
            display: 'inline-block'
          }}
        >
          YAPI
        </span>
      </div>

      {/* Slogan: Alt kısım normal font kalıyor fotoğraftaki gibi */}
      <span className="text-[14px] font-medium text-black mt-3 tracking-wide">
        Güvenle Dönüşüm, Sağlam Yarınlar
      </span>
    </div>
  );
}