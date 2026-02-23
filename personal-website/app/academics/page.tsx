'use client';

import {useState} from 'react';
import Journey from './journey';
import CV from './cv';
import { Tab } from '@/types/types';
import TableOfContentBase from '@/components/TableOfContentBase';
import ContentBase from '@/components/ContentBase';
import HtmlRenderer from '@/components/HtmlRenderer';

export default function Academics() {

    const [activeTab, setActiveTab] = useState<number | null>(null);
    const tabs: Tab[] = [
        {
            index: 0, 
            metaData: {title: 'Journey', lastUpdated: new Date('2026-01-09'), published: new Date('2026-01-09')}, 
            component: <Journey />
        },
        {
            index: 1, 
            metaData: {title: 'CV', lastUpdated: new Date('2026-01-09'), published: new Date('2026-01-09')}, 
            component: <CV />
        },
        {
            index: 2, 
            metaData: {title: 'Estimating Eigenvalues in Empirical Data', lastUpdated: new Date('2026-02-22'), published: new Date('2026-02-22')}, 
            component: <HtmlRenderer htmlUrl="/data_science/empirical_eigenvalues.html" />
        }
    ];

    return (
        <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[#f0ede8] dark:bg-[#1a1816]" />
        <div className="absolute left-8 top-0 h-32 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent md:left-16" />
        <div className="fixed left-0 top-0 h-screen w-[12.5%] flex items-center border-r border-accent z-10">
            <TableOfContentBase />
        </div>
        <div className="ml-[12.5%] relative flex min-h-screen flex-col justify-center px-8 py-10 md:px-16 lg:px-24">
            <ContentBase tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        </div>
    );
}
