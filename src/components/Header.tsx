import { Phone, Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const channelLink = "https://whatsapp.com/channel/0029VbChTP1GpLHN5xjJpE3y";

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors ${isActive ? 'text-brand-blue' : 'text-gray-600 hover:text-brand-blue'}`;

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-heading font-bold text-2xl tracking-tight text-brand-blue">
              VENZAROBLUE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/products" className={navClass}>Collection</NavLink>
            <NavLink
              to="/consultancy"
              className={({ isActive }) =>
                `flex items-center gap-1.5 font-semibold transition-colors ${isActive ? 'text-brand-accent' : 'text-brand-blue hover:text-brand-accent'}`
              }
            >
              <Sparkles className="w-4 h-4" />
              Consultancy
            </NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={channelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-medium hover:bg-[#128C7E] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Join WhatsApp Channel
            </a>
            <a
              href="tel:+916350566157"
              className="flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-full font-medium hover:bg-brand-blue-dark transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg absolute w-full">
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium py-2">About</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium py-2">Collection</Link>
          <Link to="/consultancy" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-brand-blue font-semibold py-2">
            <Sparkles className="w-4 h-4" /> Business Consultancy
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium py-2">Contact</Link>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a
              href={channelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl font-medium w-full"
            >
              <MessageCircle className="w-5 h-5" />
              Join WhatsApp Channel
            </a>
            <a
              href="tel:+916350566157"
              className="flex items-center justify-center gap-2 bg-brand-blue text-white px-4 py-3 rounded-xl font-medium w-full"
            >
              <Phone className="w-5 h-5" />
              Call: +91 63505 66157
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
