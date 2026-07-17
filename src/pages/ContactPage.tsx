import Seo from '../components/Seo';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-paper">
      <Seo
        title="Contact Venzaroblue | Jeans Manufacturer Ahmedabad — WhatsApp, Call & Enquiry"
        description="Venzaroblue se sampark karein — wholesale jeans, white label manufacturing, consulting ya training ke liye. WhatsApp +91 63505 66157. Narol Vatva Road, Ishanpur, Ahmedabad."
        path="/contact"
      />
      <Contact />
    </div>
  );
}
