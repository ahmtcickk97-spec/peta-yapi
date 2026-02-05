export default function Logo() {
  return (
    <div className="flex flex-col items-start font-sans select-none">
      {/* Üst Kısım: İkon + PETA + YAPI */}
      <div className="flex items-center">
        {/* Lacivert Kutu: İkon ve PETA */}
        <div className="bg-[#001F3F] flex items-center px-4 py-2 rounded-[2px] h-[58px]">
          {/* Görseldeki "P" ve Ev Silüeti (Hassas Geometri) */}
          <svg
            width="38"
            height="38"
            viewBox="0 0 100 120"
            className="mr-3"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Kalın Beyaz P Harfi */}
            <path 
              d="M12 10 H 65 C 95 10, 95 60, 65 60 H 38 V 110 H 12 V 10 Z" 
              fill="white" 
            />
            {/* P İçindeki Ev Boşluğu (Lacivert Kutu Rengiyle Uyumlu) */}
            <path 
              d="M38 60 L 52 45 L 66 60 V 90 H 38 V 60 Z" 
              fill="#001F3F" 
            />
            {/* Evin Beyaz Kapısı */}
            <rect x="49" y="70" width="6" height="20" fill="white" />
          </svg>

          {/* PETA Yazısı (Extra Bold / Black) */}
          <span className="text-4xl font-[900] tracking-tighter text-white leading-none">
            PETA
          </span>
        </div>

        {/* YAPI Yazısı (Siyah ve Aynı Kalınlıkta) */}
        <span className="ml-2 text-4xl font-[900] tracking-tighter text-black leading-none">
          YAPI
        </span>
      </div>

      {/* Slogan: Siyah, Kalın ve Tam Hizalı */}
      <span className="text-[16px] font-bold text-black mt-2 tracking-tight">
        Güvenle Dönüşüm, Sağlam Yarınlar
      </span>
    </div>
  );
}