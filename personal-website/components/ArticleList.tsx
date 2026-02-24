'use client';

import Link from 'next/link';
import { Tab } from '@/types/types';

interface ArticleListProps {
    tabs: Tab[];
    section: string;
}

export default function ArticleList({ tabs, section }: ArticleListProps) {
    return (
        <div className="p-4 flex justify-left">
            <ul className="flex flex-col gap-4">
                {tabs.map((tab) => (
                    <li key={tab.slug}>
                        <Link
                            href={`/${section}/${tab.slug}`}
                            className="hover:cursor-pointer text-left group block"
                        >
                            <span className="underline underline-offset-4 decoration-accent group-hover:decoration-2 transition-all">
                                {tab.metaData.title}
                            </span>
                            <span className="block text-xs text-gray-500 mt-1">
                                First published:{' '}
                                {tab.metaData.published.toLocaleDateString()}
                                <span className="mx-2">·</span>
                                Last updated:{' '}
                                {tab.metaData.lastUpdated.toLocaleDateString()}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
