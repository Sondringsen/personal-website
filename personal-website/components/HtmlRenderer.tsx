'use client';

interface HtmlRendererProps {
    htmlUrl: string;
}

export default function HtmlRenderer({ htmlUrl }: HtmlRendererProps) {
    return (
        <div className="w-full h-full min-h-[80vh]">
            <iframe
                src={htmlUrl}
                className="w-full h-full min-h-[80vh] border-0"
                title="Notebook content"
            />
        </div>
    );
}
