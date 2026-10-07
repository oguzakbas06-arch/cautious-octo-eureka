import { Play, Apple, Sparkles, Gift, Users } from 'lucide-react';
import mockupImage from '../assets/hero-mockup.png';

export default function Home() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="hero-glow-bg"></div>
      
      <div className="container" style={{ paddingTop: '100px', paddingBottom: '120px' }}>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '60px' }}>
          
          {/* Left Text Content */}
          <div style={{ flex: '1 1 500px', zIndex: 10 }} className="animate-fade-in-up">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '100px', marginBottom: '24px' }}>
              <Sparkles size={16} color="#a78bfa" />
              <span className="text-accent-gradient" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Yeni Nesil Yayıncılık</span>
            </div>
            
            <h1>
              Canlı Yayınların <br />
              <span className="text-gradient">Yeni Boyutu</span>
            </h1>
            
            <p style={{ fontSize: '1.25rem', marginBottom: '40px', maxWidth: '500px' }}>
              Buddy Live ile yeni insanlarla tanış, canlı yayınlara katıl, yeteneklerini sergile ve kendi topluluğunu oluştur.
            </p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="https://play.google.com/store/apps/details?id=com.buddylive.official" target="_blank" rel="noopener noreferrer" className="btn-primary">
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

            {/* 18+ Uyari Alani (Reklam Uyumlulugu Icin) */}
            <div style={{ marginTop: '28px', display: 'flex', alignItems: 'center', gap: '14px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.4)', padding: '14px 24px', borderRadius: '16px', width: 'fit-content', boxShadow: '0 4px 20px rgba(239, 68, 68, 0.1)' }}>
              <div style={{ background: '#ef4444', color: 'white', fontWeight: '900', borderRadius: '8px', padding: '6px 12px', fontSize: '1.1rem', letterSpacing: '1px', boxShadow: '0 2px 10px rgba(239, 68, 68, 0.4)' }}>18+</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '1rem', color: '#fecaca', fontWeight: 600 }}>Yaş Sınırı Bildirimi</span>
                <span style={{ fontSize: '0.85rem', color: '#fca5a5', opacity: 0.9 }}>Bu platform sadece 18 yaş ve üzeri kullanıcılar içindir.</span>
              </div>
            </div>

          </div>

          {/* Right Mockup Content */}
          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative' }} className="animate-fade-in-up delay-200">
            <div className="animate-float" style={{ position: 'relative', width: '100%', maxWidth: '350px' }}>
              <img 
                src={mockupImage} 
                alt="Buddy Live App" 
                style={{ width: '100%', height: 'auto', borderRadius: '40px', boxShadow: '0 20px 60px rgba(0,0,0,0.6)', border: '8px solid #1a1a1a' }} 
              />
              {/* Floating badges */}
              <div className="glass-panel animate-float delay-100" style={{ position: 'absolute', top: '10%', left: '-30px', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ background: '#ec4899', borderRadius: '50%', width: '12px', height: '12px' }}></div>
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>CANLI YAYIN</span>
              </div>
              <div className="glass-panel animate-float delay-300" style={{ position: 'absolute', bottom: '20%', right: '-30px', padding: '12px 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.5rem' }}>🎁</span>
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>Hediye Geldi!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '120px' }} className="animate-fade-in-up delay-300">
          {[
            { icon: <Play size={32} color="#a78bfa" />, title: 'Canlı Yayın Aç', desc: 'İstediğin an canlı yayına başla ve anını dünya ile paylaş. Kaliteli yayın altyapısı ile kesintisiz iletişim.' },
            { icon: <Gift size={32} color="#f472b6" />, title: 'Hediyeler Kazan', desc: 'İzleyicilerinden sanal hediyeler al ve gerçek kazanca dönüştür. Yayıncılar için özel gelir modeli.' },
            { icon: <Users size={32} color="#f97316" />, title: 'Topluluk Kur', desc: 'Sohbet odalarına katıl, pk savaşları yap ve seninle aynı ilgi alanlarına sahip insanlarla tanış.' }
          ].map((feature, i) => (
            <div key={i} className="glass-panel" style={{ padding: '40px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{feature.title}</h3>
              <p style={{ opacity: 0.7 }}>{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
