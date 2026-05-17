import quotesData from '../public/miscellaneous/quotes.json';

export interface Quote {
    id: number;
    text: string;
    author: string;
    source: string | null;
    year: number | null;
    tags: string[];
}

export function getAllQuotes(): Quote[] {
    return quotesData.quotes as Quote[];
}

export function getAllTags(): string[] {
    const tagSet = new Set<string>();
    for (const quote of quotesData.quotes) {
        for (const tag of quote.tags) {
            tagSet.add(tag);
        }
    }
    return Array.from(tagSet).sort();
}

export function getQuoteOfTheDay(): Quote {
    const quotes = quotesData.quotes as Quote[];
    const today = new Date();
    const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
        hash = (hash * 31 + dateStr.charCodeAt(i)) >>> 0;
    }
    return quotes[hash % quotes.length];
}
