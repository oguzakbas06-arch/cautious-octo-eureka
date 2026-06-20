import { Link } from 'react-router-dom';
import { Video } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="glass-nav" style={{ padding: '20px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', fontWeight: 800 }}>
          <div style={{ background: 'var(--btn-bg)', color: 'var(--btn-text)', padding: '8px', borderRadius: '12px' }}>
            <Video size={24} />
          </div>
          Buddy Live
        </Link>
        <div style={{ display: 'flex', gap: '24px', fontWeight: 500 }}>
          <Link to="/" style={{ opacity: 0.9 }}>Ana Sayfa</Link>
          <Link to="/privacy-policy" style={{ opacity: 0.9 }}>Gizlilik Politikası</Link>
          <Link to="/terms-of-service" style={{ opacity: 0.9 }}>Sözleşme</Link>
        </div>
      </div>
    </nav>
  );
}
