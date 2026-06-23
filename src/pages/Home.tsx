import { Play, Wifi, Video, MessageSquare, Calendar, Users } from 'lucide-react';

export default function Home() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Mesh Gradient Background Elements */}
      <div className="mesh-bg-container">
        <div className="mesh-blob mesh-blob-1"></div>
        <div className="mesh-blob mesh-blob-2"></div>
        <div className="mesh-blob mesh-blob-3"></div>
        <div className="mesh-blob mesh-blob-4"></div>
      </div>
      
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '120px', zIndex: 1, position: 'relative' }}>
        
        <div className="hero-layout" style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          
          {/* Left Text Content */}
          <div style={{ flex: '1 1 500px' }} className="animate-fade-in-up">
            <h1>
              Stream Your <br />
              World Live
            </h1>
            
            <p style={{ fontSize: '1.25rem', marginBottom: '40px', maxWidth: '450px' }}>
              Connect instantly with friends and community anytime, anywhere. Experience real moments together!
            </p>

            <div>
              <a href="#" className="btn-primary">
                Start Streaming Now
              </a>
            </div>
          </div>

          {/* Right Mockup Content - Custom Glassmorphism UI */}
          <div className="mockup-wrapper animate-fade-in-up delay-200" style={{ flex: '1 1 600px', position: 'relative', height: '500px' }}>
            
            {/* Main Video Panel */}
            <div className="glass-panel glass-panel-hover float-1 main-video-panel" style={{ position: 'absolute', top: '20px', left: '80px', width: '380px', height: '340px', padding: '16px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Live Stream</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '12px', height: '2px', background: 'rgba(255,255,255,0.5)', marginTop: '8px' }}></div>
                  <div style={{ width: '12px', height: '12px', border: '1px solid rgba(255,255,255,0.5)' }}></div>
                  <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>✕</div>
                </div>
              </div>
              
              <div style={{ flex: 1, background: 'linear-gradient(135deg, #2d3748 0%, #1a202c 100%)', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
                {/* Mock Video Placeholder */}
                <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=500&h=400" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, backgroundColor: '#2d3748' }} alt="Stream" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?auto=format&fit=crop&w=500&h=400' }} />
                
                {/* Overlay Elements */}
                <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.4)', padding: '6px 12px', borderRadius: '100px', backdropFilter: 'blur(10px)' }}>
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" className="avatar avatar-sm" alt="User" />
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>User Sarah</span>
                      <span className="badge-live">LIVE</span>
                    </div>
                    <span style={{ fontSize: '0.6rem', opacity: 0.8 }}>Broadcasting</span>
                  </div>
                </div>
                
                <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.4)', padding: '4px 10px', borderRadius: '100px', backdropFilter: 'blur(10px)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Users size={12} /> 1.88K
                </div>

                {/* Chat Mockup */}
                <div style={{ position: 'absolute', bottom: '60px', left: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', padding: '6px 12px', borderRadius: '12px', fontSize: '0.8rem', display: 'inline-block' }}>👋 Hi Sarah!</div>
                  <div style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', padding: '6px 12px', borderRadius: '12px', fontSize: '0.8rem', display: 'inline-block' }}>❤️ Love this stream!</div>
                </div>

                {/* Input Area */}
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1, background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', borderRadius: '100px', padding: '8px 16px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.7)' }}>
                    Send message...
                  </div>
                  <div className="icon-button"><Play size={14} fill="white" /></div>
                </div>
              </div>
            </div>

            {/* Current Streamers List */}
            <div className="glass-panel float-2 hide-on-mobile" style={{ position: 'absolute', top: '0px', right: '0px', width: '220px', padding: '16px' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 500, marginBottom: '12px' }}>Current Streamers</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { name: 'Alex_Stream', type: 'Broadcasting', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
                  { name: 'Gaming_Pulse', type: 'Broadcasting', img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
                  { name: 'Music_Vibes', type: 'Broadcasting', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop' }
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(0,0,0,0.2)', padding: '8px', borderRadius: '12px' }}>
                    <img src={s.img} className="avatar avatar-sm" style={{ border: 'none' }} alt={s.name} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>{s.name}</div>
                      <div style={{ fontSize: '0.6rem', opacity: 0.7 }}>{s.type}</div>
                      <div style={{ fontSize: '0.6rem', color: '#ff3b30', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{width: '6px', height: '6px', background: '#ff3b30', borderRadius: '50%'}}></div> LIVE</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leaderboard Panel */}
            <div className="glass-panel float-3 hide-on-mobile" style={{ position: 'absolute', bottom: '60px', right: '10px', width: '220px', padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>Leaderboard</span>
                <span style={{ letterSpacing: '2px', lineHeight: '0.5' }}>...</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { rank: '1', name: 'Jane', score: '10323', color: '#fbbf24', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
                  { rank: '2', name: 'Elatyn', score: '6270', color: '#9ca3af', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
                  { rank: '3', name: 'Mor', score: '5358', color: '#b45309', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop' }
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 'bold' }}>{s.rank}</div>
                    <img src={s.img} style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }} alt={s.name} />
                    <div style={{ fontSize: '0.8rem', flex: 1 }}>{s.name}</div>
                    <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>{s.score}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Reactions Dock */}
            <div className="glass-panel float-2 hide-on-mobile" style={{ position: 'absolute', bottom: '80px', left: '160px', padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>Live Reactions</span>
              <div style={{ display: 'flex', gap: '12px', fontSize: '1.2rem' }}>
                <span style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>❤️</span>
                <span style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>👍</span>
                <span style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>😆</span>
                <span style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>😮</span>
                <span style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>🔥</span>
              </div>
            </div>

            {/* Floating Profile */}
            <div className="glass-panel float-1 hide-on-mobile" style={{ position: 'absolute', bottom: '130px', left: '20px', padding: '12px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" className="avatar" alt="Jane Doe" />
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Jane Doe</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>Profile</div>
            </div>

            {/* Small Floating Icons */}
            <div className="glass-panel float-3 hide-on-mobile" style={{ position: 'absolute', top: '150px', left: '30px', padding: '10px', borderRadius: '16px' }}>
              <Users size={20} />
            </div>
            <div className="glass-panel float-2 hide-on-mobile" style={{ position: 'absolute', top: '220px', left: '10px', padding: '8px 12px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem' }}>
               <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" style={{ width: '16px', height: '16px', borderRadius: '50%' }} />
               <span>2K</span>
               <span style={{ color: '#ff3b30' }}>❤️ 30</span>
            </div>
            <div className="glass-panel float-1 hide-on-mobile" style={{ position: 'absolute', top: '260px', left: '50px', padding: '10px', borderRadius: '16px' }}>
              <MessageSquare size={16} />
            </div>

          </div>
        </div>

        {/* Features Section */}
        <div style={{ marginTop: '100px' }} className="animate-fade-in-up delay-400">
          <h2 style={{ marginBottom: '40px' }}>Why Buddy Live?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {[
              { icon: <Wifi size={24} />, title: 'Instant Connectivity', desc: 'Connect instantly with friends & community' },
              { icon: <Video size={24} />, title: 'HD Video', desc: 'Promote HD video video host and video.' },
              { icon: <MessageSquare size={24} />, title: 'Interactive Chat', desc: 'Chat all interactive not chat a communitie!' },
              { icon: <Calendar size={24} />, title: 'Community Events', desc: 'Encourage everyone else and community events' }
            ].map((feature, i) => (
              <div key={i} className="glass-panel glass-panel-hover" style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{feature.title}</h3>
                <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.5' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
