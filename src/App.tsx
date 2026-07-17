import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import ReadyStock from './pages/ReadyStock';
import WhiteLabel from './pages/WhiteLabel';
import Consulting from './pages/Consulting';
import StartupGuide from './pages/StartupGuide';
import Training from './pages/Training';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-paper selection:bg-denim selection:text-white pb-14 lg:pb-0">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ready-stock-jeans" element={<ReadyStock />} />
            <Route path="/white-label-jeans-manufacturer" element={<WhiteLabel />} />
            <Route path="/jeans-business-consulting" element={<Consulting />} />
            <Route path="/jeans-business-startup-guide" element={<StartupGuide />} />
            <Route path="/jeans-manufacturing-training" element={<Training />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            {/* Old URLs → new SEO URLs (preserves existing Google indexing) */}
            <Route path="/products" element={<Navigate to="/ready-stock-jeans" replace />} />
            <Route path="/consultancy" element={<Navigate to="/jeans-business-consulting" replace />} />
            <Route path="/about" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}
