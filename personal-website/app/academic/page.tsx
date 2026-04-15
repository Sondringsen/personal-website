import ArticleList from '@/components/ArticleList';
import { getTabsForSection } from '@/services/metadataService';
import SectionLayout from '@/components/SectionLayout';

export default function DataScience() {
    const tabs = getTabsForSection('academic');

    return (
        <SectionLayout>
            <ArticleList tabs={tabs} section="academic" />
        </SectionLayout>
    );
}
