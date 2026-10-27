/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#18181b',
        'on-primary': '#ffffff',
        background: '#fafafa',
        surface: '#ffffff',
        'surface-muted': '#f4f4f5',
        'surface-subtle': '#f9f9fb',
        border: '#e4e4e7',
        'border-subtle': '#f1f1f4',
        'text-primary': '#18181b',
        'text-secondary': '#52525b',
        'text-muted': '#71717a',
        'text-subtle': '#a1a1aa',
        brand: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'Noto Sans TC',
          '-apple-system',
          'BlinkMacSystemFont',
          'PingFang TC',
          'Microsoft JhengHei',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'Noto Sans TC', 'monospace'],
      },
    },
  },
  plugins: [],
};
