import React from 'react';
import { PenTool, Mic, Users, Headphones, Heart, Send } from 'lucide-react';

interface JoinUsProps {
  language: 'en' | 'kn';
}

const JoinUs: React.FC<JoinUsProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Join Us',
      subtitle: 'If you\'re passionate about Kannada, we\'re here to welcome you.',
      callToAction: 'Write to us. Your voice might be the next voice of Kannada.',
      opportunities: [
        {
          title: 'Creative Writers',
          description: 'Want to write engaging audio originals? Send us your sample.',
          action: 'Send Writing Sample'
        },
        {
          title: 'Voice Artists',
          description: 'Want to voice our books? Share your voice sample.',
          action: 'Share Voice Sample'
        },
        {
          title: 'Co-Producers',
          description: 'Want to co-produce a project? Contact us.',
          action: 'Discuss Partnership'
        },
        {
          title: 'Authors',
          description: 'Need help producing your own audiobook? We take care of end-to-end audio production.',
          action: 'Get Production Help'
        }
      ],
      readyTitle: 'Ready to Begin Your Journey?',
      readyDescription: 'Whether you\'re a seasoned professional or just starting out, we believe in nurturing talent and creating opportunities for passionate individuals to showcase their skills.',
      contactToday: 'Contact Us Today',
      learnMore: 'Learn More'
    },
    kn: {
      title: 'ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ',
      subtitle: 'ನೀವು ಕನ್ನಡದ ಬಗ್ಗೆ ಉತ್ಸಾಹಿಯಾಗಿದ್ದರೆ, ನಾವು ನಿಮ್ಮನ್ನು ಸ್ವಾಗತಿಸಲು ಇಲ್ಲಿದ್ದೇವೆ.',
      callToAction: 'ನಮಗೆ ಬರೆಯಿರಿ. ನಿಮ್ಮ ಧ್ವನಿ ಕನ್ನಡದ ಮುಂದಿನ ಧ್ವನಿಯಾಗಬಹುದು.',
      opportunities: [
        {
          title: 'ಸೃಜನಶೀಲ ಬರಹಗಾರರು',
          description: 'ಆಕರ್ಷಕ ಆಡಿಯೋ ಮೂಲಗಳನ್ನು ಬರೆಯಲು ಬಯಸುವಿರಾ? ನಿಮ್ಮ ಮಾದರಿಯನ್ನು ನಮಗೆ ಕಳುಹಿಸಿ.',
          action: 'ಬರವಣಿಗೆ ಮಾದರಿ ಕಳುಹಿಸಿ'
        },
        {
          title: 'ಧ್ವನಿ ಕಲಾವಿದರು',
          description: 'ನಮ್ಮ ಪುಸ್ತಕಗಳಿಗೆ ಧ್ವನಿ ನೀಡಲು ಬಯಸುವಿರಾ? ನಿಮ್ಮ ಧ್ವನಿ ಮಾದರಿಯನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.',
          action: 'ಧ್ವನಿ ಮಾದರಿ ಹಂಚಿಕೊಳ್ಳಿ'
        },
        {
          title: 'ಸಹ-ನಿರ್ಮಾಪಕರು',
          description: 'ಯೋಜನೆಯನ್ನು ಸಹ-ನಿರ್ಮಾಣ ಮಾಡಲು ಬಯಸುವಿರಾ? ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.',
          action: 'ಪಾಲುದಾರಿಕೆ ಚರ್ಚಿಸಿ'
        },
        {
          title: 'ಲೇಖಕರು',
          description: 'ನಿಮ್ಮ ಸ್ವಂತ ಆಡಿಯೋಬುಕ್ ನಿರ್ಮಿಸಲು ಸಹಾಯ ಬೇಕೇ? ನಾವು ಅಂತ್ಯದಿಂದ ಅಂತ್ಯದವರೆಗೆ ಆಡಿಯೋ ನಿರ್ಮಾಣವನ್ನು ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ.',
          action: 'ನಿರ್ಮಾಣ ಸಹಾಯ ಪಡೆಯಿರಿ'
        }
      ],
      readyTitle: 'ನಿಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಸಿದ್ಧರೇ?',
      readyDescription: 'ನೀವು ಅನುಭವಿ ವೃತ್ತಿಪರರಾಗಿರಲಿ ಅಥವಾ ಕೇವಲ ಪ್ರಾರಂಭಿಸುತ್ತಿರಲಿ, ನಾವು ಪ್ರತಿಭೆಯನ್ನು ಪೋಷಿಸುವಲ್ಲಿ ಮತ್ತು ಉತ್ಸಾಹಿ ವ್ಯಕ್ತಿಗಳಿಗೆ ತಮ್ಮ ಕೌಶಲ್ಯಗಳನ್ನು ಪ್ರದರ್ಶಿಸಲು ಅವಕಾಶಗಳನ್ನು ಸೃಷ್ಟಿಸುವಲ್ಲಿ ನಂಬಿಕೆ ಇಡುತ್ತೇವೆ.',
      contactToday: 'ಇಂದೇ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
      learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ'
    }
  };

  const currentContent = content[language];

  const opportunities = [
    {
      ...currentContent.opportunities[0],
      icon: <PenTool className="h-8 w-8" />,
      color: 'from-purple-100 to-purple-200',
      textColor: 'text-purple-700'
    },
    {
      ...currentContent.opportunities[1],
      icon: <Mic className="h-8 w-8" />,
      color: 'from-blue-100 to-blue-200',
      textColor: 'text-blue-700'
    },
    {
      ...currentContent.opportunities[2],
      icon: <Users className="h-8 w-8" />,
      color: 'from-green-100 to-green-200',
      textColor: 'text-green-700'
    },
    {
      ...currentContent.opportunities[3],
      icon: <Headphones className="h-8 w-8" />,
      color: 'from-orange-100 to-orange-200',
      textColor: 'text-orange-700'
    }
  ];

  return (
    <section id="join-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-red-500 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">{currentContent.title}</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {currentContent.subtitle}
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg font-medium">
              📩 {currentContent.callToAction}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((opportunity, index) => (
            <div key={index} className={`bg-gradient-to-br ${opportunity.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden`}>
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full -mr-12 -mt-12"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`${opportunity.textColor} mr-4`}>
                    {opportunity.icon}
                  </div>
                  <h3 className={`text-2xl font-bold ${opportunity.textColor}`}>
                    {opportunity.title}
                  </h3>
                </div>
                
                <p className={`${opportunity.textColor} text-lg leading-relaxed mb-6`}>
                  {opportunity.description}
                </p>
                
                <button className={`w-full bg-white ${opportunity.textColor} font-medium py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2`}>
                  <Send className="h-5 w-5" />
                  <span>{opportunity.action}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentContent.readyTitle}</h3>
            <p className="text-lg text-gray-700 mb-6">
              {currentContent.readyDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-8 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                {currentContent.contactToday}
              </button>
              <button className="border-2 border-blue-600 text-blue-600 py-3 px-8 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                {currentContent.learnMore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;