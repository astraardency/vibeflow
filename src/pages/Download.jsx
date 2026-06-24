
import { useState } from 'react';
import { Download, Zap, Shield, Heart, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import AdsterraAd from '../AdsterraAd';

export default function DownloadPage() {
  const [showNotification, setShowNotification] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://astravibeflow.dpdns.org/download';
  
  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=Download%20Vibeflow%20-%20Free%20Music%20App%20${encodeURIComponent(currentUrl)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=Download%20Vibeflow%20-%20Free%20Music%20App`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Download%20Vibeflow%20-%20Free%20Music%20App`,
    reddit: `https://reddit.com/submit?url=${encodeURIComponent(currentUrl)}&title=Download%20Vibeflow%20-%20Free%20Music%20App`,
  };

  const handleDownload = (e) => {
    e.preventDefault();
    
    // Show download notification
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 4000);
    
    // ACTION 1: Open the Adsterra Direct Link (Popunder) in a new tab
    // We do this first so it's tied to the user's synchronous click action
    window.open('https://www.effectivecpmnetwork.com/jri62sx0yf?key=a3f84b05ab45d565a01200c9ced6d7c4', '_blank');
    
    // ACTION 2: Trigger the actual APK download immediately in the current tab
    window.location.href = '/vibeflow-app.apk';
  };

  return (
    <>
      <SEO 
        title="Download Vibeflow APK" 
        description="Download the latest version of Vibeflow for Android. The best free, open audio streaming app with zero interruptions."
      />
      
      {/* Top Notification */}
      {showNotification && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#10B981', // Tailwind emerald-500
          color: 'white',
          padding: '12px 24px',
          borderRadius: '50px',
          boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontWeight: '500',
          animation: 'slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          <CheckCircle2 size={20} />
          <span>Download started! Check your notification panel.</span>
        </div>
      )}

      {/* Add a simple animation style to the page for the notification */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideDown {
          0% { transform: translate(-50%, -100%); opacity: 0; }
          100% { transform: translate(-50%, 0); opacity: 1; }
        }
      `}} />

      <section className="features" style={{ paddingTop: '2rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          
          <div className="section-header animate-fade-up">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Download <span className="gradient-text">Vibeflow</span></h1>
            <p>Get the ultimate music streaming experience on your Android device today.</p>
          </div>

          {/* Side-by-Side Layout for Desktop */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'stretch', margin: '0 auto 3rem', maxWidth: '1000px' }}>
            
            {/* Main Download Box */}
            <div className="glass-panel animate-fade-up delay-1" style={{ flex: '1 1 500px', padding: '3rem 2rem', background: '#ffffff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              
              <h2 style={{ marginBottom: '1.5rem' }}>Ready to Install?</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                Click the button below to get your file instantly.
              </p>
              
              <div id="download-final">
                <button onClick={handleDownload} className="btn btn-primary hover-scale" style={{ fontSize: '1.2rem', padding: '1rem 3rem', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                  <Download size={28} />
                  Download APK
                </button>
                <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Version 1.0.0 • Size: ~15MB • Safe & Secure
                </p>

                {/* Security Trust Note */}
                <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#fffbeb', borderRadius: '8px', border: '1px solid #fcd34d', textAlign: 'left' }}>
                  <p style={{ fontSize: '0.85rem', color: '#92400e', margin: 0, display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: '1.4' }}>
                    <Shield size={16} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span><strong>Note:</strong> Your browser may show a "File might be harmful" warning. This is a standard security message for apps downloaded outside the Play Store. It is 100% safe to click <strong>"Download anyway"</strong>.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Side Ad Column */}
            <div className="glass-panel animate-fade-up delay-1" style={{ flex: '0 1 340px', padding: '1.5rem', background: '#ffffff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ fontSize: '0.75rem', color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px' }}>Advertisement</p>
              <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '12px' }}>
                <AdsterraAd adKey="b06c26d7d008ec675847a73837f673ab" width={300} height={250} />
              </div>
              <p style={{ fontSize: '0.8rem', color: '#aaa', marginTop: '15px' }}>Support us by viewing sponsors</p>
            </div>

          </div>

          {/* Social Share Section */}
          <div className="animate-fade-up delay-2" style={{ margin: '4rem 0' }}>
            <h3 style={{ marginBottom: '1.5rem' }}>Share with Friends ❤️</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Help us grow the Vibeflow community by sharing this app!</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: '#25D366', color: '#25D366' }}>
                WhatsApp
              </a>
              <a href={shareLinks.telegram} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: '#0088cc', color: '#0088cc' }}>
                Telegram
              </a>
              <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: '#1DA1F2', color: '#1DA1F2' }}>
                X (Twitter)
              </a>
              <a href={shareLinks.reddit} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ borderColor: '#FF4500', color: '#FF4500' }}>
                Reddit
              </a>
            </div>
          </div>

          {/* App Highlights */}
          <div className="features-grid" style={{ marginTop: '4rem' }}>
            <div className="glass-panel feature-card animate-fade-up">
              <div className="feature-icon"><Zap size={32} /></div>
              <h3>Lightning Fast</h3>
              <p>Optimized for low-end devices and slow connections.</p>
            </div>
            <div className="glass-panel feature-card animate-fade-up delay-1">
              <div className="feature-icon"><Shield size={32} /></div>
              <h3>100% Safe</h3>
              <p>Scanned and verified to be free of any malicious code.</p>
            </div>
            <div className="glass-panel feature-card animate-fade-up delay-2">
              <div className="feature-icon"><Heart size={32} /></div>
              <h3>Made with Love</h3>
              <p>Designed for the ultimate music listening experience.</p>
            </div>
          </div>

        </div>
      </section>
      
      {/* Ad: 320x50 (Mobile Optimized) at the bottom */}
      <AdsterraAd adKey="773197551afaac09044bf5573989a450" width={320} height={50} />
    </>
  );
}
