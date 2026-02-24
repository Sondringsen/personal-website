'use client';

import { Tab } from '@/types/types';
import HtmlRenderer from '@/components/HtmlRenderer';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import PDFRenderer from '@/components/PDFRenderer';

interface ArticleContentProps {
    tab: Tab;
}

export default function ArticleContent({ tab }: ArticleContentProps) {
    switch (tab.component_type) {
        case 'html':
            return tab.url ? <HtmlRenderer htmlUrl={tab.url} /> : null;
        case 'markdown':
            return tab.url ? <MarkdownRenderer markdownUrl={tab.url} /> : null;
        case 'pdf':
            return tab.url ? (
                <div className="h-screen w-full">
                    <PDFRenderer pdfUrl={tab.url} />
                </div>
            ) : null;
        default:
            return null;
    }
}
