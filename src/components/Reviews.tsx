import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Garments, Delhi",
    rating: 5,
    text: "We have been sourcing Venzaroblue jeans for our retail chain for the past 2 years. The quality is unmatched and our customers specifically ask for this brand. Zero complaints on fit and stitching."
  },
  {
    name: "Amit Shah",
    company: "Fashion Hub, Mumbai",
    rating: 5,
    text: "Excellent profit margins and premium quality. The baggy jeans collection is currently our top seller. Deliveries are always on time."
  },
  {
    name: "Vikram Singh",
    company: "Trends Menswear, Jaipur",
    rating: 5,
    text: "Venzaroblue understands the Indian market perfectly. Their fabrics are durable yet comfortable. The stretch denim range is exceptional."
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-blue-200 uppercase mb-3">Testimonials</h2>
          <h3 className="text-4xl font-heading font-bold mb-6">
            Trusted by Retailers Nationwide
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-blue-50 text-lg mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <p className="font-bold text-white text-lg">{review.name}</p>
                <p className="text-blue-200 text-sm">{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
