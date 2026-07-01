import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const channelLink = "https://whatsapp.com/channel/0029VbChTP1GpLHN5xjJpE3y";
  const whatsappNumber = "916350566157";

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    phone: '',
    city: '',
    quantity: '50 - 100 Pcs',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text =
      `New Wholesale Enquiry\n\n` +
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Business: ${formData.businessName}\n` +
      `Phone: ${formData.phone}\n` +
      `City/State: ${formData.city}\n` +
      `Expected Quantity: ${formData.quantity}\n` +
      `Message: ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');

    setSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      businessName: '',
      phone: '',
      city: '',
      quantity: '50 - 100 Pcs',
      message: '',
    });

    setTimeout(() => setSubmitted(false), 5000);
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
              Looking for a reliable wholesale jeans supplier? Contact our team for the latest catalog, bulk pricing, and custom requirements.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-brand-blue">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600 mb-2">Mon-Sat, 10:00 AM - 8:00 PM</p>
                  <a href="tel:6350566157" className="text-brand-blue font-semibold hover:underline block">6350566157</a>
                  <a href="tel:9672110755" className="text-brand-blue font-semibold hover:underline block">9672110755</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-[#25D366]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">WhatsApp Channel</h4>
                  <p className="text-gray-600 mb-2">Get daily updates on new arrivals</p>
                  <a href={channelLink} target="_blank" rel="noreferrer" className="text-[#25D366] font-semibold hover:underline block">Join our Channel →</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-brand-blue">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600 mb-2">For business proposals & bulk queries</p>
                  <a href="mailto:venzaroblue@gmail.com" className="text-brand-blue font-semibold hover:underline block">venzaroblue@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 text-brand-blue">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                  <p className="text-gray-600">
                    Venzaroblue Manufacturing Unit,<br/>
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
            <h4 className="text-2xl font-bold font-heading text-gray-900 mb-6">Wholesale Enquiry Form</h4>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business/Shop Name</label>
                <input name="businessName" value={formData.businessName} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-colors" placeholder="e.g. Trends Menswear" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone/WhatsApp</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-colors" placeholder="+91" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City/State</label>
                  <input name="city" value={formData.city} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-colors" placeholder="Mumbai, MH" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Order Quantity</label>
                <select name="quantity" value={formData.quantity} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-colors bg-white">
                  <option>50 - 100 Pcs</option>
                  <option>100 - 500 Pcs</option>
                  <option>500 - 1000 Pcs</option>
                  <option>1000+ Pcs</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue-light text-white font-medium py-4 rounded-xl transition-colors shadow-md">
                Send Enquiry via WhatsApp
              </button>

              {submitted && (
                <p className="text-center text-sm font-medium text-green-600">
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
