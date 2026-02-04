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
          <Link href="/network" className="nav-network-link">ENTER THE NETWORK</Link>
          <Link href="/about">ABOUT</Link>
        </div>
      </div>
    </nav>
  );
}
