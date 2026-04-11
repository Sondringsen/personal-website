import metadata from './metadata.json';
import { Tab, ArticleMetadata } from '@/types/types';

interface MetadataSchema {
    articles: ArticleMetadata[];
}

const metadataTyped = metadata as MetadataSchema;

export function getTabsForSection(section: string): Tab[] {
    const { articles } = metadataTyped;
    const sectionArticles = articles
        .filter((article) => article.section === section)
        .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());

    return sectionArticles.map((article, index) => ({
        index,
        metaData: {
            title: article.title,
            lastUpdated: new Date(article.lastUpdated),
            published: new Date(article.published),
        },
        component_type: article.component_type,
        url: article.url,
        slug: article.slug,
    }));
}

export function getArticleByRoute(section: string, slug: string): Tab | null {
    const { articles } = metadataTyped;
    const article = articles.find(
        (a) => a.section === section && a.slug === slug
    );
    if (!article) return null;

    return {
        index: 0,
        metaData: {
            title: article.title,
            lastUpdated: new Date(article.lastUpdated),
            published: new Date(article.published),
        },
        component_type: article.component_type,
        url: article.url,
        slug: article.slug,
    };
}

export function getAllArticleRoutes(): { section: string; slug: string }[] {
    const { articles } = metadataTyped;
    return articles.map((a) => ({ section: a.section, slug: a.slug }));
}

export const VALID_SECTIONS = ['data-science', 'projects', 'miscellaneous'] as const;
