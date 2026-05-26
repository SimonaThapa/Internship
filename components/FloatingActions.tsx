
import React from 'react';
import { MessageCircle, Facebook, Phone } from 'lucide-react';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed right-6 bottom-10 flex flex-col space-y-5 z-[40]">
      <a 
        href="https://wa.me/977011491466" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-[0_15px_30px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform"
      >
        <MessageCircle size={32} fill="white" />
      </a>
      <a 
        href="https://www.facebook.com/nsgurukul" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 bg-maroon text-white rounded-2xl flex items-center justify-center shadow-[0_15px_30px_rgba(128,0,0,0.3)] hover:scale-110 transition-transform border-2 border-amber-500/30"
      >
        <Facebook size={32} fill="white" />
      </a>
      <a 
        href="tel:+977011491466" 
        className="w-16 h-16 bg-[#4CAF50] text-white rounded-2xl flex items-center justify-center shadow-[0_15px_30px_rgba(76,175,80,0.3)] hover:scale-110 transition-transform"
      >
        <Phone size={32} fill="white" />
      </a>
    </div>
  );
};

export default FloatingActions;
