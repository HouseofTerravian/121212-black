'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function PurchaseContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const isValid = sessionId && sessionId.startsWith('cs_');

  if (!isValid) {
    return (
      <>
        <header className="hero" style={{ paddingBottom: '3rem', minHeight: 'auto' }}>
          <div style={{
            width: '80px', height: '80px', borderRadius: '50%',
            background: 'rgba(230, 57, 70, 0.2)', border: '2px solid #e63946',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem', margin: '0 auto 2rem',
          }}>
            ✗
          </div>
          <h1 style={{ fontSize: '2.5rem' }}>Purchase Required</h1>
          <p className="tagline" style={{ maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
            This page is only accessible after completing a purchase.
            If you believe this is an error, please contact support.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/why-121212" className="cta-button">Buy Why 121212 — $1</Link>
            <a href="mailto:support@121212.black" className="cta-button-secondary" style={{ marginTop: 0 }}>
              Contact Support
            </a>
          </div>
        </header>
      </>
    );
  }

  return (
    <>
      <header className="hero" style={{ paddingBottom: '3rem', minHeight: 'auto' }}>
        <div style={{
          width: '80px', height: '80px', borderRadius: '50%',
          background: 'rgba(42, 157, 143, 0.2)', border: '2px solid #2a9d8f',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '2rem', margin: '0 auto 2rem',
        }}>
          ✓
        </div>
        <h1 style={{ fontSize: '3rem' }}>Purchase Complete.</h1>
        <p className="tagline" style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
          Thank you for supporting the 121212 network. Your product is ready to download.
        </p>
      </header>

      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem 4rem' }}>

        {/* Download Section */}
        <div style={{
          background: '#1a1a1a', border: '2px solid #2a9d8f',
          padding: '2.5rem', borderRadius: '4px', marginBottom: '2rem',
          textAlign: 'center',
        }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 400, marginBottom: '0.5rem', color: '#fff' }}>
            Why 121212™ — The Story Behind the Network
          </h3>
          <p style={{ color: '#999', fontSize: '0.85rem', marginBottom: '2rem' }}>
            Limited Edition Digital PDF · 1 of 10,000
          </p>

          <a
            href="/dl/why-121212-d4af37x.pdf"
            download="Why 121212 — The Story Behind the Network.pdf"
            style={{
              display: 'inline-block',
              background: '#2a9d8f',
              color: '#fff',
              padding: '1rem 3rem',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              letterSpacing: '2px',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
          >
            DOWNLOAD YOUR PDF
          </a>

          <p style={{ color: '#666', fontSize: '0.75rem', marginTop: '1.5rem', lineHeight: '1.6' }}>
            Save this page — you can return to download again while your session is active.<br />
            If the download does not start, right-click the button and select &quot;Save link as...&quot;
          </p>
        </div>

        {/* Receipt + Confirmation */}
        <div style={{
          background: '#1a1a1a', border: '1px solid #2a2a2a',
          borderLeft: '4px solid #D4AF37', padding: '2rem',
          borderRadius: '4px', marginBottom: '2rem',
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 400, marginBottom: '1rem', color: '#D4AF37' }}>
            Your Receipt
          </h3>
          <p style={{ color: '#ccc', lineHeight: '1.8', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
            A receipt from Stripe has been sent to the email you provided at checkout.
            This serves as your proof of purchase.
          </p>
          <p style={{ color: '#999', fontSize: '0.85rem', lineHeight: '1.6' }}>
            Need help? Contact us at{' '}
            <a href="mailto:support@121212.black" style={{ color: '#D4AF37', textDecoration: 'none' }}>support@121212.black</a>.
            All purchases are eligible for a full refund within 30 days.
          </p>
        </div>

        {/* What Happens Next */}
        <div style={{
          background: '#1a1a1a', border: '1px solid #2a2a2a',
          padding: '2rem', borderRadius: '4px', marginBottom: '2rem',
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 400, marginBottom: '1.25rem' }}>
            What Happens Next
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ color: '#D4AF37', fontSize: '1rem', flexShrink: 0 }}>01</span>
              <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                <strong style={{ color: '#fff' }}>Download your PDF</strong> — click the button above. Save it somewhere permanent.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ color: '#D4AF37', fontSize: '1rem', flexShrink: 0 }}>02</span>
              <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                <strong style={{ color: '#fff' }}>Explore the network</strong> — your purchase supports every platform in the 121212 ecosystem.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ color: '#D4AF37', fontSize: '1rem', flexShrink: 0 }}>03</span>
              <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                <strong style={{ color: '#fff' }}>Share it forward</strong> — tell someone about 121212. The network grows through trust, not ads.
              </p>
            </div>
          </div>
        </div>

        {/* Ecosystem Links */}
        <div style={{
          background: '#1a1a1a', border: '1px solid #2a2a2a',
          padding: '2rem', borderRadius: '4px', marginBottom: '2rem',
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 400, marginBottom: '1.25rem' }}>
            Continue Exploring
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { name: '121212.community', url: 'https://121212.community', label: 'City Hubs' },
              { name: '121212.reviews', url: 'https://121212.reviews', label: 'Reviews' },
              { name: '121212.events', url: 'https://121212.events', label: 'Events' },
              { name: '121212.market', url: 'https://121212.market', label: 'Marketplace' },
            ].map((site) => (
              <a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block', padding: '1rem', background: '#111',
                  border: '1px solid #2a2a2a', borderRadius: '4px',
                  textDecoration: 'none', transition: 'border-color 0.3s',
                }}
              >
                <div style={{ fontSize: '0.65rem', color: '#666', letterSpacing: '2px', marginBottom: '0.3rem' }}>
                  {site.label.toUpperCase()}
                </div>
                <div style={{ color: '#D4AF37', fontSize: '0.9rem' }}>{site.name}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div style={{
          textAlign: 'center', padding: '2rem 0', borderTop: '1px solid #2a2a2a',
        }}>
          <p style={{ color: '#666', fontSize: '0.8rem', lineHeight: '1.7', letterSpacing: '0.5px' }}>
            All transactions processed securely via Stripe.<br />
            © 2025–2026 Chude Muonelo. All Rights Reserved.<br />
            Questions? <a href="mailto:support@121212.black" style={{ color: '#D4AF37', textDecoration: 'none' }}>support@121212.black</a>
          </p>
          <p style={{ color: '#555', fontSize: '0.75rem', marginTop: '1rem', letterSpacing: '1px' }}>
            All commerce powered by <a href="/ai" style={{ color: '#D4AF37', textDecoration: 'none' }}>121212.ai</a>
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/" className="cta-button-secondary" style={{ marginTop: 0 }}>Return to 121212.black</Link>
          </div>
        </div>

      </section>
    </>
  );
}

export default function PurchaseCompletePage() {
  return (
    <Suspense fallback={
      <div style={{ textAlign: 'center', padding: '12rem 2rem' }}>
        <p style={{ color: '#999' }}>Verifying purchase...</p>
      </div>
    }>
      <PurchaseContent />
    </Suspense>
  );
}
