import { ShoppingBag, Wallet, TrendingUp, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Accordion from '../components/Accordion';
import { wa } from '../site';
import heroImg from '../assets/images/jeans_stack_about_1782918027139.webp';

const features = [
  { icon: ShoppingBag, t: 'Where To Buy Raw Material', d: 'The right wholesale denim fabric markets, rate ranges and how to check quality — so nobody sells you overpriced material.' },
  { icon: Wallet, t: 'How To Plan Your Budget', d: 'What is possible at each investment level — trading, white label or manufacturing. A realistic budget breakdown for every model.' },
  { icon: TrendingUp, t: 'How To Grow B2B Sales', d: 'A practical strategy to reach retailers, wholesalers and online marketplaces — and how to land your first order.' },
];

const paths = [
  { t: 'Ready Stock Trading', inv: 'Lowest investment', d: 'Buy ready jeans from us at wholesale rates and sell to retailers in your area. Start today, sell from day one.', to: '/ready-stock-jeans', cta: 'View Ready Stock' },
  { t: 'White Label Brand', inv: 'Medium investment', d: 'Get jeans manufactured under your own brand name (MOQ 50 pcs) and build your brand value online or offline.', to: '/white-label-jeans-manufacturer', cta: 'Explore White Label' },
  { t: 'Own Manufacturing', inv: 'Large investment', d: 'Factory setup, machinery and production — take consultation and training first before this step.', to: '/jeans-business-consulting', cta: 'Get Consultation' },
];

const faqs = [
  { q: 'How can I start a jeans business with low investment?', a: 'The easiest way is ready stock trading — buy jeans from us at wholesale rates and sell them in your area. No factory or large stock needed. Once you understand the market, start your own brand through white labeling.' },
  { q: 'How much investment does a jeans business need?', a: 'Ready stock trading can begin with a small stock. A white label brand needs the production cost of the 50-piece MOQ. Setting up your own manufacturing requires a large investment in machinery and setup. For exact figures, book a consultation call.' },
  { q: 'Is a jeans business possible without experience?', a: 'Yes. Many of our clients started with zero experience. The right guidance, the right supplier and a small start — with these 3 things, experience builds along the way.' },
  { q: 'What is included in the startup checklist?', a: 'Business model selection, investment planning, license/GST basics, a sourcing contacts framework, a costing template and a 90-day action plan — all in one place.' },
];

export default function StartupGuide() {
  return (
    <>
      <Seo
        title="How To Start A Jeans Business | Low Investment Garment Startup Guide — Venzaroblue"
        description="How to start a jeans business with low investment? Raw material sourcing, budgeting and B2B sales — the complete garment startup guide. Get the free startup checklist on WhatsApp."
        path="/jeans-business-startup-guide"
      />
      <PageHero
        eyebrow="Garments Startup Guide"
        title={<>How To Start A <span className="text-stitch">Jeans Business</span> With Low Investment?</>}
        subtitle="Everything you need is here — raw material, budgeting and sales. Choose the right path, without guesswork."
        ctaLabel="Download Startup Checklist"
        waMessage="Hi Venzaroblue! I want the jeans business startup checklist."
        image={heroImg}
        imageAlt="Jeans startup business guide India"
      />

      {/* FEATURES */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-12">
            What Will You Learn In This Guide?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.t} className="bg-white rounded-2xl border border-gray-200 p-6 stitch-b">
                <div className="w-12 h-12 rounded-xl bg-wash flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-denim" />
                </div>
                <h3 className="font-heading font-bold text-indigo-ink mb-2">{f.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 PATHS */}
      <section className="bg-wash py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-4">
            3 Paths Based On Your Budget
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            No two startups are alike — choose the right model for your
            investment capacity.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {paths.map((p) => (
              <div key={p.t} className="bg-white rounded-2xl border border-gray-200 p-7 flex flex-col">
                <p className="text-[11px] font-bold uppercase tracking-wider text-selvedge mb-2">{p.inv}</p>
                <h3 className="font-heading font-bold text-xl text-indigo-ink mb-3">{p.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">{p.d}</p>
                <Link to={p.to} className="mt-5 inline-flex items-center gap-1.5 font-semibold text-denim hover:gap-2.5 transition-all text-sm">
                  {p.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5 text-gray-700 leading-relaxed">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-indigo-ink">
            A New Garment Business — The Right Start Is Half The Battle
          </h2>
          <p>
            Demand for jeans in India is growing every year — wholesale demand
            for branded jeans is rising fastest in tier-2 and tier-3 cities.
            But new entrepreneurs usually make two mistakes: they either invest
            all their money at once, or buy stock without understanding
            costing.
          </p>
          <p>
            Our advice is always the same — start small, learn fast. First
            understand the market with ready stock, then build your brand with
            white labeling, and move into manufacturing once you have volume.
            Venzaroblue is your partner at all three stages, so you never have
            to search for a new supplier as you grow.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-wash py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl text-indigo-ink text-center mb-10">
            Startup FAQs
          </h2>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-denim text-white py-16 text-center px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-balance">
          Get Your Free Startup Checklist
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto mb-8">
          Send "CHECKLIST" on WhatsApp — we'll share the startup checklist and
          your next steps.
        </p>
        <a
          href={wa('CHECKLIST - I want the jeans business startup checklist.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-wa text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:brightness-95 transition"
        >
          <MessageCircle className="w-6 h-6" /> Download Startup Checklist
        </a>
      </section>
    </>
  );
}
