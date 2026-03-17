export const metadata = {
  title: 'Membership - 121212.black',
  description: 'Full access to network, resources, reports and community infrastructure.',
};

export default function MembershipPage() {
  return (
    <>
      <header className="page-header">
        <h1>121212 Membership</h1>
        <p>Full access to network, resources, reports and community infrastructure.</p>
      </header>
      <section className="page-content">
        <div className="content-section">
          <h2>Welcome</h2>
          <p>This is the Membership page. Content coming soon.</p>
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
