import { MessageCircle, Phone } from 'lucide-react';
import { PHONE, wa } from '../site';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  ctaLabel: string;
  waMessage: string;
  image?: string;
  imageAlt?: string;
}

// Shared hero for inner pages: dark indigo backdrop, bold headline,
// one big centered CTA (thumb-reach zone on mobile).
export default function PageHero({
  eyebrow, title, subtitle, ctaLabel, waMessage, image, imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative bg-indigo-ink text-white overflow-hidden">
      {image && (
        <img
          src={image}
          alt={imageAlt || ''}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="eager"
          fetchPriority="high"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-ink/60 via-indigo-ink/40 to-indigo-ink" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-32 pb-16 sm:pt-40 sm:pb-24 text-center">
        <p className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-stitch mb-4">
          {eyebrow}
        </p>
        <h1 className="font-heading font-bold text-3xl sm:text-5xl leading-tight text-balance mb-5">
          {title}
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 text-balance">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={wa(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-wa text-white px-8 py-4 rounded-2xl font-bold text-lg hover:brightness-95 transition shadow-lg"
          >
            <MessageCircle className="w-6 h-6" /> {ctaLabel}
          </a>
          <a
            href={`tel:${PHONE}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition"
          >
            <Phone className="w-5 h-5" /> Call Us
          </a>
        </div>
      </div>
      <div className="selvedge relative" aria-hidden="true" />
    </section>
  );
}
