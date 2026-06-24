
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy" 
        description="Privacy Policy for Vibeflow. Learn how we handle your data and ensure your privacy."
      />

      <section className="features" style={{ paddingTop: '2rem', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Privacy <span className="gradient-text">Policy</span></h1>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="glass-panel animate-fade-up delay-1" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', background: '#f8f9fa', padding: '2.5rem', lineHeight: '1.8' }}>
            <h2>1. Introduction</h2>
            <p>Welcome to Vibeflow. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our application.</p>
            
            <h2 style={{ marginTop: '2rem' }}>2. Data We Collect</h2>
            <p>Vibeflow is designed to be as privacy-friendly as possible. We do not collect personally identifiable information unless you explicitly provide it (e.g., through our contact form). If you use features like Firebase syncing, your basic account information (like email) is securely handled by Google Firebase authentication.</p>

            <h2 style={{ marginTop: '2rem' }}>3. Third-Party Services</h2>
            <p>We use third-party services to enhance your experience and monetize our platform:
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li><strong>Adsterra:</strong> Used to serve advertisements. Adsterra may use cookies or similar technologies to personalize ads.</li>
                <li><strong>Firebase:</strong> Used for secure user authentication and syncing playlists.</li>
              </ul>
            </p>

            <h2 style={{ marginTop: '2rem' }}>4. Cookies</h2>
            <p>We may use cookies to improve user experience, track preferences, and serve relevant advertisements through our partners.</p>

            <h2 style={{ marginTop: '2rem' }}>5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:pradeepkumarcb18s@gmail.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>pradeepkumarcb18s@gmail.com</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
