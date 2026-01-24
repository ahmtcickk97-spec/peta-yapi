export default function Logo() {
  return (
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
  );
}