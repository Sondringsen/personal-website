import ArticleList from '@/components/ArticleList';
import { getTabsForSection } from '@/services/metadataService';
import SectionLayout from '@/components/SectionLayout';

export default function AboutMe() {
    const tabs = getTabsForSection('about-me');

    return (
        <SectionLayout>
            <ArticleList tabs={tabs} section="about-me" />
        </SectionLayout>
    );
}
