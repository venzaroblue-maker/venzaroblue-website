import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import slimFitImg from '../assets/images/hero_jeans_1782916697346.webp';
import regularFitImg from '../assets/images/regular_fit_jeans_1782916765785.webp';
import stretchDenimImg from '../assets/images/stretch_denim_jeans_1782917924440.webp';
import baggyFitImg from '../assets/images/baggy_fit_jeans_1782917911435.webp';

const catalogCategories = [
  {
    id: "slim-fit",
    title: "Slim Fit Jeans",
    description: "Modern, tailored fit that tapers down the leg. A high-demand staple for younger demographics, offering a sharp silhouette without compromising comfort. Manufactured with precision to ensure a consistent, flattering profile.",
    image: slimFitImg,
    features: ["Premium stretch cotton blend", "Tapered ankle opening", "Contemporary styling", "Reinforced stress points"]
  },
  {
    id: "regular-fit",
    title: "Classic Regular Fit",
    description: "The timeless standard in men's denim. Straight from the hip to the thigh with a slight taper at the hem. Perfect for everyday wear and a guaranteed fast-mover across all retail age groups.",
    image: regularFitImg,
    features: ["All-day comfort sizing", "Durable heavyweight construction", "Universal market appeal", "Classic 5-pocket design"]
  },
  {
    id: "stretch-denim",
    title: "Performance Stretch",
    description: "Engineered for maximum mobility. Blending high-grade cotton with premium elastane to deliver superior comfort while maintaining the authentic, rugged denim look. Ideal for the active modern man.",
    image: stretchDenimImg,
    features: ["High shape retention", "Active lifestyle fit", "Soft-touch interior finish", "Tear-resistant fabric"]
  },
  {
    id: "baggy-fit",
    title: "Baggy & Loose Fit",
    description: "Leading the current streetwear and urban fashion trends. Relaxed through the seat and thigh with a wide leg opening. An absolute essential for targeting Gen Z and fashion-forward retail segments.",
    image: baggyFitImg,
    features: ["Trendy wide silhouette", "Vintage wash options", "Streetwear essential", "Breathable loose cut"]
  }
];

export default function ProductCatalog() {
  return (
    <section id="catalog" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-wider text-brand-blue uppercase mb-3">Detailed Categories</h2>
          <h3 className="text-4xl font-heading font-bold text-gray-900 mb-6">
            Men's Denim Manufacturing Lines
          </h3>
          <p className="text-lg text-gray-600">
            Dive deep into our core production categories. We specialize exclusively in men's denim, ensuring absolute perfection, consistent sizing, and premium quality in every single cut.
          </p>
        </div>

        <div className="space-y-20">
          {catalogCategories.map((category, idx) => (
            <div key={category.id} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 lg:px-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue font-medium text-sm mb-6 border border-blue-100">
                  Wholesale Fast Mover
                </div>
                <h4 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                  {category.title}
                </h4>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {category.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-800 font-medium">
                      <div className="w-2 h-2 rounded-full bg-brand-accent flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-blue-dark group text-lg"
                >
                  Request Full Catalog & Pricing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
