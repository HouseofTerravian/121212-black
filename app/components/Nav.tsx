import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="logo">
          <Link href="/">121212.black</Link>
        </div>
        <div className="nav-links">
          <Link href="/">HOME</Link>
          <Link href="/marketplace">MARKETPLACE</Link>
          <Link href="/community">COMMUNITY</Link>
          <Link href="/resources">RESOURCES</Link>
          <Link href="/about">ABOUT 121212</Link>
        </div>
      </div>
    </nav>
  );
}
