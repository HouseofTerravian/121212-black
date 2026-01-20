import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="hero">
        <h1>Unapologetically Us.</h1>
        <p className="tagline">We Start At Home, But Build For The World</p>
        <Link href="/network" className="cta-button">ENTER THE NETWORK</Link>
      </header>

      <section className="featured-content">
        <div className="content-grid">
          <div className="content-card">
            <div className="card-category">MARKETPLACE</div>
            <h3>Black-Owned Commerce At Scale</h3>
            <p>From Atlanta to Accra — with servers, vendors, $25M in tracked transactions, and a growing diaspora marketplace we built, we trust.</p>
            <div className="card-footer">
              <Link href="/marketplace" className="card-link">Shop Commerce</Link>
              <span className="card-tier">Tier 1</span>
            </div>
          </div>

          <div className="content-card">
            <div className="card-category">MOVEMENT</div>
            <h3>32 Cities, One Movement</h3>
            <p>United voices, coalitions met and builders running economic infrastructure city by city, sanctuary at a time.</p>
            <div className="card-footer">
              <Link href="/territories" className="card-link">See Movement</Link>
              <span className="card-tier">Tier 1</span>
            </div>
          </div>

          <div className="content-card">
            <div className="card-category">MEDIA</div>
            <h3>Stories That Shape Culture</h3>
            <p>Testimonies, documentaries, and coverage showcasing Black resilience, entrepreneurship, and our collective stories narratives.</p>
            <div className="card-footer">
              <Link href="/media" className="card-link">Read Stories</Link>
              <span className="card-tier">Free Access</span>
            </div>
          </div>

          <div className="content-card">
            <div className="card-category">CULTURE</div>
            <h3>The Sound of Our Movement</h3>
            <p>Artists, albums, covers, and creative creatives — celebrating the cultural heartbeat of the diaspora.</p>
            <div className="card-footer">
              <Link href="/culture" className="card-link">Crown Exclusives</Link>
              <span className="card-tier">Artist Access</span>
            </div>
          </div>

          <div className="content-card">
            <div className="card-category">WORLD // DIASPORA</div>
            <h3>From Harlem to Lagos to London</h3>
            <p>City spotlights, regional hubs, and global movement — mapping the physical presence of the new Black renaissance.</p>
            <div className="card-footer">
              <Link href="/global" className="card-link">Global Routes</Link>
              <span className="card-tier">Route Map</span>
            </div>
          </div>

          <div className="content-card">
            <div className="card-category">LAW &amp; POLICY</div>
            <h3>Know Your Rights, Build Your Power</h3>
            <p>Legal education, policy analysis, and advocacy structure — equipping the network with knowledge and protection.</p>
            <div className="card-footer">
              <Link href="/legal" className="card-link">Education &amp; Advocacy</Link>
              <span className="card-tier">Resources</span>
            </div>
          </div>
        </div>
      </section>

      <section className="support-section">
        <h2 className="section-title">Support The Network</h2>

        <div className="support-grid">
          <div className="support-card">
            <h3>The Annual 12:12 Report</h3>
            <div className="price">$12.12</div>
            <p>Comprehensive analysis of Black economic infrastructure and network progress. Five tier members.</p>
            <Link href="/report" className="support-button">Add to Cart</Link>
          </div>

          <div className="support-card">
            <h3>Why 121212</h3>
            <div className="price">$1+ (Name Your Price)</div>
            <p>Limited memorabilia. The story and ideals behind the 121212 network. Capped at 10,000 copies.</p>
            <Link href="/why-121212" className="support-button">Name Your Price</Link>
          </div>

          <div className="support-card">
            <h3>121212 Membership</h3>
            <div className="price">$12.12/month</div>
            <p>Full access to network, resources, reports and community infrastructure.</p>
            <Link href="/membership" className="support-button">Join the Network</Link>
          </div>
        </div>
      </section>

      <section className="vendor-section">
        <h2 className="section-title">Vendor Plans</h2>

        <div className="vendor-grid">
          <div className="vendor-card">
            <h3>Freedom Tier</h3>
            <div className="price">Free</div>
          </div>

          <div className="vendor-card">
            <h3>Builder Tier</h3>
            <div className="price">$25/mo</div>
          </div>

          <div className="vendor-card highlighted">
            <h3>Ascendant Tier</h3>
            <div className="price">$121/mo</div>
          </div>

          <div className="vendor-card">
            <h3>Crown Collective</h3>
            <div className="price">$200/mo</div>
          </div>
        </div>
      </section>

      <section className="territory-section">
        <h2 className="section-title">Territory Acquisition Portal</h2>
        <p className="section-subtitle">Claim stewardship over a city, region, or territory. Curate vendors, elevate culture, and share in the revenue your community generates.</p>

        <div className="territory-grid">
          <div className="territory-card">
            <div className="territory-header">
              <div>
                <h3>Atlanta, GA</h3>
                <div className="tier-badge">TIER 1</div>
              </div>
              <span className="status-badge claimed">CLAIMED</span>
            </div>
            <div className="price">$10,000+</div>
          </div>

          <div className="territory-card">
            <div className="territory-header">
              <div>
                <h3>Lagos, Nigeria</h3>
                <div className="tier-badge">TIER 1</div>
              </div>
              <span className="status-badge available">FOREVER T1</span>
            </div>
            <div className="price">$50,000+</div>
          </div>

          <div className="territory-card">
            <div className="territory-header">
              <div>
                <h3>Charlotte, NC</h3>
                <div className="tier-badge">TIER 1</div>
              </div>
              <span className="status-badge open">OPEN</span>
            </div>
            <div className="price">$5,000+</div>
          </div>
        </div>

        <Link href="/territories" className="cta-button-secondary">BROWSE ALL TERRITORIES</Link>
      </section>

      <section className="trust-section">
        <h2>Trust &amp; Integrity</h2>
        <p>Anything purchased here is refundable. Trust is universal. Integrity is non-negotiable.</p>
      </section>
    </>
  );
}
