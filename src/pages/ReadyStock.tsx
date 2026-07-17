import { MessageCircle, BadgeCheck, Truck, IndianRupee } from 'lucide-react';
import Seo from '../components/Seo';
import Accordion from '../components/Accordion';
import { wa } from '../site';

import regularImg from '../assets/images/regular_fit_jeans_1782916765785.webp';
import straightImg from '../assets/images/straight_fit_jeans_1782917895472.webp';
import baggyImg from '../assets/images/baggy_fit_jeans_1782917911435.webp';
import stretchImg from '../assets/images/stretch_denim_jeans_1782917924440.webp';
import vintageImg from '../assets/images/vintage_wash_jeans_1782917935863.webp';
import cargoImg from '../assets/images/cargo_pants_mens_1782917947795.webp';

const products = [
  { img: regularImg, name: 'Regular Fit Jeans', tag: 'Best Seller', sizes: '28–36' },
  { img: straightImg, name: 'Straight Fit Jeans', tag: 'Classic', sizes: '28–36' },
  { img: baggyImg, name: 'Baggy Fit Jeans', tag: 'Trending', sizes: '28–34' },
  { img: stretchImg, name: 'Stretch Denim Jeans', tag: 'Comfort', sizes: '28–36' },
  { img: vintageImg, name: 'Vintage Wash Jeans', tag: 'Premium', sizes: '28–34' },
  { img: cargoImg, name: 'Cargo Pants', tag: 'New', sizes: '28–36' },
];

const faqs = [
  { q: 'Who can place an order?', a: 'Retailers, resellers, online sellers (Amazon/Flipkart/Meesho) and distributors — all B2B buyers can order. We do not sell single pieces at retail.' },
  { q: 'What are the wholesale rates?', a: 'Rates depend on quantity — the higher the quantity, the better the rate. For exact pricing, send the style and quantity on WhatsApp and you\'ll get an instant quote.' },
  { q: 'What is the minimum order?', a: 'Ready stock MOQ starts at 50 pieces. A combination of mixed sizes and mixed styles is also possible.' },
  { q: 'How does delivery work?', a: 'Pan-India delivery through trusted transport partners. After dispatch, tracking details are shared with you on WhatsApp.' },
];

export default function ReadyStock() {
  return (
    <>
      <Seo
        title="Wholesale Mens Jeans Ready Stock Ahmedabad | Bulk Jeans Supplier India — Venzaroblue"
        description="Ready stock mens jeans at wholesale rates — regular, straight, baggy, stretch, vintage wash & cargo. MOQ 50 pcs, direct factory rates, pan-India delivery. Bulk jeans supplier Ahmedabad."
        path="/ready-stock-jeans"
      />

      {/* HERO */}
      <section className="relative bg-indigo-ink text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-14 sm:pt-40 sm:pb-20 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-stitch mb-4">
            Wholesale Ready Stock · Direct Factory Rates
          </p>
          <h1 className="font-heading font-bold text-3xl sm:text-5xl leading-tight text-balance mb-5">
            Ready Stock Jeans — <span className="text-stitch">Order Today, Instant Dispatch</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            A curated collection for retailers and resellers. MOQ just 50
            pieces, mixed sizes possible.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300">
            <span className="flex items-center gap-1.5"><IndianRupee className="w-4 h-4 text-stitch" /> Factory Rates</span>
            <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-stitch" /> MOQ 50 Pcs</span>
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-stitch" /> Pan-India Delivery</span>
          </div>
        </div>
        <div className="selvedge" aria-hidden="true" />
      </section>

      {/* COLLECTION GRID */}
      <section className="bg-paper py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((p) => (
              <div key={p.name} className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition flex flex-col">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={p.img}
                    alt={`${p.name} wholesale bulk supplier Ahmedabad`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-selvedge text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-heading font-semibold text-indigo-ink text-sm sm:text-base">{p.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 mb-3">Sizes: {p.sizes}</p>
                  <a
                    href={wa(`Hi Venzaroblue! I need the wholesale rate and available stock for ${p.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-center gap-1.5 bg-denim text-white py-2.5 rounded-xl text-xs sm:text-sm font-semibold hover:bg-indigo-ink transition"
                  >
                    <MessageCircle className="w-4 h-4" /> Ask For Rate
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            More styles available — for the latest catalog, send{' '}
            <a href={wa('Hi! I want the latest jeans catalog.')} target="_blank" rel="noopener noreferrer" className="text-denim font-semibold underline">
              "CATALOG" on WhatsApp
            </a>.
          </p>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-wash py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5 text-gray-700 leading-relaxed">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-indigo-ink">
            Bulk Jeans Supplier Ahmedabad — Direct From The Factory
          </h2>
          <p>
            Venzaroblue is a direct manufacturer and bulk supplier of ready
            stock men's jeans from Ahmedabad. Because the goods come from our
            own factory, you get better rates than the wholesale market and
            consistent quality — the same fitting and the same shade in every
            lot.
          </p>
          <p>
            For retail store owners, online sellers and distributors, we offer
            a flexible order system with mixed size ratios (28 to 36) and mixed
            styles — so your stock rotates quickly and your money never stays
            blocked.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl text-indigo-ink text-center mb-10">
            Wholesale FAQs
          </h2>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-denim text-white py-16 text-center px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-balance">
          Get Today's Stock & Rate List
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto mb-8">
          Message us on WhatsApp — available stock, size ratios and rates
          shared instantly.
        </p>
        <a
          href={wa('Hi Venzaroblue! I want the ready stock jeans rate list.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-wa text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:brightness-95 transition"
        >
          <MessageCircle className="w-6 h-6" /> Request Rate List
        </a>
      </section>
    </>
  );
}
