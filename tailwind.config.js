/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'it-primary': '#FAF5ED',
        'it-secondary': '#E6DDD3',
        'it-accent': '#C78D6B',
        'it-cta': '#D4856A',
        'it-dark': '#3D3D3D',
        'it-text': '#5A5A5A',
        'it-light': '#FDFCFA',
        'it-blush': '#E8C4C4',
        'it-mint': '#B8D4C8',
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif TC', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
