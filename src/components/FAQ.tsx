import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "Our minimum order quantity is typically 50 pieces per style/color. However, we offer flexibility for first-time wholesale buyers to sample our quality."
  },
  {
    q: "Do you supply pan-India?",
    a: "Yes, we have a robust logistics network and supply Venzaroblue jeans to all states across India with safe and timely delivery."
  },
  {
    q: "What fits are available in your jeans collection?",
    a: "We manufacture a wide range of fits including Slim Fit, Regular Fit, Straight Fit, Baggy Fit, and specialized stretch denim."
  },
  {
    q: "Can we visit your manufacturing unit?",
    a: "Absolutely. We welcome wholesale buyers to visit our facility to check the manufacturing process and fabric quality firsthand. Please contact us to schedule a visit."
  },
  {
    q: "What are the payment terms for bulk orders?",
    a: "We typically require a percentage advance to process the order, with the balance due before dispatch. Exact terms can be discussed with our sales team."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wider text-brand-blue uppercase mb-3">FAQ</h2>
          <h3 className="text-4xl font-heading font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIdx === idx ? 'border-brand-blue bg-blue-50/50 shadow-md' : 'border-gray-200 bg-white hover:border-gray-300'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-gray-900"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="text-lg pr-8">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 text-brand-blue ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
