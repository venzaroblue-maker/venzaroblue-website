import { Phone, MessageCircle } from 'lucide-react';
import { PHONE, wa } from '../site';

// Mobile: sticky bottom bar with two big thumb-friendly buttons (Call + WhatsApp).
// Desktop: floating WhatsApp button bottom-right.
export default function FloatingButtons() {
  const link = wa('Hi Venzaroblue! I have an enquiry about your jeans.');

  return (
    <>
      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 lg:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.12)]">
        <a
          href={`tel:${PHONE}`}
          className="flex items-center justify-center gap-2 bg-denim text-white py-4 font-semibold text-base active:bg-indigo-ink"
        >
          <Phone className="w-5 h-5" /> Call Now
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-wa text-white py-4 font-semibold text-base active:brightness-90"
        >
          <MessageCircle className="w-5 h-5" /> WhatsApp
        </a>
      </div>

      {/* Desktop float */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-wa text-white pl-4 pr-5 py-3.5 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform"
      >
        <MessageCircle className="w-6 h-6" /> WhatsApp
      </a>
    </>
  );
}
