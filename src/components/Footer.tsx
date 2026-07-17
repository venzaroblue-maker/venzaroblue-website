import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { EMAIL, PHONE, PHONE_DISPLAY, PHONE_2_DISPLAY, NAV } from '../site';

export default function Footer() {
  return (
    <footer className="bg-indigo-ink text-gray-300">
      <div className="selvedge" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-heading font-bold text-2xl text-white mb-3">
            VENZARO<span className="text-stitch">BLUE</span>
          </p>
          <p className="text-sm leading-relaxed text-gray-400">
            Your B2B denim partner in Ahmedabad — ready stock jeans, white
            label manufacturing, business consulting and practical training.
            From ready stock to launching your own brand, every solution in
            one place.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="font-semibold text-white mb-4">Our Solutions</p>
          <ul className="space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-white transition-colors">
                  {n.label === 'Ready Stock' ? 'Ready Stock Jeans (Wholesale)' :
                   n.label === 'White Label' ? 'White Label Jeans Manufacturing' :
                   n.label === 'Consulting' ? 'Jeans Business Consulting' :
                   n.label === 'Startup Guide' ? 'Garment Startup Guide' :
                   n.label === 'Training' ? 'Jeans Manufacturing Training' : n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm space-y-3">
          <p className="font-semibold text-white mb-4">Contact</p>
          <p className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-stitch" />
            D-704 Pushkar Elegance, Narol Vatva Road, Ishanpur, Ahmedabad, Gujarat
          </p>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4 shrink-0 text-stitch" />
            <a href={`tel:${PHONE}`} className="hover:text-white">{PHONE_DISPLAY}</a>
            <span className="text-gray-500">/</span>
            <span>{PHONE_2_DISPLAY}</span>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-4 h-4 shrink-0 text-stitch" />
            <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Venzaroblue. All rights reserved.</p>
          <p className="space-x-4">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
