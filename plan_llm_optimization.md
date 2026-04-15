# Plan: LLM Optimization

## Goal

Make the site discoverable when people ask LLMs (ChatGPT, Claude, Perplexity, etc.) about topics you've written about — option pricing, Norwegian literature, machine learning, book reviews, etc.

Two mechanisms matter:
1. **Training data crawlers** — CommonCrawl, CCBot etc. that feed LLM training corpora
2. **Real-time AI search** — Perplexity, Bing AI, Google AI Overview retrieve pages live

---

## Changes (in priority order)

### 1. `public/llms.txt` — new file (highest leverage)

A growing standard (see `llmstxt.org`) analogous to `robots.txt` but for LLMs. Provides a concise plaintext description of the site and links to key content so AI systems understand what you publish.

```
# Sondre Rogde — Personal Website

> Personal website of Sondre Rogde: articles on data science, machine learning,
> quantitative finance, book reviews, and Norwegian language learning.

## Data Science
- [Kvasir Dataset Analysis](https://yoursite.com/data-science/kvasir)
- [Option Pricing with Deep Learning](https://yoursite.com/data-science/option-pricing-deep-learning)
- [Gin Rummy AI](https://yoursite.com/data-science/gin-rummy)

## Miscellaneous
- [Book Reviews](https://yoursite.com/miscellaneous/a-body-without-a-mind)
- [Reading List](https://yoursite.com/miscellaneous/reading-list)
- [Norwegian Self-Study](https://yoursite.com/miscellaneous/norwegian-self-study)

## About
- [About Me](https://yoursite.com/about-me/about)
- [CV](https://yoursite.com/about-me/cv)
```

### 2. `app/sitemap.ts` — new file

Next.js auto-generates `sitemap.xml` from this file. Use existing `getAllArticleRoutes()`.

```ts
import { getAllArticleRoutes } from '@/services/metadataService';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getAllArticleRoutes();
  return routes.map(({ section, slug }) => ({
    url: `https://yoursite.com/${section}/${slug}`,
    lastModified: new Date(),
  }));
}
```

### 3. `public/robots.txt` — new file

Currently absent. Explicitly permit AI crawlers:

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: CCBot
Allow: /

Sitemap: https://yoursite.com/sitemap.xml
```

### 4. JSON-LD structured data in article pages

Add `<script type="application/ld+json">` with `Article` schema to `app/[section]/[slug]/page.tsx`. Used by Google AI Overview and Bing AI to attribute content to you.

```ts
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  author: { '@type': 'Person', name: 'Sondre Rogde' },
  datePublished: article.published,
  dateModified: article.lastUpdated,
};
// Add to <head> via Next.js script tag
```

### 5. `<meta>` tags per article (in `app/[section]/[slug]/page.tsx`)

Next.js `generateMetadata()` already exists in the route — extend it:

```ts
export async function generateMetadata({ params }) {
  const article = getArticleByRoute(section, slug);
  return {
    title: article.title,
    description: `Article by Sondre Rogde: ${article.title}`,
    authors: [{ name: 'Sondre Rogde' }],
    openGraph: {
      title: article.title,
      type: 'article',
      publishedTime: article.published,
    },
  };
}
```

---

## Note on existing setup

Your site already uses `generateStaticParams()` for SSG, meaning every article is a fully rendered HTML page at build time. Crawlers can read content without executing JavaScript — this is already optimal for discoverability. The steps above build on that strong foundation.

---

## Summary of Files to Create/Touch

| File | Change |
|------|--------|
| `public/llms.txt` | New file — site description for LLMs |
| `app/sitemap.ts` | New file — auto-generates `sitemap.xml` |
| `public/robots.txt` | New file — permit AI crawlers |
| `app/[section]/[slug]/page.tsx` | Add JSON-LD + extend `generateMetadata()` |
