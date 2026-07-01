import vintageMillImg from '../assets/images/vintage_denim_mill_1782918471078.jpg';
import { MapPin, Clock, Scissors, Globe } from 'lucide-react';

export default function DenimStory() {
  return (
    <section id="heritage" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Global History Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-wider text-brand-blue uppercase mb-3">The Heritage</h2>
            <h3 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              The Story of Denim: From Workwear to Global Fashion
            </h3>
            <p className="text-lg text-gray-600">
              The fabric that conquered the world. What started as rugged workwear has evolved into the most universally loved garment in human history.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">The Origins (1800s)</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                The word "Denim" comes from "Serge de Nîmes", a sturdy fabric from Nîmes, France. Meanwhile, "Jeans" originated from the city of Genoa, Italy, where sailors wore sturdy cotton trousers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Scissors className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">The Gold Rush</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                During the American Gold Rush, miners needed durable clothes that wouldn't tear easily. Tailors reinforced indigo-dyed denim with copper rivets at stress points, birking the classic workwear straight fit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Hollywood & Rebellion</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                In the 1950s, denim transformed from workwear to a symbol of youth rebellion, popularized by Hollywood icons. This era introduced the classic slim and straight cuts to mainstream fashion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group">
              <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Scissors className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Evolution of Styles</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Over decades, denim adapted: Flared fits in the 70s, Baggy & loose fits in the 90s hip-hop era, skinny/slim fits in the 2000s, and today's advanced performance stretch denim.
              </p>
            </div>
          </div>
        </div>

        {/* Ahmedabad & Venzaroblue Section */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-square lg:aspect-auto">
              <img 
                src={vintageMillImg} 
                alt="Ahmedabad Textile Mill Heritage" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent lg:hidden"></div>
            </div>
            
            <div className="p-10 lg:p-16 flex flex-col justify-center bg-brand-blue text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/20 w-fit">
                <MapPin className="w-4 h-4" />
                Ahmedabad, Gujarat
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-6 leading-tight">
                Ahmedabad: The Denim Hub of India
              </h3>
              
              <div className="space-y-6 text-blue-50 text-lg font-light leading-relaxed">
                <p>
                  Historically known as the <strong className="text-white font-bold">"Manchester of the East"</strong> due to its booming textile mills along the Sabarmati river, Ahmedabad has always been the beating heart of India's fabric industry.
                </p>
                <p>
                  In the 1980s, as global demand for jeans skyrocketed, Ahmedabad's visionary textile pioneers pivoted to denim manufacturing. By combining generational weaving expertise with modern technology, the city rapidly transformed into the <strong>Denim Capital of India</strong>, and one of the largest denim manufacturing hubs in the entire world.
                </p>
                <div className="pt-6 mt-6 border-t border-white/20">
                  <h4 className="text-2xl font-heading font-bold text-white mb-3">
                    Proudly Ahmedabad Based
                  </h4>
                  <p>
                    <strong>Venzaroblue</strong> was born from this rich legacy. As an Ahmedabad-based manufacturer, we carry forward the city's heritage of textile perfection. We leverage the local ecosystem of premium yarn spinning, advanced indigo dyeing, and expert tailoring to deliver world-class wholesale jeans to retailers across the nation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
