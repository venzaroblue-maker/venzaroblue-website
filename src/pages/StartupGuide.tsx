import { ShoppingBag, Wallet, TrendingUp, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Accordion from '../components/Accordion';
import { wa } from '../site';
import heroImg from '../assets/images/jeans_stack_about_1782918027139.webp';

const features = [
  { icon: ShoppingBag, t: 'Raw Material Kahan Se Lein', d: 'Denim fabric ke sahi wholesale markets, rate range aur quality check karne ka tarika — taaki koi aapko mehenga maal na bech de.' },
  { icon: Wallet, t: 'Budgeting Kaise Karein', d: 'Kitne investment mein kya possible hai — trading, white label ya manufacturing. Har model ka realistic budget breakdown.' },
  { icon: TrendingUp, t: 'B2B Sales Kaise Badhayein', d: 'Retailers, wholesalers aur online marketplaces tak pahunchne ki practical strategy — pehla order kaise laayein.' },
];

const paths = [
  { t: 'Ready Stock Trading', inv: 'Sabse kam investment', d: 'Hamse wholesale rate par ready jeans lein aur apne area mein retailers ko bechein. Aaj shuru, aaj se hi selling.', to: '/ready-stock-jeans', cta: 'Ready Stock Dekhein' },
  { t: 'White Label Brand', inv: 'Medium investment', d: 'Apne brand name se jeans banwayein (MOQ 50 pcs) aur online ya offline apni brand value banayein.', to: '/white-label-jeans-manufacturer', cta: 'White Label Jaanein' },
  { t: 'Khud Ki Manufacturing', inv: 'Bada investment', d: 'Factory setup, machinery aur production — iske liye pehle consultation aur training zaroor lein.', to: '/jeans-business-consulting', cta: 'Consultation Lein' },
];

const faqs = [
  { q: 'Kam investment mein jeans ka business kaise shuru karein?', a: 'Sabse aasan tarika hai ready stock trading — hamse wholesale rate par jeans lekar apne area mein bechein. Isme na factory chahiye na bada stock. Jab market samajh aa jaye, tab white label se apna brand shuru karein.' },
  { q: 'Jeans business shuru karne mein kitna investment lagta hai?', a: 'Ready stock trading chhote stock se shuru ho sakti hai. White label brand ke liye MOQ 50 pieces ka production cost lagta hai. Khud ki manufacturing mein machinery aur setup ka bada investment hota hai. Exact figures ke liye consultation call karein.' },
  { q: 'Kya bina experience ke jeans business possible hai?', a: 'Haan. Hamare kai clients ne zero experience se shuru kiya. Sahi guidance, sahi supplier aur chhoti shuruaat — yeh 3 cheezein ho toh experience raste mein ban jaata hai.' },
  { q: 'Startup checklist mein kya milega?', a: 'Business model selection, investment planning, licenses/GST basics, sourcing contacts ka framework, costing template aur pehle 90 din ka action plan — sab ek jagah.' },
];

export default function StartupGuide() {
  return (
    <>
      <Seo
        title="Jeans Business Kaise Shuru Karein | Kam Investment Garment Startup Guide — Venzaroblue"
        description="Kam investment mein jeans ka business kaise shuru karein? Raw material sourcing, budgeting aur B2B sales — complete garment startup guide. Free startup checklist WhatsApp par paayein."
        path="/jeans-business-startup-guide"
      />
      <PageHero
        eyebrow="Garments Startup Guide"
        title={<>Kam Investment Mein <span className="text-stitch">Jeans Ka Business</span> Kaise Shuru Karein?</>}
        subtitle="Poori jankari yahan hai — raw material, budgeting aur sales tak. Bina guesswork ke, sahi raasta chunein."
        ctaLabel="Download Startup Checklist"
        waMessage="Hi Venzaroblue! Mujhe jeans business startup checklist chahiye."
        image={heroImg}
        imageAlt="Jeans startup business guide India"
      />

      {/* FEATURES */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-12">
            Guide Mein Kya-Kya Seekhenge?
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
            Aapke Budget Ke Hisaab Se 3 Raste
          </h2>
          <p className="text-gray-600 text-center max-w-xl mx-auto mb-12">
            Har startup ek jaisa nahi hota — apni investment capacity ke hisaab
            se sahi model chunein.
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
            Naya Garment Business — Sahi Shuruaat Hi Aadhi Jeet Hai
          </h2>
          <p>
            India mein jeans ki demand har saal badh rahi hai — tier-2 aur
            tier-3 cities mein branded jeans ki wholesale demand sabse tez hai.
            Lekin naye entrepreneurs aksar do galtiyan karte hain: ya toh poora
            paisa ek saath laga dete hain, ya bina costing samjhe maal khareed
            lete hain.
          </p>
          <p>
            Hamara suggestion hamesha yahi hota hai — chhota shuru karein, tezi
            se seekhein. Pehle ready stock se market samjhein, phir white label
            se apna brand banayein, aur jab volume aa jaye tab manufacturing
            mein utrein. Venzaroblue teeno stages par aapka partner hai, isliye
            aapko har stage par naya supplier dhundhne ki zaroorat nahi padti.
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
          Free Startup Checklist Paayein
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto mb-8">
          WhatsApp par "CHECKLIST" likh kar bhejein — hum aapko startup
          checklist aur agla step bata denge.
        </p>
        <a
          href={wa('CHECKLIST - Mujhe jeans business startup checklist chahiye.')}
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
