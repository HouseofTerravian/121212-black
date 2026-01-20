import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-column">
          <h4>ABOUT 121212</h4>
          <ul>
            <li><Link href="/about">Our Mission</Link></li>
            <li><Link href="/mission-vision">Mission &amp; Vision</Link></li>
            <li><Link href="/leadership">Leadership</Link></li>
            <li><Link href="/team">Team</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>MARKETPLACE</h4>
          <ul>
            <li><Link href="/shop-all">Shop All Vendors</Link></li>
            <li><Link href="/become-vendor">Become a Vendor</Link></li>
            <li><Link href="/vendor-plans">Vendor Plans</Link></li>
            <li><Link href="/verified-vendors">Verified Vendors</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>COMMUNITY</h4>
          <ul>
            <li><Link href="/city-updates">City Updates</Link></li>
            <li><Link href="/forums">Forums</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/apply-lead">Apply to Lead</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>RESOURCES</h4>
          <ul>
            <li><Link href="/library">Library</Link></li>
            <li><Link href="/legal-education">Legal Education</Link></li>
            <li><Link href="/media-kit">Media Kit</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-brand">121212.black</div>
        <div className="footer-links">
          <Link href="/privacy">PRIVACY</Link>
          <Link href="/terms">TERMS</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/refund-policy">REFUND POLICY</Link>
        </div>
        <p className="copyright">
          © 2025 121212.black. All rights reserved.<br />
          By the People. For the People.
        </p>
      </div>
    </footer>
  );
}
