'use client';

import ReactMarkdown from 'react-markdown';
import remarkGemoji from 'remark-gemoji'
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import { useEffect, useState } from "react";
import 'katex/dist/katex.min.css';
// import remarkGfm from 'remark-gfm';


export default function MarkdownRenderer({ markdownUrl }: { markdownUrl: string }) {

    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(markdownUrl)
        .then(res => res.text())
        .then(text => setContent(text));
    }, [markdownUrl]);

    
    return <div className="p-4 flex justify-center">
        <div className="prose prose-sm max-w-none [&_.katex]:text-inherit [&_code]:before:content-none [&_code]:after:content-none">
            <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGemoji]}
                rehypePlugins={[rehypeKatex, rehypeSlug]}
                components={{
                    code({ children, className, ...props }) {
                        return (
                            <code
                                className={`bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono${className ? ` ${className}` : ''}`}
                                {...props}
                            >
                                {children}
                            </code>
                        );
                    }
                }}
            >
                {content}
            </ReactMarkdown>
         </div>
    </div>;
}