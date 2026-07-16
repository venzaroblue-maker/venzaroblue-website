import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const whatsappLink = "https://wa.me/916350566157";
  const channelLink = "https://whatsapp.com/channel/0029VbChTP1GpLHN5xjJpE3y";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      
      {/* Join Channel Tooltip */}
      <div className="absolute right-full mr-4 top-2 hidden md:flex items-center w-max animate-bounce">
        <div className="bg-white text-gray-900 text-sm font-medium px-4 py-2 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          Join Our Channel
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white border-l-[10px]"></div>
        </div>
      </div>

      <a 
        href={channelLink}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#25D366] shadow-xl hover:-translate-y-1 transition-all group"
        aria-label="Join WhatsApp Channel"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      <a 
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:-translate-y-1 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      <a 
        href="tel:+916350566157"
        className="w-14 h-14 bg-brand-blue rounded-full flex items-center justify-center text-white shadow-xl hover:-translate-y-1 transition-all"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </a>

    </div>
  );
}
