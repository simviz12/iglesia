/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#821E29', // Cardinal Litúrgico Principal
          hover: '#68161F',
          dark: '#620315',
          light: '#F8EAEB',
          container: '#821e29',
          'on-container': '#ff9396'
        },
        gold: {
          DEFAULT: '#C99A45', // Altar Gold
          hover: '#B58635',
          light: '#FDF8EF',
          accent: '#dbaa53'
        },
        navy: {
          DEFAULT: '#1B2A4A', // Midnight Nave
          hover: '#131F38',
          light: '#EAEFF8'
        },
        surface: {
          DEFAULT: '#FBF9F3', // Alabastro / Marfil
          container: '#F0EEE8',
          'container-low': '#F5F3ED',
          'container-high': '#EAE8E2',
          lowest: '#FFFFFF',
          dark: '#1B1C18'
        },
        charcoal: {
          DEFAULT: '#2B2824',
          muted: '#574241',
          light: '#7A6E6D'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        sacred: '0 12px 32px -4px rgba(43, 40, 36, 0.07), 0 4px 12px -2px rgba(201, 154, 69, 0.05)',
        gold: '0 4px 20px -2px rgba(201, 154, 69, 0.25)',
        primary: '0 4px 20px -2px rgba(130, 30, 41, 0.3)'
      }
    },
  },
  plugins: [],
};
