export default function Logo() {
  return (
    <div className="flex flex-col items-start font-sans select-none leading-none">
      {/* Üst Kısım: P Sembolü + PETA + YAPI (Bitişik Düzen) */}
      <div className="flex items-center">
        {/* Lacivert Kutu: İkon ve PETA */}
        <div className="bg-[#001F3F] flex items-center px-2 md:px-3 py-1.5 md:py-2 rounded-[4px] h-[38px] md:h-[48px] border border-white/10">
          {/* P Sembolü - Kalın ve Bitişik */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 100 120"
            className="mr-1 md:mr-1.5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M15 10 H 65 C 95 10, 95 60, 65 60 H 40 V 110 H 15 V 10 Z" 
              fill="white" 
            />
            <path d="M40 60 L 52 48 L 64 60 V 85 H 40 V 60 Z" fill="#001F3F" />
            <rect x="50" y="70" width="4" height="15" fill="white" />
          </svg>

          {/* PETA Yazısı - Zarif, İnce ve Kutu İçine Sıkışık */}
          <span 
            className="text-2xl md:text-3xl font-bold tracking-[-0.05em] text-white uppercase"
            style={{ 
              transform: 'scaleX(0.75) scaleY(1.3)', 
              transformOrigin: 'left center',
              display: 'inline-block',
              marginRight: '-10px' 
            }}
          >
            PETA
          </span>
        </div>

        {/* YAPI Yazısı - Kutuya bitişik ve HER ZAMAN BEYAZ */}
        <span 
          className="ml-1 text-2xl md:text-3xl font-bold tracking-[-0.05em] uppercase text-white"
          style={{ 
            transform: 'scaleX(0.75) scaleY(1.3)', 
            transformOrigin: 'left center',
            display: 'inline-block'
          }}
        >
          YAPI
        </span>
      </div>

      {/* SLOGAN: Marka değerini artıran Gök Mavisi (#38BDF8) */}
      <span className="mt-2 text-[8px] md:text-[10px] font-bold tracking-tight text-[#38BDF8]">
        Güvenle Dönüşüm, Sağlam Yarınlar
      </span>
    </div>
  );
}