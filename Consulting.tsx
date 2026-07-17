import { CheckCircle2, FileSpreadsheet, Search, Droplets, Percent, MessageCircle } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Accordion from '../components/Accordion';
import { wa } from '../site';
import heroImg from '../assets/images/b2b_partnership_1782919155102.webp';

const audience = [
  'Naye startups jo jeans / garment business shuru karna chahte hain',
  'Kapda vyapari (traders) jo ab manufacturing mein aana chahte hain',
  'Jinhe jeans ki costing, fabric ya washing process samajh nahi aa rahi',
  'Online sellers jo apna khud ka production shuru karna chahte hain',
  'Jo business chal raha hai lekin margin nahi nikal raha',
];

const deliverables = [
  { icon: FileSpreadsheet, t: 'Costing Sheet Template', d: 'Fabric se final piece tak — har cost item ka ready template, jisse aapko pata chalega ki ek jeans par asli kharcha kitna hai.' },
  { icon: Search, t: 'Fabric Sourcing Guide', d: 'Sahi denim fabric kahan se, kis rate par aur kis quality mein kharidna hai — practical sourcing knowledge.' },
  { icon: Droplets, t: 'Washing Process Knowledge', d: 'Stone wash, acid wash, vintage wash — kaunsi washing kab use hoti hai aur reliable washers kaise dhundein.' },
  { icon: Percent, t: 'Profit Margin Calculation', d: 'Wholesale aur retail dono ke liye sahi pricing strategy, taaki har order par healthy margin bane.' },
];

const faqs = [
  { q: 'Consultation call ki fees kya hai aur isme kya milega?', a: 'Hamari consultation call mein aapko fabric sourcing, correct costing, reliable washers dhundhna aur marketing strategy sikhayi jayegi. Fees aur booking ki details ke liye WhatsApp par message karein.' },
  { q: 'Kya consultation online hogi ya Ahmedabad aana padega?', a: 'Dono option available hain. 1-on-1 call video/phone par hoti hai. Agar aap Ahmedabad aakar factory visit ke saath consultation lena chahein, toh woh bhi possible hai.' },
  { q: 'Mujhe business ka bilkul experience nahi hai — kya yeh mere liye hai?', a: 'Haan, zero experience waale logo ke liye hi yeh sabse zyada useful hai. Hum basics se shuru karte hain — investment planning, sourcing, production aur selling tak sab step-by-step samjhaate hain.' },
  { q: 'Kya consultation ke baad aap manufacturing bhi kar denge?', a: 'Bilkul. Consultation ke baad agar aap chahein toh hamari factory mein hi white label production shuru kar sakte hain — planning se production tak ek hi jagah.' },
];

export default function Consulting() {
  return (
    <>
      <Seo
        title="Jeans Business Consulting India | Manufacturing Consultant Ahmedabad — Venzaroblue"
        description="Jeans business mein nuksan se bachein. Expert 1-on-1 consultation: costing sheet, fabric sourcing, washing process, profit margin calculation. Naye startups aur traders ke liye."
        path="/jeans-business-consulting"
      />
      <PageHero
        eyebrow="Jeans Business Consultation"
        title={<>Jeans Business Mein <span className="text-stitch">Nuksan Se Bachein</span> — Expert Se Lein Right Consultation</>}
        subtitle="Galat fabric, galat costing aur galat washer — yahi 3 galtiyan naye business ko duba deti hain. Industry experience se seekhein, mehengi galtiyon se bachein."
        ctaLabel="Book 1-on-1 Call"
        waMessage="Hi Venzaroblue! Mujhe jeans business consultation call book karni hai."
        image={heroImg}
        imageAlt="Jeans business consulting session"
      />

      {/* WHO IS THIS FOR */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-10">
            Yeh Consultation Kiske Liye Hai?
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
            Consultation Mein Kya Milega?
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
            Jeans Manufacturing Consultant Kyun Zaroori Hai?
          </h2>
          <p>
            Jeans business dikhta simple hai, lekin isme fabric GSM, shrinkage,
            washing shades, size ratio aur costing — har jagah paisa doobne ka
            risk hota hai. Zyada tar naye log pehle 6 mahine mein hi galat
            fabric aur galat costing ki wajah se nuksan utha lete hain.
          </p>
          <p>
            Venzaroblue ki consultation aapko woh practical knowledge deti hai
            jo sirf factory floor par milti hai — kitaabon ya YouTube par nahi.
            Hum khud Ahmedabad mein jeans manufacture karte hain, isliye jo
            bhi guidance milti hai woh real production experience se aati hai.
          </p>
          <p>
            Consultation ke baad aap confidently decide kar payenge ki aapko
            ready stock trading karni hai, white label se brand banana hai, ya
            khud ki manufacturing setup karni hai — aur har raste ki sahi
            costing aapke paas hogi.
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
          Ek Call Aapke Lakhon Bacha Sakti Hai
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto mb-8">
          Slot limited hote hain — abhi WhatsApp par apni call book karein.
        </p>
        <a
          href={wa('Hi Venzaroblue! Mujhe 1-on-1 jeans business consultation book karni hai.')}
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
