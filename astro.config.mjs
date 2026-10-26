import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://stevenmasini.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
