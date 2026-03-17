export const metadata = {
  title: 'Shop All Vendors - 121212.black',
  description: 'Browse all Black-owned businesses in our marketplace.',
};

export default function ShopAllPage() {
  return (
    <>
      <header className="page-header">
        <h1>Shop All Vendors</h1>
        <p>Browse all Black-owned businesses in our marketplace.</p>
      </header>
      <section className="page-content">
        <div className="content-section">
          <h2>Welcome</h2>
          <p>This is the Shop All Vendors page. Content coming soon.</p>
          <div className="info-box">
            <p>121212.black is building economic infrastructure and cultural sovereignty for the Black diaspora. Every page, every transaction, every connection strengthens our network.</p>
          </div>
          <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#666', letterSpacing: '1px' }}>
            All transactions powered by <a href="https://121212.ai" style={{ color: '#D4AF37', textDecoration: 'none' }}>121212.ai</a>
          </p>
        </div>
      </section>
    </>
  );
}
