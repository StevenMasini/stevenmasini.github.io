/// <reference types="astro/client" />

// Lets plain `tsc` type-check .ts files (e.g. component tests) that import
// .astro components. Astro's own tooling resolves the real component types.
declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
  const Component: AstroComponentFactory;
  export default Component;
}
