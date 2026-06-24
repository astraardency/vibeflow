
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DownloadPage from './pages/Download';
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './index.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Layout>
  );
}

export default App;
