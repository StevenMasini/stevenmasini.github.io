import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, it } from 'vitest';
import ContentLink from './ContentLink.astro';

let container: AstroContainer;
beforeAll(async () => {
  container = await AstroContainer.create();
});

const render = (props: Record<string, unknown>, text = 'Label') =>
  container.renderToString(ContentLink, { props, slots: { default: text } });

describe('ContentLink', () => {
  it('opens external links in a new tab with a ↗ icon', async () => {
    const html = await render({
      link: { url: 'https://apps.apple.com/app/id1' },
      lang: 'fr',
      variant: 'title',
    });
    expect(html).toContain('href="https://apps.apple.com/app/id1"');
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
    expect(html).toContain('arrow_outward');
  });

  it('localizes internal Page links, stays in the tab, and uses a → icon', async () => {
    const html = await render({ link: { page: 'curio-eye' }, lang: 'zh-tw', variant: 'cta' });
    expect(html).toContain('href="/zh-tw/curio-eye/"');
    expect(html).not.toContain('target=');
    expect(html).not.toContain('rel=');
    expect(html).toContain('arrow_forward');
  });

  it('keeps the icon outside the underlined text span', async () => {
    for (const variant of ['title', 'cta']) {
      const html = await render({ link: { page: 'contact' }, lang: 'en', variant }, 'Contact');
      const textSpan = html.match(/<span class="([^"]*underline[^"]*)"[^>]*>([\s\S]*?)<\/span>/);
      expect(textSpan?.[2].trim()).toBe('Contact');
      expect(textSpan?.[2]).not.toContain('material-symbols');
    }
  });

  it('underlines on hover for titles and always for calls to action', async () => {
    const title = await render({ link: { page: 'contact' }, lang: 'en', variant: 'title' });
    const cta = await render({ link: { page: 'contact' }, lang: 'en', variant: 'cta' });
    expect(title).toContain('group-hover/link:underline');
    expect(cta).toMatch(/class="underline underline-offset-4"/);
  });

  it('passes classes through to the anchor', async () => {
    const html = await render({
      link: { page: 'contact' },
      lang: 'en',
      variant: 'cta',
      class: 'inline-flex gap-1',
    });
    expect(html).toMatch(/<a class="inline-flex gap-1"/);
  });
});
