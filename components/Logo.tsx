export default function Logo({ isScrolled = false, isFooter = false }) {
  const textColor = isFooter ? 'text-white' : (isScrolled ? 'text-black' : 'text-white');
  const sloganColor = isFooter ? 'text-white/80' : (isScrolled ? 'text-black' : 'text-white/90');

  return (
    <div className="flex flex-col items-start font-sans select-none leading-none">
      {/* Üst Kısım: Her şey dip dibe */}
      <div className="flex items-center">
        {/* Lacivert Kutu: İkon ve PETA (Aradaki boşluk kapatıldı) */}
        <div className="bg-[#001F3F] flex items-center px-2 md:px-3 py-1.5 md:py-2 rounded-[4px] h-[42px] md:h-[52px]">
          {/* P Sembolü (Görsele göre kalınlaştırıldı) */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 120"
            className="mr-1 md:mr-1.5" /* İkon ile PETA arası çok dar */
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M15 10 H 65 C 95 10, 95 60, 65 60 H 40 V 110 H 15 V 10 Z" 
              fill="white" 
            />
            <path d="M40 60 L 52 48 L 64 60 V 85 H 40 V 60 Z" fill="#001F3F" />
            <rect x="50" y="70" width="4" height="15" fill="white" />
          </svg>

          {/* PETA Yazısı - Çok Dar ve Uzun */}
          <span 
            className="text-2xl md:text-4xl font-black tracking-[-0.08em] text-white uppercase"
            style={{ 
              transform: 'scaleX(0.75) scaleY(1.3)', 
              transformOrigin: 'left center',
              display: 'inline-block',
              marginRight: '-8px' /* Sağdaki boşluğu yok etmek için */
            }}
          >
            PETA
          </span>
        </div>

        {/* YAPI Yazısı - Kutuya neredeyse yapışık */}
        <span 
          className={`ml-1 text-2xl md:text-4xl font-black tracking-[-0.08em] uppercase transition-colors duration-300 ${textColor}`}
          style={{ 
            transform: 'scaleX(0.75) scaleY(1.3)', 
            transformOrigin: 'left center',
            display: 'inline-block'
          }}
        >
          YAPI
        </span>
      </div>

      {/* Slogan - Kutunun hemen altında, bitişik */}
      <span className={`mt-2 text-[8px] md:text-[11px] font-bold tracking-tighter ${sloganColor}`}>
        Güvenle Dönüşüm, Sağlam Yarınlar
      </span>
    </div>
  );
}