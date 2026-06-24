import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem('vibeflow-theme') === 'dark') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDarkMode(true);
      document.body.classList.add('dark-theme');
    }
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
          <Link to="/" className="logo gradient-text" style={{ textDecoration: 'none' }}>
            <img src="/logo.svg" alt="Vibeflow" style={{ height: '32px' }} />
            Vibeflow
          </Link>
          <div className="nav-links desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link to="/features" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '600' }}>Features</Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '600' }}>About Us</Link>
            <Link to="/download" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '600' }}>Download</Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: '600' }}>Contact</Link>
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
          <Link to="/features" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/download" onClick={() => setIsMobileMenuOpen(false)}>Download</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}

      {/* Main Content */}
      <main style={{ minHeight: 'calc(100vh - 400px)', paddingTop: '80px' }}>
        {children}
      </main>

      {/* Footer */}
      <footer className="footer" style={{ padding: '4rem 0 2rem', background: '#0a0a0a', color: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem', textAlign: 'left' }}>
            <div>
              <Link to="/" className="logo" style={{ marginBottom: '1rem', fontSize: '1.5rem', justifyContent: 'flex-start', textDecoration: 'none', color: 'white' }}>
                <img src="/logo.svg" alt="Vibeflow" style={{ height: '28px', marginRight: '10px' }} />
                Vibeflow
              </Link>
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
                Email: <a href="mailto:pradeepkumarcb18s@gmail.com" style={{ color: '#4facfe', textDecoration: 'none' }}>pradeepkumarcb18s@gmail.com</a>
              </p>
              <p style={{ color: '#a0a0a0', fontSize: '0.95rem', marginBottom: '0.8rem' }}>
                <Link to="/about#dmca" style={{ color: '#a0a0a0', textDecoration: 'none' }}>DMCA & Copyright Policy</Link>
              </p>
              <p style={{ color: '#a0a0a0', fontSize: '0.95rem', marginBottom: '0.8rem' }}>
                <Link to="/privacy-policy" style={{ color: '#a0a0a0', textDecoration: 'none' }}>Privacy Policy</Link>
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
