import type { APIRoute } from 'astro';
import { siteMetadata } from '../data/portfolio';

const pages = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/apps-and-work/', priority: '0.9', changefreq: 'monthly' },
  { path: '/experience/', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact/', priority: '0.8', changefreq: 'yearly' },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const urlsXml = pages
    .map(
      (page) => `  <url>
    <loc>${siteMetadata.siteUrl}${page.path}</loc>
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
