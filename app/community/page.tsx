export const metadata = {
  title: 'Community - 121212.black',
  description: '32 cities. One movement. Building together.',
};

export default function CommunityPage() {
  return (
    <>
      <header className="page-header">
        <h1>Community</h1>
        <p>32 cities. One movement. Building together.</p>
      </header>
      <section className="page-content">
        <div className="content-section">
          <h2>City Updates</h2>
          <p>Stay connected with what&apos;s happening in your city and across the network.</p>
        </div>
        <div className="content-section">
          <h2>Forums &amp; Discussion</h2>
          <p>Join conversations, share insights, and connect with builders across the diaspora.</p>
        </div>
        <div className="content-section">
          <h2>Events</h2>
          <p>Attend meetups, workshops, and gatherings in your region.</p>
        </div>
      </section>
    </>
  );
}
