import { Link } from 'react-router-dom';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';

const CONSULTANCY_WA = "https://wa.me/916350566157?text=" + encodeURIComponent("Hi Venzaroblue, I want to know more about your Garment Business Consultancy.");

const processSteps = [
  { step: "1", title: "Free Discovery Call", desc: "Tell us your idea, budget, and goals. We assess where you stand and what you need." },
  { step: "2", title: "Roadmap & Costing", desc: "Get a clear, step-by-step production plan with realistic costing and timelines." },
  { step: "3", title: "Sourcing & Sampling", desc: "We connect you with trusted fabric suppliers and develop your first samples." },
  { step: "4", title: "Production & Launch", desc: "Manufacturing, washing, quality checks, branding, packaging — done right, end to end." },
];

export default function Consultancy() {
  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 text-center">
        Launch Your Garment Brand with Expert Guidance
      </h1>
      <h2 className="text-2xl font-bold text-brand-blue mb-8 text-center">
        Complete Garment Business Consultancy
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
        <a
          href={CONSULTANCY_WA}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-md"
        >
          <MessageCircle className="w-5 h-5" />
          Book Free Consultation on WhatsApp
        </a>
        <a
          href="tel:+916350566157"
          className="flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-md"
        >
          <Phone className="w-5 h-5" />
          Call: +91 63505 66157
        </a>
      </div>

      <div className="prose prose-lg text-gray-600 max-w-none">
        <p className="mb-8">
          Starting a garment business can be challenging without the right guidance. We help aspiring entrepreneurs, startups, and clothing brands understand every step of the manufacturing process—from idea to finished product.
        </p>
        <p className="mb-12">
          With years of industry knowledge, we provide practical, transparent, and result-oriented consultancy to help you avoid costly mistakes and build a profitable garment business.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">What We Offer</h3>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h4 className="text-xl font-bold text-brand-blue mb-3">Fabric Sourcing</h4>
            <p>Find the right fabric at the right price from trusted suppliers. We guide you in selecting quality materials based on your product, budget, and target market.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h4 className="text-xl font-bold text-brand-blue mb-3">Product Development</h4>
            <p>Turn your ideas into reality with professional sampling, pattern development, size specifications, and production planning.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h4 className="text-xl font-bold text-brand-blue mb-3">Manufacturing & Job Work</h4>
            <p>Learn how garment manufacturing works, choose reliable job workers, monitor production, and maintain consistent quality throughout the process.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h4 className="text-xl font-bold text-brand-blue mb-3">Washing & Finishing</h4>
            <p>Understand different washing techniques including enzyme wash, silicon wash, stone wash, acid wash, and more. We help you select the right process for your product while maintaining quality and consistency.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h4 className="text-xl font-bold text-brand-blue mb-3">Quality Control</h4>
            <p>Implement professional quality checks at every production stage to reduce defects, improve customer satisfaction, and strengthen your brand reputation.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h4 className="text-xl font-bold text-brand-blue mb-3">Branding & Packaging</h4>
            <p>Create a premium brand identity with customized woven labels, printed labels, hang tags, packaging bags, boxes, stickers, and branding materials.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h4 className="text-xl font-bold text-brand-blue mb-3">Costing & Pricing</h4>
            <p>Learn accurate product costing, profit margins, wholesale pricing, retail pricing, and business strategies that maximize profitability.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <h4 className="text-xl font-bold text-brand-blue mb-3">Vendor & Supply Chain Support</h4>
            <p>Connect with trusted fabric suppliers, washing units, stitching units, printing partners, embroidery units, and packaging vendors to build a reliable production network.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">How Our Consultancy Works</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {processSteps.map((s) => (
            <div key={s.step} className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-brand-blue text-white font-bold flex items-center justify-center mb-4">{s.step}</div>
              <h4 className="font-bold text-gray-900 mb-2">{s.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Who Is This For?</h3>
        <ul className="list-disc pl-6 mb-12 space-y-2">
          <li>New Garment Business Owners</li>
          <li>Fashion Startups</li>
          <li>Clothing Brand Founders</li>
          <li>Online Sellers</li>
          <li>Boutique Owners</li>
          <li>Export Businesses</li>
          <li>Wholesale Traders</li>
          <li>Anyone Looking to Start a Clothing Brand</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Why Choose Venzaro Blue Consultancy?</h3>
        <ul className="list-disc pl-6 mb-12 space-y-2">
          <li>Complete End-to-End Guidance</li>
          <li>Practical Industry Experience</li>
          <li>Trusted Manufacturing Network</li>
          <li>Time & Cost Saving Solutions</li>
          <li>Quality-Focused Production</li>
          <li>Transparent Consultation</li>
          <li>Personalized Business Support</li>
          <li>Long-Term Growth Strategy</li>
        </ul>

        <div className="bg-brand-blue text-white p-8 rounded-3xl text-center">
          <h3 className="text-3xl font-bold font-heading mb-4">Build Your Brand with Confidence</h3>
          <p className="text-xl mb-6">Whether you're launching your first clothing brand or expanding your existing business, we provide the knowledge, connections, and professional support you need to succeed.</p>
          <p className="font-bold text-xl text-brand-accent mb-8">Your Vision. Our Expertise. One Successful Garment Brand.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONSULTANCY_WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#128C7E] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us Now
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors">
              Get Started Today <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
