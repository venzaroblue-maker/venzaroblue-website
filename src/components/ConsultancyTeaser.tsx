import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Scissors, Factory, Tags, TrendingUp } from 'lucide-react';
import partnershipImg from '../assets/images/b2b_partnership_1782919155102.webp';

const highlights = [
  { icon: Scissors, title: "Fabric Sourcing", desc: "Right fabric, right price, trusted suppliers." },
  { icon: Factory, title: "Manufacturing Setup", desc: "Sampling, job work, washing & quality control." },
  { icon: Tags, title: "Branding & Packaging", desc: "Labels, tags, packaging — a premium brand identity." },
  { icon: TrendingUp, title: "Costing & Profit Strategy", desc: "Accurate pricing that maximizes your margins." },
];

const CONSULTANCY_WA = "https://wa.me/916350566157?text=" + encodeURIComponent("Hi Venzaroblue, I want to know more about your Garment Business Consultancy.");

export default function ConsultancyTeaser() {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/30 mb-6 font-medium text-sm">
              Beyond Wholesale
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Want to Launch Your Own <span className="text-brand-accent">Clothing Brand?</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              We don't just supply jeans — we help you build a garment business from scratch.
              Get complete, transparent consultancy from people who run a manufacturing unit every single day.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-brand-accent">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/consultancy"
                className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-amber-500 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors"
              >
                Explore Consultancy <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={CONSULTANCY_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                Free Consultation
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={partnershipImg}
                alt="Garment business consultancy — Venzaroblue"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 rounded-2xl shadow-xl p-6 hidden md:block">
              <p className="text-3xl font-heading font-bold text-brand-blue">End-to-End</p>
              <p className="text-sm text-gray-600">Idea → Fabric → Production → Brand</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
