import { Tag, Layers, Truck, BadgeCheck, MessageCircle } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Accordion from '../components/Accordion';
import { wa } from '../site';
import heroImg from '../assets/images/stretch_denim_jeans_1782917924440.webp';

const capabilities = [
  { icon: BadgeCheck, t: 'Low MOQ', d: '50 pieces per design se apna brand shuru karein — bade order ka pressure nahi.' },
  { icon: Layers, t: 'Premium Denim Fabric', d: 'Stretch, non-stretch, vintage wash — quality fabric jo aapke brand ki pehchaan banega.' },
  { icon: Tag, t: 'Custom Tags & Labels', d: 'Aapke brand ke tags, buttons, patches aur packaging — sab kuch aapke naam se.' },
  { icon: Truck, t: 'On-Time Delivery', d: '15–30 din mein production complete, pan-India delivery aapke godown tak.' },
];

const steps = [
  { n: '01', t: 'Design / Sample Choose Karein', d: 'Hamare ready designs mein se select karein ya apna design bhejein. Hum paid sample banakar dikhate hain — approval ke baad hi production shuru hota hai.' },
  { n: '02', t: 'Brand Tag Lagwayein', d: 'Aapke brand ka naam, logo, tags, buttons aur packaging — poori jeans aapke brand ki identity ke saath taiyar hoti hai.' },
  { n: '03', t: 'Delivery Lein', d: 'Quality check ke baad order pack hokar aapke address par pahunchta hai. Aap seedha bechna shuru kar sakte hain.' },
];

const faqs = [
  { q: 'White labeling ka matlab kya hai?', a: 'White labeling mein jeans hamari factory mein banti hai, lekin us par brand naam aapka lagta hai. Aapko factory, machine ya karigar ki zaroorat nahi — sirf apna brand aur market chahiye.' },
  { q: 'Kya main apne brand name ke saath jeans banwa sakta hoon?', a: 'Haan, hum poori tarah se white-labeling services dete hain. Aapke design aur aapke brand ke tags/buttons ke saath jeans ready karke di jayegi.' },
  { q: 'Minimum order quantity (MOQ) kitni hai?', a: 'Naye brands aur startups ki madad ke liye hamara MOQ bohot low hai — 50 pieces per design se aap shuru kar sakte hain.' },
  { q: 'Kya aap sample banakar dete hain bulk order se pehle?', a: 'Bilkul. Bulk production shuru hone se pehle hum aapko ek paid sample banakar dikhate hain. Aapki approval ke baad hi factory mein kaam shuru hota hai.' },
  { q: 'Ek order taiyar hone mein kitna time lagta hai?', a: 'Order ki quantity aur design ki complexity ke hisaab se standard time 15 se 30 din ka hota hai.' },
  { q: 'Kya aap pan-India delivery karte hain?', a: 'Haan, hamari logistics poore India mein active hai. Aapka maal surakshit aapke godown tak pahunchaya jayega.' },
];

export default function WhiteLabel() {
  return (
    <>
      <Seo
        title="White Label Jeans Manufacturer India | Private Label Denim — Venzaroblue Ahmedabad"
        description="Apna jeans brand launch karein bina factory ke. White label & private label jeans manufacturing Ahmedabad se — low MOQ 50 pcs, custom tags & labels, premium denim, pan-India delivery."
        path="/white-label-jeans-manufacturer"
      />
      <PageHero
        eyebrow="White Label & Private Label Manufacturing"
        title={<>Apna Jeans Brand Launch Karein — <span className="text-stitch">Hum Karenge Manufacturing</span></>}
        subtitle="Bina factory lagaye apna brand shuru karein. Aapka design, aapke tags, aapki packaging — production hamari zimmedari."
        ctaLabel="Get Free Quote"
        waMessage="Hi Venzaroblue! Mujhe white label jeans manufacturing ke liye quote chahiye. Mera brand plan: "
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
            Sirf 3 Steps Mein Aapka Brand Ready
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Process bilkul simple hai — design se delivery tak hum saath hain.
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
            White Label Jeans Manufacturing — Bina Factory Ke Apna Brand
          </h2>
          <p>
            Aaj India mein sabse tezi se badhne waala tarika hai white label ya
            private label jeans manufacturing. Aapko factory, machinery ya
            karigar ki zaroorat nahi — aap sirf apne brand aur sales par focus
            karein, production Venzaroblue ki Ahmedabad factory sambhalti hai.
          </p>
          <p>
            Hum har fit mein manufacturing karte hain — slim fit, regular fit,
            straight fit, baggy fit aur vintage wash denim. Fabric selection se
            lekar industrial washing, stitching, aapke brand ke tags, woven
            labels, leather patches, buttons aur final packaging tak — har step
            quality check ke saath hota hai.
          </p>
          <p>
            Instagram sellers, D2C brands, retail store owners aur online
            marketplace sellers (Amazon, Flipkart, Meesho) ke liye yeh sabse
            kam-risk model hai: MOQ sirf 50 pieces se shuru, isliye aap chhote
            batch se market test kar sakte hain aur demand ke hisaab se scale
            kar sakte hain.
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
          Apne Brand Ki Shuruaat Aaj Karein
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto mb-8">
          Free quote ke liye WhatsApp karein — MOQ, pricing aur sample ki poori
          details milengi.
        </p>
        <a
          href={wa('Hi Venzaroblue! White label jeans ke liye free quote chahiye.')}
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
