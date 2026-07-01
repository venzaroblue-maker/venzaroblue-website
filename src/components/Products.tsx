import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import slimFitImg from '../assets/images/slim_fit_jeans_1782916749389.jpg';
import regularFitImg from '../assets/images/regular_fit_jeans_1782916765785.jpg';
import straightFitImg from '../assets/images/straight_fit_jeans_1782917895472.jpg';
import baggyFitImg from '../assets/images/baggy_fit_jeans_1782917911435.jpg';
import stretchDenimImg from '../assets/images/stretch_denim_jeans_1782917924440.jpg';
import vintageWashImg from '../assets/images/vintage_wash_jeans_1782917935863.jpg';
import cargoPantsImg from '../assets/images/cargo_pants_mens_1782917947795.jpg';
import chinosImg from '../assets/images/chinos_mens_1782917958466.jpg';
import joggersImg from '../assets/images/joggers_mens_1782917972917.jpg';

const products = [
  {
    category: "Main Highlight",
    title: "Featured Jeans Collection",
    items: [
      { name: "Premium Slim Fit Denim", image: slimFitImg, tag: "Premium" },
      { name: "Classic Regular Fit", image: regularFitImg, tag: "Classic" },
      { name: "Straight Fit Series", image: straightFitImg, tag: "" },
    ]
  },
  {
    category: "Trending Now",
    title: "Best Selling & New Arrivals",
    items: [
      { name: "Baggy Fit Collection", image: baggyFitImg, tag: "New Arrival" },
      { name: "High Stretch Denim", image: stretchDenimImg, tag: "Best Seller" },
      { name: "Vintage Wash Series", image: vintageWashImg, tag: "New Arrival" }
    ]
  },
  {
    category: "Secondary Collection",
    title: "Men's Bottomwear",
    items: [
      { name: "6 Pocket Cotton Cargo", image: cargoPantsImg },
      { name: "Premium Chinos", image: chinosImg },
      { name: "Comfort Joggers", image: joggersImg }
    ]
  }
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Jeans", "Cargo", "Chinos", "Joggers"];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-sm font-bold tracking-wider text-brand-blue uppercase mb-3">Our Collection</h2>
          <h3 className="text-4xl font-heading font-bold text-gray-900 mb-6">
            Featured Wholesale Collection
          </h3>
          <p className="text-lg text-gray-600">
            Explore our diverse range of premium bottomwear, meticulously crafted for the modern retail market.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search products (e.g. Slim Fit)..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0 mr-2" />
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    activeFilter === filter 
                      ? 'bg-brand-blue text-white shadow-md' 
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {products.map((section, idx) => {
          const filteredItems = section.items.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = activeFilter === "All" || 
                                 (activeFilter === "Jeans" && (item.name.includes("Fit") || item.name.includes("Denim") || item.name.includes("Wash"))) ||
                                 item.name.toLowerCase().includes(activeFilter.toLowerCase());
            return matchesSearch && matchesFilter;
          });

          if (filteredItems.length === 0) return null;

          return (
            <div key={idx} className="mb-20 last:mb-0">
              <div className="flex items-center gap-4 mb-10">
                <h4 className="text-2xl font-heading font-bold text-gray-900">{section.title}</h4>
                <div className="h-px bg-gray-200 flex-1"></div>
                <span className="text-sm font-medium text-brand-blue bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                  {section.category}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, i) => (
                  <div key={i} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.tag && (
                        <div className="absolute top-4 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                          {item.tag}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                        <a href="#contact" className="flex-1 bg-white text-gray-900 text-center py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                          Enquire Bulk
                        </a>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">VENZAROBLUE</div>
                      <h5 className="text-xl font-bold text-gray-900">{item.name}</h5>
                      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                        <span className="text-sm text-gray-500 font-medium">Wholesale Only</span>
                        <a href="https://wa.me/916350566157" target="_blank" rel="noreferrer" className="text-brand-blue font-medium hover:text-brand-blue-dark">
                          Get Pricing →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
