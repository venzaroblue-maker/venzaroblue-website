import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

// ---- Security helpers ----
// Strip control characters and trim; hard-cap length to prevent abuse of the WhatsApp deep link.
const sanitize = (value: string, maxLen: number) =>
  value.replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, maxLen);

// Indian mobile: optional +91/91/0 prefix followed by 10 digits starting 6-9.
const isValidIndianPhone = (value: string) =>
  /^(\+?91|0)?[6-9]\d{9}$/.test(value.replace(/[\s-]/g, ''));

const NAME_RE = /^[A-Za-z\u0900-\u097F .'-]{1,50}$/; // letters (English/Hindi), spaces, basic punctuation

export default function Contact() {
  const channelLink = "https://whatsapp.com/channel/0029VbChTP1GpLHN5xjJpE3y";
  const whatsappNumber = "916350566157";

  const initialForm = {
    firstName: '',
    lastName: '',
    businessName: '',
    phone: '',
    city: '',
    quantity: '50 - 100 Pcs',
    message: '',
    website: '', // honeypot — real users never fill this
  };

  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Honeypot triggered → silently drop (bot submission)
    if (formData.website) return;

    const firstName = sanitize(formData.firstName, 50);
    const lastName = sanitize(formData.lastName, 50);
    const businessName = sanitize(formData.businessName, 80);
    const phone = sanitize(formData.phone, 15);
    const city = sanitize(formData.city, 60);
    const message = sanitize(formData.message, 500);

    if (!firstName || !NAME_RE.test(firstName)) {
      setError('Please enter a valid first name (letters only).');
      return;
    }
    if (lastName && !NAME_RE.test(lastName)) {
      setError('Please enter a valid last name (letters only).');
      return;
    }
    if (!isValidIndianPhone(phone)) {
      setError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    const text =
      `New Wholesale Enquiry\n\n` +
      `Name: ${firstName} ${lastName}\n` +
      `Business: ${businessName || '-'}\n` +
      `Phone: ${phone}\n` +
      `City/State: ${city || '-'}\n` +
      `Expected Quantity: ${formData.quantity}\n` +
      `Message: ${message || '-'}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setFormData(initialForm);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">

          <div>
            <h2 className="text-sm font-bold tracking-wider text-brand-blue uppercase mb-3">Get in Touch</h2>
            <h3 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              Partner With Venzaroblue Today
            </h3>
            <p className="text-lg text-gray-600 mb-10">
              Looking for a reliable wholesale jeans supplier or expert garment business consultancy? Contact our team for the latest catalog, bulk pricing, custom requirements, or a consultation session.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-brand-blue">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600 mb-2">Mon-Sat, 10:00 AM - 8:00 PM</p>
                  <a href="tel:+916350566157" className="text-brand-blue font-semibold hover:underline block">+91 63505 66157</a>
                  <a href="tel:+919672110755" className="text-brand-blue font-semibold hover:underline block">+91 96721 10755</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-[#25D366]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">WhatsApp Channel</h4>
                  <p className="text-gray-600 mb-2">Get daily updates on new arrivals</p>
                  <a href={channelLink} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold hover:underline block">Join our Channel →</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-brand-blue">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600 mb-2">For business proposals, consultancy & bulk queries</p>
                  <a href="mailto:venzaroblue@gmail.com" className="text-brand-blue font-semibold hover:underline block">venzaroblue@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-brand-blue">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                  <p className="text-gray-600 mb-2">
                    Venzaroblue Manufacturing Unit,<br/>
                    D-704 Pushkar Elegance, Narol Vatva Road,<br/>
                    Ishanpur, Ahmedabad
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Pushkar+Elegance+Narol+Vatva+Road+Ishanpur+Ahmedabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue font-semibold hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
            <h4 className="text-2xl font-bold font-heading text-gray-900 mb-6">Wholesale & Consultancy Enquiry</h4>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>

              {/* Honeypot: hidden from humans, bots auto-fill it */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input id="firstName" required maxLength={50} name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-colors" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input id="lastName" maxLength={50} name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">Business/Shop Name</label>
                <input id="businessName" maxLength={80} name="businessName" value={formData.businessName} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-colors" placeholder="e.g. Trends Menswear" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone/WhatsApp *</label>
                  <input id="phone" required maxLength={15} inputMode="numeric" name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-colors" placeholder="+91 XXXXXXXXXX" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City/State</label>
                  <input id="city" maxLength={60} name="city" value={formData.city} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-colors" placeholder="Mumbai, MH" />
                </div>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Enquiry Type / Order Quantity</label>
                <select id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-colors bg-white">
                  <option>50 - 100 Pcs</option>
                  <option>100 - 500 Pcs</option>
                  <option>500 - 1000 Pcs</option>
                  <option>1000+ Pcs</option>
                  <option>Garment Business Consultancy</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" maxLength={500} name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue-light text-white font-medium py-4 rounded-xl transition-colors shadow-md">
                Send Enquiry via WhatsApp
              </button>

              {error && (
                <p className="text-center text-sm font-medium text-red-600" role="alert">{error}</p>
              )}
              {submitted && (
                <p className="text-center text-sm font-medium text-green-600" role="status">
                  Thanks! Your enquiry has opened in WhatsApp — please hit send there to reach us.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
