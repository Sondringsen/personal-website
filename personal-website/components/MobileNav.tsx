'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
    { href: '/', label: 'Home' },
    { href: '/about-me', label: 'About Me' },
    { href: '/academic', label: 'Academic' },
    { href: '/miscellaneous', label: 'Miscellaneous' },
];

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden fixed top-4 left-4 z-20">
            <button
                onClick={() => setOpen(!open)}
                className="p-2 text-foreground"
                aria-label="Toggle menu"
            >
                {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                )}
            </button>
            {open && (
                <nav className="mt-2 bg-[#f0ede8] dark:bg-[#1a1816] border border-accent/40">
                    <ul className="px-6 py-4 text-xl space-y-6">
                        {links.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href} onClick={() => setOpen(false)}>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );
}
