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
    desc: 'Wholesale rates par ready stock — slim, straight, baggy fits. Aaj order karein, turant dispatch.',
    to: '/ready-stock-jeans',
    label: 'For retailers & resellers',
  },
  {
    icon: Tag,
    title: 'White Label Manufacturing',
    desc: 'Aapka brand name, hamari factory. Custom tags, labels aur packaging ke saath jeans manufacturing.',
    to: '/white-label-jeans-manufacturer',
    label: 'For new brands',
  },
  {
    icon: Users,
    title: 'Business Consulting',
    desc: 'Costing, fabric sourcing, washing — jeans business ki har uljhan ka expert solution 1-on-1 call par.',
    to: '/jeans-business-consulting',
    label: 'For startups & traders',
  },
  {
    icon: GraduationCap,
    title: 'Manufacturing Training',
    desc: 'Pattern cutting se washing tak — jeans banane ka poora kaam practical tarike se seekhein.',
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
    q: 'Kya main apne brand name ke saath jeans banwa sakta hoon?',
    a: 'Haan, hum poori tarah se white-labeling services dete hain. Aapke design aur aapke brand ke tags/buttons ke saath jeans ready karke di jayegi.',
  },
  {
    q: 'Minimum order quantity (MOQ) kitni hoti hai?',
    a: 'Naye brands aur startups ki madad ke liye hamara MOQ bohot low hai — 50 pieces per design se aap shuru kar sakte hain.',
  },
  {
    q: 'Kya aap sample banakar dete hain bulk order se pehle?',
    a: 'Bilkul. Bulk production shuru hone se pehle hum aapko ek paid sample banakar dikhate hain. Aapki approval ke baad hi factory mein kaam shuru hota hai.',
  },
  {
    q: 'Ek jeans order taiyar hone mein kitna time lagta hai?',
    a: 'Order ki quantity aur design ki complexity ke hisaab se standard time 15 se 30 din ka hota hai.',
  },
  {
    q: 'Kya aap pan-India delivery karte hain?',
    a: 'Haan, hamari logistics poore India mein active hai. Aapka maal surakshit aapke godown tak pahunchaya jayega.',
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Venzaroblue | Jeans Manufacturer Ahmedabad — White Label, Wholesale & Business Consulting"
        description="Ahmedabad ka complete jeans business partner: ready stock wholesale jeans, white label manufacturing, jeans business consulting aur manufacturing training. MOQ 50 pcs, pan-India delivery."
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
            Ready Stock Se Apna Brand Tak —{' '}
            <span className="text-stitch">Jeans Ka Har Solution</span> Ek Jagah
          </h1>
          <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-9">
            Wholesale ready stock, white label manufacturing, business
            consulting aur training — jo bhi stage par ho aapka jeans business,
            hum saath hain.
          </p>
          <a
            href={wa('Hi Venzaroblue! Mujhe jeans business solution ke baare mein jaanna hai.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-wa text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:brightness-95 transition w-full sm:w-auto max-w-sm mx-auto"
          >
            <MessageCircle className="w-6 h-6" /> WhatsApp Par Baat Karein
          </a>
        </div>
        <div className="selvedge relative" aria-hidden="true" />
      </section>

      {/* 4 SOLUTIONS */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-3">
            Aap Kis Stage Par Hain?
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            Chaaro solutions Ahmedabad ki hamari hi factory se — beech mein koi
            agent nahi, seedha kaam.
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
                  Aur Jaanein <ArrowRight className="w-4 h-4" />
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
              <p className="text-gray-600">Wholesale rates. MOQ sirf 50 pieces.</p>
            </div>
            <Link
              to="/ready-stock-jeans"
              className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-denim hover:gap-2.5 transition-all"
            >
              Poora Collection <ArrowRight className="w-4 h-4" />
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
            Poora Collection Dekhein <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-12">
            Venzaroblue Hi Kyun?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Factory, t: 'Apni Factory, Ahmedabad', d: 'Direct manufacturer — koi middleman nahi, isliye rates sabse competitive.' },
              { icon: BadgeCheck, t: 'Low MOQ — 50 Pcs', d: 'Naye brands ke liye chhote order se shuruaat, risk kam.' },
              { icon: Scissors, t: 'Premium Denim & Finish', d: 'Quality fabric, industrial washing aur double-checked stitching.' },
              { icon: Truck, t: 'Pan-India Delivery', d: 'Trusted logistics se aapke godown tak surakshit delivery.' },
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
            Aksar Puche Jaane Waale Sawaal
          </h2>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-denim text-white py-16 text-center px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-balance">
          Jeans Business Mein Aage Badhna Hai?
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto mb-8">
          WhatsApp par message karein — 24 ghante ke andar reply milega.
        </p>
        <a
          href={wa('Hi Venzaroblue! Mujhe apne jeans business ke liye baat karni hai.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-wa text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:brightness-95 transition"
        >
          <MessageCircle className="w-6 h-6" /> Abhi Message Karein
        </a>
      </section>
    </>
  );
}
