import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

interface RatingsProps {
  language: 'en' | 'kn';
}

const Ratings: React.FC<RatingsProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Ratings from Audience Platforms',
      subtitle: 'See what our listeners think',
      ratings: [
        { title: 'Vamshavruksha', rating: 5.0 },
        { title: 'Hiranyagarbha', rating: 4.9 },
        { title: 'Chitadanta', rating: 4.9 },
        { title: 'Godfather', rating: 5.0 },
        { title: 'Nee Hinga Nodabyada Nanna', rating: 5.0 },
        { title: 'Matagati', rating: 5.0 },
        { title: 'Haunted Hosamane', rating: 5.0 }
      ]
    },
    kn: {
      title: 'ಪ್ರೇಕ್ಷಕರ ವೇದಿಕೆಗಳಿಂದ ರೇಟಿಂಗ್‌ಗಳು',
      subtitle: 'ನಮ್ಮ ಕೇಳುಗರು ಏನು ಯೋಚಿಸುತ್ತಾರೆ ಎಂಬುದನ್ನು ನೋಡಿ',
      ratings: [
        { title: 'ವಂಶವೃಕ್ಷ', rating: 5.0 },
        { title: 'ಹಿರಣ್ಯಗರ್ಭ', rating: 4.9 },
        { title: 'ಚಿತಾದಂತ', rating: 4.9 },
        { title: 'ಗಾಡ್‌ಫಾದರ್', rating: 5.0 },
        { title: 'ನೀ ಹಿಂಗ ನೋಡಬ್ಯಾದ ನನ್ನ', rating: 5.0 },
        { title: 'ಮಾತಗತಿ', rating: 5.0 },
        { title: 'ಹಾಂಟೆಡ್ ಹೊಸಮನೆ', rating: 5.0 }
      ]
    }
  };

  const currentContent = content[language];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">{currentContent.title}</h2>
          </div>
          <p className="text-xl text-gray-600">{currentContent.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentContent.ratings.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 flex-1">{item.title}</h3>
                <div className="text-2xl font-bold text-blue-600">{item.rating}</div>
              </div>
              <div className="flex items-center space-x-1">
                {renderStars(item.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ratings;