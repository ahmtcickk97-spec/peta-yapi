/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Senin kodlarında kullandığın kurumsal renkleri buraya tanımlıyoruz
        'brand-primary': '#001F3F',    // O sağlam Peta Laciverti
        'brand-secondary': '#38BDF8',  // Modern Mavi vurgusu
        'brand-text': '#1a1a1a',       // Okunabilir koyu metin
        'brand-dark': '#00162d',       // Daha koyu lacivert (paneller için)
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}