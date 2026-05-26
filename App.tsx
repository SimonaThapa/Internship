
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import PhotoGallery from './components/PhotoGallery';
import VideoGallery from './components/VideoGallery';
import Donation from './components/Donation';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import InfoPage from './components/InfoPage';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Smooth scroll to top when changing sections
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Hero onExplore={() => setActiveTab('photos')} />
            <Mission />
            <Donation />
          </div>
        );
      case 'photos':
        return (
          <div className="animate-in fade-in duration-700">
            <div className="bg-maroon py-10 text-center">
              <h1 className="text-white font-cinzel text-3xl font-bold">Photo Gallery</h1>
              <p className="text-amber-400 text-xs uppercase tracking-widest mt-2">Captured Moments of Heritage</p>
            </div>
            <PhotoGallery />
          </div>
        );
      case 'videos':
        return (
          <div className="animate-in fade-in duration-700">
            <div className="bg-[#121212] py-10 text-center border-b border-white/5">
              <h1 className="text-white font-cinzel text-3xl font-bold">Video Gallery</h1>
              <p className="text-amber-400 text-xs uppercase tracking-widest mt-2">Cinematic Vedic Traditions</p>
            </div>
            <VideoGallery />
          </div>
        );
      case 'donate':
        return (
          <div className="animate-in fade-in duration-700">
            <Donation />
          </div>
        );
      
      // Handle dynamic info pages (intro, staff, mgmt, etc.)
      default:
        return (
          <div className="animate-in fade-in duration-700">
            <InfoPage pageId={activeTab} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF5]">
      {/* Navbar fixed with custom interaction */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-grow pt-32">
        {renderContent()}
      </main>

      <FloatingActions />
      <Footer />
    </div>
  );
};

export default App;
