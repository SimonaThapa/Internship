import React, { useState, useRef } from 'react';
import { 
  BookOpen, Users, Info, Download, Loader2, Landmark, Heart, 
  Shield, Scale, Library, Building2, Map, Star, Award, 
  Sprout, GraduationCap, ScrollText, Flame, Mic2, Calendar, 
  Trees, Leaf, Home, MapPin, Globe, Gavel, CheckCircle2, History,
  Utensils, Droplets, Zap, Search
} from 'lucide-react';
import { ASSETS } from '../constants/assets';

interface InfoPageProps {
  pageId: string;
}

const InfoPage: React.FC<InfoPageProps> = ({ pageId }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const printableRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!printableRef.current) return;

    if (!(window as any).html2pdf) {
      alert("The PDF library is still loading. Please try again in a moment.");
      return;
    }

    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const element = printableRef.current;
    const opt = {
      margin: 15,
      filename: `NSG_Document_${pageId}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true,
        letterRendering: true,
        backgroundColor: '#ffffff',
        logging: false,
        windowWidth: 1200
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    try {
      await (window as any).html2pdf().from(element).set(opt).save();
    } catch (error) {
      console.error('Download failed:', error);
      alert("Failed to generate PDF.");
    } finally {
      setIsGenerating(false);
    }
  };

  const pageData: Record<string, { title: string; subtitle: string; icon: any; content: React.ReactNode }> = {
    // 1. GURUKUL CORE SECTIONS
    'intro': {
      title: 'विस्तृत परिचय',
      subtitle: 'Comprehensive Institutional Profile',
      icon: BookOpen,
      content: (
        <div className="space-y-12">
          <p className="text-xl leading-[1.8] text-justify text-gray-700 first-letter:text-5xl first-letter:font-bold first-letter:text-maroon first-letter:mr-3 first-letter:float-left">
            "नैमिषारण्य संस्कृत गुरुकुलम्" बनेपा नगरपालिका वडा नं ६, काभ्रेपलाञ्चोकको ऐतिहासिक गोसाईस्थान डाँडामा अवस्थित एउटा पावन शैक्षिक केन्द्र हो। वि.सं. २०७१ मा सन्त शिरोमणि डा. स्वामी रामानन्द गिरिजीको पावन संकल्पबाट स्थापित यस संस्थाले प्राचीन ऋषिकुल परम्परा र आधुनिक शैक्षिक प्रणालीको उत्कृष्ट समन्वय गरेको छ। यहाँ कक्षा ६ देखि १२ सम्मका विद्यार्थीहरूलाई पूर्ण निःशुल्क आवास, सात्विक भोजन र वैदिक शिक्षा प्रदान गरिन्छ।
          </p>
          <img crossOrigin="anonymous" src={ASSETS.images.campus} alt="Campus View" className="w-full h-[450px] object-cover rounded-[3rem] shadow-2xl border-4 border-white" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100">
              <h4 className="font-cinzel text-xl font-bold text-maroon mb-4">हाम्रो संकल्प (Vow)</h4>
              <p className="text-gray-600 leading-relaxed italic">"शिक्षा, संस्कार र सेवाको त्रिवेणी प्रवाहित गरी बटुकहरूलाई राष्ट्रियता र धर्मप्रतिको निष्ठावान बनाउनु नै हाम्रो अन्तिम लक्ष्य हो।"</p>
            </div>
            <div className="p-8 bg-maroon/5 rounded-[2.5rem] border border-maroon/10">
              <h4 className="font-cinzel text-xl font-bold text-maroon mb-4">शैक्षिक मार्ग (Path)</h4>
              <p className="text-gray-600 leading-relaxed">वेद, व्याकरण र आधुनिक विज्ञानको समानान्तर सिकाई पद्धतिमार्फत बटुकहरूलाई २१ औं शताब्दीको दक्ष जनशक्तिका रूपमा तयार पारिन्छ।</p>
            </div>
          </div>
        </div>
      )
    },
    'staff': {
      title: 'शिक्षक तथा कर्मचारी',
      subtitle: 'Academic Council & Dedicated Staff',
      icon: Users,
      content: (
        <div className="space-y-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-maroon rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative flex flex-col md:flex-row gap-12 items-center bg-white p-12 rounded-[3rem] shadow-xl">
              <img crossOrigin="anonymous" src={ASSETS.images.staff.principal} alt="Principal" className="w-64 h-80 object-cover rounded-[2rem] shadow-2xl border-8 border-amber-50" />
              <div>
                <div className="inline-flex items-center px-4 py-1 bg-maroon text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Leadership</div>
                <h4 className="text-3xl font-bold text-maroon font-cinzel mb-2">Acharya Divyamani Adhikari</h4>
                <p className="text-amber-700 font-black text-sm uppercase tracking-widest mb-6">प्रधानाचार्य (Principal)</p>
                <p className="text-gray-600 leading-relaxed italic text-lg">"संस्कार र ज्ञानको संगम नै गुरुकुलीय शिक्षा हो। हामी विद्यार्थीहरूलाई केवल साक्षर मात्र होइन, विवेकी बनाउन पनि क्रियाशील छौं।"</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="flex items-center gap-6 p-8 bg-amber-50 rounded-3xl border border-amber-100/50">
                <img crossOrigin="anonymous" src={ASSETS.images.staff.guruaama} alt="Guruaama" className="w-32 h-40 object-cover rounded-2xl shadow-md border-4 border-white" />
                <div>
                  <h4 className="text-xl font-bold text-maroon font-cinzel">Guruaama</h4>
                  <p className="text-amber-800 font-bold text-xs mb-2">गुरुआमा (Motherly Mentor)</p>
                  <p className="text-gray-500 text-sm leading-relaxed">गुरुकुलका बटुकहरूको उचित स्याहार-सुसार र वात्सल्यपूर्ण पारिवारिक वातावरण प्रदान गर्न गुरुआमाको भूमिका अतुलनीय रहेको छ।</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                <div className="w-32 h-40 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-300">
                  <Users size={48} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 font-cinzel">Educational Staff</h4>
                  <p className="text-gray-500 text-xs mb-2">विशेषज्ञ शिक्षकहरू</p>
                  <p className="text-gray-500 text-sm leading-relaxed">वेद, व्याकरण, अंग्रेजी, र गणित विषयका दक्ष शिक्षकहरूद्वारा नियमित पठनपाठन।</p>
                </div>
              </div>
          </div>
        </div>
      )
    },

    // 2. MANAGEMENT & COMMITTEES
    'mgmt': {
      title: 'गुरुकुल व्यवस्थापन समिति',
      subtitle: 'Gurukulam Bebasthan Samiti - Operational Wing',
      icon: Gavel,
      content: (
        <div className="space-y-12">
          <div className="p-10 bg-amber-50 rounded-[3rem] border border-amber-200">
            <h4 className="font-cinzel text-2xl font-bold text-maroon mb-6">समितिको उद्देश्य र कार्यनीति (Bebasthan Samiti)</h4>
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              व्यवस्थापन समिति गुरुकुलको "मेरुदण्ड" हो। यसले विद्यालयको दैनिक प्रशासन, बटुकहरूको स्वास्थ्य, आवास, भोजन व्यवस्थापन र कर्मचारीहरूको सुपरीवेक्षण गर्दछ। समितिको बैठक नियमित रूपमा बसि गुरुकुलको हितमा रणनीतिक निर्णयहरू लिइन्छ।
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "बटुकहरूको सात्विक आहार र पोषणको सुनिश्चितता",
                "गुरुकुलको भौतिक संरचनाको मर्मत र संरक्षण",
                "स्वयम्सेवक र दाताहरूसँगको समन्वय",
                "बटुकहरूको आचरण र अनुशासनको निगरानी",
                "आर्थिक पारदर्शीता र लेखा परीक्षण"
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                  <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                  <span className="text-sm font-bold text-gray-800">{task}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-[3rem] border-2 border-dashed border-maroon/20">
            <h4 className="font-cinzel text-xl font-bold text-maroon mb-10 text-center uppercase tracking-widest">कार्यसमिति सदस्यहरू</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { role: 'अध्यक्ष', name: 'श्री मुकुन्दप्रसाद उपाध्याय' },
                { role: 'उपाध्यक्ष', name: 'श्री रामप्रसाद अधिकारी' },
                { role: 'सचिव', name: 'श्री शिवप्रसाद शर्मा' },
                { role: 'कोषाध्यक्ष', name: 'श्रीमती सरस्वती अधिकारी' },
                { role: 'सदस्य', name: 'श्री राजेन्द्रप्रसाद दाहाल' },
                { role: 'सदस्य', name: 'श्री केदारप्रसाद तिमल्सिना' }
              ].map((m, i) => (
                <div key={i} className="flex justify-between items-center p-5 bg-gray-50 rounded-2xl">
                  <span className="text-xs font-black text-amber-700 uppercase tracking-widest">{m.role}</span>
                  <span className="font-bold text-maroon">{m.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    'vidyapeeth': {
      title: 'विद्यापीठ सञ्चालक समिति',
      subtitle: 'Sanchalak Samiti - Academic Board',
      icon: GraduationCap,
      content: (
        <div className="space-y-12">
          <div className="relative p-12 bg-maroon rounded-[3.5rem] text-white overflow-hidden shadow-2xl">
            <h4 className="font-cinzel text-3xl font-bold mb-8 relative z-10">शैक्षिक नेतृत्व (Sanchalak Samiti)</h4>
            <p className="text-amber-100/90 leading-relaxed text-lg mb-8 relative z-10">
              यस समितिले गुरुकुलको शैक्षिक गुणस्तर, पाठ्यक्रम परिमार्जन, र शिक्षक तालिमको नियमन गर्दछ। यो समितिले राष्ट्रिय शिक्षा पद्धति र वैदिक शिक्षाको समन्वय सुनिश्चित गर्दछ।
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <h5 className="font-bold mb-2">संयोजक (Coordinator)</h5>
                <p className="text-xl font-bold text-amber-400">डा. अच्युत सुवेदी</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <h5 className="font-bold mb-2">सदस्य (Member)</h5>
                <p className="text-xl font-bold text-amber-400">प्रा. डा. रामप्रसाद दाहाल</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'trust': {
      title: 'शैक्षिक गुठी सञ्चालक समिति (२०७९)',
      subtitle: 'Saishik Guthi 2079 - Legal & Legacy Wing',
      icon: ScrollText,
      content: (
        <div className="space-y-12">
          <div className="p-10 bg-white rounded-[3rem] border-2 border-amber-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><History size={150} /></div>
            <h4 className="font-cinzel text-2xl font-bold text-maroon mb-6">गुठीको ऐतिहासिक पृष्ठभूमि र उद्देश्य</h4>
            <p className="text-gray-700 leading-relaxed text-lg mb-8 text-justify">
              वि.सं. २०७९ मा विशेष प्रस्ताव पारित गरी स्थापित यस शैक्षिक गुठीले गुरुकुलको सम्पत्ति, अक्षयकोष र भूमिको कानुनी र नैतिक संरक्षण गर्दछ। यसको मुख्य उद्देश्य संस्थालाई "शाश्वत" बनाउनु र कुनै पनि परिस्थितिले यसको उद्देश्यमा बाधा नपुगोस् भन्ने सुनिश्चित गर्नु हो।
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-maroon/5 rounded-2xl border border-maroon/10">
                <h5 className="font-bold text-maroon mb-2">स्थायी सम्पत्ति संरक्षण</h5>
                <p className="text-sm text-gray-600">गुरुकुलको नाममा रहेको जग्गा र भवनको स्वामित्व कसैले पनि व्यक्तिगत रूपमा हस्तान्तरण गर्न नसक्ने गरि गुठीमा दर्ता गरिएको छ।</p>
              </div>
              <div className="p-6 bg-maroon/5 rounded-2xl border border-maroon/10">
                <h5 className="font-bold text-maroon mb-2">अक्षयकोष व्यवस्थापन</h5>
                <p className="text-sm text-gray-600">गुठीले दाताहरूबाट प्राप्त ठूलो राशिलाई अक्षयकोषमा राखी त्यसको प्रतिफलबाट गुरुकुलको स्थायित्व सुनिश्चित गर्दछ।</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1a0000] p-10 rounded-[2.5rem] text-white">
            <h4 className="font-cinzel text-xl font-bold mb-8 text-center border-b border-white/10 pb-4">गुठी सञ्चालकहरू</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              {[
                { role: 'संयोजक', name: 'श्री मुकुन्दप्रसाद उपाध्याय' },
                { role: 'सदस्य सचिव', name: 'श्री शिवप्रसाद शर्मा' },
                { role: 'सदस्य', name: 'श्री राजेन्द्रप्रसाद दाहाल' },
                { role: 'सदस्य', name: 'श्री केदारप्रसाद तिमल्सिना' },
                { role: 'सदस्य', name: 'श्री हरिप्रसाद अधिकारी' }
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-amber-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{s.role}</p>
                  <p className="font-bold text-lg">{s.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },

    // 3. PROGRAMS
    'puja': {
      title: 'पूजा-आराधना',
      subtitle: 'Spiritual Rituals & Daily Chants',
      icon: Flame,
      content: (
        <div className="space-y-10">
          <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
            <h4 className="text-xl font-bold text-maroon mb-6">नित्य कर्म तालिका</h4>
            <div className="space-y-4">
              {[
                { t: "०५:०० AM", a: "जागरण र प्रातः स्नान" },
                { t: "०६:०० AM", a: "प्रातः सन्ध्या र अग्निहोत्र" },
                { t: "०८:०० AM", a: "नित्य पञ्चायन पूजा (शिवालयमा)" },
                { t: "०६:३० PM", a: "सन्ध्या आरती र भजन कीर्तन" },
                { t: "०८:३० PM", a: "रात्रि प्रार्थना र शयन" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
                  <span className="font-black text-amber-600">{item.t}</span>
                  <span className="font-bold text-gray-800">{item.a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    'pravachan': {
      title: 'आध्यात्मिक-प्रवचन',
      subtitle: 'Knowledge Sharing & Satsang',
      icon: Mic2,
      content: (
        <div className="space-y-8">
          <div className="p-12 bg-maroon rounded-[3rem] text-white shadow-2xl">
            <h4 className="font-cinzel text-2xl font-bold mb-6">सत्संग र ज्ञान चर्चा</h4>
            <p className="text-amber-100/90 leading-relaxed mb-8">
              गुरुकुलमा हरेक शनिवार र विशेष तिथिहरूमा आध्यात्मिक प्रवचन कार्यक्रम आयोजना गरिन्छ। स्थानीय भक्तजनहरू र बटुकहरूले यसमा सहभागी भई श्रीमद्भागवत, गीता, र उपनिषद्को रसपान गर्दछन्।
            </p>
          </div>
        </div>
      )
    },
    'santa-sewa': {
      title: 'सन्त-सेवा',
      subtitle: 'Service to Holy Saints & Elders',
      icon: Heart,
      content: (
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-amber-50 p-10 rounded-[3rem] border border-amber-100">
             <div className="w-20 h-20 bg-maroon text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                <Users size={40} />
             </div>
             <div>
                <h4 className="text-2xl font-bold text-maroon mb-4">मानव सेवा नै माधव सेवा</h4>
                <p className="text-gray-700 leading-relaxed">गुरुकुलले भ्रमणशील सन्तहरू र महात्माहरूलाई आवास र भोजनको निःशुल्क व्यवस्था गर्दै आएको छ। यसले समाजमा सन्तहरूको सम्मान र सेवाको भाव जगाएको छ।</p>
             </div>
          </div>
        </div>
      )
    },
    'go-sewa': {
      title: 'गो-सेवा',
      subtitle: 'Cow Protection & Sanctity',
      icon: Heart,
      content: (
        <div className="space-y-10">
          <div className="p-10 bg-[#fdfaf0] rounded-[3rem] border-2 border-dashed border-amber-200 text-center">
            <h4 className="text-2xl font-bold text-maroon font-cinzel mb-4">गावो विश्वस्य मातरः</h4>
            <p className="text-gray-700 italic max-w-2xl mx-auto">"गाईको सेवा गर्नु भनेको सृष्टिको जननीको सेवा गर्नु हो। गुरुकुलमा स्थानीय रैथाने जातका गाईहरूको संरक्षण गरिएको छ।"</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-amber-50 shadow-sm">
              <h5 className="font-bold text-maroon mb-2">जैविक कृषिमा योगदान</h5>
              <p className="text-sm text-gray-500">गाईको गोबर र गौमूत्रबाट अर्गानिक मल तयार गरी गुरुकुलको बगैंचामा प्रयोग गरिन्छ।</p>
            </div>
            <div className="p-8 bg-white rounded-3xl border border-amber-50 shadow-sm">
              <h5 className="font-bold text-maroon mb-2">शुद्ध दूधको आपूर्ति</h5>
              <p className="text-sm text-gray-500">बटुकहरूको स्वास्थ्यका लागि शुद्ध र सात्विक दूधको व्यवस्था गौशालाबाटै हुन्छ।</p>
            </div>
          </div>
        </div>
      )
    },
    'library': {
      title: 'पुस्तकालय',
      subtitle: 'Vedic Knowledge Center',
      icon: Library,
      content: (
        <div className="space-y-8">
           <div className="p-10 bg-white border border-amber-100 rounded-[3rem] shadow-xl">
              <h4 className="text-xl font-bold text-maroon mb-4">दुर्लभ ग्रन्थ संग्रह</h4>
              <p className="text-gray-600 leading-relaxed mb-6">हाम्रो पुस्तकालयमा चार वेद, अठार पुराण, र विभिन्न शास्त्रीय ग्रन्थहरूका साथै आधुनिक शैक्षिक पुस्तकहरूको राम्रो संग्रह छ।</p>
              <div className="bg-amber-50 p-6 rounded-2xl flex items-center gap-4">
                <Search className="text-maroon" />
                <p className="text-sm font-bold">अनुसन्धानका लागि उत्तम वातावरण</p>
              </div>
           </div>
        </div>
      )
    },
    'annual': {
      title: 'वार्षिक-पर्व',
      subtitle: 'Festivals & Cultural Events',
      icon: Calendar,
      content: (
        <div className="space-y-6">
          {[
            { n: "महाशिवरात्रि", d: "गुरुकुलको मुख्य उत्सव, जसमा विशेष हवन र अनुष्ठान गरिन्छ।" },
            { n: "अक्षय तृतीया", d: "गुरुकुल स्थापना दिवस र अक्षय कोष संकलन कार्यक्रम।" },
            { n: "गुरु पूर्णिमा", d: "गुरुवरहरूको सम्मान र पूजन गरिने दिन।" },
            { n: "श्रावणी पूर्णिमा", d: "ऋषितर्पणी र जनै पूर्णिमा उत्सव।" }
          ].map((ev, i) => (
            <div key={i} className="flex gap-6 p-6 bg-white border border-amber-50 rounded-2xl">
              <div className="w-12 h-12 bg-maroon/5 text-maroon rounded-xl flex items-center justify-center shrink-0"><Calendar size={24}/></div>
              <div>
                <h5 className="font-bold text-maroon">{ev.n}</h5>
                <p className="text-sm text-gray-500">{ev.d}</p>
              </div>
            </div>
          ))}
        </div>
      )
    },
    'agriculture': {
      title: 'कृषि-उत्पादन',
      subtitle: 'Organic Farming & Sustainability',
      icon: Sprout,
      content: (
        <div className="space-y-8">
          <div className="p-10 bg-green-50 rounded-[3rem] border border-green-100">
            <h4 className="text-xl font-bold text-green-800 mb-4">आत्मनिर्भरताको बाटो</h4>
            <p className="text-green-700 leading-relaxed">गुरुकुलले आफ्नो परिसरमा मौसमी तरकारी र फलफूलको अर्गानिक खेती गर्दछ। यसले बटुकहरूलाई कृषिको व्यावहारिक ज्ञान दिनुका साथै गुरुकुललाई खाद्यान्नमा केही हदसम्म आत्मनिर्भर बनाएको छ।</p>
          </div>
        </div>
      )
    },

    // 4. INFRASTRUCTURE
    'land': {
      title: 'जमिन',
      subtitle: 'Geographical Location',
      icon: Map,
      content: (
        <div className="space-y-8">
           <div className="p-10 bg-gray-900 text-white rounded-[3rem] shadow-2xl relative">
              <div className="absolute top-0 right-0 p-10 opacity-10"><Globe size={100} /></div>
              <h4 className="text-xl font-bold text-amber-500 mb-4">भौगोलिक अवस्थिति</h4>
              <p className="text-gray-300 leading-relaxed">बनेपा-६ को गोसाईस्थान डाँडामा करिब ४० रोपनी क्षेत्रफलमा गुरुकुल फैलिएको छ। यो स्थान समुद्री सतहबाट करिब १६०० मिटर उचाइमा रहेको छ, जहाँबाट काभ्रेका विभिन्न भाग र हिमालयको दृश्य देख्न सकिन्छ।</p>
           </div>
        </div>
      )
    },
    'building': {
      title: 'भवन',
      subtitle: 'Current Physical Structures',
      icon: Building2,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { n: "पाठशाला भवन", i: Library },
            { n: "छात्रावास भवन", i: Home },
            { n: "यज्ञशाला", i: Shield },
            { n: "पाकशाला (भान्छा)", i: Utensils },
            { n: "व्यास भवन", i: Building2 },
            { n: "शिवालय मन्दिर", i: Landmark }
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-maroon/5 text-maroon rounded-xl flex items-center justify-center"><b.i size={24}/></div>
              <h5 className="font-bold text-gray-800">{b.n}</h5>
            </div>
          ))}
        </div>
      )
    },
    'other': {
      title: 'अन्य',
      subtitle: 'Support Infrastructure',
      icon: Info,
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-amber-50 rounded-2xl text-center">
              <Zap className="mx-auto text-amber-600 mb-4" />
              <h5 className="font-bold">विद्युत आपूर्ति</h5>
              <p className="text-xs text-gray-500">नियमित विद्युत र सौर्य ऊर्जा</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-2xl text-center">
              <Droplets className="mx-auto text-blue-600 mb-4" />
              <h5 className="font-bold">पिउने पानी</h5>
              <p className="text-xs text-gray-500">शुद्ध बोरिङ र खानेपानी प्रणाली</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl text-center">
              <Shield className="mx-auto text-gray-600 mb-4" />
              <h5 className="font-bold">सुरक्षा</h5>
              <p className="text-xs text-gray-500">घेराबार र नियमित रेखदेख</p>
            </div>
          </div>
        </div>
      )
    }
  };

  const data = pageData[pageId] || {
    title: 'विवरण उपलब्ध छैन',
    subtitle: 'Not Available',
    icon: Info,
    content: (
      <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100">
        <Info size={48} className="mx-auto text-gray-300 mb-4" />
        <p className="text-gray-500 font-medium">यस खण्डको विस्तृत विवरण हाल प्रक्रियामा रहेको छ।</p>
      </div>
    )
  };

  const Icon = data.icon;

  return (
    <div className="bg-[#FFFDF5] min-h-screen">
      <div className="bg-maroon py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="relative z-10 px-4">
          <Icon size={48} className="mx-auto text-amber-400 mb-6 opacity-80" />
          <h1 className="text-white font-cinzel text-4xl md:text-6xl font-bold tracking-tight">{data.title}</h1>
          <p className="text-amber-400 text-xs mt-6 tracking-[0.4em] uppercase font-black opacity-90">{data.subtitle}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex justify-center mb-12">
          <button 
            onClick={handleDownload}
            disabled={isGenerating}
            className={`group flex items-center px-10 py-4 rounded-full font-bold shadow-2xl transition-all active:scale-95 ${
              isGenerating ? 'bg-gray-400 text-white cursor-wait' : 'bg-maroon text-white hover:bg-[#600000]'
            }`}
          >
            {isGenerating ? <Loader2 size={20} className="mr-3 animate-spin" /> : <Download size={20} className="mr-3 group-hover:translate-y-1 transition-transform" />}
            {isGenerating ? 'Preparing Document...' : 'Download Official PDF'}
          </button>
        </div>

        <div ref={printableRef} className="bg-white p-10 md:p-20 rounded-[4rem] shadow-2xl border border-amber-50">
          <div className="border-b-4 border-maroon pb-10 mb-14 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-20 h-20 bg-maroon rounded-3xl flex items-center justify-center mr-8 shadow-2xl rotate-3">
                <Landmark size={40} className="text-white -rotate-3" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-maroon font-cinzel tracking-tight">{data.title}</h2>
                <p className="text-amber-800 text-[10px] font-black uppercase tracking-[0.3em] mt-2">Naimisharanya Sanskrit Gurukulam</p>
              </div>
            </div>
          </div>
          
          <div className="min-h-[500px]">
            {data.content}
          </div>
          
          <div className="mt-24 pt-12 border-t border-amber-50 flex flex-col items-center">
            <div className="bg-amber-50 px-8 py-3 rounded-full mb-8">
              <p className="text-[10px] text-amber-800 font-black uppercase tracking-[0.3em]">Official Institutional Archive</p>
            </div>
            <div className="flex justify-between w-full text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
              <span>Doc Ref: NSG-2081-{pageId.toUpperCase()}</span>
              <span>Loc: Kavre, Nepal</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;