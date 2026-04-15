import Link from 'next/link';

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
                <Link href="/academic">Academic</Link>
            </li>
            <li>
                <Link href="/miscellaneous">Miscellaneous</Link>
            </li>
        </ul>
    );
}