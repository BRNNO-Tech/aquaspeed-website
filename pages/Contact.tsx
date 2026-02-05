
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { INSTAGRAM_URL, TIKTOK_URL } from '../constants';
import TikTokIcon from '../components/TikTokIcon';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl font-bold font-lexend text-slate-900 mb-6">Let's Connect</h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Have a question about a specific stain, a fleet of vehicles, or a custom ceramic coating job? We're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
                <div className="bg-red-600/10 w-12 h-12 rounded-xl flex items-center justify-center text-red-600">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold">Call Us</h4>
                <p className="text-slate-600 text-sm">(385) 562-3250</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
                <div className="bg-red-600/10 w-12 h-12 rounded-xl flex items-center justify-center text-red-600">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold">Email Us</h4>
                <p className="text-slate-600 text-sm">aquaspeed723@gmail.com</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
                <div className="bg-red-600/10 w-12 h-12 rounded-xl flex items-center justify-center text-red-600">
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold">Service Area</h4>
                <p className="text-slate-600 text-sm">Serving All of Utah</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
                <div className="bg-red-600/10 w-12 h-12 rounded-xl flex items-center justify-center text-red-600">
                  <MessageCircle size={24} />
                </div>
                <h4 className="font-bold">Text Us</h4>
                <p className="text-slate-600 text-sm">Available for Quick Quotes</p>
              </div>
            </div>

            <div className="space-y-4">
               <h4 className="font-bold text-lg">Follow Our Journey</h4>
               <div className="flex gap-4">
                 {[
                   { icon: <Instagram size={24} />, href: INSTAGRAM_URL },
                   { icon: <TikTokIcon size={24} />, href: TIKTOK_URL },
                   { icon: <Twitter size={24} />, href: '#' }
                 ].map(({ icon, href }, i) => (
                   <a key={i} href={href} target={href !== '#' ? '_blank' : undefined} rel={href !== '#' ? 'noopener noreferrer' : undefined} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:text-red-600 hover:-translate-y-1 transition-all">
                     {icon}
                   </a>
                 ))}
               </div>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-slate-100 h-fit">
            <h3 className="text-2xl font-bold font-lexend mb-8">Send a Quick Message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Your Name</label>
                <input type="text" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:outline-none" placeholder="Jane Smith" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Email Address</label>
                <input type="email" className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:outline-none" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">How can we help?</label>
                <textarea rows={5} className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-red-600 focus:outline-none" placeholder="Tell us what's on your mind..."></textarea>
              </div>
              <button className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-slate-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-200 relative">
        <div className="absolute inset-0 grayscale opacity-50 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-red-900/10"></div>
        <div className="relative z-10 h-full flex items-center justify-center p-4">
           <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-md text-center space-y-4">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-white">
                <MapPin size={24} />
              </div>
              <h4 className="text-xl font-bold font-lexend">Serving All of Utah</h4>
              <p className="text-slate-600">From the mountains of Park City to the sands of St. George, our mobile units are always on the move.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
