export const metadata = {
  title: 'Vendor Plans - 121212.black',
  description: 'Choose the right plan for your business.',
};

export default function VendorPlansPage() {
  return (
    <>
      <header className="page-header">
        <h1>Vendor Plans</h1>
        <p>Choose the right plan for your business.</p>
      </header>
      <section className="page-content">
        <div className="content-section">
          <h2>Welcome</h2>
          <p>This is the Vendor Plans page. Content coming soon.</p>
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
