import { MessageCircle, Award, Wrench, Users2 } from 'lucide-react';
import Seo from '../components/Seo';
import PageHero from '../components/PageHero';
import Accordion from '../components/Accordion';
import { wa } from '../site';
import heroImg from '../assets/images/straight_fit_jeans_1782917895472.webp';

const syllabus = [
  { q: 'Module 1 — Fabric Selection', a: 'Types of denim (stretch, non-stretch, knitted), understanding GSM, shrinkage testing, quality checks and the practical way to source from wholesale fabric markets.' },
  { q: 'Module 2 — Denim Pattern Cutting', a: 'Size charts, pattern making, marker planning and cutting while saving fabric — hands-on practice of the industrial cutting process.' },
  { q: 'Module 3 — Stitching Techniques', a: 'Overlock, flat-lock, chain stitch — the industrial stitching process for every seam of a pair of jeans. Practical training from machine handling to finishing.' },
  { q: 'Module 4 — Industrial Washing Methods', a: 'Stone wash, enzyme wash, acid wash, vintage effects — the complete washing plant process, shade matching and how to work with washing units.' },
];

const forWhom = [
  { icon: Users2, t: 'Job Seekers', d: 'Learn a skilled trade in the garment industry and land a well-paying job.' },
  { icon: Wrench, t: 'Business Starters', d: 'Understand the work yourself before starting your own manufacturing — nobody will be able to fool you.' },
  { icon: Award, t: 'Tailors & Artisans', d: 'Upgrade your skills to industrial level and increase your earnings.' },
];

const faqs = [
  { q: 'I know nothing about jeans making — can I still take the training?', a: 'Yes, we have special training modules for beginners where we teach cutting, stitching and washing from basic to advanced, in a fully practical way.' },
  { q: 'Is the training online or offline?', a: 'The practical training happens at our Ahmedabad facility, because machine work and washing must be learned hands-on. Some theory sessions can also be conducted online.' },
  { q: 'What are the training duration and fees?', a: 'Duration varies by batch and module. Message us on WhatsApp for the current batch, fees and seat availability.' },
  { q: 'Will I get help with work or business after the training?', a: 'Yes. After completing the training, you can take our consultation to start your own setup, or launch your own brand through the white label model.' },
];

export default function Training() {
  return (
    <>
      <Seo
        title="Jeans Manufacturing Training Ahmedabad | Denim Making Course — Pattern Cutting to Washing"
        description="Learn jeans manufacturing — fabric selection, denim pattern cutting, stitching techniques and industrial washing methods. Practical hands-on training in Ahmedabad. Join the next batch."
        path="/jeans-manufacturing-training"
      />
      <PageHero
        eyebrow="Practical Training Program"
        title={<>Learn Jeans Manufacturing — <span className="text-stitch">From Pattern Cutting To Washing</span></>}
        subtitle="Hands-on training in a real factory environment. No theory-only classes — learn the work that actually runs in the industry."
        ctaLabel="Join Next Batch"
        waMessage="Hi Venzaroblue! I want to join the next batch of jeans manufacturing training."
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
            Every module is practical — you learn by working on the machines yourself.
          </p>
          <Accordion items={syllabus} />
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="bg-wash py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-indigo-ink text-center mb-12">
            Who Is This Training For?
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
            Jeans Making Course — A Skill That Never Goes To Waste
          </h2>
          <p>
            The denim industry is one of India's largest garment sectors, and
            Ahmedabad is a major hub. Skilled pattern cutters, stitching
            operators and washing technicians are always in demand — and for
            anyone planning their own business, this knowledge is gold.
          </p>
          <p>
            The biggest difference in our training is that it happens inside a
            running factory. You learn with real orders, on real machines,
            through the real production process — watching and working through
            the entire cycle, from fabric arriving to washed jeans being
            packed.
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
          Book Your Seat In The Next Batch
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto mb-8">
          Seats are limited — message us now for batch details and fees.
        </p>
        <a
          href={wa('Hi Venzaroblue! I want details of the next jeans manufacturing training batch.')}
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
