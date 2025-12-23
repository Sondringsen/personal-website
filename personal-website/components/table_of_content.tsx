import Link from 'next/link';
import { Tab } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';

export default function TableOfContent({ tabs, setActiveTab }: { tabs: Tab[], setActiveTab: Dispatch<SetStateAction<number>> }) {
    return (
    <div className="flex items-center col-span-1 relative flex min-h-screen border-r border-accent">
        <ul className="px-4 text-xl space-y-10">
            <li>
                <Link href="/">Home</Link>
            </li>
            {tabs.map((tab) => (
                <li key={tab.index}>
                    <button onClick={() => setActiveTab(tab.index)} className="hover:cursor-pointer">{tab.label}</button>
                </li>
            ))}
        </ul>
    </div>
    );
}