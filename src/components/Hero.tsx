import React from 'react';
import { Heart, Headphones, BookOpen, Sparkles } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'kn';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = {
    en: {
      badge: 'Stories that Stay',
      title: 'Dhwanidhare Media',
      subtitle: 'Voices of Kannada. Stories that Stay.',
      intro: 'Dhwanidhare Media is the dream of two passionate women entrepreneurs—dreamers, creators, and lovers of Kannada literature. Our mission is simple:',
      mission: 'To bring screen-free entertainment and education to all ages through audio cinema.',
      description: 'Whether it\'s school syllabus, audiobooks, original audio series, or immersive podcasts, Dhwanidhare offers content that connects deeply with listeners—especially young minds.',
      belief: 'We believe Kannada, our beautiful mother tongue, must be nurtured in the hearts of future generations—even as they study in English-medium schools. Through high-quality audio storytelling, we\'re building a bridge between tradition and modern engagement.',
      tagline: 'Because stories deserve voices. And Kannada deserves to be heard.'
    },
    kn: {
      badge: 'ಉಳಿಯುವ ಕಥೆಗಳು',
      title: 'ಧ್ವನಿಧಾರೆ ಮೀಡಿಯಾ',
      subtitle: 'ಕನ್ನಡದ ಧ್ವನಿಗಳು. ಉಳಿಯುವ ಕಥೆಗಳು.',
      intro: 'ಧ್ವನಿಧಾರೆ ಮೀಡಿಯಾ ಎಂಬುದು ಇಬ್ಬರು ಉತ್ಸಾಹಿ ಮಹಿಳಾ ಉದ್ಯಮಿಗಳ ಕನಸು—ಕನಸುಗಾರರು, ಸೃಷ್ಟಿಕರ್ತರು ಮತ್ತು ಕನ್ನಡ ಸಾಹಿತ್ಯ ಪ್ರೇಮಿಗಳು. ನಮ್ಮ ಧ್ಯೇಯ ಸರಳವಾಗಿದೆ:',
      mission: 'ಆಡಿಯೋ ಸಿನಿಮಾದ ಮೂಲಕ ಎಲ್ಲಾ ವಯಸ್ಸಿನವರಿಗೆ ಪರದೆ-ಮುಕ್ತ ಮನರಂಜನೆ ಮತ್ತು ಶಿಕ್ಷಣವನ್ನು ತರುವುದು.',
      description: 'ಇದು ಶಾಲಾ ಪಠ್ಯಕ್ರಮ, ಆಡಿಯೋಬುಕ್‌ಗಳು, ಮೂಲ ಆಡಿಯೋ ಸರಣಿಗಳು ಅಥವಾ ಆಕರ್ಷಕ ಪಾಡ್‌ಕಾಸ್ಟ್‌ಗಳಾಗಿರಲಿ, ಧ್ವನಿಧಾರೆ ಕೇಳುಗರೊಂದಿಗೆ—ವಿಶೇಷವಾಗಿ ಯುವ ಮನಸ್ಸುಗಳೊಂದಿಗೆ ಆಳವಾಗಿ ಸಂಪರ್ಕ ಸಾಧಿಸುವ ವಿಷಯವನ್ನು ನೀಡುತ್ತದೆ.',
      belief: 'ನಮ್ಮ ಸುಂದರ ಮಾತೃಭಾಷೆಯಾದ ಕನ್ನಡವನ್ನು ಭವಿಷ್ಯದ ಪೀಳಿಗೆಯ ಹೃದಯಗಳಲ್ಲಿ ಪೋಷಿಸಬೇಕು ಎಂದು ನಾವು ನಂಬುತ್ತೇವೆ—ಅವರು ಇಂಗ್ಲಿಷ್ ಮಾಧ್ಯಮ ಶಾಲೆಗಳಲ್ಲಿ ಅಧ್ಯಯನ ಮಾಡುತ್ತಿದ್ದರೂ ಸಹ. ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಆಡಿಯೋ ಕಥೆ ಹೇಳುವಿಕೆಯ ಮೂಲಕ, ನಾವು ಸಂಪ್ರದಾಯ ಮತ್ತು ಆಧುನಿಕ ತೊಡಗಿಸಿಕೊಳ್ಳುವಿಕೆಯ ನಡುವೆ ಸೇತುವೆಯನ್ನು ನಿರ್ಮಿಸುತ್ತಿದ್ದೇವೆ.',
      tagline: 'ಏಕೆಂದರೆ ಕಥೆಗಳು ಧ್ವನಿಗಳಿಗೆ ಅರ್ಹವಾಗಿವೆ. ಮತ್ತು ಕನ್ನಡವು ಕೇಳಿಸಿಕೊಳ್ಳಲು ಅರ್ಹವಾಗಿದೆ.'
    }
  };

  const currentContent = content[language];

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span className="text-blue-800 font-medium">{currentContent.badge}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {currentContent.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-600 font-medium mb-8">
            {currentContent.subtitle}
          </p>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {currentContent.intro}
            </p>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <div className="flex items-center justify-center mb-4">
                <Headphones className="h-12 w-12 text-blue-600" />
              </div>
              <p className="text-xl text-gray-800 font-medium">
                {currentContent.mission}
              </p>
            </div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {currentContent.description}
            </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-8">
              <p className="text-lg leading-relaxed">
                {currentContent.belief}
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-lg text-gray-700">
              <Heart className="h-6 w-6 text-red-500" />
              <span>{currentContent.tagline}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;