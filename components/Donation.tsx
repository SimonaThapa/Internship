
import React, { useState, useRef } from 'react';
import { Heart, Download, Loader2, FileText, ShieldCheck } from 'lucide-react';
import { ASSETS } from '../constants/assets';

const Donation: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const printableRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!printableRef.current) return;
    
    // Check if html2pdf is available on window
    if (!(window as any).html2pdf) {
      alert("The PDF library is still loading. Please try again in a moment.");
      return;
    }

    setIsGenerating(true);
    
    // Small delay to allow the 'Generating' state to render
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const element = printableRef.current;
    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'NSG_Donation_Brochure.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        letterRendering: true,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: 1200 // Force a desktop layout for the capture
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
      // Use the .from().set().save() chain which is more reliable
      await (window as any).html2pdf().from(element).set(opt).save();
    } catch (error) {
      console.error('PDF Generation failed:', error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const donationCategories = [
    {
      title: "१) अक्षयकोषमा सहभागिता",
      items: [
        { label: "आजीवन सदस्य", price: "१,००,००१।" },
        { label: "आजीवन अभिभावक सदस्य", price: "१,००,००१।" },
        { label: "अभिभावक सदस्य (७ वर्षे)", price: "७५,०००।" },
        { label: "अभिभावक सदस्य (५ वर्षे)", price: "५१,०००।" },
        { label: "आजीवन जन्मोत्सव सदस्य", price: "२५,०००।" },
        { label: "आजीवन पुण्यस्मृति सदस्य", price: "२५,०००।" },
      ]
    },
    {
      title: "पुस्तकालय तथा पुरस्कार कोष",
      items: [
        { label: "मासिक खाद्यान्न सहयोग शुल्क", price: "१,०१,०००।" },
        { label: "भवन वा कोठा निर्माण", price: "योजनाअनुसार" },
        { label: "श्रीमद्भागवत सप्ताह ज्ञानयज्ञ", price: "३,५१,०००।" },
        { label: "श्रीमद्भागवत एकाह ज्ञानयज्ञ", price: "५१,०००।" },
        { label: "लघुरुद्राभिषेक कार्यक्रम", price: "२५,५००।" },
        { label: "ग्रहशान्ति पूजा, जप, हवन यज्ञ", price: "११,०००-२१,०००।" },
        { label: "मासिक पूजा सहयोग शुल्क", price: "११,०००।" },
        { label: "मासिक गोसेवा सहयोग", price: "५,१००।" },
        { label: "दैनिक सागसब्जी सहयोग", price: "२,१००।" },
        { label: "दिवा खाजा सहयोग", price: "२,१००।" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#FFFDF5]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex justify-center mb-10">
          <button 
            onClick={handleDownload}
            disabled={isGenerating}
            className={`flex items-center px-10 py-4 rounded-full font-bold shadow-xl transition-all active:scale-95 ${
              isGenerating ? 'bg-gray-400 text-white cursor-wait' : 'bg-maroon text-white hover:bg-[#600000]'
            }`}
          >
            {isGenerating ? <Loader2 size={20} className="mr-3 animate-spin" /> : <Download size={20} className="mr-3" />}
            {isGenerating ? 'Preparing Document...' : 'Save Brochure as PDF'}
          </button>
        </div>

        <div ref={printableRef} className="bg-white rounded-[2rem] shadow-2xl border border-amber-100 overflow-hidden">
          <div className="bg-maroon p-12 text-center text-white">
            <h1 className="font-cinzel text-4xl font-bold mb-2">नैमिषारण्य संस्कृत गुरुकुलम्</h1>
            <p className="text-amber-400 font-bold uppercase tracking-widest text-xs">Donation Guide & Information</p>
          </div>
          
          <div className="p-10 md:p-16">
            <div className="mb-12 border-b border-amber-50 pb-8 text-center">
              <p className="text-gray-700 leading-relaxed italic">
                वैदिक सनातन धर्म र संस्कृतिको संरक्षण गर्ने उद्देश्यले सञ्चालित यो गुरुकुल भक्तजनको सहयोगबाट चलिरहेको छ ।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {donationCategories.map((cat, idx) => (
                <div key={idx}>
                  <h3 className="font-cinzel font-bold text-xl text-maroon mb-6 border-l-4 border-amber-500 pl-3">{cat.title}</h3>
                  <ul className="space-y-3">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex justify-between text-sm border-b border-gray-0 pb-2">
                        <span className="text-gray-800">{item.label}</span>
                        <span className="text-maroon font-bold">रु {item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col md:flex-row items-center gap-10 pt-10 border-t border-amber-100">
              <div className="flex-1 w-full">
                <div className="flex items-center text-maroon font-bold mb-4">
                  <ShieldCheck className="mr-2" size={20} /> Bank Account
                </div>
                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                  <p className="text-xs text-amber-800 font-bold mb-1 uppercase">Kumari Bank Ltd</p>
                  <p className="text-2xl font-mono font-bold text-gray-900">1030146532700001</p>
                </div>
              </div>
              <div className="shrink-0 text-center">
                <div className="bg-white p-3 rounded-2xl shadow-lg border border-amber-50 inline-block">
                  <img crossOrigin="anonymous" src={ASSETS.images.qrCode} alt="QR" className="w-32 h-32" />
                </div>
                <p className="text-[10px] mt-2 font-bold text-gray-400">Scan for Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
