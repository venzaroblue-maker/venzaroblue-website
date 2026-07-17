import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { NAV, PHONE, wa } from '../site';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-denim' : 'text-gray-600 hover:text-denim'
    }`;

  return (
    <header className="fixed w-full top-0 z-50 bg-paper/95 backdrop-blur border-b border-gray-200">
      {/* Signature selvedge line on top of the site */}
      <div className="selvedge" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-baseline gap-1" onClick={() => setOpen(false)}>
            <span className="font-heading font-bold text-xl tracking-tight text-indigo-ink">
              VENZARO<span className="text-selvedge">BLUE</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} className={navClass}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={wa('Hi Venzaroblue, mujhe jeans business ke baare mein jaankari chahiye.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-wa text-white px-4 py-2 rounded-full text-sm font-semibold hover:brightness-95 transition"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 bg-denim text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-ink transition"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
          </div>

          {/* Mobile menu button — big tap target */}
          <button
            className="lg:hidden p-3 -mr-2 text-indigo-ink"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden absolute w-full bg-paper border-b border-gray-200 shadow-lg px-4 pb-5 pt-2">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3.5 text-base font-medium border-b border-gray-100 ${
                  isActive ? 'text-denim' : 'text-gray-700'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <a
            href={wa('Hi Venzaroblue, mujhe jeans business ke baare mein jaankari chahiye.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 bg-wa text-white py-3.5 rounded-xl font-semibold"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp Us
          </a>
        </div>
      )}
    </header>
  );
}
