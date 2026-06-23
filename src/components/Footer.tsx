import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ padding: '40px 0', marginTop: 'auto', borderTop: '1px solid var(--glass-border)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '24px', opacity: 0.8 }}>
          <Link to="/privacy-policy">Gizlilik Politikası</Link>
          <Link to="/terms-of-service">Kullanıcı Sözleşmesi</Link>
        </div>
        <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Buddy Live. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
