import Link from 'next/link';

export const metadata = {
  title: 'Marketplace - 121212.black',
  description: 'Black-owned businesses from Atlanta to Accra. $25M+ in transactions. Built by us, for us.',
};

export default function MarketplacePage() {
  return (
    <>
      <header className="page-header">
        <h1>The Marketplace</h1>
        <p>Black-owned businesses from Atlanta to Accra. $25M+ in transactions. Built by us, for us.</p>
      </header>

      <section className="page-content">
        <div className="content-section">
          <h2>Shop All Vendors</h2>
          <p>Browse our curated selection of Black-owned businesses across 32 cities worldwide. Every purchase strengthens our economic infrastructure.</p>

          <div className="content-grid">
            <div className="content-card">
              <div className="card-category">FEATURED VENDOR</div>
              <h3>Crown Clothing Co.</h3>
              <p>Premium streetwear and cultural apparel from Atlanta, GA</p>
              <div className="card-footer">
                <span className="card-link">Visit Store</span>
                <span className="card-tier">Verified</span>
              </div>
            </div>

            <div className="content-card">
              <div className="card-category">FEATURED VENDOR</div>
              <h3>Lagos Tech Hub</h3>
              <p>Electronics, accessories, and tech solutions</p>
              <div className="card-footer">
                <span className="card-link">Visit Store</span>
                <span className="card-tier">Verified</span>
              </div>
            </div>

            <div className="content-card">
              <div className="card-category">FEATURED VENDOR</div>
              <h3>Harlem Heritage Foods</h3>
              <p>Organic produce and specialty foods delivered</p>
              <div className="card-footer">
                <span className="card-link">Visit Store</span>
                <span className="card-tier">Verified</span>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <h2>Become a Vendor</h2>
          <p>Join the 121212 marketplace and connect with our global network of conscious consumers.</p>
          <Link href="/become-vendor" className="cta-button">Apply Now</Link>
        </div>
      </section>
    </>
  );
}
