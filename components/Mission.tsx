
import React from 'react';

const Mission: React.FC = () => {
  return (
    <div className="bg-[#fffdfa] pb-20">
      {/* Background Section */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <div className="relative inline-block mb-12">
          <div className="bg-maroon text-white px-10 py-4 rounded-xl text-3xl font-bold shadow-2xl relative z-10 font-cinzel tracking-wider border-b-4 border-amber-600">
            पृष्ठभूमि
          </div>
          <div className="absolute -inset-2 bg-amber-400/20 blur-xl rounded-full"></div>
        </div>
        
        <div className="relative p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-amber-100">
          <div className="absolute top-0 left-0 w-2 h-full bg-maroon rounded-l-3xl"></div>
          <p className="text-gray-700 text-lg leading-[2] text-justify font-medium">
            वैदिक सनातन धर्म र संस्कृतिको संरक्षण, संवर्द्धन एवम् संस्कृत विद्याको प्रचार-प्रसार गरी उच्च नैतिकता र सुसंस्कारले युक्त समाज निर्माण गर्ने उद्देश्यले काभ्रेपलाञ्चोक जिल्लाको बनेपा नगरपालिका वडा नं ६ गोसाईस्थानमा वि. सं २०७० मा श्री मुकुन्दप्रसाद उपाध्यायको अध्यक्षतामा गोसाईस्थान नैमिषारण्य क्षेत्र विकास समितिको गठन गरी अखण्ड हवन एवम् महायज्ञ, १८ महापुराण तथा उपपुराण सहित चारवेदको पारायण एवम् कथा-वाचन गराई २०७१ सालको महाशिवरात्रिमा पूर्णाहुतिद्वारा यज्ञ समापन गरेर वि.सं २०७२ साल वैशाख ८ गते अक्षय तृतीयाका दिन ब्रह्मलीन परमपूज्य गुरुवर सन्तशिरोमणि श्री १००८ डा. स्वामी रामानन्द गिरिजीको करकमलबाट नैमिषारण्य-संस्कृत-गुरुकुलमको समुद्घाटन गरी सञ्चालन आरम्भ भएको हो । आफ्नो उद्देश्य अनुरूप नैमिषारण्य क्षेत्रविकास समितिले नैमिषारण्य-संस्कृत-गुरुकुलमा कक्षा ६ देखि कक्षा १२ सम्म आवासीय सुविधा-सहित संस्कृत एवम् आधुनिक शिक्षाको पठनपाठन गराइरहेको छ ।
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-maroon relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block bg-white text-maroon px-10 py-4 rounded-xl text-3xl font-bold mb-16 shadow-2xl font-cinzel">
            विशेषताहरू
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              "कक्षा ६ देखि कक्षा १२ सम्म निःशुल्क आवासीय सुविधासहित औपचारिक रूपमा गुरुकुलीय शिक्षा सञ्चालन ।",
              "वेद, संस्कृत व्याकरण, न्याय, ज्योतिष, कर्मकाण्ड, भागवत र दर्शनका साथै अन्य शास्त्रीय विषयहरूको प्रामाणिक अध्यापन ।",
              "पाठ्यक्रम विकास केन्द्रले निर्धारण गरेअनुसार अङ्ग्रेजी, गणित, नेपाली, सामाजिक जस्ता आधुनिक विषयको अध्यापन ।",
              "राष्ट्रियता, स्वधर्म-संस्कृति तथा मानवीय मूल्यको विशेष प्रवर्द्धन ।"
            ].map((text, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group">
                <span className="text-amber-400 font-bold text-3xl mb-4 block group-hover:scale-110 transition-transform">0{i + 1}</span>
                <p className="text-white text-lg font-light leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block bg-maroon text-white px-10 py-4 rounded-xl text-3xl font-bold mb-12 shadow-lg font-cinzel">
          गतिविधि
        </div>
        <div className="p-10 bg-amber-50 rounded-[2.5rem] border-2 border-dashed border-maroon/20">
          <p className="text-maroon text-xl leading-relaxed italic font-medium">
            "नेपाल सरकारबाट अनुमति प्राप्त गरी नैमिषारण्य-संस्कृत-गुरुकुलम् (आ.मा.वि) सञ्चालन गरिएको छ । वार्षिक चाडपर्वहरूमा विशेष पूजा अनुष्ठानका साथै गुरुकुलले विश्वशान्तिको लागि यज्ञानुष्ठान र सत्सङ्गजस्ता विविध कार्यक्रमहरूद्वारा वैदिक दर्शनको प्रचार-प्रसार गरी समाजमा आध्यात्मिक चेतना फैलाइरहेको छ ।"
          </p>
        </div>
      </section>

      {/* Infrastructure Sections */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-20">
          <div>
            <div className="inline-block bg-maroon border border-amber-600 text-white px-8 py-3 rounded-lg text-2xl font-bold mb-10 shadow-lg">
              निर्मित भौतिक पूर्वाधारहरू
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {['पाठशाला', 'यज्ञशाला', 'पाकशाला', 'शिवालय', 'छात्रावास', 'गणेशस्थान', 'व्यास भवन', 'चक्रकुण्ड', 'हनुमान मन्दिर'].map((item) => (
                <span key={item} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-maroon transition-colors cursor-default">
                  {item}
                </span>
              ))}
              <span className="px-4 py-2 text-amber-500 italic">तथा अन्य पूर्वाधारहरू...</span>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5">
            <div className="inline-block bg-amber-600 text-black px-8 py-3 rounded-lg text-2xl font-bold mb-10 shadow-lg font-cinzel">
              निर्माण योजनामा
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
              पुस्तकालय, कार्यालय, ध्यानकेन्द्र, अनुसन्धान केन्द्र, विद्यालय भवन, धर्मशाला (अतिथिशाला), पक्की घेराबार आदि निर्माण कार्यहरू प्रक्रियामा छन् ।
            </p>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-maroon text-white px-10 py-4 rounded-xl text-3xl font-bold mb-16 shadow-2xl font-cinzel border-b-4 border-amber-700">
            उद्देश्यहरू
          </div>
          <div className="space-y-6">
            {[
              "सनातन वैदिक हिन्दु धर्ममा व्याप्त विकृति विसङ्गतिहरूलाई न्यूनीकरण गर्दै धर्मको दायरालाई फराकिलो पार्दै ॐकार परिवारभित्रका धर्मसंस्कृति र परम्पराहरूको जगेर्ना गर्ने।",
              "समाजमा यज्ञ-अनुष्ठान एवम् वेद-पुराणहरूको महत्त्व सामान्य जनमानसले बुझ्ने गरी प्रवाह गर्दै जाने।",
              "आर्थिक रूपले असक्षम व्यक्तिहरूका लागि अति उच्च शिक्षाको अवसर प्रदान गर्ने।"
            ].map((text, i) => (
              <div key={i} className="flex items-center text-left bg-white p-8 rounded-3xl border-2 border-amber-100 shadow-sm hover:shadow-xl hover:border-maroon/20 transition-all">
                <div className="w-14 h-14 bg-maroon text-amber-400 flex items-center justify-center rounded-2xl mr-8 shrink-0 font-bold text-2xl shadow-lg">
                  {i + 1}
                </div>
                <p className="text-gray-800 text-lg font-medium leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
