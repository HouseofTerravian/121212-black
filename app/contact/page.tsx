export const metadata = {
  title: 'Contact - 121212.black',
  description: 'Get in touch with MCM Enterprises, the operating entity behind 121212.black.',
};

export default function ContactPage() {
  return (
    <>
      <header className="page-header">
        <h1>Contact</h1>
        <p>Reach out to the team behind 121212.black.</p>
      </header>
      <section className="page-content">

        <div className="content-section">
          <h2>MCM Enterprises</h2>
          <p>
            121212.black is operated by MCM Enterprises. For all inquiries — partnerships, vendor
            onboarding, membership, press, or general support — reach out using the information below.
          </p>
          <div className="info-box">
            <p><strong style={{ color: 'var(--gold)' }}>Operating Entity:</strong> MCM Enterprises</p>
            <p style={{ marginTop: '0.75rem' }}><strong style={{ color: 'var(--gold)' }}>Email:</strong> contact@121212.black</p>
            <p style={{ marginTop: '0.75rem' }}><strong style={{ color: 'var(--gold)' }}>Response Time:</strong> Within 2–3 business days</p>
          </div>
        </div>

        <div className="content-section">
          <h2>Inquiry Types</h2>
          <div className="support-grid">
            <div className="support-card">
              <h3 style={{ color: 'var(--gold)', marginBottom: '0.75rem' }}>Vendor & Marketplace</h3>
              <p>Interested in listing your business or becoming a verified vendor on the 121212 marketplace.</p>
            </div>
            <div className="support-card">
              <h3 style={{ color: 'var(--gold)', marginBottom: '0.75rem' }}>Membership & Community</h3>
              <p>Questions about membership tiers, territory leadership, or community access.</p>
            </div>
            <div className="support-card">
              <h3 style={{ color: 'var(--gold)', marginBottom: '0.75rem' }}>Press & Partnerships</h3>
              <p>Media inquiries, strategic partnerships, and institutional collaboration requests.</p>
            </div>
            <div className="support-card">
              <h3 style={{ color: 'var(--gold)', marginBottom: '0.75rem' }}>General Support</h3>
              <p>Account issues, platform questions, or anything else — we're here to help.</p>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
