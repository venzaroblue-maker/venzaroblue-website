import { Phone, MessageCircle, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const channelLink = "https://whatsapp.com/channel/0029VbChTP1GpLHN5xjJpE3y";
  const facebookLink = "https://www.facebook.com/profile.php?id=61591171756013";
  const instagramLink = "https://www.instagram.com/venzaroblue_b2b?igsh=MWJsbXAxenhoMTAxMA==";
  const whatsappLink = "https://wa.me/916350566157";

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                VENZAROBLUE
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              India's premier B2B wholesale manufacturer of premium men's jeans. Delivering unparalleled quality, perfect fits, and high margins for retailers nationwide.
            </p>
            <div className="flex gap-4">
              <a href={facebookLink} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={instagramLink} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-accent hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-brand-blue transition-colors">About Company</Link></li>
              <li><Link to="/products" className="hover:text-brand-blue transition-colors">Wholesale Collection</Link></li>
              <li><Link to="/consultancy" className="hover:text-brand-blue transition-colors">Business Consultancy</Link></li>
              <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Bulk Enquiry</Link></li>
              <li><a href={channelLink} target="_blank" rel="noreferrer" className="text-[#25D366] hover:text-[#128C7E] transition-colors">Join WhatsApp Channel</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Products</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="hover:text-brand-blue transition-colors">Premium Men's Jeans</Link></li>
              <li><Link to="/products" className="hover:text-brand-blue transition-colors">Slim & Regular Fit</Link></li>
              <li><Link to="/products" className="hover:text-brand-blue transition-colors">Straight & Baggy Fit</Link></li>
              <li><Link to="/products" className="hover:text-brand-blue transition-colors">Cargo Pants</Link></li>
              <li><Link to="/products" className="hover:text-brand-blue transition-colors">Chinos & Joggers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <a href="tel:+916350566157" className="hover:text-white transition-colors">6350566157<br/>9672110755</a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Chat on WhatsApp</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <a href="mailto:venzaroblue@gmail.com" className="hover:text-white transition-colors">venzaroblue@gmail.com</a>
              </li>
              <li className="flex gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-1" />
                <span>D-704 pushkar elegance narol vatva road, Ishanpur, Ahmedabad</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Venzaroblue. All rights reserved. Wholesale Only.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
