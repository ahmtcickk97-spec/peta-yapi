export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      {/* Mimari Şekil (İkon) */}
      <div className="flex-shrink-0">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#001F3F" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Modern Bina/Ev Silüeti */}
          <path d="M3 21h18" />
          <path d="M5 21V7l7-4 7 4v14" />
          <path d="M9 21v-6a3 3 0 0 1 6 0v6" />
          <path d="M7 10h2v2H7z" />
          <path d="M15 10h2v2h-2z" />
        </svg>
      </div>

      {/* Yazı Kısmı */}
      <div className="flex flex-col items-start leading-tight">
        <div className="flex items-center">
          <span className="text-3xl font-black text-[#001F3F]">PETA</span>
          <span className="ml-1 bg-[#001F3F] text-white px-2 py-1 text-3xl font-black rounded-sm">
            YAPI
          </span>
        </div>
        <span className="text-[10px] font-medium text-[#001F3F] mt-1 tracking-widest uppercase">
          Güvenle Dönüşüm Sağlam Yarınlar
        </span>
      </div>
    </div>
  );
}