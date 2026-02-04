import Link from 'next/link';
import { getArticles, getFeaturedArticles, formatArticleDate, isExternalArticle } from '@/lib/articles';
import type { Article } from '@/lib/articles';
import EnterNetworkCTA from './components/EnterNetworkCTA';

function ArticleCard({ article }: { article: Article }) {
  const isExternal = isExternalArticle(article);
  const href = isExternal ? article.externalUrl : `/articles/${article.slug}`;
  const target = isExternal ? '_blank' : undefined;
  const rel = isExternal ? 'noopener noreferrer' : undefined;

  return (
    <article className="article-card">
      <div className="article-image-placeholder">
        <span className="article-category">{article.category}</span>
      </div>
      <div className="article-content">
        {isExternal && (
          <span className="article-source-badge">
            Featured from {article.source}
          </span>
        )}
        <h3 className="article-title">
          <Link href={href} target={target} rel={rel}>
            {article.title}
          </Link>
        </h3>
        <p className="article-excerpt">{article.excerpt}</p>
        <div className="article-meta">
          <span className="article-date">{formatArticleDate(article.publishedAt)}</span>
          {!isExternal && (
            <span className="article-author">By {article.author}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const featuredArticles = getFeaturedArticles();
  const allArticles = getArticles();
  const recentArticles = allArticles.filter(a => !a.featured).slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <header className="blog-hero">
        <h1>121212.black</h1>
        <p className="tagline">Unapologetically Us. Black News. Black Commerce. Black Power.</p>
        <EnterNetworkCTA variant="primary" />
      </header>

      {/* Featured Articles */}
      <section className="articles-section">
        <h2 className="section-title">Featured Stories</h2>
        <div className="article-grid featured-grid">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Mid-Content Network Banner */}
      <EnterNetworkCTA variant="banner" />

      {/* Recent Articles */}
      <section className="articles-section">
        <h2 className="section-title">Latest</h2>
        <div className="article-grid">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Pre-Footer Network CTA */}
      <section className="prefooter-cta">
        <h2>Ready to Build With Us?</h2>
        <p>Join the network. Support Black commerce. Shape the movement.</p>
        <EnterNetworkCTA variant="primary" />
      </section>
    </>
  );
}
