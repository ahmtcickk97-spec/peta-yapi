export default function Logo() {
  return (
    <div className="flex flex-col items-start font-sans">
      {/* Üst Kısım: İkon + PETA + YAPI */}
      <div className="flex items-center">
        {/* Lacivert Kutu: İkon ve PETA */}
        <div className="bg-[#001F3F] flex items-center px-4 py-2 rounded-sm h-[52px]">
          {/* Fotoğraftaki Özel "P" Harfi ve Ev Tasarımı */}
          <svg
            width="34"
            height="34"
            viewBox="0 0 100 120"
            className="mr-3"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Beyaz P Harfi Gövdesi */}
            <path 
              d="M15 10 H 60 C 90 10, 90 55, 60 55 H 40 V 110 H 15 Z" 
              fill="white" 
            />
            {/* P İçindeki Ev Kesintisi (Kutunun lacivertiyle aynı) */}
            <path 
              d="M40 55 L 52 42 L 64 55 V 85 H 40 Z" 
              fill="#001F3F" 
            />
            {/* Evin Beyaz Kapısı */}
            <rect x="49" y="65" width="6" height="20" fill="white" />
          </svg>

          {/* PETA Yazısı (Beyaz ve En Kalın) */}
          <span className="text-4xl font-[900] tracking-tighter text-white leading-none">
            PETA
          </span>
        </div>

        {/* YAPI Yazısı (Siyah ve En Kalın - Kutu Dışında) */}
        <span className="ml-2 text-4xl font-[900] tracking-tighter text-black leading-none">
          YAPI
        </span>
      </div>

      {/* Slogan: Tam olarak kutunun altına hizalı */}
      <span className="text-[15px] font-bold text-black mt-2 tracking-tight">
        Güvenle Dönüşüm, Sağlam Yarınlar
      </span>
    </div>
  );
}