import metadata from './metadata.json';
import { Tab, ArticleMetadata } from '@/types/types';

interface MetadataSchema {
    articles: ArticleMetadata[];
}

export function getTabsForSection(section: string): Tab[] {
    const { articles } = metadata as MetadataSchema;
    const sectionArticles = articles
        .filter((article) => article.section === section)
        .sort((a, b) => a.id - b.id);

    return sectionArticles.map((article, index) => ({
        index,
        metaData: {
            title: article.title,
            lastUpdated: new Date(article.lastUpdated),
            published: new Date(article.published),
        },
        component_type: article.component_type,
        url: article.url,
    }));
}
