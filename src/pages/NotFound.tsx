import { Link } from 'react-router-dom';
import { Home, MessageCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-20 min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-7xl font-heading font-bold text-brand-blue mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist. Explore our wholesale collection or talk to our consultancy team.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-xl font-medium hover:bg-brand-blue-light transition-colors">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <Link to="/consultancy" className="inline-flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors">
            <MessageCircle className="w-4 h-4" /> Consultancy
          </Link>
        </div>
      </div>
    </div>
  );
}
