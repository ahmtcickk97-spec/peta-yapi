export default function Logo() {
  return (
    <div className="flex flex-col items-start">
      {/* Üst Kısım: Logo ve Ana Başlık */}
      <div className="flex items-center">
        {/* Lacivert Kutu: İkon ve PETA */}
        <div className="bg-[#001F3F] flex items-center px-3 py-2 rounded-[12px] h-[55px]">
          {/* Özel "P" Harfi ve Ev Silüeti İkonu */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 100 120"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            {/* P Harfinin Ana Gövdesi */}
            <path d="M20 10 C 60 10, 85 25, 85 55 C 85 85, 60 100, 25 100 L 25 110 L 10 110 L 10 10 L 20 10 Z" />
            {/* P Harfinin İçindeki Ev Kesintisi (Navy renkte görünecek) */}
            <path
              d="M30 55 L 50 35 L 70 55 L 70 90 L 30 90 Z"
              fill="#001F3F"
            />
            {/* Evin Kapısı */}
            <rect x="45" y="65" width="10" height="25" fill="white" />
          </svg>

          {/* PETA Yazısı */}
          <span className="text-4xl font-bold tracking-tight text-white leading-none">
            PETA
          </span>
        </div>

        {/* YAPI Yazısı (Kutu Dışında) */}
        <span className="ml-2 text-4xl font-light tracking-tighter text-black leading-none self-center" style={{ fontFamily: 'sans-serif' }}>
          YAPI
        </span>
      </div>

      {/* Slogan Kısmı */}
      <span className="text-[14px] font-semibold text-black mt-2 tracking-normal">
        Güvenle Dönüşüm, Sağlam Yarınlar
      </span>
    </div>
  );
}