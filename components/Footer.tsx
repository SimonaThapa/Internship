
import React from 'react';
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="site-footer" className="bg-[#1a0000] text-amber-100/60 py-20 border-t border-amber-500/10 print:hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-cinzel text-3xl text-white font-bold mb-6">Naimisharanya Sanskrit Gurukulam</h3>
            <p className="text-amber-100/40 leading-relaxed mb-8 max-w-md font-medium">
              गोसाईस्थान नैमिषारण्य क्षेत्र विकास समितिद्वारा सञ्चालित एक प्रतिष्ठित संस्कृत विद्यापीठ । <br/>
              Dedicated to preserving the eternal wisdom of Vedic heritage and Sanskrit culture.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Youtube, Instagram].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-maroon hover:border-amber-500 hover:text-white transition-all">
                  <Icon size={22} />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-amber-400 font-bold mb-8 uppercase tracking-[0.2em] text-xs">Reach Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="mr-4 text-maroon shrink-0" size={20} />
                <span className="text-sm">बनेपा नगरपालिका वडा नं ६ <br/> गोसाईस्थान, काभ्रेपलाञ्चोक</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-4 text-maroon" size={20} />
                <span className="text-sm font-bold">011-491466</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-4 text-maroon" size={20} />
                <span className="text-sm">info@nsgurukul.edu.np</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-amber-400 font-bold mb-8 uppercase tracking-[0.2em] text-xs">Direct Links</h4>
            <ul className="space-y-4">
              {['हाम्रो बारेमा', 'शिक्षक कर्मचारी', 'व्यवस्थापन समिति', 'सूचना-पुस्तिका', 'सम्पर्क'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white transition-colors flex items-center group">
                    <div className="w-1 h-1 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-medium tracking-wide">
            © {new Date().getFullYear()} Naimisharanya Sanskrit Gurukulam. Preserve Tradition.
          </p>
          <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-white/20">
            <a href="#" className="hover:text-amber-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-500 transition-colors">Archive</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
