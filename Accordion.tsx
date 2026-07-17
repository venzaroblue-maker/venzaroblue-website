import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  q: string;
  a: string;
}

// Mobile-friendly collapsible list. Only the tapped item opens — page stays clutter-free.
export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white overflow-hidden">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-indigo-ink text-[15px] leading-snug">
                {item.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-denim transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <p className="px-5 pb-5 text-[15px] leading-relaxed text-gray-600">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
