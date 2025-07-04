import React from 'react';
import { Play, Music, Headphones } from 'lucide-react';

interface AudioSamplesProps {
  language: 'en' | 'kn';
}

const AudioSamples: React.FC<AudioSamplesProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Audio Samples',
      subtitle: 'We\'ve produced over 500 audiobooks, many of which are available across platforms like Audible, Storytel, and Mylang. Here are a few handpicked samples that show what we mean by Audio Cinema:',
      listenText: '▶️ Click and listen to experience the difference.',
      samples: [
        {
          title: 'Vamshavruksha',
          description: 'Deep narration, emotional texture'
        },
        {
          title: 'Matagati',
          description: 'A soul-stirring journey with layered voice acting'
        },
        {
          title: 'Chitadanta',
          description: 'Suspense, history, and chills in every beat'
        },
        {
          title: 'Haunted Hosamane',
          description: 'A horror audiobook that truly haunts'
        },
        {
          title: 'Nee Hinga Nodabyada Nanna',
          description: 'Emotional monologue with elegant minimalism'
        }
      ]
    },
    kn: {
      title: 'ಆಡಿಯೋ ಮಾದರಿಗಳು',
      subtitle: 'ನಾವು 500 ಕ್ಕೂ ಹೆಚ್ಚು ಆಡಿಯೋಬುಕ್‌ಗಳನ್ನು ನಿರ್ಮಿಸಿದ್ದೇವೆ, ಅವುಗಳಲ್ಲಿ ಹಲವು Audible, Storytel ಮತ್ತು Mylang ನಂತಹ ವೇದಿಕೆಗಳಲ್ಲಿ ಲಭ್ಯವಿದೆ. ಆಡಿಯೋ ಸಿನಿಮಾ ಎಂದರೇನು ಎಂಬುದನ್ನು ತೋರಿಸುವ ಕೆಲವು ಆಯ್ದ ಮಾದರಿಗಳು ಇಲ್ಲಿವೆ:',
      listenText: '▶️ ವ್ಯತ್ಯಾಸವನ್ನು ಅನುಭವಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ ಮತ್ತು ಕೇಳಿ.',
      samples: [
        {
          title: 'ವಂಶವೃಕ್ಷ',
          description: 'ಆಳವಾದ ನಿರೂಪಣೆ, ಭಾವನಾತ್ಮಕ ವಿನ್ಯಾಸ'
        },
        {
          title: 'ಮಾತಗತಿ',
          description: 'ಬಹುಪದರದ ಧ್ವನಿ ನಟನೆಯೊಂದಿಗೆ ಆತ್ಮವನ್ನು ಕದಲಿಸುವ ಪ್ರಯಾಣ'
        },
        {
          title: 'ಚಿತಾದಂತ',
          description: 'ಪ್ರತಿ ಬೀಟ್‌ನಲ್ಲಿ ಸಸ್ಪೆನ್ಸ್, ಇತಿಹಾಸ ಮತ್ತು ರೋಮಾಂಚನ'
        },
        {
          title: 'ಹಾಂಟೆಡ್ ಹೊಸಮನೆ',
          description: 'ನಿಜವಾಗಿಯೂ ಭೂತಗ್ರಸ್ತಗೊಳಿಸುವ ಭಯಾನಕ ಆಡಿಯೋಬುಕ್'
        },
        {
          title: 'ನೀ ಹಿಂಗ ನೋಡಬ್ಯಾದ ನನ್ನ',
          description: 'ಸೊಗಸಾದ ಸರಳತೆಯೊಂದಿಗೆ ಭಾವನಾತ್ಮಕ ಏಕಪಾತ್ರ'
        }
      ]
    }
  };

  const currentContent = content[language];

  const samples = currentContent.samples.map((sample, index) => ({
    ...sample,
    icon: [
      <Music className="h-6 w-6" />,
      <Headphones className="h-6 w-6" />,
      <Play className="h-6 w-6" />,
      <Music className="h-6 w-6" />,
      <Headphones className="h-6 w-6" />
    ][index]
  }));

  return (
    <section id="samples" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentContent.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samples.map((sample, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  {sample.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{sample.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{sample.description}</p>
              
              {/* Audio Player Placeholder */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors">
                    <Play className="h-4 w-4 ml-1" />
                  </button>
                  <div className="flex-1">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2:30</span>
                </div>
              </div>
              
              <p className="text-center text-blue-600 font-medium mt-4">
                {currentContent.listenText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudioSamples;