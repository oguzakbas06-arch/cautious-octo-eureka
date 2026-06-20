import { Play, Apple } from 'lucide-react';

export default function Home() {
  return (
    <div className="container" style={{ paddingTop: '80px', paddingBottom: '80px', textAlign: 'center' }}>
      <div className="glass-panel" style={{ padding: '60px 40px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ background: 'linear-gradient(to right, #fff, rgba(255,255,255,0.7))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Yeni Nesil Canlı Yayın Deneyimi
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
          Buddy Live ile yeni insanlarla tanış, canlı yayınlara katıl, yeteneklerini sergile ve kendi topluluğunu oluştur.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" className="btn-primary">
            <Play size={24} fill="currentColor" />
            <div style={{ textAlign: 'left', lineHeight: '1.2' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 500, opacity: 0.8 }}>HEMEN İNDİR</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>Google Play</div>
            </div>
          </a>
          
          <a href="#" className="btn-secondary">
            <Apple size={28} fill="currentColor" />
            <div style={{ textAlign: 'left', lineHeight: '1.2' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 500, opacity: 0.8 }}>ÇOK YAKINDA</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>App Store</div>
            </div>
          </a>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '80px' }}>
        {[
          { title: 'Canlı Yayın Aç', desc: 'İstediğin an canlı yayına başla ve anını dünya ile paylaş.' },
          { title: 'Hediyeler Kazan', desc: 'İzleyicilerinden hediyeler al ve gerçek kazanca dönüştür.' },
          { title: 'Topluluk Kur', desc: 'Sohbet odalarına katıl ve seninle aynı ilgi alanlarına sahip insanlarla tanış.' }
        ].map((feature, i) => (
          <div key={i} className="glass-panel" style={{ padding: '30px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
