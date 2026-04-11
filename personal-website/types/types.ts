export interface TabMetaData {
    title: string,
    lastUpdated: Date,
    published: Date
}

export type ComponentType = 'html' | 'markdown' | 'pdf' | 'journey';

export interface Tab {
    index: number,
    metaData: TabMetaData,
    component_type: ComponentType,
    url?: string,
    slug: string,
    translations?: Record<string, string>
}

export interface ArticleMetadata {
    id: number,
    title: string,
    slug: string,
    lastUpdated: string,
    published: string,
    section: string,
    component_type: ComponentType,
    url?: string,
    translations?: Record<string, string>
}