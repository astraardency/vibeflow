
import { Download, Headphones, Music, Search, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AdsterraAd from '../AdsterraAd';

export default function Home() {
  return (
    <>
      <SEO 
        title="Free Tamil & English Music Streaming App" 
        description="Vibeflow is a free open audio streaming platform. Enjoy seamless music streaming, offline playlists, trending tracks, and an ad-free modern listening experience."
      />
      
      {/* Hero Section */}
      <section className="hero" style={{ marginTop: '-80px' }}>
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <div className="hero-text animate-fade-up">
            <h1>Feel the Music, <span className="gradient-text">Find your Vibe.</span></h1>
            <p>Welcome to Vibeflow – a completely free, seamless, and open audio streaming experience. Dive into all language songs available up-to-date.</p>
            
            <div className="hero-actions">
              <Link to="/download" className="btn btn-primary">
                <Download size={24} />
                Download for Android
              </Link>
              <a href="https://vibeflow-chi-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Open Web Player
              </a>
            </div>
            <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Version 1.0.0 • Requires Android 8.0+
            </p>
          </div>
          
          <div className="hero-image animate-fade-up delay-1">
            <div className="hero-image-wrapper">
              <img src="/hero-mockup.jpg" alt="Vibeflow App Preview" style={{ width: '100%', maxWidth: '650px', height: 'auto', mixBlendMode: 'multiply', filter: 'contrast(1.02)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Ad: Native Banner */}
      <AdsterraAd type="native" />

      {/* Features Preview Section */}
      <section className="features">
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>Why Choose <span className="gradient-text">Vibeflow?</span></h2>
            <p>Everything you need for the perfect listening experience.</p>
          </div>
          
          <div className="features-grid">
            <div className="glass-panel feature-card animate-fade-up">
              <div className="feature-icon"><Headphones size={32} /></div>
              <h3>Free Open Audio Streaming</h3>
              <p>Access thousands of songs for free, without ads disrupting your vibe.</p>
            </div>
            
            <div className="glass-panel feature-card animate-fade-up delay-1">
              <div className="feature-icon"><Music size={32} /></div>
              <h3>Massive Offline-Ready Library</h3>
              <p>Enjoy all language songs available up-to-date out of the box.</p>
            </div>
            
            <div className="glass-panel feature-card animate-fade-up delay-2">
              <div className="feature-icon"><Search size={32} /></div>
              <h3>Intelligent Search</h3>
              <p>Quickly find any song with smart matching algorithms.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/features" className="btn btn-outline animate-fade-up">View All Features</Link>
          </div>
        </div>
      </section>

      {/* App Promo Image Section */}
      <section style={{ padding: '0 0 4rem', background: '#f8f9fa', textAlign: 'center' }}>
        <div className="container">
          <img src="/about-mockup.png" alt="Vibeflow Features Presentation" className="animate-fade-up" style={{ width: '100%', maxWidth: '1000px', height: 'auto', borderRadius: '20px', mixBlendMode: 'multiply' }} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="features" style={{ background: 'var(--bg-dark)' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>What Our <span className="gradient-text">Users Say</span></h2>
            <p>Don't just take our word for it.</p>
          </div>
          <div className="features-grid">
            <div className="glass-panel feature-card animate-fade-up">
              <div style={{ display: 'flex', gap: '0.2rem', color: '#FFD700', marginBottom: '1rem' }}>
                <Star size={20} fill="#FFD700" /><Star size={20} fill="#FFD700" /><Star size={20} fill="#FFD700" /><Star size={20} fill="#FFD700" /><Star size={20} fill="#FFD700" />
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>"Finally, an app where I can listen to all my favorite Tamil hits without those annoying ads! The UI is incredibly smooth."</p>
              <h4 style={{ margin: 0 }}>Arjun M.</h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>Music Enthusiast</p>
            </div>
            <div className="glass-panel feature-card animate-fade-up delay-1">
              <div style={{ display: 'flex', gap: '0.2rem', color: '#FFD700', marginBottom: '1rem' }}>
                <Star size={20} fill="#FFD700" /><Star size={20} fill="#FFD700" /><Star size={20} fill="#FFD700" /><Star size={20} fill="#FFD700" /><Star size={20} fill="#FFD700" />
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>"The personalized playlists and offline library are a game changer for my daily commute. Absolutely love Vibeflow!"</p>
              <h4 style={{ margin: 0 }}>Sarah J.</h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>Daily Commuter</p>
            </div>
            <div className="glass-panel feature-card animate-fade-up delay-2">
              <div style={{ display: 'flex', gap: '0.2rem', color: '#FFD700', marginBottom: '1rem' }}>
                <Star size={20} fill="#FFD700" /><Star size={20} fill="#FFD700" /><Star size={20} fill="#FFD700" /><Star size={20} fill="#FFD700" /><Star size={20} fill="#FFD700" />
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>"I installed this just to try it out, and it's now my default music app. The dark mode is simply gorgeous."</p>
              <h4 style={{ margin: 0 }}>Rahul K.</h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tech Reviewer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad: 728x90 (Desktop Optimized) */}
      <AdsterraAd adKey="f280983cabbf665fd120d1942827dfb5" width={728} height={90} />
    </>
  );
}
