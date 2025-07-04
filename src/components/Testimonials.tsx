import React from 'react';
import { Quote, Star, Users, UserCheck } from 'lucide-react';

interface TestimonialsProps {
  language: 'en' | 'kn';
}

const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const content = {
    en: {
      title: 'What People Say',
      subtitle: 'Hear from our authors and collaborators',
      authorsTitle: 'What Our Authors Say',
      collaboratorsTitle: 'What Our Collaborators Say',
      authorTestimonials: [
        {
          quote: "Best team to trust for making your book digital.",
          author: "Vittal Shenoy"
        },
        {
          quote: "My book Haunted Hosamane started haunting more after becoming an audiobook. I just love it!",
          author: "Ramesh Shettygar"
        },
        {
          quote: "I got goosebumps listening to my own book, Chitadanta. More surprises in the audio version than I imagined!",
          author: "Ganeshiah"
        },
        {
          quote: "The Perfect Murder became popular because of Dhwanidhare's voice acting and BGM. Next level work.",
          author: "Vasudev Murthy"
        },
        {
          quote: "Their skills are unmatched. A truly amazing team.",
          author: "Nagesh Kumar C.S."
        }
      ],
      collaboratorTestimonials: [
        {
          quote: "I always wanted to be an RJ… now I'm a top voice at Dhwanidhare.",
          author: "Kishore"
        },
        {
          quote: "Never imagined I'd become an author and voice artist. My friends loved listening to my book!",
          author: "Naveen"
        },
        {
          quote: "I voiced Matagati by Ravi Belagere. Listeners told me they lived Tejamma's journey. That's the power of voice.",
          author: "Jyothi"
        },
        {
          quote: "Voicing legendary Kannada characters is a cloud-nine experience. Every time I listen, I feel the magic.",
          author: "Amulya"
        }
      ]
    },
    kn: {
      title: 'ಜನರು ಏನು ಹೇಳುತ್ತಾರೆ',
      subtitle: 'ನಮ್ಮ ಲೇಖಕರು ಮತ್ತು ಸಹಯೋಗಿಗಳಿಂದ ಕೇಳಿ',
      authorsTitle: 'ನಮ್ಮ ಲೇಖಕರು ಏನು ಹೇಳುತ್ತಾರೆ',
      collaboratorsTitle: 'ನಮ್ಮ ಸಹಯೋಗಿಗಳು ಏನು ಹೇಳುತ್ತಾರೆ',
      authorTestimonials: [
        {
          quote: "ನಿಮ್ಮ ಪುಸ್ತಕವನ್ನು ಡಿಜಿಟಲ್ ಮಾಡಲು ನಂಬಬಹುದಾದ ಅತ್ಯುತ್ತಮ ತಂಡ.",
          author: "ವಿಟ್ಟಲ್ ಶೆಣೋಯ್"
        },
        {
          quote: "ನನ್ನ ಪುಸ್ತಕ ಹಾಂಟೆಡ್ ಹೊಸಮನೆ ಆಡಿಯೋಬುಕ್ ಆದ ನಂತರ ಇನ್ನೂ ಹೆಚ್ಚು ಭೂತಗ್ರಸ್ತಗೊಳಿಸಲು ಪ್ರಾರಂಭಿಸಿತು. ನಾನು ಅದನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ!",
          author: "ರಮೇಶ್ ಶೆಟ್ಟಿಗಾರ್"
        },
        {
          quote: "ನನ್ನ ಸ್ವಂತ ಪುಸ್ತಕ ಚಿತಾದಂತವನ್ನು ಕೇಳಿ ನನಗೆ ಗೂಸ್‌ಬಂಪ್ಸ್ ಬಂದವು. ನಾನು ಊಹಿಸಿದ್ದಕ್ಕಿಂತ ಆಡಿಯೋ ಆವೃತ್ತಿಯಲ್ಲಿ ಹೆಚ್ಚು ಆಶ್ಚರ್ಯಗಳು!",
          author: "ಗಣೇಶಯ್ಯ"
        },
        {
          quote: "ದಿ ಪರ್ಫೆಕ್ಟ್ ಮರ್ಡರ್ ಧ್ವನಿಧಾರೆಯ ಧ್ವನಿ ನಟನೆ ಮತ್ತು BGM ಕಾರಣದಿಂದ ಜನಪ್ರಿಯವಾಯಿತು. ಮುಂದಿನ ಹಂತದ ಕೆಲಸ.",
          author: "ವಾಸುದೇವ್ ಮೂರ್ತಿ"
        },
        {
          quote: "ಅವರ ಕೌಶಲ್ಯಗಳು ಅಪ್ರತಿಮ. ನಿಜವಾಗಿಯೂ ಅದ್ಭುತ ತಂಡ.",
          author: "ನಾಗೇಶ್ ಕುಮಾರ್ ಸಿ.ಎಸ್."
        }
      ],
      collaboratorTestimonials: [
        {
          quote: "ನಾನು ಯಾವಾಗಲೂ RJ ಆಗಲು ಬಯಸುತ್ತಿದ್ದೆ... ಈಗ ನಾನು ಧ್ವನಿಧಾರೆಯಲ್ಲಿ ಪ್ರಮುಖ ಧ್ವನಿ.",
          author: "ಕಿಶೋರ್"
        },
        {
          quote: "ನಾನು ಲೇಖಕ ಮತ್ತು ಧ್ವನಿ ಕಲಾವಿದನಾಗುತ್ತೇನೆ ಎಂದು ಎಂದಿಗೂ ಊಹಿಸಿರಲಿಲ್ಲ. ನನ್ನ ಸ್ನೇಹಿತರು ನನ್ನ ಪುಸ್ತಕವನ್ನು ಕೇಳಲು ಇಷ್ಟಪಟ್ಟರು!",
          author: "ನವೀನ್"
        },
        {
          quote: "ನಾನು ರವಿ ಬೆಳಗೆರೆಯವರ ಮಾತಗತಿಗೆ ಧ್ವನಿ ನೀಡಿದೆ. ಕೇಳುಗರು ಅವರು ತೇಜಮ್ಮನ ಪ್ರಯಾಣವನ್ನು ಬದುಕಿದರು ಎಂದು ಹೇಳಿದರು. ಅದು ಧ್ವನಿಯ ಶಕ್ತಿ.",
          author: "ಜ್ಯೋತಿ"
        },
        {
          quote: "ಪೌರಾಣಿಕ ಕನ್ನಡ ಪಾತ್ರಗಳಿಗೆ ಧ್ವನಿ ನೀಡುವುದು ಮೇಘಲೋಕದ ಅನುಭವ. ಪ್ರತಿ ಬಾರಿ ಕೇಳಿದಾಗ, ನಾನು ಮಾಯಾಜಾಲವನ್ನು ಅನುಭವಿಸುತ್ತೇನೆ.",
          author: "ಅಮುಲ್ಯ"
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{currentContent.title}</h2>
          <p className="text-xl text-gray-600">{currentContent.subtitle}</p>
        </div>
        
        {/* Author Testimonials */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">{currentContent.authorsTitle}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.authorTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Collaborator Testimonials */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <UserCheck className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">{currentContent.collaboratorsTitle}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentContent.collaboratorTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;