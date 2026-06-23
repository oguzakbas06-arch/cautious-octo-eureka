import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="glass-nav">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 800 }}>
          <div style={{ fontSize: '1.8rem', background: 'var(--btn-bg)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            B
          </div>
          Buddy Live
        </Link>
        <div style={{ display: 'flex', gap: '32px', fontWeight: 500, alignItems: 'center' }}>
          <Link to="/" style={{ opacity: 1 }}>Home</Link>
          <a href="#" style={{ opacity: 0.8 }}>Explore</a>
          <a href="#" style={{ opacity: 0.8 }}>Go Live</a>
          <a href="#" style={{ opacity: 0.8 }}>Pricing</a>
          <a href="#" style={{ opacity: 0.8 }}>Community</a>
        </div>
        <div>
          <a href="#" className="btn-glass">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}
