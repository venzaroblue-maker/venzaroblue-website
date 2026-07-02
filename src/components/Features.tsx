import manufacturingImg from '../assets/images/hero_jeans_1782916697346.jpg';
import { ShieldCheck, Truck, Scissors, ThumbsUp, Factory, Users } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />,
    title: "Premium Quality Assurance",
    description: "Strict quality checks at every stage. We use high-grade denim and reinforced stitching."
  },
  {
    icon: <Truck className="w-6 h-6 text-brand-blue" />,
    title: "Pan India Delivery",
    description: "Reliable and fast wholesale shipping to all states across India through trusted logistics partners."
  },
  {
    icon: <Scissors className="w-6 h-6 text-brand-blue" />,
    title: "Precision Tailoring",
    description: "Modern automated cutting and sewing machinery ensuring consistent sizing across all batches."
  },
  {
    icon: <ThumbsUp className="w-6 h-6 text-brand-blue" />,
    title: "High Retail Margins",
    description: "Factory-direct pricing eliminates middlemen, giving retailers excellent profit margins."
  }
];

export default function Features() {
  return (
    <section id="manufacturing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Choose Us */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-wider text-brand-blue uppercase mb-3">Why Choose Us</h2>
            <h3 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              The Venzaroblue Advantage
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-blue/30 transition-colors">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {feat.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feat.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Process */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={manufacturingImg} 
                alt="Venzaroblue Manufacturing Facility" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 bg-brand-blue text-white p-6 rounded-2xl shadow-xl hidden md:block max-w-[200px]">
              <Factory className="w-8 h-8 mb-4 opacity-80" />
              <p className="text-3xl font-heading font-bold mb-1">5000+</p>
              <p className="text-sm font-medium text-blue-100">Units Manufactured Monthly</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-wider text-brand-blue uppercase mb-3">State-of-the-art</h2>
            <h3 className="text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              Our Manufacturing Process
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              At Venzaroblue, we control the entire production cycle to guarantee excellence. From fabric sourcing to the final wash, every step is optimized for B2B wholesale excellence.
            </p>
            
            <div className="space-y-6">
              {[
                { step: "01", title: "Premium Fabric Selection", desc: "Sourcing high-stretch and durable cotton blends." },
                { step: "02", title: "Automated Precision Cutting", desc: "Computerized cutting for zero measurement errors." },
                { step: "03", title: "Reinforced Stitching", desc: "Heavy-duty threads used on stress points." },
                { step: "04", title: "Enzyme & Acid Washing", desc: "Modern washing techniques for premium finishes." },
                { step: "05", title: "A-Grade Quality Check", desc: "Every piece is individually inspected before packing." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center font-bold font-heading">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
