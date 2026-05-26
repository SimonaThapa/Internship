
import React, { useState } from 'react';
import { Maximize2, X, Filter } from 'lucide-react';

const photos = [
  { id: 1, src: 'components/images/tour1.PNG', title: 'Temple visit', category: 'Education' },
  { id: 2, src: 'components/images/Rituals2.PNG', title: 'Traditional Homa', category: 'Rituals' },
  { id: 3, src: 'components/images/students.PNG', title: 'Students', category: 'Campus' },
  { id: 4, src: 'components/images/students1.PNG', title: 'Scholars in Meditation', category: 'Campus' },
  { id: 5, src: 'components/images/gurukulam.PNG', title: 'Gurukulam', category: 'Architecture' },
  { id: 6, src: 'components/images/Learning.PNG', title: 'Vedic Learning', category: 'Education' },
  { id: 7, src: 'components/images/students 2.PNG', title: 'Evening Arati', category: 'Rituals' },
  { id: 8, src: 'components/images/students3.PNG', title: 'Sanskrit Library', category: 'Campus' },
  { id: 9, src: 'components/images/students4.PNG', title: 'Holy Ghats', category: 'Rituals' },
];

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-[#fffdfa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-amber-600 font-black tracking-[0.4em] uppercase text-xs mb-4 block">Visual Heritage</span>
          <h2 className="font-cinzel text-5xl text-maroon font-bold mb-6">Gurukulam Photo Gallery</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-maroon to-transparent mx-auto mb-10"></div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['All', 'Rituals', 'Education', 'Architecture', 'Campus'].map((f) => (
              <button 
                key={f} 
                onClick={() => setFilter(f)}
                className={`px-8 py-2.5 rounded-full text-sm font-bold border-2 transition-all shadow-sm ${
                  filter === f 
                  ? 'bg-maroon border-maroon text-white scale-105' 
                  : 'bg-white border-amber-100 text-maroon hover:border-maroon'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="group relative bg-white p-2 rounded-[2rem] shadow-xl hover:shadow-[0_20px_50px_rgba(128,0,0,0.1)] transition-all cursor-pointer border border-amber-50 overflow-hidden"
              onClick={() => setSelectedImage(photo.src)}
            >
              <div className="relative overflow-hidden rounded-[1.8rem] aspect-[4/3]">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{photo.category}</span>
                  <h3 className="text-white font-cinzel text-xl font-bold">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-6 animate-in fade-in zoom-in duration-300">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white hover:text-amber-400 p-3 bg-white/10 rounded-full transition-all"
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-white/10" 
            alt="Enlarged" 
          />
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
