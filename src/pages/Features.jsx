
import { Headphones, Music, Search, List, Share2, Database, Download } from 'lucide-react';
import SEO from '../components/SEO';
import AdsterraAd from '../AdsterraAd';
import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <>
      <SEO 
        title="App Features" 
        description="Discover all the powerful features of Vibeflow. Intelligent search, massive offline library, personalized playlists, and secure syncing."
      />

      <section className="features" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="section-header animate-fade-up">
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Vibeflow <span className="gradient-text">Features</span></h1>
            <p>Everything you need for the perfect listening experience.</p>
          </div>
          
          <div className="features-grid" style={{ marginBottom: '4rem' }}>
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

          {/* Ad: 300x250 */}
          <div style={{ textAlign: 'center', margin: '4rem 0' }}>
            <AdsterraAd adKey="b06c26d7d008ec675847a73837f673ab" width={300} height={250} />
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
             <Link to="/download" className="btn btn-primary animate-fade-up">
               <Download size={24} /> Get Vibeflow Now
             </Link>
          </div>
        </div>
      </section>
    </>
  );
}
