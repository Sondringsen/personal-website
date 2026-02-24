import Link from 'next/link';
// import { Tab } from '@/types/types';
// import { Dispatch, SetStateAction } from 'react';

// export default function TableOfContentBase({ tabs, setActiveTab }: { tabs: Tab[], setActiveTab: Dispatch<SetStateAction<number>> }) {
export default function TableOfContentBase() {
    return (
        <ul className="px-4 text-xl space-y-10">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about-me">About Me</Link>
            </li>
            <li>
                <Link href="/data-science">Data Science</Link>
            </li>
            <li>
                <Link href="/miscellaneous">Miscellaneous</Link>
            </li>
        </ul>
    );
}