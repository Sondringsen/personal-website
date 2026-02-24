'use client';

import TableOfContentBase from "@/components/TableOfContentBase";
import { useState } from "react";
import ContentBase from "@/components/ContentBase";
import { getTabsForSection } from "@/services/metadataService";

export default function Projects() {
    const [activeTab, setActiveTab] = useState<number | null>(null);
    const tabs = getTabsForSection('projects');

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
