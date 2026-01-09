'use client';

import { Tab } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';



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
                <>{tabs[activeTab].component}</>
            )}
        </div>
    </div>
)}