
import SEO from '../components/SEO';
import AdsterraAd from '../AdsterraAd';

export default function About() {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn more about Vibeflow, the story behind our free music streaming app, and our DMCA & Copyright policies."
      />

      {/* About Us Section */}
      <section className="features" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About <span className="gradient-text">Us</span></h1>
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

      {/* FAQ Section */}
      <section id="faq" className="features" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p>Everything you need to know about Vibeflow.</p>
          </div>
          <div className="faq-grid" style={{ display: 'grid', gap: '1.5rem', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <div className="glass-panel animate-fade-up" style={{ padding: '1.5rem', background: '#fff' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>How do I create a playlist?</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>Go to the 'Create Playlist' section and tap the + button to create your own playlist. You can customize the name, description, and even the cover art!</p>
            </div>
            <div className="glass-panel animate-fade-up delay-1" style={{ padding: '1.5rem', background: '#fff' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>How do I search for songs?</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>Use the Search tab and enter the song, artist, album, or movie name. Our intelligent search will find it instantly.</p>
            </div>
            <div className="glass-panel animate-fade-up delay-2" style={{ padding: '1.5rem', background: '#fff' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Why is a song not playing?</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>Please check your internet connection and try again.</p>
            </div>
            <div className="glass-panel animate-fade-up" style={{ padding: '1.5rem', background: '#fff' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>How do I report a problem?</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>Use the Contact section to send us your feedback or email us directly at pradeepkumarcb18s@gmail.com!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad: 728x90 */}
      <AdsterraAd adKey="f280983cabbf665fd120d1942827dfb5" width={728} height={90} />

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
              <strong>Content Removal Request:</strong> Please contact us at <a href="mailto:pradeepkumarcb18s@gmail.com" style={{ color: '#4facfe', textDecoration: 'none', fontWeight: 'bold' }}>pradeepkumarcb18s@gmail.com</a> with the content details. We will promptly remove or disable access to the infringing material.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
