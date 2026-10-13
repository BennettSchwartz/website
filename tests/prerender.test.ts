import { describe, expect, test } from 'bun:test';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { detailPages } from '../src/content/pages';
import { sitePaths, siteUrl, siteTitle, siteDescription } from '../src/content/site';

const build = resolve(import.meta.dir, '../build');
const fileFor = (path: string) => resolve(build, path === '/' ? 'index.html' : `${path.slice(1)}/index.html`);
const readPage = (path: string) => readFileSync(fileFor(path), 'utf8');
const decode = (text: string) => text.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'");

describe('prerendered website (run the build first)', () => {
  for (const path of sitePaths) {
    test(`${path} has its own content, canonical, schema, and working internal links`, () => {
      const html = readPage(path);
      const detail = detailPages.find((page) => page.path === path);
      const title = detail ? `${detail.title} - Bennett Schwartz` : siteTitle;
      expect(decode(html.match(/<title>(.*?)<\/title>/s)![1])).toBe(title);
      expect(html).toContain(`<link rel="canonical" href="${siteUrl}${path}"`);
      expect(decode(html.match(/<meta name="description" content="([^"]*)"/)![1])).toBe(detail?.description ?? siteDescription);
      expect(html.match(/<main\b/g)).toHaveLength(1);
      expect(html.match(/<h1\b/g)).toHaveLength(1);
      expect(html).toContain('class="no-js"');
      expect(html).not.toMatch(/class="mask"/);
      expect(html).not.toMatch(/Iron Man|Gain Laboratories|gainlabs|in development|·/i);
      const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)![1]);
      expect(schema['@graph'].some((entity: { url?: string }) => entity.url === `${siteUrl}${path}`)).toBe(true);
      if (detail) expect(decode(html)).toContain(detail.description);

      for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
        const href = decode(match[1]);
        if (!href.startsWith('/') && !href.startsWith('#')) continue;
        const target = new URL(href, `${siteUrl}${path}`);
        expect(existsSync(fileFor(target.pathname))).toBe(true);
        if (target.hash) expect(readPage(target.pathname)).toContain(`id="${target.hash.slice(1)}"`);
      }
    });
  }

  test('discovery files include every public page and omit the error page', () => {
    const sitemap = readFileSync(resolve(build, 'sitemap.xml'), 'utf8');
    const llms = readFileSync(resolve(build, 'llms.txt'), 'utf8');
    for (const path of sitePaths) {
      expect(sitemap).toContain(`<loc>${siteUrl}${path}</loc>`);
      expect(llms).toContain(`${siteUrl}${path}`);
    }
    expect(sitemap).not.toContain('/404');
    const errorPage = readFileSync(resolve(build, '404.html'), 'utf8');
    expect(errorPage).toContain('Page not found');
    expect(errorPage).toContain('content="noindex, follow"');
  });
});
