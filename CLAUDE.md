# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Next.js App Router** personal portfolio/blog. Content is static files in `/public`; routing and rendering are driven by a central metadata registry.

### Content Pipeline

1. **`services/metadata.json`** — registry of all articles. Each entry has `id`, `title`, `slug`, `section`, `component_type` (`markdown` | `html` | `pdf`), `url` (path under `/public`), `published`, `lastUpdated`.
2. **`services/metadataService.ts`** — utilities: `getTabsForSection`, `getArticleByRoute`, `getAllArticleRoutes` (used for `generateStaticParams`).
3. **`public/{section}/`** — actual content files (`.md`, `.html`, `.pdf`).

**To add a new article:** drop the file in `public/{section}/`, add an entry to `metadata.json`. No routing changes needed.

### Route Structure

```
app/
  page.tsx                    # Home
  [section]/page.tsx          # Article listing  (data-science, about-me, miscellaneous)
  [section]/[slug]/page.tsx   # Article viewer (static-generated via generateStaticParams)
```

All `[slug]` routes use `generateStaticParams()` for SSG. The `params` type is `Promise<T>` (Next.js 16 style).

### Component Roles

- **`ArticleContent`** — dispatches to the correct renderer based on `component_type`
- **`MarkdownRenderer`** — client component using `react-markdown` + `remark-gfm`, `remark-math`, `rehype-katex`, `rehype-slug`
- **`HtmlRenderer` / `PDFRenderer`** — iframe-based renderers for non-markdown content
- **`SectionLayout`** — page wrapper with sidebar
- **`TableOfContentBase`** — desktop left sidebar nav; **`MobileNav`** — hamburger overlay

### Styling

Tailwind CSS v4 (`@tailwindcss/postcss`). Custom CSS variables for theming (`--background`, `--foreground`, `--accent`, `--muted`) with dark mode via `prefers-color-scheme`. Fonts: Instrument Serif (`--font-serif`) and DM Sans (`--font-sans`). Prose styling via `@tailwindcss/typography`.
