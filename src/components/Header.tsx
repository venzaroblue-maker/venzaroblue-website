import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/images/VenzaroBlue_Logo_Modern_HD.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNumbers = "6350566157, 9672110755";
  const whatsappLink = "https://wa.me/916350566157"; // Assuming first number is primary for link
  const channelLink = "https://whatsapp.com/channel/0029VbChTP1GpLHN5xjJpE3y";

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
      <img src={logo} alt="VenzaroBlue Logo" className="w-10 h-10 object-contain" />
            <span className="font-heading font-bold text-2xl tracking-tight text-brand-blue">
              VENZAROBLUE
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">About</a>
            <a href="#products" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">Collection</a>
            <a href="#manufacturing" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">Manufacturing</a>
            <a href="#contact" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href={channelLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full font-medium hover:bg-[#128C7E] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Join WhatsApp Channel
            </a>
            <a 
              href={`tel:6350566157`}
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
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg absolute w-full">
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium py-2">About</a>
          <a href="#products" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium py-2">Collection</a>
          <a href="#manufacturing" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium py-2">Manufacturing</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-gray-600 font-medium py-2">Contact</a>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a 
              href={channelLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl font-medium w-full"
            >
              <MessageCircle className="w-5 h-5" />
              Join WhatsApp Channel
            </a>
            <a 
              href={`tel:6350566157`}
              className="flex items-center justify-center gap-2 bg-brand-blue text-white px-4 py-3 rounded-xl font-medium w-full"
            >
              <Phone className="w-5 h-5" />
              Call: {phoneNumbers}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
