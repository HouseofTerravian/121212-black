import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getArticleBySlug, getOriginalArticles, formatArticleDate } from '@/lib/articles';
import EnterNetworkCTA from '@/app/components/EnterNetworkCTA';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getOriginalArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found - 121212.black',
    };
  }

  return {
    title: `${article.title} - 121212.black`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <header className="article-header">
        <div className="article-header-content">
          <span className="article-category">{article.category}</span>
          <h1>{article.title}</h1>
          <div className="article-meta-header">
            <span className="article-author">By {article.author}</span>
            <span className="article-date">{formatArticleDate(article.publishedAt)}</span>
          </div>
        </div>
      </header>

      <article className="article-body">
        <div className="article-body-content">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="article-footer">
          <Link href="/" className="back-link">Back to Stories</Link>
        </div>
      </article>

      <EnterNetworkCTA variant="banner" />
    </>
  );
}
