/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

// Load Astro's Vite plugins so tests can import and render .astro components.
export default getViteConfig({
  test: {
    include: ['src/**/*.test.ts'],
  },
});
