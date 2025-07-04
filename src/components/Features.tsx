import React from 'react';
import { Volume2, Users, Music, Sparkles, Award, Heart } from 'lucide-react';

interface FeaturesProps {
  language: 'en' | 'kn';
}

const Features: React.FC<FeaturesProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Why Dhwanidhare?',
      subtitle: 'Most audiobook platforms stop at voice narration.',
      description: 'We offer multiple levels of production:',
      tagline: '🎧 Same script. Different feel. You\'ll hear the difference.',
      commitmentTitle: 'Our Commitment',
      commitmentText: 'Each project is crafted with care, creativity, and clarity—for Kannada listeners worldwide. We don\'t just create audiobooks; we create experiences that stay with you long after the story ends.',
      levels: [
        {
          level: 'Basic',
          features: ['Single voice narration']
        },
        {
          level: 'Duo',
          features: ['Male + Female voices']
        },
        {
          level: 'Cinematic',
          features: ['Multivoice + Music']
        },
        {
          level: 'Full Audio Cinema',
          features: ['Voice acting + BGM + Sound Effects + Ambience']
        }
      ]
    },
    kn: {
      title: 'ಧ್ವನಿಧಾರೆ ಏಕೆ?',
      subtitle: 'ಹೆಚ್ಚಿನ ಆಡಿಯೋಬುಕ್ ವೇದಿಕೆಗಳು ಧ್ವನಿ ನಿರೂಪಣೆಯಲ್ಲಿ ನಿಲ್ಲುತ್ತವೆ.',
      description: 'ನಾವು ಬಹು ಹಂತದ ನಿರ್ಮಾಣವನ್ನು ನೀಡುತ್ತೇವೆ:',
      tagline: '🎧 ಅದೇ ಸ್ಕ್ರಿಪ್ಟ್. ವಿಭಿನ್ನ ಅನುಭವ. ನೀವು ವ್ಯತ್ಯಾಸವನ್ನು ಕೇಳುವಿರಿ.',
      commitmentTitle: 'ನಮ್ಮ ಬದ್ಧತೆ',
      commitmentText: 'ಪ್ರತಿ ಯೋಜನೆಯನ್ನು ಕಾಳಜಿ, ಸೃಜನಶೀಲತೆ ಮತ್ತು ಸ್ಪಷ್ಟತೆಯೊಂದಿಗೆ ರಚಿಸಲಾಗಿದೆ—ವಿಶ್ವಾದ್ಯಂತದ ಕನ್ನಡ ಕೇಳುಗರಿಗಾಗಿ. ನಾವು ಕೇವಲ ಆಡಿಯೋಬುಕ್‌ಗಳನ್ನು ಸೃಷ್ಟಿಸುವುದಿಲ್ಲ; ಕಥೆ ಮುಗಿದ ನಂತರವೂ ನಿಮ್ಮೊಂದಿಗೆ ಉಳಿಯುವ ಅನುಭವಗಳನ್ನು ಸೃಷ್ಟಿಸುತ್ತೇವೆ.',
      levels: [
        {
          level: 'ಮೂಲಭೂತ',
          features: ['ಏಕ ಧ್ವನಿ ನಿರೂಪಣೆ']
        },
        {
          level: 'ಜೋಡಿ',
          features: ['ಪುರುಷ + ಮಹಿಳಾ ಧ್ವನಿಗಳು']
        },
        {
          level: 'ಸಿನಿಮಾಟಿಕ್',
          features: ['ಬಹುಧ್ವನಿ + ಸಂಗೀತ']
        },
        {
          level: 'ಪೂರ್ಣ ಆಡಿಯೋ ಸಿನಿಮಾ',
          features: ['ಧ್ವನಿ ನಟನೆ + BGM + ಧ್ವನಿ ಪರಿಣಾಮಗಳು + ವಾತಾವರಣ']
        }
      ]
    }
  };

  const currentContent = content[language];

  const levels = currentContent.levels.map((level, index) => ({
    ...level,
    icon: [
      <Volume2 className="h-6 w-6" />,
      <Users className="h-6 w-6" />,
      <Music className="h-6 w-6" />,
      <Sparkles className="h-6 w-6" />
    ][index],
    color: [
      'from-gray-100 to-gray-200',
      'from-blue-100 to-blue-200',
      'from-purple-100 to-purple-200',
      'from-yellow-100 to-yellow-200'
    ][index],
    textColor: [
      'text-gray-700',
      'text-blue-700',
      'text-purple-700',
      'text-yellow-700'
    ][index]
  }));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">{currentContent.title}</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {currentContent.subtitle}
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {currentContent.description}
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg font-medium">
              {currentContent.tagline}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {levels.map((level, index) => (
            <div key={index} className={`bg-gradient-to-br ${level.color} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden`}>
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -mr-10 -mt-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className={`${level.textColor} mr-3`}>
                    {level.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${level.textColor}`}>
                    {level.level}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {level.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full ${level.textColor.replace('text-', 'bg-')} mt-2 mr-3 flex-shrink-0`}></div>
                      <p className={`${level.textColor} text-sm font-medium`}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">{currentContent.commitmentTitle}</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {currentContent.commitmentText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;