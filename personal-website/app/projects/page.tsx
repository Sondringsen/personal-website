'use client';

import TableOfContentBase from "@/components/TableOfContentBase";
import { useState } from "react";
import { Tab } from "@/types/types";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import ContentBase from "@/components/ContentBase";

export default function Projects() {
    const [activeTab, setActiveTab] = useState<number | null>(null);
    const tabs: Tab[] = [
        {index: 0, label: 'Projects', component: <MarkdownRenderer markdownUrl="/projects/projects.md" />}
    ];

    return (
        <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#f0ede8] dark:to-[#1a1816]" />
        <div className="absolute left-8 top-0 h-32 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent md:left-16" />
        <div className="grid grid-cols-8 gap-4">
            <div className="flex items-center col-span-1 relative flex min-h-screen border-r border-accent">
                <TableOfContentBase />
            </div>
            <div className="col-span-7 relative flex min-h-screen flex-col justify-center px-8 py-10 md:px-16 lg:px-24">
                <ContentBase tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </div>
        </div>
    );
}
