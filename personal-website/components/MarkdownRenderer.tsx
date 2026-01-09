'use client';

import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from "react";
// import remarkGfm from 'remark-gfm';


export default function MarkdownRenderer({ markdownUrl }: { markdownUrl: string }) {

    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(markdownUrl)
        .then(res => res.text())
        .then(text => setContent(text));
    }, [markdownUrl]);

    
    return <div className="p-4 flex justify-center">
        <div className="prose prose-sm">
            <ReactMarkdown>
                {content}
            </ReactMarkdown>
         </div>
    </div>;
}