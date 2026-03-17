export const metadata = {
  title: 'Enter The Network - 121212.black',
  description: 'Access the full 121212 ecosystem: Community, Reviews, Events, Marketplace, Music, Culture, Law, and your personal space.',
};

const LIVE_SITES = [
  {
    category: 'COMMUNITY',
    title: 'Own Your City\'s Black Cultural Hub',
    description: 'City-by-city cultural infrastructure. Bid on a city subdomain and curate the events, products, music, and places that define Black life where you live.',
    url: 'https://121212.community',
    domain: '121212.community',
    tier: 'Active Hubs',
    status: 'live',
  },
  {
    category: 'REVIEWS',
    title: 'Real Reviews. Real People. Real Income.',
    description: 'Trusted reviews of Black-owned products, music, events, services, and experiences. Reviewers earn affiliate income on every purchase they drive.',
    url: 'https://121212.reviews',
    domain: '121212.reviews',
    tier: 'Affiliate Earnings',
    status: 'live',
  },
  {
    category: 'EVENTS',
    title: 'Every Event Worth Going To',
    description: 'Curated Black cultural events across seven cities — music, tech, business, art, food, culture. If it matters, it\'s here.',
    url: 'https://121212.events',
    domain: '121212.events',
    tier: 'Free to Browse',
    status: 'live',
  },
  {
    category: 'MARKETPLACE',
    title: 'Black-Owned Commerce At Scale',
    description: 'From Atlanta to Accra — vendors, transactions, and a growing diaspora marketplace we built, we trust, we own.',
    url: 'https://121212.market',
    domain: '121212.market',
    tier: 'Vendor Access',
    status: 'live',
  },
  {
    category: 'YOUR SPACE',
    title: 'Your Personal 121212 Dashboard',
    description: 'Everything in one place — your purchases, activity, reviews, music, and AI Navigator. Your corner of the ecosystem.',
    url: 'https://my121212.space',
    domain: 'my121212.space',
    tier: 'Members Only',
    status: 'live',
  },
];

const COMING_SOON = [
  {
    category: 'MUSIC',
    title: 'The Sound of the Movement',
    description: 'Artists, albums, releases, and the cultural heartbeat of the diaspora.',
    domain: '121212.music',
  },
  {
    category: 'CULTURE',
    title: 'Art. Fashion. Film. Design.',
    description: 'Celebrating the creative pulse of the Black world — from galleries to runways to screens.',
    domain: '121212.culture',
  },
  {
    category: 'LAW & POLICY',
    title: 'Know Your Rights, Build Your Power',
    description: 'Legal education, policy analysis, and advocacy — equipping the network with knowledge and protection.',
    domain: '121212.law',
  },
  {
    category: 'MOVEMENT',
    title: 'Community. Organizing. Action.',
    description: 'United voices, coalitions, and builders running economic infrastructure city by city.',
    domain: '121212.movement',
  },
];

export default function NetworkPage() {
  return (
    <>
      <header className="hero">
        <h1>The 121212 Network</h1>
        <p className="tagline">One Ecosystem. Built For Us. Owned By Us.</p>
      </header>

      {/* ── Live Sites ── */}
      <section className="featured-content">
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Enter a Platform</h2>
        <p className="section-subtitle">Each site is live, independent, and connected to the full network.</p>

        <div className="content-grid">
          {LIVE_SITES.map((site) => (
            <a
              key={site.domain}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="content-card"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}
            >
              <div className="card-category">{site.category}</div>
              <h3 style={{ flex: 1 }}>{site.title}</h3>
              <p>{site.description}</p>
              <div className="card-footer">
                <span className="card-link">{site.domain} →</span>
                <span className="card-tier">{site.tier}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Coming Soon ── */}
      <section className="featured-content" style={{ marginTop: '2rem' }}>
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Expanding</h2>
        <p className="section-subtitle">These platforms are in development. The network is growing.</p>

        <div className="content-grid">
          {COMING_SOON.map((site) => (
            <div
              key={site.domain}
              className="content-card"
              style={{ opacity: 0.6, cursor: 'default' }}
            >
              <div className="card-category">{site.category}</div>
              <h3>{site.title}</h3>
              <p>{site.description}</p>
              <div className="card-footer">
                <span style={{ color: '#666', fontSize: '0.85rem', letterSpacing: '1px' }}>{site.domain}</span>
                <span className="card-tier" style={{ color: '#666' }}>Coming Soon</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Support ── */}
      <section className="support-section">
        <h2 className="section-title">Support The Network</h2>

        <div className="support-grid">
          <div className="support-card">
            <h3>The Annual 12:12 Report</h3>
            <div className="price">$12.12</div>
            <p>Comprehensive analysis of Black economic infrastructure and network progress.</p>
            <a href="/report" className="support-button">Add to Cart</a>
          </div>

          <div className="support-card">
            <h3>Why 121212</h3>
            <div className="price">$1</div>
            <p>Limited memorabilia. The story and ideals behind the 121212 network. Capped at 10,000 copies.</p>
            <a href="/why-121212" className="support-button">Buy Now</a>
          </div>

          <div className="support-card">
            <h3>121212 Membership</h3>
            <div className="price">$12.12/month</div>
            <p>Full access to network, resources, reports and community infrastructure.</p>
            <a href="/membership" className="support-button">Join the Network</a>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <h2>Trust &amp; Integrity</h2>
        <p>Anything purchased here is refundable. Trust is universal. Integrity is non-negotiable.</p>
        <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#666', letterSpacing: '1px' }}>
          All transactions powered by <a href="https://121212.ai" style={{ color: '#D4AF37', textDecoration: 'none' }}>121212.ai</a>
        </p>
      </section>
    </>
  );
}
