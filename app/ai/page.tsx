import Link from 'next/link';

export const metadata = {
  title: '121212.ai — Commerce & Intelligence Layer for the 121212 Ecosystem',
  description: '121212.ai powers every transaction, recommendation, and connection across the 121212 network. The commerce and intelligence infrastructure built for the Black diaspora.',
};

const POWERED_SITES = [
  {
    domain: '121212.community',
    name: 'Community',
    description: 'City hub marketplace — bid on subdomains, curate Black cultural content city by city.',
    url: 'https://121212.community',
    category: 'Infrastructure',
  },
  {
    domain: '121212.reviews',
    name: 'Reviews',
    description: 'Ecosystem-wide review hub. Affiliate earnings on every verified purchase driven.',
    url: 'https://121212.reviews',
    category: 'Commerce',
  },
  {
    domain: '121212.events',
    name: 'Events',
    description: 'Curated Black cultural events across seven cities. Free to list, community-curated.',
    url: 'https://121212.events',
    category: 'Discovery',
  },
  {
    domain: '121212.market',
    name: 'Market',
    description: 'Black-owned commerce at scale. Vendors, transactions, and a diaspora marketplace.',
    url: 'https://121212.market',
    category: 'Commerce',
  },
  {
    domain: 'my121212.space',
    name: 'My Space',
    description: 'Personal dashboard — purchases, activity, reviews, music, and AI Navigator.',
    url: 'https://my121212.space',
    category: 'Members',
  },
  {
    domain: '121212.black',
    name: 'Headquarters',
    description: 'The editorial front door. Black news, Black commerce, Black power.',
    url: 'https://121212.black',
    category: 'Media',
  },
];

const CAPABILITIES = [
  {
    icon: '◆',
    title: 'Transaction Processing',
    description: 'Every purchase, subscription, and vendor payout across the 121212 ecosystem is processed through 121212.ai infrastructure.',
  },
  {
    icon: '◆',
    title: 'Affiliate Attribution',
    description: '30-day cookie tracking, last-click attribution, and monthly payout calculations for the 121212.reviews affiliate program.',
  },
  {
    icon: '◆',
    title: 'Ecosystem Intelligence',
    description: 'Cross-platform recommendations, member activity aggregation, and the AI Navigator powering personalized experiences on my121212.space.',
  },
  {
    icon: '◆',
    title: 'Vendor & Curator Onboarding',
    description: 'Application processing, verification workflows, and revenue-share calculations for vendors and city hub curators.',
  },
  {
    icon: '◆',
    title: 'Event Curation Engine',
    description: 'Submission review pipeline, cross-hub syndication, and city-category-price filtering across 121212.events.',
  },
  {
    icon: '◆',
    title: 'Identity & Access',
    description: 'Unified authentication layer connecting all ecosystem sites through a single member identity.',
  },
];

export default function AIPage() {
  return (
    <>
      {/* Hero */}
      <header className="hero" style={{ paddingBottom: '4rem' }}>
        <div style={{ fontSize: '0.75rem', color: '#D4AF37', letterSpacing: '3px', marginBottom: '1.5rem' }}>
          COMMERCE & INTELLIGENCE LAYER
        </div>
        <h1 style={{ marginBottom: '1rem' }}>121212.ai</h1>
        <p className="tagline" style={{ maxWidth: '640px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
          The engine behind every transaction, every recommendation, and every connection
          across the 121212 ecosystem. Built for the Black diaspora. Owned by the network.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/network" className="cta-button">Enter The Network</Link>
          <a href="#powered" className="cta-button-secondary" style={{ marginTop: 0 }}>See What We Power</a>
        </div>
      </header>

      {/* What 121212.ai Does */}
      <section style={{ maxWidth: '1400px', margin: '6rem auto', padding: '0 2rem' }}>
        <h2 className="section-title">What 121212.ai Powers</h2>
        <p className="section-subtitle">
          Every site in the ecosystem runs on shared infrastructure. 121212.ai is that infrastructure.
        </p>

        <div className="content-grid" style={{ marginTop: '3rem' }}>
          {CAPABILITIES.map((cap) => (
            <div key={cap.title} className="content-card">
              <div className="card-category" style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{cap.icon}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{cap.title}</h3>
              <p style={{ marginBottom: 0 }}>{cap.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Powered Sites */}
      <section id="powered" style={{ maxWidth: '1400px', margin: '6rem auto', padding: '0 2rem' }}>
        <h2 className="section-title">Platforms Powered by 121212.ai</h2>
        <p className="section-subtitle">
          Six live platforms. One commerce layer. Every transaction flows through 121212.ai.
        </p>

        <div className="content-grid" style={{ marginTop: '3rem' }}>
          {POWERED_SITES.map((site) => (
            <a
              key={site.domain}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="content-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="card-category">{site.category.toUpperCase()}</div>
              <h3>{site.name}</h3>
              <p>{site.description}</p>
              <div className="card-footer">
                <span className="card-link">{site.domain} →</span>
                <span className="card-tier">Live</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Commerce Proof Section */}
      <section style={{ maxWidth: '1000px', margin: '6rem auto', padding: '0 2rem' }}>
        <div style={{
          background: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderLeft: '4px solid #D4AF37',
          padding: '2.5rem',
          borderRadius: '4px',
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 300, marginBottom: '1rem' }}>Commerce Infrastructure Statement</h3>
          <p style={{ color: '#ccc', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '1rem' }}>
            121212.ai serves as the commerce and intelligence layer for the 121212 ecosystem — a federation
            of Black-owned digital platforms spanning community hubs, product reviews, cultural events,
            marketplace transactions, and member services.
          </p>
          <p style={{ color: '#ccc', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '1rem' }}>
            All transactions processed across ecosystem sites — including vendor payouts, affiliate commissions,
            membership subscriptions, digital product sales, and city hub licensing fees — are powered
            by 121212.ai infrastructure.
          </p>
          <p style={{ color: '#ccc', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            121212.ai is operated by MCM Enterprises as part of the 121212 network.
          </p>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid #2a2a2a' }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#666', letterSpacing: '2px', marginBottom: '0.3rem' }}>OPERATOR</div>
              <div style={{ fontSize: '0.9rem', color: '#D4AF37' }}>MCM Enterprises</div>
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#666', letterSpacing: '2px', marginBottom: '0.3rem' }}>PLATFORMS POWERED</div>
              <div style={{ fontSize: '0.9rem', color: '#D4AF37' }}>6 Live</div>
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', color: '#666', letterSpacing: '2px', marginBottom: '0.3rem' }}>STATUS</div>
              <div style={{ fontSize: '0.9rem', color: '#2a9d8f' }}>Active in Commerce</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="prefooter-cta">
        <h2>The Infrastructure Is Built.</h2>
        <p>Every platform you enter is powered by 121212.ai. The commerce layer belongs to us.</p>
        <Link href="/network" className="cta-button">Enter The Network</Link>
        <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#666', letterSpacing: '1px' }}>
          All transactions powered by <span style={{ color: '#D4AF37' }}>121212.ai</span>
        </p>
      </section>
    </>
  );
}
