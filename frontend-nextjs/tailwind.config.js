/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4f7ff',
          100: '#e5ecff',
          200: '#c9d7ff',
          300: '#a7bfff',
          400: '#829dff',
          500: '#5f7cff',
          600: '#3f5eff',
          700: '#2944e0',
          800: '#2238b4',
          900: '#1f338f',
        },
        teal: {
          300: '#7fe7d1',
          400: '#3ed7b2',
        },
        charcoal: {
          400: '#6b7280',
          800: '#1f2937',
        },
        'dark-bg': '#0b1220',
        'dark-card': '#111827',
        'dark-surface': '#0f172a',
        'dark-border': '#243244',
        'dark-accent': '#6ee7d8',
        'dark-muted': '#94a3b8',
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        sans: ['var(--font-opensans)', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 30px rgba(63, 94, 255, 0.18)',
        'glow-lg': '0 20px 50px rgba(63, 94, 255, 0.24)',
        'soft-lg': '0 20px 40px rgba(15, 23, 42, 0.12)',
        glass: '0 12px 30px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #3f5eff 0%, #2944e0 50%, #3ed7b2 100%)',
      },
      spacing: {
        'section': '6rem',
      },
    },
  },
  plugins: [],
};