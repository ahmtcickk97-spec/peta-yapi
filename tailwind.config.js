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
        // İnci Group tasarım dili kurumsal renkleri
        'brand-dark': '#111111',     // Koyu paneller / footer
        'brand-soft': '#f7f6f4',     // Açık gri bölüm zemini
        'brand-accent': '#a89b89',   // Kurumsal altın / taupe vurgu
        'brand-line': '#e6e2dc',     // İnce ayraç çizgileri
        'brand-text': '#222222',     // Ana metin
        'brand-muted': '#555555',    // İkincil metin
        // Geriye dönük uyumluluk
        'brand-primary': '#111111',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        display: ['var(--font-krona)', 'var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
