import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog';
import ConsultancyTeaser from '../components/ConsultancyTeaser';
import Features from '../components/Features';

export default function Home() {
  return (
    <div>
      <Hero />
      <ConsultancyTeaser />
      <ProductCatalog />
      <Features />
    </div>
  );
}
