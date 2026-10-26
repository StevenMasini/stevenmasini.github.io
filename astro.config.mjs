import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://stevenmasini.github.io',
  output: 'static',
  integrations: [tailwind()],
});
