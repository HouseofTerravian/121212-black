import Link from 'next/link';

export const metadata = {
  title: 'Why 121212 — The Story Behind the Network',
  description: 'The story and ideals behind the 121212 network. Limited to 10,000 copies. Name your price — $1 minimum.',
};

export default function Why121212Page() {
  return (
    <>
      <header className="hero" style={{ paddingBottom: '4rem' }}>
        <div style={{ fontSize: '0.75rem', color: '#D4AF37', letterSpacing: '3px', marginBottom: '1.5rem' }}>
          LIMITED EDITION · DIGITAL PDF
        </div>
        <h1>Why 121212</h1>
        <p className="tagline" style={{ maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: '1.8' }}>
          The origin story, the principles, and the blueprint behind the 121212 network.
          Why it exists. What it&apos;s building. Where it&apos;s going.
        </p>
        <div style={{ fontSize: '2rem', color: '#D4AF37', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          $1
        </div>
        <div style={{ fontSize: '0.85rem', color: '#999', marginBottom: '2rem' }}>
          Digital PDF · Instant Download · Capped at 10,000 copies
        </div>

        {/*
          ════════════════════════════════════════════════
          STRIPE PAYMENT LINK
          ════════════════════════════════════════════════
          Replace the href below with your Stripe Payment Link URL.

          To get this URL:
          1. Go to dashboard.stripe.com → Payment Links → + New
          2. Select your "Why 121212" product ($1.00)
          3. Under "After payment" → select "Don't show confirmation page"
             → Redirect to: https://121212.black/purchase-complete
          4. Copy the Payment Link URL (e.g. https://buy.stripe.com/aFa7sK0OXd5ng20eSUbjW0a)
          5. Paste it in the href below
          ════════════════════════════════════════════════
        */}
        <a
          href="https://buy.stripe.com/aFa7sK0OXd5ng20eSUbjW0a"
          className="cta-button"
        >
          BUY NOW — $1
        </a>
      </header>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem 4rem' }}>

        {/* What's Inside */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 300, color: '#D4AF37', marginBottom: '1.5rem' }}>What&apos;s Inside</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { num: '01', title: 'The Origin', desc: 'How 121212 started — the moment, the frustration, the vision that became a network.' },
              { num: '02', title: 'The Principles', desc: 'The non-negotiable values that govern every platform, every transaction, every decision.' },
              { num: '03', title: 'The Blueprint', desc: 'How the ecosystem is structured — community hubs, reviews, events, marketplace, and the commerce layer connecting them all.' },
              { num: '04', title: 'The Economics', desc: 'Revenue models, vendor tiers, affiliate structures, and how money flows within a Black-owned network.' },
              { num: '05', title: 'The Territories', desc: 'How city hubs work, what curators do, and why local ownership is the foundation of global power.' },
              { num: '06', title: 'The Future', desc: 'Where the network is going — the platforms in development and the vision for what 121212 becomes.' },
            ].map((item) => (
              <div key={item.num} style={{
                background: '#1a1a1a', border: '1px solid #2a2a2a',
                padding: '1.5rem', borderRadius: '4px',
              }}>
                <div style={{ fontSize: '0.75rem', color: '#D4AF37', letterSpacing: '2px', marginBottom: '0.5rem' }}>{item.num}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 400, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#999', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div style={{
          background: '#1a1a1a', border: '1px solid #2a2a2a',
          borderLeft: '4px solid #D4AF37', padding: '2rem',
          borderRadius: '4px', marginBottom: '3rem',
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 400, marginBottom: '1rem' }}>Product Details</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
            {[
              { label: 'FORMAT', value: 'Digital PDF' },
              { label: 'PRICE', value: '$1.00' },
              { label: 'DELIVERY', value: 'Instant download via email' },
              { label: 'LIMITED TO', value: '10,000 copies' },
              { label: 'REFUND POLICY', value: 'Full refund within 30 days' },
              { label: 'POWERED BY', value: '121212.ai' },
            ].map((detail) => (
              <div key={detail.label}>
                <div style={{ fontSize: '0.6rem', color: '#666', letterSpacing: '2px', marginBottom: '0.3rem' }}>{detail.label}</div>
                <div style={{ fontSize: '0.9rem', color: detail.label === 'POWERED BY' ? '#D4AF37' : '#ccc' }}>{detail.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How Delivery Works */}
        <div style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 300, color: '#D4AF37', marginBottom: '1rem' }}>How It Works</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { step: '1', text: 'Click "Buy Now" — you\'ll be taken to a secure Stripe checkout.' },
              { step: '2', text: 'Enter your email and payment details. Stripe processes the transaction.' },
              { step: '3', text: 'You\'re redirected to your download page instantly after payment.' },
              { step: '4', text: 'Download your PDF. A receipt is emailed to you by Stripe.' },
            ].map((s) => (
              <div key={s.step} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{
                  width: '28px', height: '28px', borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.15)', border: '1px solid rgba(212, 175, 55, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem', color: '#D4AF37', flexShrink: 0,
                }}>{s.step}</span>
                <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', padding: '3rem 0', borderTop: '1px solid #2a2a2a' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 300, marginBottom: '1rem' }}>Support The Network.</h2>
          <p style={{ color: '#999', marginBottom: '2rem', fontSize: '1rem' }}>
            Every copy purchased strengthens the infrastructure. Name your price.
          </p>
          <a href="https://buy.stripe.com/aFa7sK0OXd5ng20eSUbjW0a" className="cta-button">BUY NOW — $1</a>
          <p style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#666', letterSpacing: '1px' }}>
            All transactions powered by <a href="/ai" style={{ color: '#D4AF37', textDecoration: 'none' }}>121212.ai</a>
          </p>
        </div>

      </section>
    </>
  );
}
