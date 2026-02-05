
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, MapPin, CheckCircle, Star } from 'lucide-react';
import { PACKAGES, BOOKING_URL } from '../constants';
import { useInView } from '../hooks/useInView';

const Home: React.FC = () => {
  const featuresRef = useInView();
  const servicesRef = useInView();
  const ctaRef = useInView();

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-50"
            alt="Shiny car detailing"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl space-y-8">
            <div className="animate-fade-slide-up-on-mount" style={{ animationDelay: '0ms' }}>
              <h1 className="text-4xl md:text-6xl font-bold font-lexend leading-tight">
                Utah's Premium Mobile Detailing — <span className="text-blue-500">We Come to You</span>
              </h1>
            </div>
            <div className="animate-fade-slide-up-on-mount" style={{ animationDelay: '100ms' }}>
              <p className="text-xl text-slate-200 leading-relaxed">
                AquaSpeed delivers professional detailing anywhere in Utah, bringing showroom‑quality results straight to your driveway.
              </p>
            </div>
            <div className="animate-fade-slide-up-on-mount" style={{ animationDelay: '200ms' }}>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-red-900/40 flex items-center justify-center group">
                  Book My Detail
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center">
                  View Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Summary */}
      <section className="py-24 bg-white">
        <div ref={featuresRef as React.RefObject<HTMLDivElement>} className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-4xl font-bold font-lexend text-slate-900">Why Utah Drivers Choose AquaSpeed</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <MapPin className="text-blue-600" />, title: 'Statewide mobile service', text: 'We come to you anywhere in Utah, bringing professional detailing right to your location.' },
              { icon: <Shield className="text-blue-600" />, title: 'High‑quality products and equipment', text: 'We use premium, professional-grade products and state-of-the-art equipment for superior results.' },
              { icon: <CheckCircle className="text-blue-600" />, title: 'Transparent pricing', text: 'No hidden fees or surprises. Clear, upfront pricing for all our services.' },
              { icon: <Star className="text-blue-600" />, title: 'Satisfaction guaranteed', text: 'We stand behind our work with a satisfaction guarantee. Your car will look its best or we\'ll make it right.' }
            ].map((feature, i) => (
              <div key={i} className="reveal-item bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 group" style={{ animationDelay: `${i * 60}ms` }}>
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
                </div>
                <h4 className="text-xl font-bold font-lexend mb-4 text-slate-900">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services List */}
      <section className="py-24 bg-slate-50">
        <div ref={servicesRef as React.RefObject<HTMLDivElement>} className="reveal-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl space-y-4">
              <h2 className="text-4xl font-bold font-lexend text-slate-900">Popular Services</h2>
              <p className="text-slate-600">Full Interior Detail, Exterior Wash & Wax, Complete Detail Packages, and add‑ons like pet hair removal, headlight restoration, and more.</p>
            </div>
            <Link to="/services" className="text-blue-600 font-bold flex items-center hover:underline">
              View All Services <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, i) => (
              <div key={pkg.id} className="reveal-item bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full hover:-translate-y-1 transition-transform duration-200" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="h-48 overflow-hidden">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex-grow space-y-6">
                  <div className="flex justify-between items-start">
                    <h4 className="text-2xl font-bold font-lexend text-slate-900">{pkg.name}</h4>
                    <span className="text-2xl font-black text-red-600">{pkg.price}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{pkg.description}</p>
                  <ul className="space-y-3">
                    {pkg.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-700">
                        <CheckCircle size={14} className="text-green-500 mr-2 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-8 pt-0 mt-auto">
                  <a 
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-black text-white py-4 rounded-xl font-bold hover:bg-red-600 transition-colors"
                  >
                    Select Package
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-red-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-red-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-red-400 rounded-full opacity-20"></div>
        <div ref={ctaRef as React.RefObject<HTMLDivElement>} className="animate-fade-slide-up max-w-4xl mx-auto px-4 text-center relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-lexend text-white">Ready for a spotless ride?</h2>
          <p className="text-xl text-red-100">Booking takes less than 2 minutes. We'll handle the rest.</p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-red-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-xl shadow-red-900/30">
            Book Your Detail
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
