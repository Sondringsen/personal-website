'use client';

import { useState } from 'react';
import { Quote } from '@/services/quotesService';

interface Props {
    quotes: Quote[];
    tags: string[];
}

export default function QuotesClient({ quotes, tags }: Props) {
    const [activeTag, setActiveTag] = useState<string | null>(null);

    const filtered = activeTag ? quotes.filter(q => q.tags.includes(activeTag)) : quotes;

    return (
        <div>
            {/* Tag filters */}
            <div className="flex flex-wrap gap-2 mb-10">
                <button
                    onClick={() => setActiveTag(null)}
                    className={`px-3 py-1 text-sm border transition-colors ${
                        activeTag === null
                            ? 'border-accent bg-accent/10 text-foreground'
                            : 'border-accent/30 text-muted hover:border-accent hover:text-foreground'
                    }`}
                >
                    All
                </button>
                {tags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                        className={`px-3 py-1 text-sm border transition-colors capitalize ${
                            activeTag === tag
                                ? 'border-accent bg-accent/10 text-foreground'
                                : 'border-accent/30 text-muted hover:border-accent hover:text-foreground'
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Quotes list */}
            <div className="space-y-10">
                {filtered.map(quote => (
                    <div key={quote.id} className="border-l-2 border-accent/40 pl-6">
                        <blockquote className="font-[family-name:var(--font-serif)] text-lg leading-relaxed text-foreground/90 italic">
                            &ldquo;{quote.text}&rdquo;
                        </blockquote>
                        <div className="mt-3 text-sm text-muted">
                            <span className="font-medium text-foreground/70">— {quote.author}</span>
                            {(quote.source || quote.year) && (
                                <span>
                                    {', '}
                                    {quote.source && <span className="italic">{quote.source}</span>}
                                    {quote.source && quote.year && ' '}
                                    {quote.year && <span>({quote.year})</span>}
                                </span>
                            )}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                            {quote.tags.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                                    className="px-2 py-0.5 text-xs border border-accent/20 text-muted capitalize hover:border-accent/60 transition-colors"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {filtered.length === 0 && (
                <p className="text-muted text-sm">No quotes found for this tag.</p>
            )}
        </div>
    );
}
