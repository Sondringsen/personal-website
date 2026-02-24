import { notFound } from 'next/navigation';
import { getArticleByRoute } from '@/services/metadataService';
import SectionLayout from '@/components/SectionLayout';
import ArticleContent from '@/components/ArticleContent';

interface ArticlePageProps {
    params: Promise<{ slug: string }>;
}

export default async function MiscellaneousArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = getArticleByRoute('miscellaneous', slug);

    if (!article) {
        notFound();
    }

    return (
        <SectionLayout>
            <ArticleContent tab={article} />
        </SectionLayout>
    );
}

export async function generateStaticParams() {
    const { getAllArticleRoutes } = await import('@/services/metadataService');
    const routes = getAllArticleRoutes();
    return routes
        .filter((r) => r.section === 'miscellaneous')
        .map((r) => ({ slug: r.slug }));
}
