
import React, { useState } from 'react';
import { Menu, X, ChevronRight, Phone, Facebook, Youtube, Landmark } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const navStructure = [
    { id: 'home', label: 'गृहपृष्ठ' },
    { 
      id: 'gurukul', 
      label: 'गुरुकुल', 
      children: [
        { id: 'intro', label: 'परिचय' },
        { id: 'staff', label: 'शिक्षक तथा कर्मचारी विवरण' },
        { id: 'mgmt', label: 'गुरुकुल व्यवस्थापन समिति (बेवस्थापन)' },
        { id: 'vidyapeeth', label: 'विद्यापीठ सञ्चालक समिति' },
        { id: 'trust', label: 'शैक्षिक गुठी सञ्चालक समिति (२०७९)' },
      ]
    },
    { 
      id: 'programs', 
      label: 'कार्यक्रमहरू', 
      children: [
        { id: 'puja', label: 'पूजा-आराधना' },
        { id: 'pravachan', label: 'आध्यात्मिक-प्रवचन' },
        { id: 'santa-sewa', label: 'सन्त-सेवा' },
        { id: 'go-sewa', label: 'गो-सेवा' },
        { id: 'library', label: 'पुस्तकालय' },
        { id: 'annual', label: 'वार्षिक-पर्व' },
        { id: 'agriculture', label: 'कृषि-उत्पादन' },
      ]
    },
    { 
      id: 'infrastructure', 
      label: 'भौतिक अवस्था', 
      children: [
        { id: 'land', label: 'जमिन' },
        { id: 'building', label: 'भवन' },
        { id: 'other', label: 'अन्य' },
      ]
    },
    { id: 'photos', label: 'Photo Gallery' },
    { id: 'videos', label: 'Video Gallery' },
    { id: 'donate', label: 'Donation' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="fixed top-0 w-full bg-[#800000] text-white h-12 z-[60] flex items-center justify-end px-4 md:px-8 shadow-md">
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-xs md:text-sm">
            <Phone size={14} className="mr-2 text-amber-400" />
            <span className="font-medium">011-491466</span>
          </div>
          <div className="flex items-center space-x-3 border-l border-white/20 pl-4">
            <Facebook size={16} className="cursor-pointer hover:text-amber-400 transition-colors" />
            <Youtube size={16} className="cursor-pointer hover:text-amber-400 transition-colors" />
          </div>
        </div>
      </div>

      <nav className="fixed top-12 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center cursor-pointer group" onClick={() => onTabChange('home')}>
              <div className="text-maroon mr-4 transition-transform group-hover:scale-110">
                <Landmark size={40} />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-xl font-bold text-maroon leading-tight tracking-tight">
                  नैमिषारण्य
                </span>
                <span className="font-playfair text-[10px] text-amber-700 font-bold tracking-[0.2em] uppercase">
                  Sanskrit Gurukulam
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="group flex items-center space-x-3 bg-maroon text-white px-6 py-2.5 rounded-full transition-all hover:bg-[#600000] shadow-lg shadow-maroon/20"
            >
              <Menu size={20} />
              <span className="text-xs font-bold tracking-widest">MENU</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Drawer */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-maroon/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className={`absolute left-0 top-0 h-full w-85 bg-[#121212] text-gray-300 transform transition-transform duration-500 shadow-2xl overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-8 flex justify-between items-center border-b border-white/5 sticky top-0 bg-[#121212] z-10">
            <div className="flex flex-col">
              <span className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase">Archive Menu</span>
              <span className="font-cinzel text-2xl font-bold text-white">Navigation</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-maroon rounded-full transition-all text-white">
              <X size={28} />
            </button>
          </div>

          <div className="py-8">
            {navStructure.map((item) => (
              <div key={item.id} className="group">
                <div 
                  className={`flex items-center justify-between px-10 py-5 cursor-pointer transition-all border-l-4 ${activeTab === item.id ? 'text-[#D4AF37] bg-white/5 border-[#D4AF37]' : 'border-transparent hover:bg-white/5 hover:text-white'}`}
                  onClick={() => {
                    if (item.children) {
                      toggleExpand(item.id);
                    } else {
                      onTabChange(item.id);
                      setIsOpen(false);
                    }
                  }}
                >
                  <span className="text-base font-medium tracking-wide">{item.label}</span>
                  {item.children && (
                    <ChevronRight size={18} className={`transition-transform duration-300 ${expandedItems.includes(item.id) ? 'rotate-90 text-[#D4AF37]' : ''}`} />
                  )}
                </div>
                
                {item.children && expandedItems.includes(item.id) && (
                  <div className="bg-black/30 border-l border-white/10 ml-4 my-2">
                    {item.children.map((child) => (
                      <div 
                        key={child.id}
                        className={`flex items-center px-12 py-4 cursor-pointer text-gray-400 hover:text-[#D4AF37] transition-colors text-[14px] ${activeTab === child.id ? 'text-[#D4AF37] bg-white/5' : ''}`}
                        onClick={() => {
                          onTabChange(child.id);
                          setIsOpen(false);
                        }}
                      >
                        <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-4 opacity-40" />
                        {child.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
