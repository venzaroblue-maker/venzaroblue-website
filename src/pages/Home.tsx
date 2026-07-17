import { Link } from 'react-router-dom';
import {
  ArrowRight, Package, Tag, Users, GraduationCap, MessageCircle,
  BadgeCheck, Truck, Scissors, Factory,
} from 'lucide-react';
import Seo from '../components/Seo';
import Accordion from '../components/Accordion';
import { wa } from '../site';

import heroImg from '../assets/images/hero_jeans_1782916697346.webp';
import regularImg from '../assets/images/regular_fit_jeans_1782916765785.webp';
import straightImg from '../assets/images/straight_fit_jeans_1782917895472.webp';
import baggyImg from '../assets/images/baggy_fit_jeans_1782917911435.webp';
import vintageImg from '../assets/images/vintage_wash_jeans_1782917935863.webp';

const solutions = [
  {
    icon: Package,
    title: 'Ready Stock Jeans',
    desc: 'Ready stock at wholesale rates — slim, straight and baggy fits. Order today, instant dispatch.',
    to: '/ready-stock-jeans',
    label: 'For retailers & resellers',
  },
  {
    icon: Tag,
    title: 'White Label Manufacturing',
    desc: 'Your brand name, our factory. Jeans manufacturing with custom tags, labels and packaging.',
    to: '/white-label-jeans-manufacturer',
    label: 'For new brands',
  },
  {
    icon: Users,
    title: 'Business Consulting',
    desc: 'Costing, fabric sourcing, washing — expert solutions for every jeans business problem on a 1-on-1 call.',
    to: '/jeans-business-consulting',
    label: 'For startups & traders',
  },
  {
    icon: GraduationCap,
    title: 'Manufacturing Training',
    desc: 'From pattern cutting to washing — learn the complete jeans manufacturing process hands-on.',
    to: '/jeans-manufacturing-training',
    label: 'For learners',
  },
];

const collection = [
  { img: regularImg, name: 'Regular Fit', tag: 'Best Seller' },
  { img: straightImg, name: 'Straight Fit', tag: 'Classic' },
  { img: baggyImg, name: 'Baggy Fit', tag: 'Trending' },
  { img: vintageImg, name: 'Vintage Wash', tag: 'Premium' },
];

const faqs = [
  {
    q: 'Can I get jeans manufactured with my own brand name?',
    a: 'Yes, we provide complete white-labeling services. Your jeans are made with your design and delivered ready with your brand tags and buttons.',
  },
  {
    q: 'What is the minimum order quantity (MOQ)?',
    a: 'To support new brands and startups, our MOQ is very low — you can start with just 50 pieces per design.',
  },
  {
    q: 'Do you provide a sample before the bulk order?',
    a: 'Absolutely. Before bulk production begins, we make a paid sample for you. Production starts at the factory only after your approval.',
  },
  {
    q: 'How long does it take to complete a jeans order?',
    a: 'Depending on the order quantity and design complexity, the standard time is 15 to 30 days.',
  },
  {
    q: 'Do you deliver pan-India?',
    a: 'Yes, our logistics network is active across all of India. Your goods are delivered safely to your warehouse.',
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Venzaroblue | Jeans Manufacturer Ahmedabad — White Label, Wholesale & Business Consulting"
        description="Your complete jeans business partner in Ahmedabad: ready stock wholesale jeans, white label manufacturing, jeans business consulting and manufacturing training. MOQ 50 pcs, pan-India delivery."
        path="/"
      />

      {/* HERO */}
      <section className="relative bg-indigo-ink text-white overflow-hidden">
        <img
          src={heroImg}
          alt="Premium denim jeans manufacturing Ahmedabad"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-ink/50 via-indigo-ink/30 to-indigo-ink" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-32 pb-20 sm:pt-44 sm:pb-28 text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-stitch mb-5">
            Jeans Manufacturer · Ahmedabad
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-6xl leading-[1.1] text-balance mb-6">
            From Ready Stock To Your Own Brand —{' '}
            <span className="text-stitch">Every Jeans Solution</span> In One Place
          </h1>
          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-9">
            Wholesale ready stock, white label manufacturing, business
            consulting and training — whatever stage your jeans business is at,
            we are with you.
          </p>
          <a
            href={wa('Hi Venzaroblue! I want to know about your jeans business solutions.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-wa text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:brightness-95 transition w-full sm:w-auto max-w-sm mx-auto"
          >
            <MessageCircle className="w-6 h-6" /> Chat On WhatsApp
          </a>
        </div>
        <div className="selvedge relative" aria-hidden="true" />
      </section>

      {/* 4 SOLUTIONS */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-3">
            What Stage Are You At?
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            All four solutions come from our own factory in Ahmedabad — no
            middlemen, just direct work.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group bg-white rounded-2xl border border-gray-200 p-6 flex flex-col hover:border-denim hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-xl bg-wash flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-denim" />
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-stitch mb-1.5">
                  {s.label}
                </p>
                <h3 className="font-heading font-bold text-lg text-indigo-ink mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                  {s.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-denim group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MINI COLLECTION */}
      <section className="bg-wash py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink mb-2">
                Ready Stock Collection
              </h2>
              <p className="text-gray-600">Wholesale rates. MOQ just 50 pieces.</p>
            </div>
            <Link
              to="/ready-stock-jeans"
              className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-denim hover:gap-2.5 transition-all"
            >
              View Full Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {collection.map((c) => (
              <Link
                key={c.name}
                to="/ready-stock-jeans"
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={c.img}
                    alt={`${c.name} mens jeans wholesale Ahmedabad`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-selvedge text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                    {c.tag}
                  </span>
                </div>
                <p className="font-heading font-semibold text-indigo-ink px-4 py-3.5 text-sm sm:text-base">
                  {c.name}
                </p>
              </Link>
            ))}
          </div>
          <Link
            to="/ready-stock-jeans"
            className="sm:hidden mt-6 flex items-center justify-center gap-2 border-2 border-denim text-denim py-3.5 rounded-xl font-semibold"
          >
            View Full Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-12">
            Why Venzaroblue?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Factory, t: 'Own Factory, Ahmedabad', d: 'Direct manufacturer — no middlemen, which means the most competitive rates.' },
              { icon: BadgeCheck, t: 'Low MOQ — 50 Pcs', d: 'Start small with low risk — perfect for new brands testing the market.' },
              { icon: Scissors, t: 'Premium Denim & Finish', d: 'Quality fabric, industrial washing and double-checked stitching.' },
              { icon: Truck, t: 'Pan-India Delivery', d: 'Safe delivery to your warehouse through trusted logistics partners.' },
            ].map((f) => (
              <div key={f.t} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-wash flex items-center justify-center mb-4">
                  <f.icon className="w-7 h-7 text-denim" />
                </div>
                <h3 className="font-heading font-bold text-indigo-ink mb-2">{f.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-wash py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-10">
            Frequently Asked Questions
          </h2>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-denim text-white py-16 text-center px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-balance">
          Ready To Grow Your Jeans Business?
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto mb-8">
          Message us on WhatsApp — you will get a reply within 24 hours.
        </p>
        <a
          href={wa('Hi Venzaroblue! I want to discuss my jeans business.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-wa text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:brightness-95 transition"
        >
          <MessageCircle className="w-6 h-6" /> Message Us Now
        </a>
      </section>
    </>
  );
}
