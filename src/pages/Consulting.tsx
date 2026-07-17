import { CheckCircle2, FileSpreadsheet, Search, Droplets, Percent, MessageCircle } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Accordion from '../components/Accordion';
import { wa } from '../site';
import heroImg from '../assets/images/b2b_partnership_1782919155102.webp';

const audience = [
  'New startups planning to enter the jeans / garment business',
  'Fabric traders who want to move into manufacturing',
  'Anyone struggling to understand jeans costing, fabric or washing',
  'Online sellers who want to start their own production',
  'Businesses that are running but not making healthy margins',
];

const deliverables = [
  { icon: FileSpreadsheet, t: 'Costing Sheet Template', d: 'A ready template covering every cost item from fabric to finished piece — so you know exactly what one pair of jeans really costs.' },
  { icon: Search, t: 'Fabric Sourcing Guide', d: 'Where to buy the right denim fabric, at what rate and in what quality — practical sourcing knowledge.' },
  { icon: Droplets, t: 'Washing Process Knowledge', d: 'Stone wash, acid wash, vintage wash — which washing to use when, and how to find reliable washing units.' },
  { icon: Percent, t: 'Profit Margin Calculation', d: 'The right pricing strategy for both wholesale and retail, so every order earns a healthy margin.' },
];

const faqs = [
  { q: 'What is the consultation fee and what do I get?', a: 'In our consultation call you learn fabric sourcing, correct costing, how to find reliable washing units, and marketing strategy. Message us on WhatsApp for fees and booking details.' },
  { q: 'Is the consultation online, or do I need to visit Ahmedabad?', a: 'Both options are available. The 1-on-1 call happens over video/phone. If you prefer, you can also visit Ahmedabad for a consultation along with a factory visit.' },
  { q: 'I have zero business experience — is this for me?', a: 'Yes, this is most useful for people with zero experience. We start from the basics — investment planning, sourcing, production and selling, all explained step by step.' },
  { q: 'Can you also handle manufacturing after the consultation?', a: 'Absolutely. After the consultation, if you wish, you can start white label production in our own factory — planning to production, all in one place.' },
];

export default function Consulting() {
  return (
    <>
      <Seo
        title="Jeans Business Consulting India | Manufacturing Consultant Ahmedabad — Venzaroblue"
        description="Avoid losses in the jeans business. Expert 1-on-1 consultation: costing sheet, fabric sourcing, washing process, profit margin calculation. For new startups and traders."
        path="/jeans-business-consulting"
      />
      <PageHero
        eyebrow="Jeans Business Consultation"
        title={<>Avoid Losses In The Jeans Business — <span className="text-stitch">Get The Right Consultation</span> From Experts</>}
        subtitle="Wrong fabric, wrong costing and the wrong washing unit — these 3 mistakes sink most new businesses. Learn from industry experience and avoid expensive mistakes."
        ctaLabel="Book 1-on-1 Call"
        waMessage="Hi Venzaroblue! I want to book a jeans business consultation call."
        image={heroImg}
        imageAlt="Jeans business consulting session"
      />

      {/* WHO IS THIS FOR */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-10">
            Who Is This Consultation For?
          </h2>
          <ul className="space-y-4">
            {audience.map((a) => (
              <li key={a} className="flex items-start gap-3 bg-white rounded-xl border border-gray-200 p-4">
                <CheckCircle2 className="w-5 h-5 text-denim mt-0.5 shrink-0" />
                <span className="text-gray-700 text-[15px]">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-wash py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-12">
            What Will You Get?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {deliverables.map((d) => (
              <div key={d.t} className="bg-white rounded-2xl border border-gray-200 p-6 stitch-b">
                <div className="w-12 h-12 rounded-xl bg-wash flex items-center justify-center mb-4">
                  <d.icon className="w-6 h-6 text-denim" />
                </div>
                <h3 className="font-heading font-bold text-indigo-ink mb-2">{d.t}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5 text-gray-700 leading-relaxed">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-indigo-ink">
            Why Do You Need A Jeans Manufacturing Consultant?
          </h2>
          <p>
            The jeans business looks simple, but there is money at risk
            everywhere — fabric GSM, shrinkage, washing shades, size ratios and
            costing. Most newcomers suffer losses within their first 6 months
            purely because of wrong fabric choices and wrong costing.
          </p>
          <p>
            Venzaroblue's consultation gives you practical knowledge that you
            only get on a factory floor — not from books or YouTube. We
            manufacture jeans in Ahmedabad ourselves, so every piece of
            guidance comes from real production experience.
          </p>
          <p>
            After the consultation, you will be able to confidently decide
            whether to trade in ready stock, build a brand through white
            labeling, or set up your own manufacturing — with accurate costing
            for each path in your hands.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-wash py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl text-indigo-ink text-center mb-10">
            Consultation FAQs
          </h2>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-denim text-white py-16 text-center px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-balance">
          One Call Can Save You Lakhs
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto mb-8">
          Slots are limited — book your call on WhatsApp now.
        </p>
        <a
          href={wa('Hi Venzaroblue! I want to book a 1-on-1 jeans business consultation.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-wa text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:brightness-95 transition"
        >
          <MessageCircle className="w-6 h-6" /> Book 1-on-1 Call
        </a>
      </section>
    </>
  );
}
