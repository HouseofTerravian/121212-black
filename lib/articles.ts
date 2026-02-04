/**
 * Article Data Abstraction Layer
 *
 * This module provides functions to fetch article data.
 * Currently reads from a local JSON file, but can be swapped
 * to a CMS (Contentful, Sanity, etc.) by only modifying this file.
 */

import articlesData from '@/data/articles.json';

export interface BaseArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  image: string;
  featured: boolean;
}

export interface OriginalArticle extends BaseArticle {
  type: 'original';
  author: string;
  slug: string;
  content: string;
}

export interface ExternalArticle extends BaseArticle {
  type: 'external';
  source: string;
  externalUrl: string;
}

export type Article = OriginalArticle | ExternalArticle;

/**
 * Get all articles, sorted by publish date (newest first)
 */
export function getArticles(): Article[] {
  return (articlesData.articles as Article[]).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

/**
 * Get featured articles only
 */
export function getFeaturedArticles(): Article[] {
  return getArticles().filter((article) => article.featured);
}

/**
 * Get articles by category
 */
export function getArticlesByCategory(category: string): Article[] {
  return getArticles().filter(
    (article) => article.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get a single original article by slug
 * Returns null if not found or if article is external
 */
export function getArticleBySlug(slug: string): OriginalArticle | null {
  const article = articlesData.articles.find(
    (a) => a.type === 'original' && a.slug === slug
  );
  return (article as OriginalArticle) || null;
}

/**
 * Get all original articles (for generating static paths)
 */
export function getOriginalArticles(): OriginalArticle[] {
  return getArticles().filter(
    (article): article is OriginalArticle => article.type === 'original'
  );
}

/**
 * Get all external/curated articles
 */
export function getExternalArticles(): ExternalArticle[] {
  return getArticles().filter(
    (article): article is ExternalArticle => article.type === 'external'
  );
}

/**
 * Check if an article is external
 */
export function isExternalArticle(article: Article): article is ExternalArticle {
  return article.type === 'external';
}

/**
 * Format date for display
 */
export function formatArticleDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
