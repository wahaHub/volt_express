import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import HowItWorks from './pages/HowItWorks';
import TenderSupport from './pages/TenderSupport';
import CaseStudies from './pages/CaseStudies';
import FAQ from './pages/FAQ';
import UploadRFQ from './pages/UploadRFQ';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/tender-support" element={<TenderSupport />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/upload-rfq" element={<UploadRFQ />} />
        </Routes>
      </Layout>
    </Router>
  );
}
