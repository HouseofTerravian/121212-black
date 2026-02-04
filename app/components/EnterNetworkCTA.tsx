import Link from 'next/link';

interface EnterNetworkCTAProps {
  variant?: 'primary' | 'banner' | 'minimal';
  className?: string;
}

/**
 * Reusable "ENTER THE NETWORK" call-to-action component.
 * Use sparingly (4-5 locations max on homepage) for consistent styling and gravity.
 *
 * Variants:
 * - primary: Main CTA button (hero section)
 * - banner: Full-width banner with context (mid-content breaks)
 * - minimal: Subtle link style (pre-footer, inline)
 */
export default function EnterNetworkCTA({
  variant = 'primary',
  className = '',
}: EnterNetworkCTAProps) {
  if (variant === 'banner') {
    return (
      <div className={`network-banner ${className}`}>
        <div className="network-banner-content">
          <span className="network-banner-label">THE 121212 NETWORK</span>
          <h3 className="network-banner-title">Six Branches of Commerce. One Movement.</h3>
          <p className="network-banner-text">
            Marketplace. Movement. Media. Culture. Global Routes. Legal Resources.
          </p>
          <Link href="/network" className="cta-button">
            ENTER THE NETWORK
          </Link>
        </div>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className={`network-cta-minimal ${className}`}>
        <Link href="/network" className="cta-button-secondary">
          ENTER THE NETWORK
        </Link>
      </div>
    );
  }

  // Default: primary variant
  return (
    <Link href="/network" className={`cta-button ${className}`}>
      ENTER THE NETWORK
    </Link>
  );
}
