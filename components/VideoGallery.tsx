import React from 'react';
import { Play, Clock, Share2, Info } from 'lucide-react';

const videos = [
  { 
    id: 1, 
    thumbnail: 'https://img.youtube.com/vi/XPNxOtIsN_I/hqdefault.jpg',
    url: 'https://www.youtube.com/watch?v=XPNxOtIsN_I',
    title: 'Vedic Chanting Masterclass', 
    duration: '12:45' 
  },
  { 
    id: 2, 
    thumbnail: 'https://img.youtube.com/vi/Ot-4U76iwyI/hqdefault.jpg', 
    url: 'https://www.youtube.com/watch?v=Ot-4U76iwyI',
    title: 'Gurukulam Documentary', 
    duration: '18:20' 
  },
  { 
    id: 3, 
    thumbnail: 'https://img.youtube.com/vi/S-MWhImTnxM/hqdefault.jpg', 
    url: 'https://www.youtube.com/watch?v=S-MWhImTnxM',
    title: 'Sanskrit Philosophy', 
    duration: '08:15' 
  },
  { 
    id: 4, 
    thumbnail: 'https://img.youtube.com/vi/Ox1yYf2Ndes/hqdefault.jpg', 
    url: 'https://www.youtube.com/watch?v=Ox1yYf2Ndes',
    title: 'Guru Purnima 2024', 
    duration: '45:00' 
  },
];

const VideoGallery: React.FC = () => {
  return (
    <section className="py-24 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-xs">Media Center</span>
            <h2 className="font-cinzel text-5xl font-bold mt-4 mb-6">Video Archives</h2>
            <div className="w-20 h-1 bg-maroon"></div>
          </div>
          <button className="group flex items-center space-x-3 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl hover:bg-maroon transition-all">
            <Info size={20} className="text-amber-500" />
            <span className="font-bold text-sm tracking-widest uppercase">Explore All</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {videos.map((video) => (
            <a 
              key={video.id} 
              href={video.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group cursor-pointer block"
            >
              <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-maroon/20 group-hover:bg-maroon/10 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center transform group-hover:scale-125 transition-all duration-500">
                    <div className="w-14 h-14 rounded-full bg-maroon text-white flex items-center justify-center shadow-2xl">
                      <Play size={28} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-black/80 px-3 py-1.5 rounded-lg text-xs font-bold border border-white/10">
                  {video.duration}
                </div>
              </div>
              <div className="mt-8 px-4 flex justify-between items-start">
                <div>
                  <h3 className="font-cinzel text-2xl font-bold group-hover:text-amber-400 transition-colors">{video.title}</h3>
                  <div className="flex items-center text-gray-500 mt-2 text-sm font-medium">
                    <Clock size={14} className="mr-2" /> 
                    <span>Released 2 weeks ago</span>
                  </div>
                </div>
                <button className="p-3 bg-white/5 rounded-full hover:bg-maroon transition-colors">
                  <Share2 size={18} />
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
