import React from 'react';
import { GALLERY, INSTAGRAM_URL } from '../constants';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Gallery: React.FC = () => {
  const headerRef = useInView();
  const gridRef = useInView();
  const ctaRef = useInView();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="py-24 bg-white border-b border-slate-100">
        <div ref={headerRef as React.RefObject<HTMLDivElement>} className="animate-fade-slide-up max-w-7xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl font-bold font-lexend text-slate-900">Gallery</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">A few of our best results.</p>
        </div>
      </header>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={gridRef as React.RefObject<HTMLDivElement>} className="reveal-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY.map((item, i) => (
            <div key={item.id} className="reveal-item group hover:-translate-y-1 transition-transform duration-200" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
                <img
                  src={item.image}
                  className="w-full aspect-[4/3] object-cover"
                  alt={item.caption || 'Gallery'}
                />
                {item.caption && (
                  <p className="px-4 py-3 text-sm font-medium text-slate-600 text-center">
                    {item.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-24 bg-black text-white">
        <div ref={ctaRef as React.RefObject<HTMLDivElement>} className="animate-fade-slide-up max-w-4xl mx-auto px-4 text-center space-y-8">
          <Camera size={48} className="mx-auto text-red-500" />
          <h2 className="text-4xl font-bold font-lexend">See More on Instagram</h2>
          <p className="text-slate-400 text-lg">We post fresh results every single day. Follow us to see our latest work and get a behind-the-scenes look at our process.</p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-3 bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-red-600 hover:text-white transition-all">
            <ImageIcon size={24} />
            <span>Follow @detailing_aquaspeed</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
