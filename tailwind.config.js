/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pistech: {
          // Verde PISTECH - Primario (logos, elementos de marca, iconos)
          primary: '#93C572',

          // Verde Brillante - Acento de Interacción (CTAs, hover)
          accent: '#A3E635',

          // Fondo Principal - Casi Negro (fondo principal)
          dark: '#111214',

          // Gris Secundario - Contenedores (tarjetas, contenedores)
          secondary: '#1C1D20',

          // Texto y Elementos Claros - Gris Claro (texto principal)
          light: '#E4E4E7',
        },
        // Mantener pistachio para compatibilidad con código existente
        pistachio: {
          50: '#f7f9f4',
          100: '#eef4e8',
          200: '#dde8d1',
          300: '#c4d5b0',
          400: '#a3bc85',
          500: '#8ba66a',
          600: '#93C572', // Actualizado al verde PISTECH
          700: '#5a6e40',
          800: '#4a5a35',
          900: '#3f4b30',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
} 