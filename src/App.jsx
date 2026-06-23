import React, { useState, useEffect } from 'react';
import { Play, Download, Zap, Headphones, Music, Shield, Menu, X, Search, List, Heart, Share2, Cloud, Database, Shuffle, SkipBack, Pause, SkipForward, Repeat, Sun, Moon, ArrowUp, Star } from 'lucide-react';
import './index.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('vibeflow-theme') === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-theme');
    }
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('vibeflow-theme', 'light');
      setIsDarkMode(false);
    } else {
      document.body.classList.add('dark-theme');
      localStorage.setItem('vibeflow-theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar animate-fade-up">
        <div className="container">
          <div className="logo gradient-text">
            <img src="/logo.svg" alt="Vibeflow" style={{ height: '32px' }} />
            Vibeflow
          </div>
          <div className="nav-links desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#features" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '600' }}>Features</a>
            <a href="#about" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '600' }}>About Us</a>
            <a href="#faq" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '600' }}>FAQ</a>
            <a href="#contact" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '600' }}>Contact</a>
            <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center', marginLeft: '1rem' }} aria-label="Toggle Theme">
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>
          <div className="mobile-menu-btn" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-main)', display: 'flex', alignItems: 'center' }}>
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ cursor: 'pointer', color: 'var(--text-main)' }}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer animate-fade-up">
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <div className="hero-text animate-fade-up">
            <h1>Feel the Music, <span className="gradient-text">Find your Vibe.</span></h1>
            <p>Welcome to Vibeflow – a completely free, seamless, and ad-free Open Audio streaming experience. Dive into over 7,600+ preloaded tracks across Tamil and English hits.</p>
            
            <div className="hero-actions">
              <a href="/vibeflow-app.apk" download className="btn btn-primary">
                <Download size={24} />
                Download for Android
              </a>
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

      {/* Features Section */}
      <section id="features" className="features">
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
              <p>Enjoy over 7,600+ preloaded songs out of the box, spanning across Tamil and English hits.</p>
            </div>
            
            <div className="glass-panel feature-card animate-fade-up delay-2">
              <div className="feature-icon"><Search size={32} /></div>
              <h3>Intelligent Search</h3>
              <p>Quickly find any song with smart matching algorithms and a convenient recent search history.</p>
            </div>

            <div className="glass-panel feature-card animate-fade-up">
              <div className="feature-icon"><List size={32} /></div>
              <h3>Personalized Playlists</h3>
              <p>Create, customize, and manage your own playlists. Add custom names, descriptions, and upload covers!</p>
            </div>

            <div className="glass-panel feature-card animate-fade-up delay-1">
              <div className="feature-icon"><Share2 size={32} /></div>
              <h3>Share Your Vibe</h3>
              <p>View and share your listening statistics with the beautifully designed "My Vibeflow Vibe" card.</p>
            </div>

            <div className="glass-panel feature-card animate-fade-up delay-2">
              <div className="feature-icon"><Database size={32} /></div>
              <h3>Secure Syncing</h3>
              <p>Powered by Firebase, ensuring your profile, liked songs, and custom playlists are safely synced and authenticated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="features" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>About <span className="gradient-text">Us</span></h2>
            <p>The story behind Vibeflow.</p>
          </div>
          <div className="glass-panel animate-fade-up delay-1" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', background: '#ffffff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              At Vibeflow, we believe that music should be a seamless, personalized, and visually stunning experience for everyone. Born from a passion for open audio and intuitive design, Vibeflow is built to bring your favorite tracks to life without interruptions.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              <strong>The Creators:</strong> Developed by Pradeep Kumar and Prathosh — passionate developers dedicated to creating a flawless and enjoyable music experience. Your support motivates us to continuously build better features and provide the ultimate music journey.
            </p>
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
      <section id="testimonials" className="features" style={{ background: 'var(--bg-dark)' }}>
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

      {/* FAQ Section */}
      <section id="faq" className="features">
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p>Everything you need to know about Vibeflow.</p>
          </div>
          <div className="faq-grid" style={{ display: 'grid', gap: '1.5rem', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <div className="glass-panel animate-fade-up" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>How do I create a playlist?</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>Go to the 'Create Playlist' section and tap the + button to create your own playlist. You can customize the name, description, and even the cover art!</p>
            </div>
            <div className="glass-panel animate-fade-up delay-1" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>How do I search for songs?</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>Use the Search tab and enter the song, artist, album, or movie name. Our intelligent search will find it instantly.</p>
            </div>
            <div className="glass-panel animate-fade-up delay-2" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Why is a song not playing?</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>Please check your internet connection and try again.</p>
            </div>
            <div className="glass-panel animate-fade-up" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>How do I report a problem?</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>Use the Contact Support section in the app to send us your feedback or email us directly at astraardency@gmail.com!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="features" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>Get in <span className="gradient-text">Touch</span></h2>
            <p>We'd love to hear your feedback or ideas.</p>
          </div>
          <div className="glass-panel animate-fade-up delay-1" style={{ maxWidth: '600px', margin: '0 auto', padding: '2.5rem', textAlign: 'left', background: '#f8f9fa' }}>
            <form action="mailto:astraardency@gmail.com" method="GET" encType="text/plain" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Your Name</label>
                <input type="text" placeholder="Enter your name" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} required />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Subject</label>
                <input type="text" name="subject" placeholder="Feedback or Suggestion" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd' }} required />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Message</label>
                <textarea name="body" rows="4" placeholder="Tell us what you think..." style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd', resize: 'vertical' }} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', border: 'none', cursor: 'pointer' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="features" style={{ background: 'rgba(0,0,0,0.02)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to feel the vibe?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.2rem' }}>
            Download the Vibeflow APK now and install it on your Android device to start your musical journey.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/vibeflow-app.apk" download className="btn btn-primary">
              <Download size={24} />
              Download Latest APK
            </a>
            <a href="https://vibeflow-chi-two.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Web Version Available
            </a>
          </div>
          <p style={{ marginTop: '2rem', color: 'var(--text-muted)' }}>
            Don't want to install an app? <a href="https://vibeflow-chi-two.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>Try Vibeflow Web</a> instantly in your browser!
          </p>
        </div>
      </section>

      {/* DMCA & Copyright Disclaimer Section */}
      <section id="dmca" className="features" style={{ padding: '3rem 0', background: '#f0f2f5' }}>
        <div className="container">
          <div className="glass-panel" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem', background: '#ffffff', borderLeft: '4px solid #4facfe', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#333' }}>DMCA & Copyright Disclaimer</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              Vibeflow is an open audio streaming platform built for promotional and non-commercial purposes. <strong>We do not host, upload, or store any audio files (e.g., mp3) on our servers.</strong> All music is aggregated and streamed via public third-party APIs.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              We respect the intellectual property rights of others and comply with the Digital Millennium Copyright Act (DMCA). If you are a copyright owner and believe that any content provided through our platform infringes upon your copyrights, please submit a takedown request.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
              <strong>Content Removal Request:</strong> Please contact us at <a href="mailto:astraardency@gmail.com" style={{ color: '#4facfe', textDecoration: 'none', fontWeight: 'bold' }}>astraardency@gmail.com</a> with the content details. We will promptly remove or disable access to the infringing material.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ padding: '4rem 0 2rem', background: '#0a0a0a', color: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem', textAlign: 'left' }}>
            <div>
              <div className="logo" style={{ marginBottom: '1rem', fontSize: '1.5rem', justifyContent: 'flex-start' }}>
                <img src="/logo.svg" alt="Vibeflow" style={{ height: '28px', marginRight: '10px' }} />
                Vibeflow
              </div>
              <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                We value your suggestions and continuously improve the app based on user feedback. Have an idea? We'd love to hear it!
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem', color: '#fff' }}>App Details</h4>
              <p style={{ color: '#a0a0a0', fontSize: '0.95rem', marginBottom: '0.8rem' }}>Version: 1.0.0</p>
              <p style={{ color: '#a0a0a0', fontSize: '0.95rem', marginBottom: '0.8rem' }}>Platforms: Android & iOS</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem', color: '#fff' }}>Support & Legal</h4>
              <p style={{ color: '#a0a0a0', fontSize: '0.95rem', marginBottom: '0.8rem' }}>
                Email: <a href="mailto:astraardency@gmail.com" style={{ color: '#4facfe', textDecoration: 'none' }}>astraardency@gmail.com</a>
              </p>
              <p style={{ color: '#a0a0a0', fontSize: '0.95rem', marginBottom: '0.8rem' }}>
                <a href="#dmca" style={{ color: '#a0a0a0', textDecoration: 'none' }}>DMCA & Copyright Policy</a>
              </p>
              <p style={{ color: '#a0a0a0', fontSize: '0.95rem', marginBottom: '0.8rem' }}>
                <a href="#" style={{ color: '#a0a0a0', textDecoration: 'none' }}>Privacy Policy</a>
              </p>
              <p style={{ color: '#a0a0a0', fontSize: '0.95rem' }}>
                <a href="#" style={{ color: '#a0a0a0', textDecoration: 'none' }}>Terms of Service</a>
              </p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>© {new Date().getFullYear()} Vibeflow Music. Developed by Pradeep Kumar & Prathosh.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="animate-fade-up"
          style={{ position: 'fixed', bottom: '30px', right: '30px', background: 'var(--primary)', color: 'var(--bg-dark)', border: 'none', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 10px 20px rgba(0,0,0,0.2)', zIndex: 1000 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
