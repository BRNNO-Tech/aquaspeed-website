
import React from 'react';
import { MapPin, Package, Users, Shield } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const heroRef = useInView();
  const storyRef = useInView();
  const apartRef = useInView();
  const promiseRef = useInView();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div ref={heroRef as React.RefObject<HTMLDivElement>} className="animate-fade-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold font-lexend text-slate-900 leading-tight mb-6">
            Driven by Perfection, <br />
            <span className="text-red-600">Defined by Care.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            AquaSpeed is a Utah-based mobile detailing company committed to delivering high-quality results with unmatched convenience. Whether you're at home, work, or on the go, we bring the detail shop to you — anywhere in Utah.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div ref={storyRef as React.RefObject<HTMLDivElement>} className="animate-fade-slide-up">
          <h2 className="text-3xl font-bold font-lexend text-slate-900 mb-6">Our Story</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Founded in 2018, AquaSpeed started with a simple goal: make professional automotive detailing effortless for busy drivers. We've detailed thousands of vehicles across the state, earning a reputation for precision, reliability, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div ref={apartRef as React.RefObject<HTMLDivElement>} className="reveal-section max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-lexend text-slate-900 mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="reveal-item bg-white p-8 rounded-2xl border border-slate-100 hover:-translate-y-1 transition-transform duration-200" style={{ animationDelay: '0ms' }}>
              <div className="bg-red-600/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-red-600">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold font-lexend mb-3">Fully Mobile</h3>
              <p className="text-slate-600">We bring water, power, and everything needed — no hookups required.</p>
            </div>
            <div className="reveal-item bg-white p-8 rounded-2xl border border-slate-100 hover:-translate-y-1 transition-transform duration-200" style={{ animationDelay: '60ms' }}>
              <div className="bg-red-600/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-red-600">
                <Package size={24} />
              </div>
              <h3 className="text-xl font-bold font-lexend mb-3">Premium Products</h3>
              <p className="text-slate-600">We use industry-leading tools and eco-friendly chemicals for every job.</p>
            </div>
            <div className="reveal-item bg-white p-8 rounded-2xl border border-slate-100 hover:-translate-y-1 transition-transform duration-200" style={{ animationDelay: '120ms' }}>
              <div className="bg-red-600/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-red-600">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold font-lexend mb-3">Experienced Detailers</h3>
              <p className="text-slate-600">Our team is trained, certified, and obsessed with results.</p>
            </div>
            <div className="reveal-item bg-white p-8 rounded-2xl border border-slate-100 hover:-translate-y-1 transition-transform duration-200" style={{ animationDelay: '180ms' }}>
              <div className="bg-red-600/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-red-600">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold font-lexend mb-3">Statewide Service</h3>
              <p className="text-slate-600">From Salt Lake to St. George, we've got Utah covered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div ref={promiseRef as React.RefObject<HTMLDivElement>} className="animate-fade-slide-up">
          <h2 className="text-3xl font-bold font-lexend text-slate-900 mb-6">Our Promise</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We treat every vehicle like it's headed to a car show. The details matter — and we never cut corners.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
