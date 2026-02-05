
import React from 'react';
import { PACKAGES, BOOKING_URL } from '../constants';
import { CheckCircle, Info } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Services: React.FC = () => {
  const headerRef = useInView();
  const packagesRef = useInView();
  const addonsRef = useInView();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-black py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Detailing" />
        </div>
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="animate-fade-slide-up relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <h1 className="text-5xl font-bold font-lexend">Our Packages</h1>
          <p className="text-xl text-slate-300">Choose from our precision-engineered detailing options.</p>
        </div>
      </header>

      {/* Package Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={packagesRef as React.RefObject<HTMLDivElement>} className="reveal-section grid grid-cols-1 md:grid-cols-3 gap-12">
          {PACKAGES.map((pkg, i) => (
            <div key={pkg.id} className="reveal-item bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 border border-slate-100 flex flex-col relative group overflow-hidden" style={{ animationDelay: `${i * 80}ms` }}>
               <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Info size={120} />
              </div>
              <div className="space-y-6 flex-grow">
                <div>
                  <h3 className="text-3xl font-bold font-lexend text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Starts at</p>
                  <p className="text-5xl font-black text-red-600 mb-4">{pkg.price}</p>
                </div>
                <p className="text-slate-600 leading-relaxed">{pkg.description}</p>
                <div className="h-px bg-slate-100"></div>
                <ul className="space-y-4">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <CheckCircle size={18} className="text-red-500 mr-3 mt-1 shrink-0" />
                      <span className="text-sm font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-black text-white py-5 rounded-2xl font-bold text-lg hover:bg-red-600 transition-colors shadow-lg shadow-slate-200">
                  Select This Package
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 bg-white">
        <div ref={addonsRef as React.RefObject<HTMLDivElement>} className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-lexend mb-4">Powerful Add-ons</h2>
            <p className="text-slate-600">Upgrade your experience with targeted restorations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Headlight Restoration', price: '+$50', desc: 'Clear up foggy or yellowed lenses.' },
              { name: 'Ceramic Coating', price: '+$150+', desc: 'Unmatched gloss and hydrophobic protection.' },
              { name: 'Engine Bay Detail', price: '+$45', desc: 'Remove grease and grime from under the hood.' },
              { name: 'Pet Hair Removal', price: '+$35+', desc: 'Deep extraction of stubborn pet fur.' }
            ].map((addon, i) => (
              <div key={i} className="reveal-item bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform duration-200" style={{ animationDelay: `${i * 60}ms` }}>
                <h5 className="font-bold text-lg text-slate-900">{addon.name}</h5>
                <p className="text-red-600 font-bold text-2xl">{addon.price}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
