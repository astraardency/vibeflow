
import SEO from '../components/SEO';
import AdsterraAd from '../AdsterraAd';

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with the Vibeflow team. We'd love to hear your feedback, suggestions, or help you with any issues."
      />

      <section className="features" style={{ paddingTop: '2rem', background: '#ffffff', minHeight: '60vh' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get in <span className="gradient-text">Touch</span></h1>
            <p>We'd love to hear your feedback or ideas.</p>
          </div>
          <div className="glass-panel animate-fade-up delay-1" style={{ maxWidth: '600px', margin: '0 auto', padding: '2.5rem', textAlign: 'left', background: '#f8f9fa', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <form action="mailto:pradeepkumarcb18s@gmail.com" method="GET" encType="text/plain" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', border: 'none', cursor: 'pointer', padding: '1rem' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Ad: 320x50 */}
      <AdsterraAd adKey="773197551afaac09044bf5573989a450" width={320} height={50} />
    </>
  );
}
