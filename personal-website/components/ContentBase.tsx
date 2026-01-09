'use client';

import { Tab } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';

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
                        <button onClick={() => setActiveTab(tab.index)} className="hover:cursor-pointer">{tab.label}</button>
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