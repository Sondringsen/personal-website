'use client';

import { Tab } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';
import HtmlRenderer from '@/components/HtmlRenderer';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import PDFRenderer from '@/components/PDFRenderer';
import Journey from '@/app/academics/journey';

interface TabButtonProps {
    tab: Tab;
    setActiveTab: Dispatch<SetStateAction<number | null>>;
}
const TabButton = ({ tab, setActiveTab }: TabButtonProps) => {
    return (
        <button onClick={() => setActiveTab(tab.index)} className="hover:cursor-pointer text-left group">
            <span className="underline underline-offset-4 decoration-accent group-hover:decoration-2 transition-all">
                {tab.metaData.title}
            </span>
            <span className="block text-xs text-gray-500 mt-1">
                First published: {tab.metaData.published.toLocaleDateString()}
                <span className="mx-2">·</span>
                Last updated: {tab.metaData.lastUpdated.toLocaleDateString()}
            </span>
        </button>
    );
};

function renderTabContent(tab: Tab): React.ReactNode {
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
        case 'journey':
            return <Journey />;
        default:
            return null;
    }
}

interface ContentBaseProps {
    tabs: Tab[];
    activeTab: number | null;
    setActiveTab: Dispatch<SetStateAction<number | null>>;
}

export default function ContentBase({ tabs, activeTab, setActiveTab }: ContentBaseProps) {
    return (
    <div>
        <div className="p-4 flex justify-left">
            {activeTab === null && (
                <ul className="flex flex-col gap-4">
                    {tabs.map((tab) => (
                    <li key={tab.index}>
                        <TabButton tab={tab} setActiveTab={setActiveTab} />
                    </li>
                ))}
                </ul>
            )}
        </div>
        <div className="p-4 flex justify-center">
            {activeTab !== null && (
                <>{renderTabContent(tabs[activeTab])}</>
            )}
        </div>
    </div>
)}