import partnershipImg from '../assets/images/b2b_partnership_1782919155102.jpg';
import { Handshake, Map, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Partnership() {
  const whatsappLink = "https://wa.me/916350566157";

  return (
    <section id="partnership" className="py-24 bg-brand-blue text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="partnership-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#partnership-grid)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/30 mb-6 font-medium text-sm">
              <Handshake className="w-4 h-4" />
              Business Opportunity
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight">
              Become a Venzaroblue Partner & Distributor
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 text-balance font-light leading-relaxed">
              Unlock exclusive growth opportunities. We are expanding our network and looking for driven partners, distributors, and agents across India to represent our premium denim brand.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                  <Map className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">District & Taluka Distribution</h3>
                  <p className="text-blue-200">Secure distribution rights for your specific District, Taluka, Block, or City. Be the primary supplier of Venzaroblue in your local market.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                  <ShieldCheck className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Exclusive Brand Agent</h3>
                  <p className="text-blue-200">Become an authorized agent with exclusive territorial rights. We ensure no other supplier competes with you in your designated region.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                  <TrendingUp className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">High ROI & Support</h3>
                  <p className="text-blue-200">Enjoy factory-direct wholesale pricing, massive retail margins, and dedicated marketing support from our Ahmedabad headquarters.</p>
                </div>
              </div>
            </div>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
            >
              <Handshake className="w-5 h-5" />
              Apply for Distributorship Now
            </a>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src={partnershipImg} 
                alt="Venzaroblue B2B Partnership" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply"></div>
            </div>
            
            {/* Overlay card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl hidden md:block border border-gray-100 max-w-xs">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Status</p>
              </div>
              <p className="text-xl font-heading font-bold text-gray-900">Accepting Agent Applications</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
