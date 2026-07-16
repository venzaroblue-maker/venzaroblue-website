import heroImage from '../assets/images/hero_jeans_1782916697346.webp';
import { Phone, MessageCircle, ArrowRight, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const channelLink = "https://whatsapp.com/channel/0029VbChTP1GpLHN5xjJpE3y";
  const whatsappLink = "https://wa.me/916350566157";
  
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium Men's Jeans Wholesale" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/30 mb-6 font-medium text-sm">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            Premium B2B Manufacturing
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white tracking-tight mb-6 leading-tight">
            VENZARO<span className="text-brand-blue-light">BLUE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 text-balance font-light">
            India's Trusted Wholesale Men's Jeans Manufacturer & Supplier. Delivering superior quality denim across all states.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+916350566157"
              className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white px-8 py-4 rounded-xl font-medium text-lg transition-all shadow-lg hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-gray-50 px-8 py-4 rounded-xl font-medium text-lg transition-all shadow-lg hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              WhatsApp Now
            </a>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact"
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all"
            >
              <Package className="w-5 h-5" />
              Bulk Order Enquiry
            </Link>
            
            <a 
              href={channelLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366]/20 border-2 border-[#25D366] text-white hover:bg-[#25D366]/30 px-8 py-4 rounded-xl font-medium text-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Join WhatsApp Channel
            </a>
          </div>
          
          <Link
            to="/consultancy"
            className="mt-6 inline-flex items-center gap-2 text-brand-accent hover:text-amber-400 font-semibold transition-colors group"
          >
            <span className="underline underline-offset-4 decoration-brand-accent/40 group-hover:decoration-amber-400">
              Starting your own clothing brand? Get expert consultancy
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="mt-12 flex items-center gap-8 text-gray-300">
            <div>
              <p className="text-3xl font-bold text-white font-heading">10k+</p>
              <p className="text-sm">Retailers</p>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div>
              <p className="text-3xl font-bold text-white font-heading">100%</p>
              <p className="text-sm">Premium Quality</p>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div>
              <p className="text-3xl font-bold text-white font-heading">Pan</p>
              <p className="text-sm">India Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
