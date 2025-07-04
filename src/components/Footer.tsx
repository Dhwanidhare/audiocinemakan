import React from 'react';
import { Headphones, Heart, Mail, Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'kn';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      title: 'Dhwanidhare Media',
      subtitle: 'Voices of Kannada',
      description: 'We\'re passionate about bringing Kannada stories to life through high-quality audio production. Our mission is to create screen-free entertainment and education for all ages.',
      tagline: 'Because stories deserve voices. And Kannada deserves to be heard.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      links: {
        samples: 'Audio Samples',
        projects: 'Our Projects',
        testimonials: 'Testimonials',
        contact: 'Contact Us'
      },
      contact: {
        email: 'hello@dhwanidhare.com',
        phone: '+91 98765 43210',
        whatsapp: 'WhatsApp Us'
      },
      copyright: '© 2024 Dhwanidhare Media. All rights reserved.',
      footerLinks: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        careers: 'Careers'
      }
    },
    kn: {
      title: 'ಧ್ವನಿಧಾರೆ ಮೀಡಿಯಾ',
      subtitle: 'ಕನ್ನಡದ ಧ್ವನಿಗಳು',
      description: 'ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಆಡಿಯೋ ನಿರ್ಮಾಣದ ಮೂಲಕ ಕನ್ನಡ ಕಥೆಗಳನ್ನು ಜೀವಂತಗೊಳಿಸುವ ಬಗ್ಗೆ ನಾವು ಉತ್ಸಾಹಿಗಳಾಗಿದ್ದೇವೆ. ಎಲ್ಲಾ ವಯಸ್ಸಿನವರಿಗೆ ಪರದೆ-ಮುಕ್ತ ಮನರಂಜನೆ ಮತ್ತು ಶಿಕ್ಷಣವನ್ನು ಸೃಷ್ಟಿಸುವುದು ನಮ್ಮ ಧ್ಯೇಯವಾಗಿದೆ.',
      tagline: 'ಏಕೆಂದರೆ ಕಥೆಗಳು ಧ್ವನಿಗಳಿಗೆ ಅರ್ಹವಾಗಿವೆ. ಮತ್ತು ಕನ್ನಡವು ಕೇಳಿಸಿಕೊಳ್ಳಲು ಅರ್ಹವಾಗಿದೆ.',
      quickLinks: 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು',
      contactInfo: 'ಸಂಪರ್ಕ ಮಾಹಿತಿ',
      links: {
        samples: 'ಆಡಿಯೋ ಮಾದರಿಗಳು',
        projects: 'ನಮ್ಮ ಯೋಜನೆಗಳು',
        testimonials: 'ಪ್ರಶಂಸಾಪತ್ರಗಳು',
        contact: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ'
      },
      contact: {
        email: 'hello@dhwanidhare.com',
        phone: '+91 98765 43210',
        whatsapp: 'ವಾಟ್ಸ್‌ಆಪ್ ಮಾಡಿ'
      },
      copyright: '© 2024 ಧ್ವನಿಧಾರೆ ಮೀಡಿಯಾ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
      footerLinks: {
        privacy: 'ಗೌಪ್ಯತೆ ನೀತಿ',
        terms: 'ಸೇವಾ ನಿಯಮಗಳು',
        careers: 'ವೃತ್ತಿ ಅವಕಾಶಗಳು'
      }
    }
  };

  const currentContent = content[language];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Headphones className="h-8 w-8 text-blue-400" />
              <div>
                <h1 className="text-xl font-bold">{currentContent.title}</h1>
                <p className="text-sm text-blue-400">{currentContent.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {currentContent.description}
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Heart className="h-5 w-5 text-red-500" />
              <span>{currentContent.tagline}</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{currentContent.quickLinks}</h3>
            <ul className="space-y-2">
              <li><a href="#samples" className="text-gray-300 hover:text-white transition-colors">{currentContent.links.samples}</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">{currentContent.links.projects}</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">{currentContent.links.testimonials}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">{currentContent.links.contact}</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{currentContent.contactInfo}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">{currentContent.contact.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">{currentContent.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">{currentContent.contact.whatsapp}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {currentContent.copyright}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{currentContent.footerLinks.privacy}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{currentContent.footerLinks.terms}</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">{currentContent.footerLinks.careers}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;