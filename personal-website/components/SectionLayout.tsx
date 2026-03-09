import TableOfContentBase from '@/components/TableOfContentBase';
import MobileNav from '@/components/MobileNav';

interface SectionLayoutProps {
    children: React.ReactNode;
}

export default function SectionLayout({ children }: SectionLayoutProps) {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-[#f0ede8] dark:bg-[#1a1816]" />
            <div className="absolute left-8 top-0 h-32 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent md:left-16" />
            <MobileNav />
            <div className="hidden md:flex fixed left-0 top-0 h-screen w-48 items-center border-r border-accent z-10">
                <TableOfContentBase />
            </div>
            <div className="md:ml-48 relative flex min-h-screen flex-col justify-center px-8 py-10 md:px-16 lg:px-24">
                {children}
            </div>
        </div>
    );
}
