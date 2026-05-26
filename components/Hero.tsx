
import React from 'react';
import { ArrowRight, BookOpen, MapPin } from 'lucide-react';
import { ASSETS } from '../constants/assets';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const scrollToFooter = () => {
    document.getElementById('site-footer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0 opacity-50">
        <img
          src={ASSETS.images.hero}
          alt="Gurukulam Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/40 to-[#1a1a1a]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-maroon/30 text-amber-400 border border-amber-400/30 mb-10 backdrop-blur-md animate-bounce-slow">
          <BookOpen size={18} className="mr-3" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase">Vedic Excellence</span>
        </div>
        
        <div className="mb-10">
          <h1 className="font-cinzel text-5xl md:text-8xl text-white font-bold leading-tight drop-shadow-2xl">
            नैमिषारण्य
          </h1>
          <h2 className="font-cinzel text-3xl md:text-5xl text-amber-500 font-bold mt-2 tracking-widest drop-shadow-lg">
            SANSKRIT GURUKULAM
          </h2>
        </div>

        <p className="text-gray-200 text-lg md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed flex flex-col items-center">
          <span className="flex items-center justify-center mb-2">
            <MapPin size={18} className="mr-2 text-amber-500" />
            बनेपा-६, काभ्रेपलाञ्चोक ।
          </span>
          <span className="text-white/60 text-base md:text-lg">Preserving tradition through modern enlightenment.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-12 py-5 bg-maroon hover:bg-[#a00000] text-white font-bold rounded-2xl transition-all flex items-center justify-center shadow-2xl border-b-4 border-amber-800"
          >
            Photo & Video Gallery
            <ArrowRight size={22} className="ml-3" />
          </button>
          <button 
            onClick={scrollToFooter}
            className="w-full sm:w-auto px-12 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/30 backdrop-blur-md transition-all"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
