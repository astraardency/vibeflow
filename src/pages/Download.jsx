
import { Download, Zap, Shield, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import AdsterraAd from '../AdsterraAd';

export default function DownloadPage() {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://astravibeflow.dpdns.org/download';
  
  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=Download%20Vibeflow%20-%20Free%20Music%20App%20${encodeURIComponent(currentUrl)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=Download%20Vibeflow%20-%20Free%20Music%20App`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Download%20Vibeflow%20-%20Free%20Music%20App`,
    reddit: `https://reddit.com/submit?url=${encodeURIComponent(currentUrl)}&title=Download%20Vibeflow%20-%20Free%20Music%20App`,
  };

  return (
    <>
      <SEO 
        title="Download Vibeflow APK" 
        description="Download the latest version of Vibeflow for Android. The best free, open audio streaming app with zero interruptions."
      />
      
      <section className="features" style={{ paddingTop: '2rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          
          <div className="section-header animate-fade-up">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Download <span className="gradient-text">Vibeflow</span></h1>
            <p>Get the ultimate music streaming experience on your Android device today.</p>
          </div>

          <div className="glass-panel animate-fade-up delay-1" style={{ maxWidth: '800px', margin: '0 auto 3rem', padding: '3rem 2rem', background: '#ffffff', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            
            <h2 style={{ marginBottom: '2rem' }}>Ready to Install?</h2>
            
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                Step 1: Please support us by viewing our sponsors.
              </p>
            </div>

            {/* Specific Ad Placement: 300x250 Ad */}
            <div style={{ margin: '1rem 0 2rem 0', padding: '1rem', background: '#f8f9fa', borderRadius: '15px' }}>
              <p style={{ fontSize: '0.8rem', color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>Advertisement</p>
              <AdsterraAd adKey="b06c26d7d008ec675847a73837f673ab" width={300} height={250} />
            </div>

            <div id="download-final">
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Step 2: Download your file.
              </p>
              <a href="/vibeflow-app.apk" download className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
                <Download size={28} />
                Download APK
              </a>
              <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Version 1.0.0 • Size: ~15MB • Safe & Secure
              </p>
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
