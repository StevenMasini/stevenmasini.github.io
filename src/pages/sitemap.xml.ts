import type { APIRoute } from 'astro';
import {
  defaultLocale,
  getLocalizedPath,
  localeConfigs,
  locales,
  siteMetadata,
} from '../data/portfolio';

const basePages = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/apps-and-work/', priority: '0.9', changefreq: 'monthly' },
  { path: '/curio-eye/', priority: '0.8', changefreq: 'yearly' },
  { path: '/experience/', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact/', priority: '0.8', changefreq: 'yearly' },
];

function toFullUrl(lang: (typeof locales)[number], pagePath: string): string {
  const rawPath = getLocalizedPath(lang, pagePath);
  const pathWithSlash = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;
  return `${siteMetadata.siteUrl}${pathWithSlash}`;
}

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const localizedPages = locales.flatMap((lang) =>
    basePages.map((page) => {
      const loc = toFullUrl(lang, page.path);
      const alternates = [
        ...locales.map((altLang) => ({
          hreflang: localeConfigs[altLang].htmlLang,
          href: toFullUrl(altLang, page.path),
        })),
        {
          hreflang: 'x-default',
          href: toFullUrl(defaultLocale, page.path),
        },
      ];
      return {
        loc,
        priority: page.priority,
        changefreq: page.changefreq,
        alternates,
      };
    })
  );

  const urlsXml = localizedPages
    .map((page) => {
      const alternatesXml = page.alternates
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`
        )
        .join('\n');
      return `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${alternatesXml}
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlsXml}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
