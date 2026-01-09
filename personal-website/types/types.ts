export interface TabMetaData {
    title: string,
    lastUpdated: Date,
    published: Date
}

export interface Tab {
    index: number, 
    metaData: TabMetaData,
    component: React.ReactNode
}
