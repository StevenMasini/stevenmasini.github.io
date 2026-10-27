import type { APIRoute } from 'astro';
import {
  getLocalizedPath,
  locales,
  siteMetadata,
} from '../data/portfolio';

const basePages = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/apps-and-work/', priority: '0.9', changefreq: 'monthly' },
  { path: '/experience/', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact/', priority: '0.8', changefreq: 'yearly' },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const localizedPages = locales.flatMap((lang) =>
    basePages.map((page) => {
      const rawPath = getLocalizedPath(lang, page.path);
      const pathWithSlash = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;
      return {
        loc: `${siteMetadata.siteUrl}${pathWithSlash}`,
        priority: page.priority,
        changefreq: page.changefreq,
      };
    })
  );

  const urlsXml = localizedPages
    .map(
      (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
