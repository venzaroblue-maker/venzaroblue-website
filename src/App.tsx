import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import About from './components/About';
import Products from './components/Products';
import ProductCatalog from './components/ProductCatalog';
import Features from './components/Features';
import Partnership from './components/Partnership';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for premium feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-brand-blue flex items-center justify-center">
        <div className="text-center animate-pulse">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-brand-blue font-bold text-5xl mx-auto mb-6 shadow-2xl">
            V
          </div>
          <h1 className="text-3xl font-heading font-bold text-white tracking-widest">VENZAROBLUE</h1>
          <div className="mt-4 flex justify-center gap-2">
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-brand-accent rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans selection:bg-brand-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <DenimStory />
        <About />
        <Products />
        <ProductCatalog />
        <Features />
        <Partnership />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
