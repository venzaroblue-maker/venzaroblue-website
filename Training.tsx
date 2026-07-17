import { MessageCircle, Award, Wrench, Users2 } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Accordion from '../components/Accordion';
import { wa } from '../site';
import heroImg from '../assets/images/straight_fit_jeans_1782917895472.webp';

const syllabus = [
  { q: 'Module 1 — Fabric Selection', a: 'Denim ke types (stretch, non-stretch, knitted), GSM samajhna, shrinkage test, quality check aur wholesale fabric market se sourcing ka practical tarika.' },
  { q: 'Module 2 — Denim Pattern Cutting', a: 'Size charts, pattern making, marker planning aur fabric ki bachat karte hue cutting — industrial cutting process ka hands-on practice.' },
  { q: 'Module 3 — Stitching Techniques', a: 'Overlock, flat-lock, chain stitch — jeans ki har seam ka industrial stitching process. Machine handling se lekar finishing tak practical training.' },
  { q: 'Module 4 — Industrial Washing Methods', a: 'Stone wash, enzyme wash, acid wash, vintage effects — washing plant ka poora process, shade matching aur washer se kaam karwane ki knowledge.' },
];

const forWhom = [
  { icon: Users2, t: 'Job Seekers', d: 'Garment industry mein skilled kaam seekh kar achhi kamai waali job paayein.' },
  { icon: Wrench, t: 'Business Starters', d: 'Apni manufacturing shuru karne se pehle kaam khud samajh lein — koi aapko bewakoof nahi bana payega.' },
  { icon: Award, t: 'Tailors & Karigars', d: 'Apni skill ko industrial level par upgrade karein aur zyada kamai karein.' },
];

const faqs = [
  { q: 'Mujhe jeans ka kaam bilkul nahi aata, kya main training le sakta hoon?', a: 'Haan, hamare paas beginners ke liye special training modules hain jisme hum cutting, stitching aur washing ki basic to advanced knowledge practical tarike se sikhate hain.' },
  { q: 'Training kahan hoti hai — online ya offline?', a: 'Practical training hamari Ahmedabad facility mein hoti hai, kyunki machine aur washing ka kaam haath se seekhna zaroori hai. Kuch theory sessions online bhi ho sakte hain.' },
  { q: 'Training ki duration aur fees kya hai?', a: 'Batch aur module ke hisaab se duration alag hoti hai. Current batch, fees aur seat availability ke liye WhatsApp par message karein.' },
  { q: 'Kya training ke baad kaam ya business mein help milti hai?', a: 'Haan. Training complete hone ke baad aap chahein toh hamari consultation le kar apna setup shuru kar sakte hain, ya white label model se apna brand launch kar sakte hain.' },
];

export default function Training() {
  return (
    <>
      <Seo
        title="Jeans Manufacturing Training Ahmedabad | Denim Making Course — Pattern Cutting to Washing"
        description="Jeans banane ka kaam seekhein — fabric selection, denim pattern cutting, stitching techniques aur industrial washing methods. Practical hands-on training Ahmedabad mein. Join next batch."
        path="/jeans-manufacturing-training"
      />
      <PageHero
        eyebrow="Practical Training Program"
        title={<>Jeans Banane Ka Kaam Seekhein — <span className="text-stitch">Pattern Cutting Se Washing Tak</span></>}
        subtitle="Real factory environment mein hands-on training. Theory nahi, woh kaam seekhein jo industry mein actually chalta hai."
        ctaLabel="Join Next Batch"
        waMessage="Hi Venzaroblue! Mujhe jeans manufacturing training ke next batch mein join karna hai."
        image={heroImg}
        imageAlt="Jeans manufacturing training Ahmedabad"
      />

      {/* SYLLABUS ACCORDION */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-4">
            Course Syllabus
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Har module practical hai — aap khud machine par kaam karke seekhenge.
          </p>
          <Accordion items={syllabus} />
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="bg-wash py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-12">
            Yeh Training Kiske Liye Hai?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {forWhom.map((f) => (
              <div key={f.t} className="bg-white rounded-2xl border border-gray-200 p-6 text-center stitch-b">
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

      {/* SEO CONTENT */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5 text-gray-700 leading-relaxed">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-indigo-ink">
            Jeans Making Course — Skill Jo Kabhi Bekar Nahi Jaati
          </h2>
          <p>
            Denim industry India ke sabse bade garment sectors mein se ek hai,
            aur Ahmedabad iska major hub hai. Skilled pattern cutters, stitching
            operators aur washing technicians ki demand hamesha bani rehti hai —
            aur khud ka business karne waalon ke liye toh yeh knowledge sona
            hai.
          </p>
          <p>
            Hamari training ka sabse bada fark yeh hai ki yeh chalti hui
            factory ke andar hoti hai. Aap real orders ke saath, real machines
            par, real production process seekhte hain — fabric aane se lekar
            washed jeans pack hone tak ka poora cycle apni aankhon se dekhte
            aur haathon se karte hain.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-wash py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl text-indigo-ink text-center mb-10">
            Training FAQs
          </h2>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-denim text-white py-16 text-center px-4">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-balance">
          Next Batch Mein Seat Book Karein
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto mb-8">
          Seats limited hoti hain — batch details aur fees ke liye abhi message karein.
        </p>
        <a
          href={wa('Hi Venzaroblue! Jeans manufacturing training ke next batch ki details chahiye.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-wa text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:brightness-95 transition"
        >
          <MessageCircle className="w-6 h-6" /> Join Next Batch
        </a>
      </section>
    </>
  );
}
