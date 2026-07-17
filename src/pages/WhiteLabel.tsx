import { Tag, Layers, Truck, BadgeCheck, MessageCircle } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Accordion from '../components/Accordion';
import { wa } from '../site';
import heroImg from '../assets/images/stretch_denim_jeans_1782917924440.webp';

const capabilities = [
  { icon: BadgeCheck, t: 'Low MOQ', d: 'Start your brand with just 50 pieces per design — no pressure of large orders.' },
  { icon: Layers, t: 'Premium Denim Fabric', d: 'Stretch, non-stretch, vintage wash — quality fabric that builds your brand identity.' },
  { icon: Tag, t: 'Custom Tags & Labels', d: 'Your brand tags, buttons, patches and packaging — everything in your name.' },
  { icon: Truck, t: 'On-Time Delivery', d: 'Production completed in 15–30 days, pan-India delivery to your warehouse.' },
];

const steps = [
  { n: '01', t: 'Choose Design / Sample', d: 'Select from our ready designs or send your own. We create a paid sample first — production begins only after your approval.' },
  { n: '02', t: 'Add Your Brand Tag', d: 'Your brand name, logo, tags, buttons and packaging — the complete jeans are prepared with your brand identity.' },
  { n: '03', t: 'Receive Delivery', d: 'After quality check, your order is packed and delivered to your address. You can start selling right away.' },
];

const faqs = [
  { q: 'What does white labeling mean?', a: 'In white labeling, the jeans are manufactured in our factory, but the brand name on them is yours. You don\'t need a factory, machines or workers — just your brand and your market.' },
  { q: 'Can I get jeans manufactured with my own brand name?', a: 'Yes, we provide complete white-labeling services. Your jeans are made with your design and delivered ready with your brand tags and buttons.' },
  { q: 'What is the minimum order quantity (MOQ)?', a: 'To support new brands and startups, our MOQ is very low — you can start with just 50 pieces per design.' },
  { q: 'Do you provide a sample before the bulk order?', a: 'Absolutely. Before bulk production begins, we make a paid sample for you. Production starts at the factory only after your approval.' },
  { q: 'How long does it take to complete an order?', a: 'Depending on the order quantity and design complexity, the standard time is 15 to 30 days.' },
  { q: 'Do you deliver pan-India?', a: 'Yes, our logistics network is active across all of India. Your goods are delivered safely to your warehouse.' },
];

export default function WhiteLabel() {
  return (
    <>
      <Seo
        title="White Label Jeans Manufacturer India | Private Label Denim — Venzaroblue Ahmedabad"
        description="Launch your own jeans brand without a factory. White label & private label jeans manufacturing from Ahmedabad — low MOQ 50 pcs, custom tags & labels, premium denim, pan-India delivery."
        path="/white-label-jeans-manufacturer"
      />
      <PageHero
        eyebrow="White Label & Private Label Manufacturing"
        title={<>Launch Your Own Jeans Brand — <span className="text-stitch">We Handle The Manufacturing</span></>}
        subtitle="Start your brand without setting up a factory. Your design, your tags, your packaging — production is our responsibility."
        ctaLabel="Get Free Quote"
        waMessage="Hi Venzaroblue! I need a quote for white label jeans manufacturing. My brand plan: "
        image={heroImg}
        imageAlt="White label jeans manufacturing Ahmedabad"
      />

      {/* CAPABILITIES */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-12">
            Our Capabilities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c) => (
              <div key={c.t} className="bg-white rounded-2xl border border-gray-200 p-6 stitch-b">
                <div className="w-12 h-12 rounded-xl bg-wash flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-denim" />
                </div>
                <h3 className="font-heading font-bold text-indigo-ink mb-2">{c.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-STEP PROCESS */}
      <section className="bg-wash py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-4">
            Your Brand Ready In Just 3 Steps
          </h2>
          <p className="text-gray-600 text-center mb-12">
            The process is completely simple — we are with you from design to delivery.
          </p>
          <div className="space-y-0">
            {steps.map((s, i) => (
              <div key={s.n} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-denim text-white font-heading font-bold flex items-center justify-center">
                    {s.n}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-grow bg-denim/25 my-1" />
                  )}
                </div>
                <div className="pb-10">
                  <h3 className="font-heading font-bold text-lg text-indigo-ink mb-1.5">{s.t}</h3>
                  <p className="text-gray-600 leading-relaxed text-[15px]">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTENT FOR SEO */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5 text-gray-700 leading-relaxed">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-indigo-ink">
            White Label Jeans Manufacturing — Your Own Brand Without A Factory
          </h2>
          <p>
            White label or private label jeans manufacturing is one of the
            fastest-growing business models in India today. You don't need a
            factory, machinery or workers — you focus only on your brand and
            sales, while Venzaroblue's Ahmedabad factory handles production.
          </p>
          <p>
            We manufacture every fit — slim fit, regular fit, straight fit,
            baggy fit and vintage wash denim. From fabric selection to
            industrial washing, stitching, your brand tags, woven labels,
            leather patches, buttons and final packaging — every step goes
            through quality checks.
          </p>
          <p>
            For Instagram sellers, D2C brands, retail store owners and online
            marketplace sellers (Amazon, Flipkart, Meesho), this is the
            lowest-risk model: MOQ starts at just 50 pieces, so you can test
            the market with a small batch and scale up as demand grows.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-wash py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl text-indigo-ink text-center mb-10">
            White Labeling FAQs
          </h2>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-denim text-white py-16 text-center px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-balance">
          Start Your Brand Today
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto mb-8">
          WhatsApp us for a free quote — you'll get complete details on MOQ,
          pricing and samples.
        </p>
        <a
          href={wa('Hi Venzaroblue! I need a free quote for white label jeans.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-wa text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:brightness-95 transition"
        >
          <MessageCircle className="w-6 h-6" /> Get Free Quote
        </a>
      </section>
    </>
  );
}
