'use client';

import { useState } from 'react';
import { Tab } from '@/types/types';
import HtmlRenderer from '@/components/HtmlRenderer';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import PDFRenderer from '@/components/PDFRenderer';

interface ArticleContentProps {
    tab: Tab;
}

const LANG_LABELS: Record<string, string> = {
    en: '🇬🇧 Read in English',
    no: '🇳🇴 Les på norsk',
};

export default function ArticleContent({ tab }: ArticleContentProps) {
    const translations = tab.translations ?? {};
    const altLangCode = Object.keys(translations)[0];

    const [activeLang, setActiveLang] = useState<'primary' | string>('primary');

    const currentUrl = activeLang === 'primary' ? tab.url : translations[activeLang];

    const toggleLabel =
        activeLang === 'primary'
            ? LANG_LABELS[altLangCode]
            : altLangCode === 'no'
            ? LANG_LABELS['en']
            : LANG_LABELS['no'];

    const toggle = altLangCode ? (
        <div className="flex justify-end mb-4">
            <button
                onClick={() =>
                    setActiveLang((prev) =>
                        prev === 'primary' ? altLangCode : 'primary'
                    )
                }
                className="text-sm px-3 py-1 rounded border border-[var(--muted)] text-[var(--muted)] hover:border-[var(--foreground)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
            >
                {toggleLabel}
            </button>
        </div>
    ) : null;

    switch (tab.component_type) {
        case 'html':
            return (
                <>
                    {toggle}
                    {currentUrl ? <HtmlRenderer htmlUrl={currentUrl} /> : null}
                </>
            );
        case 'markdown':
            return (
                <>
                    {toggle}
                    {currentUrl ? <MarkdownRenderer markdownUrl={currentUrl} /> : null}
                </>
            );
        case 'pdf':
            return (
                <>
                    {toggle}
                    {currentUrl ? (
                        <div className="h-screen w-full">
                            <PDFRenderer pdfUrl={currentUrl} />
                        </div>
                    ) : null}
                </>
            );
        default:
            return null;
    }
}
