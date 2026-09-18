import ArticleList from '@/components/ArticleList';
import { getTabsForSection } from '@/services/metadataService';
import SectionLayout from '@/components/SectionLayout';

export default function Projects() {
    const tabs = getTabsForSection('projects');

    return (
        <SectionLayout>
            <ArticleList tabs={tabs} section="projects" />
        </SectionLayout>
    );
}
