import jeansStackImg from '../assets/images/jeans_stack_about_1782918027139.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-wider text-brand-blue uppercase mb-3">About Venzaroblue</h2>
            <h3 className="text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              Setting the Standard for Premium Wholesale Denim in India
            </h3>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                At <strong>Venzaroblue</strong>, we don't just manufacture jeans; we craft confidence. As one of India's leading Ahmedabad-based B2B men's denim manufacturers, we pride ourselves on delivering uncompromising quality that helps retailers boost their sales and build customer loyalty.
              </p>
              <p>
                With a state-of-the-art manufacturing facility and a keen eye on global fashion trends, our collection spans 80% premium jeans—ranging from slim fit to trendy baggy styles—and 20% complementary bottomwear like cargos and chinos.
              </p>
              <p>
                We understand the wholesale market. That's why we focus on durable stitching, premium fabrics, perfect fits, and consistent sizing that your customers will love.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="text-4xl font-heading font-bold text-brand-blue mb-2">Premium</h4>
                <p className="text-gray-600 font-medium">Stretch & Non-Stretch Fabrics</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="text-4xl font-heading font-bold text-brand-blue mb-2">A-Grade</h4>
                <p className="text-gray-600 font-medium">Quality Checking Process</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={jeansStackImg} 
                alt="Venzaroblue Premium Quality Denim" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Logo Overlay */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue rounded-xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-3">
                  V
                </div>
                <p className="font-heading font-bold text-xl text-brand-blue">VENZAROBLUE</p>
                <p className="text-xs text-gray-500 font-medium tracking-widest mt-1 uppercase">Original Denim</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
